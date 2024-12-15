module.exports = {
  apps : [{
    script: 'bun run index.ts'
  }],

  deploy : {
    production : {
      key: 'key.pem',
      user : 'root',
      host : '101.37.151.172',
      ref  : 'origin/main',
      repo : 'git@github.com:devinjohw/cross-site-cookies.git',
      path : '/root/my-apps',
      'pre-deploy-local': '',
      'post-deploy' : 'source /root/.bashrc && bun install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
