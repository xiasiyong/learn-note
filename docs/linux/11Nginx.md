# Nginx

## 安装

```bash
yum install epl-release
yun install nginx

```

## 启动

```bash
systemctl start nginx 或者 nginx
systemctl stop httpd // 先停用appache， 因为appache占用了80端口
rqm -ql nginx // 查看nginx配置
systemctl enable nginx  // 设置开机启动
```

## 配置

```bash
/etc/httpd/conf/httpd.conf // 修改appache默认80端口
/etc/httpd/conf.d/ssl.conf // 修改appache默认443端口
// selinux 放行端口
semanage port -l | grep http
semanage port -a -t=http_port_t -p tcp 7080
firewall-cmd --list-ports
firewall-cmd --zone=public --add-port=7080/tcp --permanent
firewall-cmd --reload
// 还需要去腾讯云的控制台打开7080端口

// nginx 配置
/etc/nginx/nginx.conf

upstream backend-apche {
	server 127.0.0.1:7080;
}

// server 下面
server_name www.xiasy.com;
location / {
	proxy_pass  http://back_apche;
}

return 301 https://$host$request_uri;
```
