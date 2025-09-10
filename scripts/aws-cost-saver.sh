#!/bin/bash

# AWS Cost Saver Script
# Comprehensive script to stop all cost-incurring AWS services
# Run this script whenever you want to minimize AWS costs

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Set AWS CLI path
export PATH="$HOME/.local/bin:$PATH"

echo -e "${BLUE}🔍 AWS Cost Saver - Scanning and stopping cost-incurring services${NC}"
echo "=================================================================="

# Function to check if AWS CLI is configured
check_aws_config() {
    if ! command -v aws &> /dev/null; then
        echo -e "${RED}❌ AWS CLI not found. Please install AWS CLI first.${NC}"
        exit 1
    fi
    
    if ! aws sts get-caller-identity &> /dev/null; then
        echo -e "${RED}❌ AWS CLI not configured. Run 'aws configure' first.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ AWS CLI configured and ready${NC}"
}

# Function to stop EC2 instances
stop_ec2_instances() {
    echo -e "\n${YELLOW}🖥️  Checking EC2 instances...${NC}"
    
    RUNNING_INSTANCES=$(aws ec2 describe-instances --query 'Reservations[*].Instances[?State.Name==`running`].InstanceId' --output text)
    
    if [ -z "$RUNNING_INSTANCES" ]; then
        echo -e "${GREEN}✅ No running EC2 instances found${NC}"
    else
        echo -e "${RED}⚠️  Found running EC2 instances: $RUNNING_INSTANCES${NC}"
        echo -e "${YELLOW}Stopping EC2 instances...${NC}"
        aws ec2 stop-instances --instance-ids $RUNNING_INSTANCES
        echo -e "${GREEN}✅ EC2 instances stopping${NC}"
    fi
}

# Function to stop RDS instances
stop_rds_instances() {
    echo -e "\n${YELLOW}🗄️  Checking RDS databases...${NC}"
    
    RDS_INSTANCES=$(aws rds describe-db-instances --query 'DBInstances[?DBInstanceStatus==`available`].DBInstanceIdentifier' --output text)
    
    if [ -z "$RDS_INSTANCES" ]; then
        echo -e "${GREEN}✅ No running RDS instances found${NC}"
    else
        echo -e "${RED}⚠️  Found running RDS instances: $RDS_INSTANCES${NC}"
        for instance in $RDS_INSTANCES; do
            echo -e "${YELLOW}Stopping RDS instance: $instance${NC}"
            aws rds stop-db-instance --db-instance-identifier "$instance"
        done
        echo -e "${GREEN}✅ RDS instances stopping${NC}"
    fi
}

# Function to check ECS services
stop_ecs_services() {
    echo -e "\n${YELLOW}🐳 Checking ECS services...${NC}"
    
    CLUSTERS=$(aws ecs list-clusters --query 'clusterArns' --output text)
    
    if [ -z "$CLUSTERS" ]; then
        echo -e "${GREEN}✅ No ECS clusters found${NC}"
    else
        for cluster in $CLUSTERS; do
            SERVICES=$(aws ecs list-services --cluster "$cluster" --query 'serviceArns' --output text)
            if [ ! -z "$SERVICES" ]; then
                for service in $SERVICES; do
                    echo -e "${YELLOW}Scaling down ECS service: $service${NC}"
                    aws ecs update-service --cluster "$cluster" --service "$service" --desired-count 0
                done
            fi
        done
        echo -e "${GREEN}✅ ECS services scaled down${NC}"
    fi
}

# Function to check Lambda functions (info only - they're pay-per-execution)
check_lambda_functions() {
    echo -e "\n${YELLOW}⚡ Checking Lambda functions...${NC}"
    
    FUNCTIONS=$(aws lambda list-functions --query 'Functions[].FunctionName' --output text)
    
    if [ -z "$FUNCTIONS" ]; then
        echo -e "${GREEN}✅ No Lambda functions found${NC}"
    else
        FUNCTION_COUNT=$(echo "$FUNCTIONS" | wc -w)
        echo -e "${BLUE}ℹ️  Found $FUNCTION_COUNT Lambda functions (pay-per-execution, no action needed)${NC}"
    fi
}

