#!/bin/bash
yum update -y

# Install Node.js 18
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs

# Install git
yum install -y git

# Install PM2 for process management
npm install -g pm2

# Create app directory
mkdir -p /opt/pilot-seniority-app
cd /opt/pilot-seniority-app

# Clone the repository (we'll upload files manually for now)
# For now, we'll create a simple setup script

# Set environment variables
echo 'export DATABASE_URL="postgresql://pilotadmin:PilotSeniority2025!@pilot-seniority-db.cf6esk4ycgky.us-west-1.rds.amazonaws.com:5432/pilot_seniority?schema=public"' >> /etc/environment
echo 'export PORT="3001"' >> /etc/environment

# Create log directory
mkdir -p /var/log/pilot-seniority

# Create systemd service file
cat > /etc/systemd/system/pilot-seniority.service << 'EOF'
[Unit]
Description=Pilot Seniority API Server
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/opt/pilot-seniority-app
Environment=NODE_ENV=production
Environment=DATABASE_URL=postgresql://pilotadmin:PilotSeniority2025!@pilot-seniority-db.cf6esk4ycgky.us-west-1.rds.amazonaws.com:5432/pilot_seniority?schema=public
Environment=PORT=3001
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pilot-seniority

[Install]
WantedBy=multi-user.target
EOF

# Enable and start the service (after we upload the files)
systemctl daemon-reload

# Create setup completion marker
touch /tmp/setup-complete

echo "EC2 setup completed"