module.exports = {
    apps: [
        {
            name: 'tdgresurseumane',
            script: 'npm',
            args: 'run dev -- -p 3005',
            cwd: '/home/asns/tdgresurseumane-frontend',
            env: {
                NODE_ENV: 'development',
                PORT: 3005,
                HOSTNAME: '0.0.0.0',
            },
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            error_file: '/home/asns/.pm2/logs/tdgresurseumane-error.log',
            out_file: '/home/asns/.pm2/logs/tdgresurseumane-out.log',
            log_file: '/home/asns/.pm2/logs/tdgresurseumane.log'
        }
    ]
};
