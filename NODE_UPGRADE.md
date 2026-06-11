# Node.js Upgrade Required

## Current Issue

Your current Node.js version (18.20.8) is not compatible with Next.js 16.
**Required version:** Node.js >= 20.9.0

## Upgrade Options

### Option 1: Using NVM (Recommended)

```bash
# Install NVM if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc  # or source ~/.zshrc

# Install Node.js 20 LTS
nvm install 20

# Use Node.js 20
nvm use 20

# Set as default
nvm alias default 20

# Verify installation
node --version  # Should show v20.x.x
```

### Option 2: Using NodeSource Repository (Ubuntu/Debian)

```bash
# Download and run the setup script
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt-get install -y nodejs

# Verify installation
node --version
```

### Option 3: Using Official Binary

```bash
# Download Node.js 20 LTS
wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz

# Extract
tar -xf node-v20.11.0-linux-x64.tar.xz

# Move to /usr/local
sudo mv node-v20.11.0-linux-x64 /usr/local/node-20

# Update PATH in ~/.bashrc or ~/.zshrc
export PATH=/usr/local/node-20/bin:$PATH

# Reload shell
source ~/.bashrc

# Verify
node --version
```

## After Upgrade

Once Node.js 20+ is installed:

```bash
# Navigate to project
cd /home/asns/tdg-trading-frontend

# Reinstall dependencies (optional but recommended)
rm -rf node_modules package-lock.json
npm install

# Run development server
npm run dev

# Or build for production
npm run build
```

## Verify Installation

```bash
node --version    # Should show v20.x.x or higher
npm --version     # Should show compatible npm version
```

## Troubleshooting

### If you get permission errors:
```bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### If NVM command not found:
```bash
# Add to ~/.bashrc or ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## Alternative: Use Node 18 Compatible Next.js

If you cannot upgrade Node.js, you can downgrade Next.js to version 14:

```bash
npm install next@14 react@18 react-dom@18
```

However, this is **not recommended** as you'll miss out on Next.js 15/16 features.

---

**Recommended:** Upgrade to Node.js 20 LTS for best compatibility and performance.
