进入服务器后务必先提权
sudo -s

MongoDb服务挂掉后，进入/usr/bin/下输入以下命令，即可开启数据库
mongod -f /etc/mongod.conf --fork
可以 vi /etc/mongod.conf 对配置进行修改
加--fork保证直接退出shell后，数据库能正常运行，祥见  http://www.db2china.net/Article/34771

[靠谱] mongodb的几种启动方式以及关闭方式, 祥见http://blog.csdn.net/tolihaifeng/article/details/52573093
cd /usr/bin & mongo --port 57017 & use admin & db.auth("username","password") & db.shutdownServer()

通过打开以下网址，检测数据库是否正常运行
spraylee.com:57017

linux 用export NODE_ENV=production 设置NODE为线上环境，echo $NODE_ENV 确定环境， 显示所有环境变量 env
windows 上 set NODE_ENV=production
开启Node进程
cd /home/www/rest
nvm use 7.1.0
forever start -c "node --harmony-async-await" bin/www -w -v

Node进程挂掉后，输入以下命令进行重启
forever restartall

Forever守护进程的log日志文件 /usr/.forever/ 下的某个log文件，具体可以通过一下命令查知是哪个文件
forever list

目前已知，对数据库文件进行恢复时，可能会造成数据库挂掉，同时连接数据库的node服务也会挂掉，待解决