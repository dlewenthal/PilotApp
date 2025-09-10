# AWS Cost Management Guide

This guide documents the process for regularly stopping AWS services to minimize costs when not actively developing or using the application.

## Quick Start

**To stop all cost-incurring services:**
```bash
./scripts/aws-cost-saver.sh
```

**To restart your database tomorrow:**
```bash
./scripts/rds-control.sh start
```

## Scripts Overview

### 1. `aws-cost-saver.sh` - Comprehensive Cost Optimization
**Purpose:** Automatically stop all AWS services that incur hourly costs
**Frequency:** Run daily/weekly when not actively developing

**Services it manages:**
- ✅ **EC2 Instances** - Stops all running instances
- ✅ **RDS Databases** - Stops all available databases  
- ✅ **ECS Services** - Scales services to 0 containers
- ℹ️ **Lambda Functions** - Info only (pay-per-execution)
- ℹ️ **S3 Storage** - Shows bucket sizes for cleanup
- ⚠️ **ElastiCache** - Alerts about running clusters
- ⚠️ **NAT Gateways** - Warns about expensive resources

### 2. `rds-control.sh` - Database Management
**Purpose:** Easy start/stop/status for your PostgreSQL database
**Usage:**
- `./scripts/rds-control.sh start` - Start the database
- `./scripts/rds-control.sh stop` - Stop the database  
- `./scripts/rds-control.sh status` - Check current status

## Cost-Saving Routine (Daily/Weekly)

### Step 1: Run the Cost Saver
```bash
cd /home/david/my-react-app
./scripts/aws-cost-saver.sh
```

### Step 2: Review Output
The script will show:
- 🖥️ EC2 instances stopped
- 🗄️ RDS databases stopped
- 🐳 ECS services scaled down
- 🪣 S3 bucket sizes (for cleanup)
- 🌐 Expensive resources (NAT gateways, etc.)

### Step 3: Optional Manual Cleanup
**High-impact cost reductions:**
- Delete unused EBS snapshots: `aws ec2 describe-snapshots --owner-ids self`
- Release unused Elastic IPs: `aws ec2 describe-addresses`
- Delete old CloudWatch logs: `aws logs describe-log-groups`
- Clean up large S3 buckets: `aws s3 ls --summarize --recursive s3://bucket-name`

## Restarting Services

### Database (Most Common)
```bash
# Start your PostgreSQL database
./scripts/rds-control.sh start

# Check if it's ready (takes 2-3 minutes)
./scripts/rds-control.sh status
```

### EC2 Instances (If Any)
```bash
# List your instances
aws ec2 describe-instances --query 'Reservations[*].Instances[?State.Name!=`terminated`].[InstanceId,State.Name,InstanceType]' --output table

# Start specific instance
aws ec2 start-instances --instance-ids i-1234567890abcdef0
```

### ECS Services (If Any)
```bash
# Scale ECS service back up
aws ecs update-service --cluster my-cluster --service my-service --desired-count 1
```

## Cost Monitoring

### Current Costs (Your Setup)
- **RDS db.t3.micro**: ~$13-15/month when running
- **S3 storage**: ~$0.02/GB/month (currently minimal)
- **Data transfer**: Minimal with current usage

### Savings Strategy
- **Daily shutdown**: Save ~$10-12/month
- **Weekend shutdown**: Save ~$6-8/month  
- **Weekly development**: Save ~$8-10/month

## Automation Options

### Option 1: Cron Job (Daily Shutdown)
```bash
# Add to crontab: crontab -e
0 18 * * * cd /home/david/my-react-app && ./scripts/aws-cost-saver.sh >> /tmp/aws-shutdown.log 2>&1
```

### Option 2: AWS Lambda (Scheduled)
Create a Lambda function that runs the AWS CLI commands on a schedule.

### Option 3: Manual Routine
Run the script manually when finished with development sessions.

## Emergency Procedures

### If Database Won't Start
```bash
# Check detailed status
aws rds describe-db-instances --db-instance-identifier pilot-seniority-db

# Common issues:
# - Still stopping: Wait 5-10 minutes
# - Maintenance window: Check preferred maintenance window
# - Parameter group issues: Verify default.postgres15
```

### If Script Fails
```bash
# Test AWS CLI connection
aws sts get-caller-identity

# Check permissions
aws rds describe-db-instances
aws ec2 describe-instances

# Manual RDS stop
aws rds stop-db-instance --db-instance-identifier pilot-seniority-db
```

## Best Practices

1. **Always run before long breaks** (weekends, vacations)
2. **Check script output** for any errors or warnings
3. **Document any custom resources** not covered by the script
4. **Set up billing alerts** in AWS Console ($5, $10, $25 thresholds)
5. **Review monthly bills** to identify unexpected costs

## Troubleshooting

### Common Issues
- **"Database is stopping"**: Normal, takes 5-10 minutes to fully stop
- **"Access denied"**: Check AWS credentials with `aws configure list`
- **Script not executable**: Run `chmod +x scripts/*.sh`
- **EC2 instances won't stop**: May be in "stopping" state, wait a few minutes

### Log Files
The cost-saver script outputs detailed information. To save logs:
```bash
./scripts/aws-cost-saver.sh | tee aws-shutdown-$(date +%Y%m%d).log
```

## Integration with Development Workflow

### Morning Routine (Start Development)
```bash
./scripts/rds-control.sh start
# Wait 2-3 minutes for database to be available
npm run dev  # or your normal development commands
```

### Evening Routine (End Development)  
```bash
./scripts/aws-cost-saver.sh
# Review output for any issues
```

This systematic approach can save you $100+ per month on AWS costs while maintaining the ability to quickly restart services when needed.