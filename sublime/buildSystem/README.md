# Build System

将如下代码保存为新建的 build 文件，那么即可实现 sublime 的自定义 build system 功能
```js
{
  "shell_cmd": "/usr/local/node/bin/node \"$file\"",
  "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
  "selector": "source.js",

  "env": {"PYTHONIOENCODING": "utf-8"},
}
```

注：build system 的快捷键为 ctrl+b, 而 ctrl+shift+b 可以让你在不同的 build 脚本之间转换。
