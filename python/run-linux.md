# 在Linux下运行Python程序

如有文件 hello.py，运行有如下两种方式：

1. 命令 python3 hello.py

2. 将hello.py更改为可执行文件
    1. 使用chmod命令更改文件权限
    2. 在hello.py文件**头部**，输入：
    ```
    #!/usr/bin/env python3
    # -*- coding: utf-8 -*-
    ```
    3. 在helle.py文件所在目录下，输入：
    ```
    ./hello.py
    ```

**说明：**

运行python2.×代码，只须将以上python3更改为python即可。