#!/bin/bash

# Kozelsky Website Deployment Script
# Deploy to kozelsky.swigs.online

set -e

# Configuration
SERVER_USER="root"
SERVER_HOST="swigs.online"
DEPLOY_PATH="/var/www/kozelsky.swigs.online"
DOMAIN="kozelsky.swigs.online"

echo "🚀 Starting deployment to $DOMAIN..."

# Build the project
echo "📦 Building project..."
npm run build

# Create deployment directory on server if it doesn't exist
echo "📁 Preparing server directory..."
ssh $SERVER_USER@$SERVER_HOST "mkdir -p $DEPLOY_PATH"

# Upload the dist folder
echo "📤 Uploading files..."
rsync -avz --delete dist/ $SERVER_USER@$SERVER_HOST:$DEPLOY_PATH/

# Upload nginx config
echo "⚙️ Uploading nginx configuration..."
scp nginx.conf $SERVER_USER@$SERVER_HOST:/etc/nginx/sites-available/$DOMAIN

# Enable site if not already enabled
ssh $SERVER_USER@$SERVER_HOST "ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN"

# Test nginx configuration
echo "🔍 Testing nginx configuration..."
ssh $SERVER_USER@$SERVER_HOST "nginx -t"

# Reload nginx
echo "🔄 Reloading nginx..."
ssh $SERVER_USER@$SERVER_HOST "systemctl reload nginx"

echo "✅ Deployment complete! Site available at https://$DOMAIN"
