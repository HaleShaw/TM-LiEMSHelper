# LiEMS

LiEMS 强化扩展工具，仅限于朗坤内部使用。

## 1. 功能

### 1.1 快捷键

1. `Alt + F2`: 打开/关闭设置

2. `Alt + F1`: 打开快捷键帮助

3. `Alt + Shift + M`：自动登录/解锁

4. `Alt + Shift + F`: 打开菜单，进入搜索

5. `Esc`: 闭弹窗；打开/关闭菜单；关闭在线用户列表页面

6. `Alt + Shift + W`: 关闭当前标签页

7. `Alt + Shift + O`: 关闭其他标签页

8. `Alt + Shift + E`: 关闭左侧标签页

9. `Alt + Shift + R`: 关闭右侧标签页

10. `Alt + Shift + Q`: 关闭全部标签页

11. `F4`：刷新当前标签页

12. `Shift + F4`：强制刷新当前标签页

13. `F8`：获取当前标签页的 HTML 地址

14. `Ctrl + F8`：获取当前标签页的程序号

15. `Alt + F8`：获取当前标签页的 XML 地址

16. `Shift + F8`：获取当前标签页的 JS 地址

17. `Alt + T`：获取当前标签页的数据表名

18. `Alt + Shift + T`：获取当前标签页的数据表名，并在数据字典中打开

19. `Ctrl + Alt + Shift + T`：输入数据表名，并在数据字典中打开

20. `Ctrl + Alt + Shift + ←`：第一条

21. `Alt + Shift + ←`：前一条/前一页

22. `Alt + Shift + →`：后一条/后一页

23. `Ctrl + Alt + Shift + →`：最后一条

24. `Alt + Shift + ↑`：打开列表

25. `Alt + Shift + S`：保存

26. `Alt + Shift + P`：打开铃铛消息弹窗

### 1.2 其他

1. `LiEMS 系统`丰富的快捷键支持

2. `LiEMS 系统`常用菜单样式优化

3. `LiEMS 系统`菜单搜索结果显示优化

4. `LiEMS 系统`在线用户显示优化

5. `LiEMS 系统`快速重启（需部署class）

6. `运营管理平台`常用菜单快速访问

7. `运营管理平台`任务列表显示优化

8. `运营管理平台`自动登录

9. `运营管理平台``在线考试`复制题目及试卷

10. 配置数据备份与恢复

## 2. 配置

### 2.1 安装篡改猴插件

访问 [www.tampermonkey.net](https://www.tampermonkey.net) 下载篡改猴插件。

篡改猴插件支持 `Chrome`、`Microsoft Edge`、`Safari`、`Opera Next` 和 `Firefox`。

### 2.2 配置篡改猴插件

Tampermonkey若为5.3+，必须启用 “允许用户脚本”切换开关或开发者模式。

1. Chrome或Edge中，在新标签页中访问`chrome://extensions`或`edge://extensions`，点击右上角的切换开关启用`开发者模式`。

2. Chrome或Edge中，点击篡改猴插件`详情`按钮进入详情设置页，点击`允许运行用户脚本`的切换开关进行启用。

![DeveloperMode](https://github.com/HaleShaw/TM-LiEMSHelper/raw/refs/heads/main/screenshots/DeveloperMode.png)

![AllowUserScripts](https://github.com/HaleShaw/TM-LiEMSHelper/raw/refs/heads/main/screenshots/AllowUserScripts.png)

### 2.3 安装脚本

可通过以下方式安装或更新升级脚本。

* [GreasyFork](https://greasyfork.org/zh-CN/scripts/564687)
* [OpenUserJS](https://openuserjs.org/scripts/HaleShaw/LiEMS_Helper)
* [ScriptCat](https://scriptcat.org/zh-CN/script-show-page/5330)
* [Github](https://github.com/HaleShaw/TM-LiEMSHelper/raw/refs/heads/main/LiEMSHelper.user.js)

### 2.4 配置脚本

安装完脚本后，浏览器打开任意页面，将会弹出设置弹窗，根据实际情况进行配置。

配置完项目信息及运营管理平台信息后，点击保存按钮，脚本即生效。
