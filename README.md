# H5 / Admin 同源模板项目

## 准备

1. 创建空白仓库，如 base-test（最好配置SSH，提交时可免密）
2. 不要使用README初始化仓库
3. 不要添加.gitignore

## 创建项目

```bash
  git clone git@gitee.com:xfcdxg/react-base.git ./MyFloder/

  cd ./MyFloder

  git remote set-url origin git@gitee.com:xfcdxg/base-test.git

  git pull --allow-unrelated-histories

  # 删除 相关冲突  

  # 删除 .gitignore 中 node_modules 前的 #

  npm start
```

## 批处理创建项目

```bash
  project=base-test; # 项目名，需修改
  repoDomain=git@gitee.com:xfcdxg; #如不是gitee，可更换，如github
  git clone git@gitee.com:xfcdxg/react-base.git ./$project/;
  cd ./$project;
  git remote set-url origin $repoDomain/$project.git;
  git pull --allow-unrelated-histories;
  sed -i '' 's/# \/node_modules/\/node_modules/g' .gitignore;
  git add .; git commit -m 'pre'; git push;
  npm start;
```

## 访问

H5：http://localhost:3000/

Admin：http://localhost:3000/admin
