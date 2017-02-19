# Linux 下 Sublime 使用中文输入法

1. 安装 fcitx 平台
2. 复制 libsublime-imfix.so 文件到 Sublime 安装目录下
3. 复制 st3（Sublime_Text_3） 文件到 /usr/local/bin（任意配置了环境变量的目录）
4. 每次在 shell 中输入 st3 启动 Sublime 即可输入中文
5. 如果要在命令中使用 Sublime 打开一文件，可建立一软链接关联真实的 Sublime 安装目录下的 sublime_text 即可