# Function to check S3 storage costs
check_s3_storage() {
    echo -e "\n${YELLOW}🪣 Checking S3 buckets...${NC}"
    
    BUCKETS=$(aws s3 ls | awk '{print $3}')
    
    if [ -z "$BUCKETS" ]; then
        echo -e "${GREEN}✅ No S3 buckets found${NC}"
    else
        echo -e "${BLUE}ℹ️  Found S3 buckets:${NC}"
        for bucket in $BUCKETS; do
            SIZE=$(aws s3 ls s3://"$bucket" --recursive --summarize 2>/dev/null | grep "Total Size" | awk '{print $3, $4}')
            if [ -z "$SIZE" ]; then
                echo -e "  📁 $bucket: Empty"
            else
                echo -e "  📁 $bucket: $SIZE"
            fi
        done
        echo -e "${BLUE}💡 Consider deleting unused objects from large buckets to save costs${NC}"
    fi
}

# Function to check ElastiCache clusters
stop_elasticache_clusters() {
    echo -e "\n${YELLOW}⚡ Checking ElastiCache clusters...${NC}"
    
    REDIS_CLUSTERS=$(aws elasticache describe-replication-groups --query 'ReplicationGroups[?Status==`available`].ReplicationGroupId' --output text 2>/dev/null)
    MEMCACHED_CLUSTERS=$(aws elasticache describe-cache-clusters --query 'CacheClusters[?CacheClusterStatus==`available`].CacheClusterId' --output text 2>/dev/null)
    
    if [ -z "$REDIS_CLUSTERS" ] && [ -z "$MEMCACHED_CLUSTERS" ]; then
        echo -e "${GREEN}✅ No running ElastiCache clusters found${NC}"
    else
        if [ ! -z "$REDIS_CLUSTERS" ]; then
            echo -e "${RED}⚠️  Found Redis clusters: $REDIS_CLUSTERS${NC}"
            echo -e "${YELLOW}💡 Consider stopping these manually if not needed${NC}"
        fi
        if [ ! -z "$MEMCACHED_CLUSTERS" ]; then
            echo -e "${RED}⚠️  Found Memcached clusters: $MEMCACHED_CLUSTERS${NC}"
            echo -e "${YELLOW}💡 Consider stopping these manually if not needed${NC}"
        fi
    fi
}

# Function to check NAT Gateways
check_nat_gateways() {
    echo -e "\n${YELLOW}🌐 Checking NAT Gateways...${NC}"
    
    NAT_GATEWAYS=$(aws ec2 describe-nat-gateways --query 'NatGateways[?State==`available`].NatGatewayId' --output text)
    
    if [ -z "$NAT_GATEWAYS" ]; then
        echo -e "${GREEN}✅ No NAT Gateways found${NC}"
    else
        echo -e "${RED}⚠️  Found NAT Gateways: $NAT_GATEWAYS${NC}"
        echo -e "${YELLOW}💡 NAT Gateways cost ~$45/month each. Consider deleting if unused.${NC}"
    fi
}

# Function to generate cost summary
generate_cost_summary() {
    echo -e "\n${BLUE}💰 COST SAVING SUMMARY${NC}"
    echo "======================================"
    echo -e "${GREEN}✅ Actions completed:${NC}"
    echo "  • EC2 instances stopped (if any were running)"
    echo "  • RDS databases stopped (if any were running)"  
    echo "  • ECS services scaled to 0 (if any were running)"
    echo ""
    echo -e "${YELLOW}💡 Additional cost-saving tips:${NC}"
    echo "  • Delete unused EBS snapshots"
    echo "  • Remove unused Elastic IPs"
    echo "  • Clean up large S3 buckets"
    echo "  • Delete unused CloudWatch logs"
    echo "  • Remove unused NAT Gateways"
    echo ""
    echo -e "${BLUE}📊 To restart services tomorrow:${NC}"
    echo "  • EC2: ./scripts/rds-control.sh start"
    echo "  • RDS: aws ec2 start-instances --instance-ids <instance-id>"
    echo ""
}

# Main execution
main() {
    check_aws_config
    stop_ec2_instances
    stop_rds_instances  
    stop_ecs_services
    check_lambda_functions
    check_s3_storage
    stop_elasticache_clusters
    check_nat_gateways
    generate_cost_summary
    
    echo -e "\n${GREEN}🎉 AWS cost optimization complete!${NC}"
    echo -e "${BLUE}💡 Run this script regularly to minimize AWS costs.${NC}"
}

# Run main function
main