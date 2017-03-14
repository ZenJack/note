# Git 相关

---
## 第一部分

#### [Git](https://en.wikipedia.org/wiki/Git_(software)) 學習資料
1. Git 全面介紹書籍 -- [Pro Git(中文)](https://git-scm.com/book/zh/v2) | [Pro Git(英文)](https://git-scm.com/book/en/v2)
2. Git [簡易指南](http://www.bootcss.com/p/git-guide/)
3. Git [圖解(中文)](http://marklodato.github.io/visual-git-guide/index-zh-cn.html) | [圖解(英文)](http://marklodato.github.io/visual-git-guide/index-en.html)

---
## 第二部分

### 1. 撤销工作空间的所有修改
```sh
git ls-files -m | xargs git checkout --
```
