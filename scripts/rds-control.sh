#!/bin/bash

# RDS Database Control Script
# Use this script to start/stop your PostgreSQL database on AWS RDS

DB_INSTANCE_ID="pilot-seniority-db"

# Set AWS CLI path
export PATH="$HOME/.local/bin:$PATH"

case "$1" in
  start)
    echo "🚀 Starting RDS database: $DB_INSTANCE_ID"
    aws rds start-db-instance --db-instance-identifier "$DB_INSTANCE_ID"
    echo "Database starting... This may take a few minutes."
    echo "Check status with: ./scripts/rds-control.sh status"
    ;;
  stop)
    echo "⏹️  Stopping RDS database: $DB_INSTANCE_ID"
    aws rds stop-db-instance --db-instance-identifier "$DB_INSTANCE_ID"
    echo "Database stopping... This may take a few minutes."
    ;;
  status)
    echo "📊 Checking RDS database status:"
    STATUS=$(aws rds describe-db-instances --db-instance-identifier "$DB_INSTANCE_ID" --query 'DBInstances[0].DBInstanceStatus' --output text)
    echo "Database status: $STATUS"
    
    if [ "$STATUS" = "available" ]; then
      echo "✅ Database is running and available"
      ENDPOINT=$(aws rds describe-db-instances --db-instance-identifier "$DB_INSTANCE_ID" --query 'DBInstances[0].Endpoint.Address' --output text)
      echo "Connection endpoint: $ENDPOINT:5432"
    elif [ "$STATUS" = "stopped" ]; then
      echo "⏹️  Database is stopped (not incurring costs)"
    elif [ "$STATUS" = "starting" ]; then
      echo "🚀 Database is starting up..."
    elif [ "$STATUS" = "stopping" ]; then
      echo "⏹️  Database is shutting down..."
    fi
    ;;
  *)
    echo "Usage: $0 {start|stop|status}"
    echo ""
    echo "Commands:"
    echo "  start  - Start the RDS database"
    echo "  stop   - Stop the RDS database (saves money)"
    echo "  status - Check current database status"
    echo ""
    echo "Example: ./scripts/rds-control.sh start"
    exit 1
    ;;
esac
