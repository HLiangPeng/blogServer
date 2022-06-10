const config = {
  apps: {
    name: 'blog',
    script: './app.js', // 服务开启的入口文件
  },
  deploy: {
    production: {
      user: 'root', // 远程服务器用户名
      host: '120.48.52.210', // 远程服务器ip
      ref: 'origin/master', // PM2自动拉取的git仓库分支
      repo: 'git@github.com:HLiangPeng/blogServer.git', // PM2自动拉取的git地址
      path: '/home/html/blog/server', // 拉取后的代码存放到远端的目录位置
    },
  },
}

module.exports = config