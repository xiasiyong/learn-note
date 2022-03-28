# https

1. 将证书上传到服务器

   ```bash
   scp www.xiasiyong.com.csr www.xiasiyong.com.key	www.xiasiyong.com_bundle.crt	www.xiasiyong.com_bundle.pem root@124.222.16.153:/etc/nginx

   scp api.xiasiyong.com_bundle.crt api.xiasiyong.com_bundle.pem api.xiasiyong.com.csr api.xiasiyong.com.key root@124.222.16.153:/etc/nginx
   ```
