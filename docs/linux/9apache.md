# apache

## 操作

```bash
yum install httpd
systemctl start httpd
systemctl stop httpd
systemctl restart httpd
systemctl reload httpd // 修改配置之后，重载
systemctl status httpd // 查看状态
systemctl enable httpd // 开启启动
systemctl disable httpd // 开机不启动
systemctl is-enabled httpd  // 查看是否开机启动
firewall-cmd --list-ports // 查看防火墙开放端口
systemctl stop firewalld // 停止防火墙
firewall-cmd --zone=public --add-port=80/tcp --permanent // 开放80端口， 修改之后需要reload
firewall-cmd --zone=public --query-port=80/tcp 
firewall-cmd --zone=public --remove-port=80/tcp --permanent 
firewall-cmd --reload // 立即生效

```

## 配置

![image-20220219181329605](/Users/xiasiyong/Library/Application Support/typora-user-images/image-20220219181329605.png)

![image-20220219181650980](/Users/xiasiyong/Library/Application Support/typora-user-images/image-20220219181650980.png)

## SElinux:安全子系统

![image-20220219183226403](/Users/xiasiyong/Library/Application Support/typora-user-images/image-20220219183226403.png)

```bash
	sestatus: 查看selinux的状态
	getenforce
	setenforce 0 (1) // 临时的
	ls -Zd /var/www/html
	ls _Zd /home/xxx
	yum provides semanage
	semanage 
	semanage fcontext -a -t xxx /home/web/*
	restorecon -Rv /home/web // 重载上下文

```

## 动态分配IP/静态分配IP

```bash
systemctl status NetworkManager
nmtui
```

