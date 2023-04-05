#!/usr/bin/env sh
 
# 忽略错误
set -e  #有错误抛出错误
 
# 构建
yarn run docs:build  #然后执行打包命令
 
# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录
 
git init  #执行这些git命令
git add -A
git commit -m 'deploy'
 
# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:JY-HE/JY-HE.github.io.git docs

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:JY-HE/Knowledge-is-infinite.git master:gh-pages

cd -
 
rm -rf docs/.vitepress/dist  #删除dist文件夹