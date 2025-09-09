#!/bin/bash

# RDS Control Script - Start/Stop PostgreSQL instance to save costs
# Usage: ./rds-control.sh [start|stop|status]

DB_INSTANCE_ID="pilot-seniority-db"

case "$1" in
    start)
        echo "🚀 Starting PostgreSQL database..."
        aws rds start-db-instance --db-instance-identifier $DB_INSTANCE_ID
        echo "⏳ Database is starting. Use './rds-control.sh status' to check progress."
        ;;
    stop)
        echo "🛑 Stopping PostgreSQL database..."
        aws rds stop-db-instance --db-instance-identifier $DB_INSTANCE_ID
        echo "✅ Database stop initiated. This will save ~70% on compute costs."
        ;;
    status)
        echo "📊 Checking database status..."
        STATUS=$(aws rds describe-db-instances --db-instance-identifier $DB_INSTANCE_ID --query 'DBInstances[0].DBInstanceStatus' --output text)
        ENDPOINT=$(aws rds describe-db-instances --db-instance-identifier $DB_INSTANCE_ID --query 'DBInstances[0].Endpoint.Address' --output text)
        
        echo "Status: $STATUS"
        if [ "$STATUS" = "available" ]; then
            echo "✅ Database is ready for connections"
            echo "📡 Endpoint: $ENDPOINT"
        elif [ "$STATUS" = "stopped" ]; then
            echo "🛑 Database is stopped (saving costs)"
        elif [ "$STATUS" = "starting" ]; then
            echo "⏳ Database is starting up..."
        elif [ "$STATUS" = "stopping" ]; then
            echo "⏳ Database is shutting down..."
        else
            echo "⚠️  Status: $STATUS"
        fi
        ;;
    *)
        echo "Usage: $0 {start|stop|status}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the PostgreSQL database"
        echo "  stop    - Stop the database to save costs (~70% savings)"
        echo "  status  - Check current database status"
        echo ""
        echo "Cost Management:"
        echo "  • Keep stopped when not actively developing"
        echo "  • Start only for migration/testing sessions"
        echo "  • Free tier: 750 hours/month compute time"
        exit 1
        ;;
esac