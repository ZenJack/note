# Linux 下 Vue-cli 热部署失效修复

在 Shell 执行：

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```