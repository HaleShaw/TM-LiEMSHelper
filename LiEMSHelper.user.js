// ==UserScript==
// @name               LiEMS Helper
// @name:en            LiEMS Helper
// @description        LiEMS强化扩展工具
// @description:en     An enhanced and extended tool for LiEMS.
// @namespace          https://github.com/HaleShaw
// @version            1.0.1
// @author             HaleShaw
// @copyright          2023+, HaleShaw (https://github.com/HaleShaw)
// @license            AGPL-3.0-or-later
// @homepage           https://github.com/HaleShaw/TM-LiEMSHelper
// @supportURL         https://github.com/HaleShaw/TM-LiEMSHelper/issues
// @downloadURL        https://github.com/HaleShaw/TM-LiEMSHelper/raw/main/LiEMSHelper.user.js
// @updateURL          https://github.com/HaleShaw/TM-LiEMSHelper/raw/main/LiEMSHelper.user.js
// @contributionURL    https://www.jianwudao.com/
// @icon               data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAChTxb/nUgL/7FtPf/Ur5X/oE4U/55KD//gxbL/5M28/6RWHv+hTxX/2bih/93BrP+iUxr/oVAX/9m5of/Jmnn/nEYK/6BNE//Rqo7/o1Qb/6NTGv+/h1//w49q/9Gqjv/Jm3r/sW0+///+/v/CjWf/zqWH//7+/v///////////6FPFf/HlnT/272n/72DWv/CjWf/vINa/8KNZ//GlHH/vYNa/8iYdv/Fk2//w49p/8GLZf+/iGD/voZf/8uefv+ycEL/1K+U/9u7pf+pXSj/3b+q/+jTxf+9hFz/z6aI/65nNv+uaTj//////8CJY//NooT///7+////////////o1Mb/+vbz//59PH/tnZJ/9q7pP/VsZj/vYNa/7l9Uv/ZuKD/+PLu/+/h1/+0c0X/2big/9q7pP+8gln/y55//8maef/+/fz/48u6/6RVHv/AiWP/3sGt/76FXf+4ek//o1Ma/69pOP//////wYtl/86khv////////////////+iURj/6NXH//n18v+3eUz/2bmi/9KskP+9g1v/u4BX/9CpjP/z6eL/8ebd/7RzRf/XtZz/2Lae/7yDWv/Lnn//xZJu//38+//jy7r/oVAW/7NxQv/Wspn/voVd/59LEP+/h2D/rmk4//n18f/BimT/zKCB//n08f///////////6BMEv/n08T/+fTx/7V1SP/Ytp7/0aiM/76FXf/OooX/tXFF/8CIYf/KnHv/t3hM/9axmP/WtJv/vIJa/8uefv/EkGz//fv6/+LJt/+lVyD/z6eK/+LItv+9g1r/rGQy/97Brf+wazv/2rqi/6tjMP+xbj7/2bmi////////////uXNJ/+zd0f/79vT/yJRz/+HHtP/fu6j/zp6A/+vXzP+8c0z/tGk8/+LIt//KkXL/4cKw/+DFsf/MoIH/2Laf/9Oskf/9/Pv/6dfK/7RyRP+vajn/yZt5/86khv/No4X/59PE/8WSb//Km3v/sW0+/7FtPf/Jm3r////////////s2c3/+vb0//L47f/v4tj/9vDq/+rm2P/y4tv/+Pn0/+fUxf/p0cX/+Pr0/+fYyf/u7OD/9u7p/+vazv/t3tP/7d7S//Xs5v/y597/5tDA/+PKuf/p1sj/7NvQ/+7g1f/w5dz/6dfK/+vazv/lz7//5c6+/+/h1////////////8vju//9/fz/xN6x/9zs0f/3+vT/n8qB/+fz4P/n8t//ocyD/9Pnxv/r9eX/m8d6/63Tk//z9Oz/062S/8eXdP/Hl3T/xJJu/8aUcf/Jmnr/ypx7/8iZd//Il3X/x5Zz/8aUcf/ImXf/yJd2/8qbev/Jm3r/2Lae//79/f//////nMh8//f69f+y0pf/rNCQ//j79f9trT3/u9ml/+Pv2f9dpSf/ksJu//L37v9Tnxr/Yact/+Tq1v+9gVn/m0QH/5tEB/+bRAb/m0QH/5tEB/+bRAf/m0QH/5tEB/+bRAf/m0QH/5tEB/+bRAf/m0QH/5tEB/+vaTj/+PLu//////+nzIj/7vXp/87ivP+Tv2z//P36/4+9Z/+VwW//8ffs/3WtQ/9wqz3//P37/3KsQP9Nlw7/0eTA/9KjiP+YQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/6NTG//s3NH//////7jVnv/b6s7/5fDc/4O2V//1+fL/tNOa/3iwSP/z+O7/k8Bt/1edG//s9OX/msR3/0SRAv+x1Zn/5MW1/5pDBf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/nUgM/9/Dr///////0uTC/8Xdsf/z+O//hbdZ/+Xv2//T5cT/YKEn/+jx4P+21Z3/TJYM/9Tmxf++2af/SZQI/4i+Y//y5d3/ok8X/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+aQQP/zKGB///////n8d//rc+Q//n89/+cxXn/xNyv/+716P9cnyL/0OTA/9jpy/9Mlg3/stKX/93r0f9RmRT/a6s5//Du5P+vYzP/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+7gVf//v39//r7+P+pzYv/9fnx/7XTm/+ny4j//f38/26qO/+szo//6/Pk/2CiJ/+NvGX/7/Xp/2GiKf9Wnhz/2+rO/8GFYP+YQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/5lAAf+ZQAH/mUAB/6ZYIf/38Ov//v7+/6nNi//n8N7/3OvQ/4O2V///////lMBv/4u7Yv/1+fH/e7JM/2ypOP/3+vT/g7ZW/0qWC//F4LT/1qmR/5hAAf+ZQAH/mUAB/5xGCf/AiGL/yZp5/8maef/Jmnn/yZp5/8maef/Jmnn/yZp5/8maef/Jm3r/y59///fx7P//////wtut/9zq0P/s9OX/bqo6//7//v+716P/bak5/+716P+exnz/SpUJ//H26/+fx33/RZIC/5/Ngv/s0Mb/mUAB/5lAAf+ZQAH/nEYK/97Brf/8+fj//Pn4//z5+P/8+fj//Pn4//z5+P/8+fj//Pn4//z5+P/8+fj//v79///////W58j/vNil//j79v+FuFr/3+zU/9rpzf9opzP/3+3V/8jftf9DkQD/0OO//8besv9LlQv/fLhT//v39f+dRwv/mUAB/5lAAf+ZQAH/yJh2/////////////////////////////////////////////////////////////////+zz5f+v0JL//f79/53Fe/+816T/8vft/2emMf/C263/4u7Y/0uWC/+lyob/3evR/1ecG/9ipCv/8vnv/7NpPP+YQAH/mUAB/5lAAf+xbT7//v79/////////////////////////////////////////////////////////////f38/6vNjf/x9+3/yN+1/5nDdf/6/Pn/gbVV/6PJgv/1+PH/ZqUw/4O2V//s9Ob/bKk4/0+XEP/c7tP/xpFv/5lAAf+ZQAH/mUAB/6NSGv/48+//////////////////////////////////////////////////////////////////tNOZ/9/s0//q8+P/ebBJ//j79v+ny4f/f7RR//j69f+Ctlb/Y6Mr/+716P+IuV7/SZQI/8Hdrf/atZ//m0QH/5lAAf+ZQAH/m0UI/+jVx////v7////////////////////////////////////////////////////////////N4rv/zOG6//f69P94sEj/7/Xp/8XdsP9npjD/8Pbr/6nNi/9RmRP/3+zU/67Pkv9EkQH/msZ5/+zVyv+eSxD/mUAB/5lAAf+aQQP/17Wd//7+/v///////////////////////////////////////////////////////////9zr0P+21Jz//P38/4e4XP/Z6Mv/4OzV/2imMv/X6Mn/y+G5/0mUCf++2af/0eTB/0mUCP9zsUX/9+vn/6dZJP+YQAH/mUAB/5lAAf/Dj2r//fz6////////////////////////////////////////////////////////////7vXo/6zOjv/7/Pn/qs2M/7bUnP/w9uv/cqxA/7fVnv/t9Of/T5gR/53Ge//l79v/XaAk/1CcFf/2+PL/uHJI/5hAAf+ZQAH/mUAB/7JvP//69/T////////////////////////////////////////////////////////////4+/b/qs2M//H37f/O4rz/kb5q//n79/+Mu2P/kr9r//7+/f9opjL/e7JN/+vz5P92r0X/RJIC/9nu0f/Lk3X/mUEC/5lAAf+ZQAH/o1Ma//Tr5P////////////////////////////////////////////////////////////7+/v+51qD/3evR/+ry4v+AtFP/8vfu/6/Qk/9vqzz//f38/4+9Z/9ioyr/5vDd/5bCcf9DkAD/stme/926pv+cRQj/mUAB/5lAAf+aQgP/6NTG/////////////////////////////////////////////////////////////////8/jvv/H3rP//P37/3mwSf/k79v/0+XD/1yfIv/t9Ob/s9KZ/1KaFf/U5cT/udah/0SRAP+Pw23/6dXI/6NQF/+ZQAH/mUAB/5lAAf/Ur5T///7+////////////////////////////////////////////////////////////5/Hf/7DRlP//////lMBt/8zhuv/p8uH/ZKQs/9TlxP/W58f/UZkT/7bUnf/Y6Mr/TJYM/2+uP//v6+D/rGEv/5lAAf+ZQAH/mUAB/7+IYf/8+/r///////////////////////z6+f/x5t3/9e3n///////////////////////z+O7/ocd///////+005r/psuG//b58/96sUv/stKX/+z05v9coCL/j71n/+716P9doCP/V54d/+fx3/++f1j/mUAB/5lAAf+ZQAH/rmg3//fw6///////////////////////8OPZ/+jTxf/kzb3/+/f1//////////////////v9+v+rzo7/9fnx/9Llw/+Sv2v/+Pv2/5nDdf+PvWf/+Pv3/3qxS/9vqzz/8Pbr/3iwSf9GkgX/z+bB/9Kkiv+YQAH/mUAB/5lAAf+hUBb/8OPa//////////////////79/f/s3dH/48y7/+TOvf/z6eL//////////////////v7+/7rXov/Y6Mr/7vXo/4G1VP/t9Of/wdur/2ypOP/6/Pj/mMNz/1qeH//g7dX/ncV6/0OQAP+w1Zj/4sa1/5xGCf+ZQAH/mUAB/5tEBv/fxLH//////////////////fz7/+7f1P/auaP/5c+///Hm3f/////////////////+//7/3OrQ/7TTmv/6/Pn/hLdY/9Xnx//e69L/TZcO/+ry4v+816T/T5gR/8Pcrf/B2qv/Q5AA/4G3V//r3tH/p1ch/5lAAf+ZQAH/mUAB/8mbe//////////////////+/v7/69rN/9aymP/dv6v/9/Dr///////////////////////2+fL/yuC4//3+/P/I3rT/3OrQ//f69P+exnz/6fLh/+fx3/+dxXr/0eTB/+716P+XwnL/qc6M//Px6f/RqY3/xpVy/8aVcv/FlHH/2rqj//39/P/////////////////38Ov/4sq4/+jUxv/+/f3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @match              *://*/*
// @exclude            *://*/mobile/*
// @exclude            *://*/app/dk/wf/tool/drawing/*
// @exclude            *://*/bftool/init*
// @exclude            *://*/web/*
// @exclude            *://*/Liems/portal/detailNews.jsp*
// @exclude            *://localhost*/*
// @exclude            *://greasyfork.org/*
// @exclude            *://*.greasyfork.org/*
// @exclude            *://*.userscript.zone/*
// @exclude            *://openuserjs.org/*
// @exclude            *://scriptcat.org/*
// @exclude            *://*.baidu.com/*
// @exclude            *://*.so.com/*
// @exclude            *://*.bing.com/*
// @exclude            *://*.google.*/*
// @exclude            *://*duckduckgo.com/*
// @exclude            *://*.dogedoge.com/*
// @exclude            *://*.tujidu.com/*
// @exclude            *://*.taobao.com/*
// @exclude            *://*.tmall.com/*
// @exclude            *://*.1688.com/*
// @exclude            *://*.jd.com/*
// @exclude            *://*.vip.com/*
// @exclude            *://*.suning.com/*
// @exclude            *://*.aliexpress.com/*
// @exclude            *://*.paypal.com/*
// @exclude            *://*.iqiyi.com/*
// @exclude            *://*.youku.com/*
// @exclude            *://*.qq.com/*
// @exclude            *://*.acfun.cn/*
// @exclude            *://*.bilibili.com/*
// @exclude            *://*.youtube.com/*
// @exclude            *://*.youtube-nocookie.com/*
// @exclude            *://*.cnki.net/*
// @exclude            *://*.qidian.com/*
// @exclude            *://*.zzzmh.cn/*
// @exclude            *://wallhaven.cc/*
// @exclude            *://chrome.zzzmh.cn/*
// @exclude            *://*.guazi.com/*
// @exclude            *://*.liepin.com/*
// @exclude            *://*.58.com/*
// @exclude            *://*.csdn.net/*
// @exclude            *://github.com/*
// @exclude            *://*.github.com/*
// @exclude            *://*.163.com/*
// @exclude            *://*.sina.com/*
// @exclude            *://*.sina.com.cn/*
// @exclude            *://weibo.com/*
// @exclude            *://*.weibo.com/*
// @exclude            *://*.zhihu.com/*
// @compatible         Chrome
// @grant              unsafeWindow
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              GM_listValues
// @grant              GM_addStyle
// @grant              GM_registerMenuCommand
// ==/UserScript==

// ==OpenUserJS==
// @author             HaleShaw
// @collaborator       HaleShaw
// ==/OpenUserJS==

(function () {
  // ====================== 1. 常量模块 ======================
  const Constants = {
    // 最大显示的搜索结果数量
    MAX_DISPLAY_RESULTS: 20,

    // LiEMS版本阈值
    LIEMS_VERSION_THRESHOLD: "20241223",

    SNIPPETS: {
      LiEMSMainStyle: `
    /* 调整常用菜单高度 */
    .menus-usual,
    .menus-add {
      height: 61px !important;
    }

    /* 隐藏常用菜单图标、访问频率 */
    .menus-img,
    .menus-info,
    .menus-state {
      display: none !important;
    }

    /* 常用菜单居中 */
    .menus-title {
      width: unset !important;
      float: unset !important;
      padding-right: unset !important;
      text-align: center !important;
    }

    /* 调整标签右键菜单边距 */
    .mu-tabs-item {
      padding: 0 15px 0 15px !important;
    }
    `,
      LiEMSOnlineUsersHtml: `
    <div>
      <div class="modalHeader">
        <h2>在线用户</h2>
        <button type="button" class="modalClose">×</button>
      </div>
      <div class="modalContent">
        <table class="banner-online-wrap">
          <thead>
            <tr>
              <th title="用户名" class="usr-info name">用户名</th>
              <th title="公司名" class="usr-info org">公司名</th>
              <th title="登录地址" class="usr-info address">登录地址</th>
              <th title="登录时间" class="usr-info time">登录时间</th>
              <th title="登录终端" class="usr-info terminal">登录终端</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin</td>
              <td>192.168.1.100</td>
              <td>2021-08-01 10:00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `,
      LiEMSOnlineUsersStyle: `
    #onlineUsersModal {
      align-items: center;
      background: rgba(0, 0, 0, 0.4);
      z-index: 99999 !important;
      -webkit-tap-highlight-color: transparent;
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      flex-direction: row;
      justify-content: center;
      transition: background-color 0.1s;
    }

    #onlineUsersModal > div {
      background: #fff;
      max-width: 100%;
      padding: 1.25em;
      border: none;
      border-radius: 5px;
      position: relative;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
    }

    #onlineUsersModal .modalHeader {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    #onlineUsersModal .modalClose {
      display: flex;
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      align-items: center;
      justify-content: center;
      width: 1.2em;
      height: 1.2em;
      padding: 0;
      overflow: hidden;
      transition: color 0.1s ease-out;
      border: none;
      border-radius: 5px;
      background: 0 0;
      color: #ccc;
      font-family: serif;
      font-size: 2.5em;
      line-height: 1.2;
      cursor: pointer;
    }

    #onlineUsersModal .modalClose:hover {
      color: red !important;
    }

    #onlineUsersModal .modalContent {
      display: flex;
      line-height: 1.75rem;
      margin: 1em 0 1em 0;
    }

    #onlineUsersModal table {
      border-collapse: collapse;
    }

    #onlineUsersModal table head{
      display: table;
      table-layout: fixed;
    }

    #onlineUsersModal table tr,
    #onlineUsersModal table th,
    #onlineUsersModal table td {
      border: 1px solid #e7e8ef;
    }

    .modalContent thead tr {
      color: #70757c;
      background: #f4f5f9;
    }

    .modalContent tbody {
      display: block;
      max-height: 20rem;
      overflow-y: auto;
      table-layout: fixed;
    }

    /* 隐藏tbody滚动条但保留滚动功能 */
    .banner-online-wrap tbody {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE和Edge */
    }

    .banner-online-wrap tbody::-webkit-scrollbar {
      display: none; /* Chrome, Safari和Opera */
    }

    .modalContent thead tr,
    .modalContent tbody tr {
      display: table;
      table-layout: fixed;
    }

    .modalContent .usr-info {
      text-align: center;
      padding: 0 10px;
    }

    .modalContent .usr-info.tochat {
      cursor: pointer;
      color: #4880ff;
    }

    .modalContent .usr-info.name {
      width: 5rem;
    }

    .modalContent .usr-info.org {
      width: 20rem;
    }

    .modalContent .usr-info.address {
      width: 9rem;
    }

    .modalContent .usr-info.time {
      width: 10rem;
    }

    .modalContent .usr-info.pc {
      background: url(../../prod/static/pc.png) center center no-repeat;
      width: 80px;
    }

    .modalContent .usr-info.mobile {
      background: url(../../prod/static/mobile.png) center center no-repeat;
      width: 80px;
    }
    `,
      LiEMSToChatScript: `
    function tochat(usrId) {
      var layim = lui.top.getLayim();
      layim.open(layim.KEY_CHART, usrId);
    }
    `,
      LuculentCommonMenuStyle: `
    /* 朗坤商业论坛 */
    .lu-cont-wrap > .lu-cont > .lu-cont3 > .lu-cont3-right {
      display: none !important;
    }

    /* 我的待办 */
    .lu-cont4 {
    	height: 340px;
    }

    /* 我的待办左侧图片 */
    .lu-cont-wrap > .lu-cont > .lu-cont4 > .lu-cont4-left {
      display: none !important;
    }

    /* 我的待办右侧内容 */
    .lu-cont4-right,
    #_newTask {
      width: 100%;
      height: 300px;
    }

    .header {
      background: url('http://168.168.12.8/Liems/home/img/per.jpg') repeat-x !important;
    }
    .lu-cont3,
    .lu-cont3-left2 {
      height: unset !important;
    }

    .lu-cont3-left {
      border-right: unset !important;
      height: unset !important;
      width: 100% !important;
    }

    .commonMenu-container {
      line-height: 1.75rem;
      padding: 0px 5px;
      margin: 5px 0;
      display: flex;
    }

    .commonMenu-container:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }

    .commonMenu-title-container {
      margin-right: 1rem;
      flex: 0 0 4rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .commonMenu-item-container {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      gap: 0 10px;
    }

    a.commonMenu-item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #414141;
      min-width: 8rem;
      text-align: center;
      transition: all 0.3s ease;
      }

    a.commonMenu-item:hover {
      background-color: #4f81f1;
      color: #fff;
      transform: translateY(-2px);
    }
    `,
      LuculentExamStyle: `
    .btn-copy-exam {
      margin-left: 8px;
      height: 40px;
      line-height: 40px;
      border: 1px #ccc solid;
      border-radius: 5px;
      color: #3464e0;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      }

    .btn-copy-exam:hover {
      color: #fff;
      background-color: #3464e0;
    }

    .tm-content {
      cursor: pointer;
    }

    .tm-content:hover {
      background-color: #f5f5f5;
      color: #3464e0;
    }`,
      LuculentTaskStyle: `
    /* 我的待办 */
    .daiban2 {
      height: 262px;
      width: 100%;
      margin: unset;
    }

    .daiban_line {
      display: flex;
      padding-top: 5px;
      padding-bottom: 2px;
      border-bottom: 1px solid #eee;
      transition: background-color 0.3s;
      width: 74rem;
    }

    .diaban_txt {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
    }

    .daiban_tit {
      flex: 1;
      min-width: 0;
      width: 70rem;
    }

    .daiban_tit span {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .daiban_tit span:hover {
      color: #3498db;
      text-decoration: underline;
    }

    .diaban_date {
      flex-shrink: 0;
      text-align: right;
      min-width: 6rem;
    }

    /* 我的待办-页码 */
    .daiban2 > div:last-child {
      bottom: 0px !important;
    }

    .activePage,
    .inactivePage {
      padding-left: 8px !important;
      padding-right: 8px !important;
      margin-right: 8px !important;
    }
    `,
    },
    LIEMS_SELECTOR: {
      query: {
        menu: "#guide__menu_toggle > .menu-toggle-btn",
        input: "#guide__menu_search input.ivu-input.ivu-input-large",
      },
      exit: {
        close0: ".ivu-modal-close > i.ivu-icon.ivu-icon-ios-close",
        close1: "i.menu-page-close.ivu-icon.ivu-icon-ios-close",
        close2: "i.menu-panel-close.ivu-icon.ivu-icon-ios-close",
      },
      tabs: {
        closeActive:
          "div.ivu-tabs-nav > div.ivu-tabs-tab.ivu-tabs-tab-active.ivu-tabs-tab-focused > i.ivu-icon.ivu-icon-ios-close.ivu-tabs-close",
        tab: ".ivu-tabs-nav > .ivu-tabs-tab",
        tabActive: "ivu-tabs-tab-focused",
        close: "i.ivu-icon.ivu-icon-ios-close.ivu-tabs-close",
      },
      login: {
        name: 'input.ivu-input.ivu-input-large[type="text"][autocomplete="hidden"]',
        password: 'input.ivu-input.ivu-input-large[type="text"][autocomplete="new-password"]',
        unlock: "div.r16.ui-bg-main",
        login: 'button.ivu-btn.ivu-btn-primary.c-button.focus.login-btn[type="button"]',
      },
      tabsItem: "ul.mu-tabs-contextmenu > li.mu-tabs-item",
    },
  };

  // ====================== 2. 全局变量 ======================
  // 默认登录信息
  let defaultUsername, defaultPassword;

  // 在线用户数据
  let onlineUsersData = [];

  // ====================== 3. 工具模块 ======================
  const Toolkit = {
    /**
     * 为页面添加样式代码
     * @param {String} style 样式内容
     * @param {String} styleId 样式元素ID
     * @returns
     */
    addStyle: function (style, styleId) {
      if (styleId) {
        let styleNode = document.getElementById(styleId);
        if (styleNode) {
          return;
        }
        styleNode = document.createElement("style");
        styleNode.id = styleId;
        styleNode.textContent = style;
        (document.head || document.documentElement).appendChild(styleNode);
        return;
      }

      typeof GM_addStyle !== "undefined" ?
        GM_addStyle(style)
      : (document.head || document.documentElement).appendChild(
          Object.assign(document.createElement("style"), { textContent: style })
        );
    },

    /**
     * 向页面添加JavaScript脚本
     * @param {string} scriptStr 脚本内容
     */
    addScript: function (scriptStr) {
      const scriptEle = document.createElement("script");
      scriptEle.innerHTML = scriptStr;
      (document.head || document.documentElement).appendChild(scriptEle);
    },

    /**
     * 将指定的文本内容复制到剪贴板
     *
     * @param {string} str - 要复制的文本内容
     */
    copyText: function (str) {
      const textArea = document.createElement("textarea");
      document.body.appendChild(textArea);
      textArea.value = str;
      textArea.select();

      // 执行复制操作
      document.execCommand("copy");

      // 复制完成后，移除临时添加的文本区域元素
      document.body.removeChild(textArea);
    },

    /**
     * 判断给定的字符串是否为一个有效的数据库表名
     *
     * 表名应以字母开头，后跟最多 15 个字母、数字或下划线字符，并以特定的三个字符结尾：AMT、DAT、DGR、EMP、HIS、INK、LIN、LNK、LOG、MST、NTS、RAM、STD、TMP、TRN 或 TYP
     *
     * @param {string} str - 需要检查的字符串
     * @return {boolean} 如果字符串是一个有效的表名，返回 true，否则返回 false
     */
    isTableName: function (str) {
      const regex =
        /^[a-zA-Z][a-zA-Z0-9_]{0,15}(AMT|DAT|DGR|EMP|HIS|INK|LIN|LNK|LOG|MST|NTS|RAM|STD|TMP|TRN|TYP)$/;
      return regex.test(str);
    },

    /**
     * 等待页面中出现指定元素
     * @param {string} selector - CSS选择器
     * @param {function} callback - 找到元素后的回调函数
     * @param {Object} [options] - 配置选项
     * @param {number} [options.maxAttempts=200] - 最大尝试次数
     * @param {number} [options.interval=100] - 检查间隔(毫秒)
     * @param {number} [options.timeout] - 超时时间(毫秒)
     * @param {boolean} [options.multiple=false] - 是否返回多个元素
     * @param {boolean} [options.useMutationObserver=true] - 是否使用MutationObserver监听DOM变化
     * @param {Element} [options.root=document] - 监听的根元素
     */
    waitForElement: function (selector, callback, options) {
      // 合并默认选项
      const settings = {
        maxAttempts: 200,
        interval: 100,
        multiple: false,
        useMutationObserver: true,
        root: document,
        ...options,
      };

      // 计算超时时间（如果提供了timeout则优先使用）
      const maxTime = settings.timeout || settings.maxAttempts * settings.interval;

      let attempts = 0;
      const startTime = Date.now();
      let observer = null;
      let intervalId = null;

      // 检查元素函数
      const checkElement = () => {
        const element =
          settings.multiple ?
            settings.root.querySelectorAll(selector)
          : settings.root.querySelector(selector);

        const found = settings.multiple ? element.length > 0 : element !== null;

        return { element, found };
      };

      // 停止所有观察
      const stopObserving = () => {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      };

      // 成功找到元素
      const onSuccess = element => {
        stopObserving();
        callback(element);
      };

      // 元素查找失败
      const onFailure = () => {
        stopObserving();
        callback(null);
      };

      // 立即尝试一次
      const { element: immediateElement, found: immediateFound } = checkElement();
      if (immediateFound) {
        onSuccess(immediateElement);
        return;
      }

      // 设置MutationObserver监听DOM变化
      if (settings.useMutationObserver && "MutationObserver" in window) {
        observer = new MutationObserver(() => {
          const { element, found } = checkElement();
          if (found) {
            onSuccess(element);
          }
        });

        observer.observe(settings.root, {
          childList: true,
          subtree: true,
        });
      }

      // 设置定时器定期检查（备用方案）
      intervalId = setInterval(() => {
        attempts++;
        const { element, found } = checkElement();
        const elapsed = Date.now() - startTime;

        // 如果找到元素
        if (found) {
          onSuccess(element);
          return;
        }

        // 如果超时或达到最大尝试次数
        if (elapsed >= maxTime || attempts >= settings.maxAttempts) {
          onFailure();
        }
      }, settings.interval);
    },

    /**
     * Log the title and version at the front of the console.
     * @param {String} title title.
     * @param {String} version script version.
     */
    logInfo: function (title, version) {
      console.clear();
      const titleStyle = "color:white;background-color:#606060";
      const versionStyle = "color:white;background-color:#1475b2";
      const logTitle = " " + title + " ";
      const logVersion = " " + version + " ";
      console.log("%c" + logTitle + "%c" + logVersion, titleStyle, versionStyle);
    },

    /**
     * Initialize data for easy access to the "Storage" tab in the editor.
     */
    initData: function () {
      const settings = GM_getValue("settings");
      if (
        !GM_listValues().length ||
        !settings ||
        !settings.projects ||
        settings.projects.length === 0 ||
        !settings.projects[0].addresses ||
        settings.projects[0].addresses.length === 0 ||
        settings.projects[0].addresses[0] === ""
      ) {
        let overlay = window.top.document.querySelector(".liems-overlay");
        if (!overlay) {
          const settingsDialog = new SettingsModule.settingsDialog();
          settingsDialog.saveSettings();
          alert("这是您第一次使用LiEMS Helper，请先设置！");
          settingsDialog.open();
        }
      }
    },

    /**
     * 设置输入框的值，并模拟用户输入事件
     * 这个函数的目的是为了模拟用户在页面上的交互行为，当设置输入框的值时，它会触发输入事件（input）和更改事件（change）
     * @param {HTMLInputElement} inputDom - 要设置值的输入框元素
     * @param {string} value - 要设置的新值
     * 请注意，这个函数只能用于 `<input>` 元素，并且元素需要有 `_valueTracker` 属性才能正确地跟踪值的更改
     */
    setValue: function (inputDom, value) {
      inputDom.value = value;
      let event = new Event("input", { bubbles: true });
      event.simulated = true;
      let tracker = inputDom._valueTracker;
      if (tracker) {
        tracker.setValue(value);
      }
      inputDom.dispatchEvent(event);

      inputDom.dispatchEvent(
        new Event("change", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    },

    /**
     * 获取目标文档对象。
     * 如果当前窗口在 iframe 中，则直接返回当前文档；
     * 否则尝试获取顶层窗口中活动程序对应的 iframe 的文档对象，若获取失败则返回当前文档。
     * @returns {Document} 目标文档对象。
     */
    getTargetDocument: function () {
      // 在iframe中直接使用当前文档
      if (window !== window.top) return document;

      try {
        // 使用可选链操作避免空指针异常
        const pgmId = lui.page.getActiveProgramInfo().pgmId;
        const iframe = window.top.document.querySelector(`iframe[pgmid="${pgmId}"]`);
        return iframe?.contentWindow?.document || document;
      } catch (e) {
        console.warn("Iframe document access error:", e);
        return document;
      }
    },

    /**
     * Get active tab class name.
     * @returns {String} active tab class name.
     */
    getClassNameOfActiveTab: function () {
      const activeTab = window.top.document.querySelector(".ivu-tabs-tab.ivu-tabs-tab-active");
      if (activeTab) {
        for (let className of activeTab.classList) {
          if (!className.includes("ivu-tabs")) return className;
        }
      }
    },

    /**
     * Active tab by class name.
     * @param {String} className The class name of the tab to be activated.
     */
    activeTabByClassName: function (className) {
      const tabs = window.top.document.querySelectorAll(".ivu-tabs-nav > .ivu-tabs-tab");
      for (let tab of tabs) {
        if (tab.classList.contains(className)) {
          tab.click();
          break;
        }
      }
    },
  };

  // ====================== 4. 在线用户模块 ======================
  const OnlineUsersModule = {
    /**
     * 根据LiEMS版本处理在线用户
     */
    handleOnlineUsers: function () {
      OnlineUsersModule.checkLiEMSVersion() ?
        Toolkit.waitForElement("div.pane-col > div.banner-left", OnlineUsersModule.addOnlineUsers)
      : Toolkit.waitForElement(
          "div.banner-left > div.fl > div.info",
          OnlineUsersModule.sortOnlineList
        );
    },

    /**
     * 检查当前LiEMS版本是否大于指定的目标版本
     * @returns {boolean} 如果当前版本大于目标版本返回true，否则返回false
     */
    checkLiEMSVersion: function () {
      let versionStrArr = lui.version.split(".");
      let currentVersion = versionStrArr[versionStrArr.length - 1].substring(0, 8);
      return currentVersion > Constants.LIEMS_VERSION_THRESHOLD;
    },

    /**
     * 添加在线用户功能
     * @param {HTMLElement} parentEle - 父元素
     */
    addOnlineUsers: function (parentEle) {
      // 添加tochat函数脚本
      if (!window.tochat) {
        Toolkit.addScript(Constants.SNIPPETS.LiEMSToChatScript);
      }

      // 创建在线用户链接
      let onlineUsers = document.createElement("a");
      onlineUsers.className = "info";
      onlineUsers.style.marginLeft = "1rem";
      parentEle.appendChild(onlineUsers);

      // 初始更新并设置定时更新
      OnlineUsersModule.updateOnlineUsersNum(onlineUsers);
      const updateInterval = setInterval(
        () => OnlineUsersModule.updateOnlineUsersNum(onlineUsers),
        3000
      );

      // 添加点击事件监听
      onlineUsers.addEventListener("click", OnlineUsersModule.handleOnlineUsersClick);
    },

    /**
     * 处理在线用户点击事件
     * @param {Event} e - 事件对象
     */
    handleOnlineUsersClick: async function (e) {
      let modal = document.getElementById("onlineUsersModal");

      if (modal) {
        // 切换显示/隐藏
        modal.style.display = modal.style.display === "none" ? "flex" : "none";
        if (modal.style.display === "flex") {
          await OnlineUsersModule.updateOnlineUsersModalContent(modal);
        }
      } else {
        // 创建新模态框
        modal = OnlineUsersModule.createOnlineUsersModal();
        document.body.appendChild(modal);
        await OnlineUsersModule.updateOnlineUsersModalContent(modal);
      }
    },

    /**
     * 渲染用户表格
     * @param {HTMLElement} tbody - 表格tbody元素
     * @param {Array} data - 用户数据
     */
    renderUserTable: function (tbody, data) {
      if (!data || data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">暂无在线用户</td></tr>';
        return;
      }

      const fragment = document.createDocumentFragment();

      data.forEach(user => {
        const row = document.createElement("tr");

        // 用户名单元格
        const nameCell = OnlineUsersModule.createUserCell(
          user.unam,
          `name ${user.className}`,
          user.usrId
        );
        row.appendChild(nameCell);

        // 公司名单元格
        const orgCell = OnlineUsersModule.createTextCell(user.orgName, "org");
        row.appendChild(orgCell);

        // IP地址单元格
        const ipCell = OnlineUsersModule.createTextCell(user.lgnIp, "address");
        row.appendChild(ipCell);

        // 时间单元格
        const timeCell = OnlineUsersModule.createTextCell(user.lgnTime, "time");
        row.appendChild(timeCell);

        // 终端类型单元格
        const terminalCell = document.createElement("td");
        terminalCell.className = `usr-info ${user.lgnType}`;
        row.appendChild(terminalCell);

        fragment.appendChild(row);
      });

      tbody.innerHTML = "";
      tbody.appendChild(fragment);
    },

    /**
     * 创建用户单元格
     * @param {string} text - 单元格文本
     * @param {string} className - CSS类名
     * @param {string} userId - 用户ID
     * @returns {HTMLElement} 单元格元素
     */
    createUserCell: function (text, className, userId) {
      const cell = document.createElement("td");
      cell.title = text;
      cell.className = `usr-info ${className}`;
      cell.textContent = text;

      if (className.includes("tochat")) {
        cell.style.cursor = "pointer";
        cell.addEventListener("click", () => tochat(userId));
      }

      return cell;
    },

    /**
     * 创建文本单元格
     * @param {string} text - 单元格文本
     * @param {string} className - CSS类名
     * @returns {HTMLElement} 单元格元素
     */
    createTextCell: function (text, className) {
      const cell = document.createElement("td");
      cell.title = text;
      cell.className = `usr-info ${className}`;
      cell.textContent = text;
      return cell;
    },

    /**
     * 创建模态框元素
     * @returns {HTMLElement} 模态框元素
     */
    createOnlineUsersModal: function () {
      const modal = document.createElement("div");
      modal.id = "onlineUsersModal";
      modal.innerHTML = Constants.SNIPPETS.LiEMSOnlineUsersHtml;

      // 添加样式
      Toolkit.addStyle(Constants.SNIPPETS.LiEMSOnlineUsersStyle);

      // 添加关闭事件
      modal.querySelector(".modalClose").addEventListener("click", () => {
        modal.style.display = "none";
      });

      return modal;
    },

    /**
     * 更新模态框内容
     * @param {HTMLElement} modal - 模态框元素
     */
    updateOnlineUsersModalContent: async function (modal) {
      const tbody = modal.querySelector("tbody");
      const width = modal.querySelector("thead").clientWidth;
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; width: ${width}px">加载中...</td></tr>`;

      try {
        const data = await OnlineUsersModule.getOnlineUsers();
        OnlineUsersModule.renderUserTable(tbody, data);
      } catch (error) {
        console.error("Failed to load online users:", error);
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: red;">加载失败: ${error.message}</td></tr>`;
      }
    },

    /**
     * 更新在线用户数量显示
     * @param {Element} element - 显示元素
     */
    updateOnlineUsersNum: function (element) {
      const params = {
        pageSize: 100,
        pageIndex: 1,
      };

      lui.ajax(lui.url.userOnlineList, params, function (result) {
        try {
          result = lui.utils.unzip(result);
          const res = result.data.callbackData;
          const data = res.list || [];

          // 对数据按usrId进行去重
          onlineUsersData = Array.from(new Map(data.map(user => [user.usrId, user])).values()).map(
            user => ({
              usrOnline: user.unam,
              usrId: user.usrId,
              className: user.usrId == lui.session.getUserId() ? "" : "tochat",
              orgName: user.orgName,
              usrChartId: user.usrChartId,
            })
          );

          let usrOnlineNum = onlineUsersData.length || 0;
          element.textContent = `在线人数${usrOnlineNum}人`;
        } catch (error) {
          console.error("Error updating online users count:", error);
          element.textContent = "";
        }
      });
    },

    /**
     * 获取在线用户详细信息
     * @returns {Promise<Array>} 用户数据数组
     */
    getOnlineUsers: async function () {
      if (!onlineUsersData.length) return [];

      try {
        const requests = onlineUsersData.map(user => OnlineUsersModule.createUserRequest(user));

        const results = await Promise.allSettled(requests);

        // 处理成功和失败的结果
        const successfulResults = results
          .filter(result => result.status === "fulfilled")
          .map(result => result.value);
        const errorResults = results
          .filter(result => result.status === "rejected")
          .map(result => result.reason.message || result.reason);

        if (errorResults.length) {
          console.warn(
            `Failed to fetch data for ${errorResults.length} users: ${errorResults.join(", ")}`
          );
        }

        // 按登录时间降序排列
        return successfulResults.sort((a, b) => new Date(b.lgnTime) - new Date(a.lgnTime));
      } catch (error) {
        console.error("Error fetching online users:", error);
        return [];
      }
    },

    /**
     * 创建用户请求
     * @param {Object} user - 用户对象
     * @returns {Promise} 请求Promise
     */
    createUserRequest: function (user) {
      return new Promise((resolve, reject) => {
        lui.ajax(lui.url.usrOnlineInfo, { usrChartId: user.usrChartId }, res => {
          res ?
            (res.lgnIp === "0:0:0:0:0:0:0:1" && (res.lgnIp = window.location.hostname),
            (res.lgnType = res.lgnType.toLowerCase()),
            (res.className = user.className),
            resolve(res))
          : reject(user.usrOnline);
        });
      });
    },

    /**
     * 对用户在线列表进行排序
     * 此函数会按照用户在线时间降序排列用户列表。
     * 如果在指定时间内（10秒）无法找到用户列表，函数将不会执行任何操作。
     * 适用版本：LiEMS8.0 ~ LiEMS8.1.20241223
     * @param {HTMLElement} onlineInfo - 用户在线信息的 DOM 元素
     */
    sortOnlineList: function (onlineInfo) {
      if (!onlineInfo) return;

      onlineInfo.addEventListener("click", function (e) {
        const maxAttempts = 100;
        const attemptInterval = 100;
        const processDelay = 1000;

        let attempts = 0;

        const intervalId = setInterval(() => {
          attempts++;

          const onlineElement = document.querySelector(
            "div.banner-online-list > div.c-scrollbar-wrap > div.c-scrollbar-view"
          );
          if (onlineElement) {
            clearInterval(intervalId);

            setTimeout(() => {
              OnlineUsersModule.processOnlineList(onlineElement);
            }, processDelay);

            return;
          }

          if (attempts >= maxAttempts) {
            clearInterval(intervalId);
            console.warn("Failed to find online list element after maximum attempts");
          }
        }, attemptInterval);
      });
    },

    /**
     * 处理在线列表排序
     * @param {HTMLElement} onlineElement - 在线列表元素
     */
    processOnlineList: function (onlineElement) {
      const listItems = Array.from(onlineElement.children);
      if (listItems.length === 0) return;

      // 提取时间信息并排序
      const itemsWithTime = OnlineUsersModule.extractTimeInfo(listItems);
      if (itemsWithTime.length === 0) return;

      // 按时间降序排序
      itemsWithTime.sort((a, b) => new Date(b.time) - new Date(a.time));

      // 重新排列元素
      OnlineUsersModule.reorderListItems(onlineElement, itemsWithTime);
    },

    /**
     * 从列表项中提取时间信息
     * @param {Array<HTMLElement>} listItems - 列表项数组
     * @returns {Array} 包含时间和索引的对象数组
     */
    extractTimeInfo: function (listItems) {
      const result = [];

      for (let i = 0; i < listItems.length; i++) {
        const timeElement = listItems[i].querySelector(".banner-online-td.time");
        if (!timeElement) continue;

        result.push({
          index: i,
          time: timeElement.textContent.trim(),
          element: listItems[i],
        });
      }

      return result;
    },

    /**
     * 重新排序列表项
     * @param {HTMLElement} container - 列表容器
     * @param {Array} sortedItems - 已排序的项数组
     */
    reorderListItems: function (container, sortedItems) {
      // 使用文档片段提高性能
      const fragment = document.createDocumentFragment();

      // 按排序顺序添加元素
      sortedItems.forEach(item => {
        fragment.appendChild(item.element);
      });

      // 清空容器并添加排序后的元素
      container.innerHTML = "";
      container.appendChild(fragment);
    },
  };

  // ====================== 5. 快捷键模块 ======================
  const ShortcutModule = {
    initHotkey: function () {
      document.onkeydown = function (e) {
        var keyCode = e.keyCode || e.which || e.charCode;
        var ctrlKey = e.ctrlKey || e.metaKey;
        var altKey = e.altKey || e.code === "AltLeft" || e.code === "AltRight" || e.keyCode === 18;
        var shiftKey = e.shiftKey;

        // Alt + F1
        // 打开油猴菜单“快捷键”
        if (keyCode == 112 && !ctrlKey && altKey && !shiftKey) {
          SettingsModule.toggleShortcut();
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Alt + F2
        // 打开油猴菜单“设置”
        if (keyCode == 113 && !ctrlKey && altKey && !shiftKey) {
          SettingsModule.toggleSettings();
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Alt + Shift + F
        // 打开菜单，并选中输入框中内容
        if (keyCode == 70 && !ctrlKey && altKey && shiftKey) {
          let menu = window.top.document.querySelector(Constants.LIEMS_SELECTOR.query.menu);
          if (menu) {
            menu.click();
            setTimeout(() => {
              let inputs = window.top.document.querySelectorAll(
                Constants.LIEMS_SELECTOR.query.input
              );
              for (let i = 0; i < inputs.length; i++) {
                const placeholder = inputs[i].getAttribute("placeholder");
                if ("请输入程序名称或程序号" == placeholder) {
                  inputs[i].click();
                  inputs[i].focus();
                  inputs[i].select();
                  e.preventDefault();
                  e.stopPropagation();
                  break;
                }
              }
            }, 500);
          }
        }

        // Esc
        // 关闭弹窗
        // 打开/关闭菜单界面
        // 关闭快捷键帮助页面
        if (keyCode == 27 && !ctrlKey && !altKey && !shiftKey) {
          // 关闭弹窗
          let selector0 = Constants.LIEMS_SELECTOR.exit.close0;
          let exit =
            document.querySelector(selector0) || window.top.document.querySelector(selector0);
          if (exit && exit.parentElement && exit.parentElement.style.display != "none") {
            exit.click();
            e.preventDefault();
            e.stopPropagation();
            return;
          }

          // 关闭设置弹窗
          let overlay = window.top.document.querySelector(".liems-overlay");
          if (overlay) {
            overlay.remove();
            overlay = null;
            e.preventDefault();
            e.stopPropagation();
            return;
          }

          // 关闭在线用户列表页面
          exit = document.getElementById("onlineUsersModal");
          if (exit && exit.style.display != "none") {
            exit.style.display = "none";
            e.preventDefault();
            e.stopPropagation();
            return;
          }

          // 打开/关闭菜单界面
          let selector1 = Constants.LIEMS_SELECTOR.exit.close1;
          let selector2 = Constants.LIEMS_SELECTOR.exit.close2;
          exit =
            window.top.document.querySelector(selector1) ||
            window.top.document.querySelector(selector2);
          if (exit) {
            e.preventDefault();
            e.stopPropagation();
            exit.click();
          }
        }

        // Alt + Shift + W
        // 关闭当前标签
        if (keyCode == 87 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          lui.page.close();
          return;
        }

        // Alt + Shift + O
        // 关闭其他标签
        if (keyCode == 79 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let tabs = window.top.document.querySelectorAll(".ivu-tabs-nav > .ivu-tabs-tab");
          for (let i = tabs.length - 1; i >= 0; i--) {
            if (tabs[i].className.indexOf(Constants.LIEMS_SELECTOR.tabs.tabActive) == -1) {
              const closeBtn = tabs[i].querySelector(Constants.LIEMS_SELECTOR.tabs.close);
              closeBtn?.click();
            }
          }
          return;
        }

        // Alt + Shift + E
        // 关闭左侧标签
        if (keyCode == 69 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let tabs = window.top.document.querySelectorAll(".ivu-tabs-nav > .ivu-tabs-tab");
          let flag = false;
          for (let i = tabs.length - 1; i >= 0; i--) {
            if (tabs[i].className.includes(Constants.LIEMS_SELECTOR.tabs.tabActive)) {
              flag = true;
            } else if (flag) {
              const closeBtn = tabs[i].querySelector(Constants.LIEMS_SELECTOR.tabs.close);
              closeBtn?.click();
            }
          }
          return;
        }

        // Alt + Shift + R
        // 关闭右侧标签
        if (keyCode == 82 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let tabs = window.top.document.querySelectorAll(".ivu-tabs-nav > .ivu-tabs-tab");
          let flag = true;
          for (let i = tabs.length - 1; i >= 0; i--) {
            if (tabs[i].className.includes(Constants.LIEMS_SELECTOR.tabs.tabActive)) {
              flag = false;
            } else if (flag) {
              const closeBtn = tabs[i].querySelector(Constants.LIEMS_SELECTOR.tabs.close);
              closeBtn?.click();
            }
          }
          return;
        }

        // Alt + Shift + Q
        // 关闭全部标签
        if (keyCode == 81 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let tabs = window.top.document.querySelectorAll(".ivu-tabs-nav > .ivu-tabs-tab");
          for (let i = tabs.length - 1; i >= 0; i--) {
            const closeBtn = tabs[i].querySelector(Constants.LIEMS_SELECTOR.tabs.close);
            closeBtn?.click();
          }
          return;
        }

        // F4
        // 刷新当前标签
        if (keyCode == 115 && !ctrlKey && !altKey && !shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          if (window === window.top) {
            const activeClassName = Toolkit.getClassNameOfActiveTab();
            if (activeClassName) {
              const tabId = activeClassName.replace("tab-", "");
              const iframe = document.querySelector(`iframe[tabid=${tabId}]`);
              iframe?.contentDocument.location.reload();
            }
          } else {
            window.document.location.reload();
          }
          return;
        }

        // Shift + F4
        // 强制刷新当前标签（先刷新系统XML缓存）
        if (keyCode == 115 && !ctrlKey && !altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          const activeClassName = Toolkit.getClassNameOfActiveTab();
          if (!activeClassName) {
            return;
          }
          const cachePgmId = "B7STS00423";
          lui.page.open(cachePgmId);
          let loaded;
          let cacheIframe;
          let selectBtn;
          let closeCache;
          let i = 0;
          let interval = setInterval(() => {
            i++;
            if (loaded || i > 250) {
              clearInterval(interval);
              if (loaded) {
                selectBtn.click();
                setTimeout(() => {
                  const selectAllBtn = cacheIframe.contentWindow.document.querySelectorAll(
                    "ul.ivu-dropdown-menu > li.ivu-dropdown-item"
                  )[2];
                  if (selectAllBtn) {
                    selectAllBtn.click();
                    setTimeout(() => {
                      var cacheNoArr = cacheIframe.contentWindow.lui.grid
                        .get("DKCACHEMST")
                        .getStandbyPkArr();
                      if (!lui.utils.isEmpty(cacheNoArr)) {
                        cacheIframe.contentWindow.lui.service("refreshCache", { no: cacheNoArr });
                        closeCache = true;
                      }
                    }, 1500);
                    setTimeout(() => {
                      if (closeCache) {
                        cacheIframe.contentWindow.lui.page.close();
                      }

                      const tabId = activeClassName.replace("tab-", "");
                      const iframe = document.querySelector(`iframe[tabid=${tabId}]`);
                      if (iframe) {
                        iframe.contentDocument.location.reload();
                      }
                      Toolkit.activeTabByClassName(activeClassName);
                    }, 3500);
                  }
                }, 500);
              } else {
                window.top.lui.message.warning("“缓存管理”程序启动失败，请重试！");
                console.log("加载超时！");
              }
            } else {
              cacheIframe = window.top.document.querySelector(`iframe[pgmid=${cachePgmId}]`);
              if (cacheIframe && cacheIframe.contentWindow) {
                selectBtn = cacheIframe.contentWindow.document.querySelector(
                  "button.c-gfoot-check-item"
                );
                if (selectBtn) {
                  loaded = true;
                }
              }
            }
          }, 100);
          return;
        }

        // F8
        // 获取当前标签的HTML地址
        if (keyCode == 119 && !ctrlKey && !altKey && !shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let url = lui.page.getActiveProgramInfo().url.replaceAll("/", "\\");
          lui.message.success("HTML路径：" + url);
          lui.utils.copyToClipBoard(url);
          return;
        }

        // Ctrl + F8
        // 获取当前标签的程序号
        if (keyCode == 119 && ctrlKey && !altKey && !shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let pgmId = lui.page.getActiveProgramInfo().pgmId;
          lui.message.success("程序号：" + pgmId);
          lui.utils.copyToClipBoard(pgmId);
          return;
        }

        // Alt + F8
        // 获取当前标签的XML路径
        if (keyCode == 119 && !ctrlKey && altKey && !shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let url = lui.page
            .getActiveProgramInfo()
            .url.replaceAll("/", "\\")
            .replace(".html", ".xml");
          lui.message.success("XML路径：" + url);
          lui.utils.copyToClipBoard(url);
          return;
        }

        // Shift + F8
        // 获取当前标签的JS路径，若与HTML不在同一目录，则获取的路径无效。
        if (keyCode == 119 && !ctrlKey && !altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let url = lui.page
            .getActiveProgramInfo()
            .url.replaceAll("/", "\\")
            .replace(".html", ".js");
          lui.message.success("JS路径：" + url);
          lui.utils.copyToClipBoard(url);
          return;
        }

        // Alt + T
        // 获取当前标签的数据表名。
        if (keyCode == 84 && !ctrlKey && altKey && !shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          if (window === window.top || typeof lui === "undefined" || !lui || lui?.isFrameworkTop) {
            return;
          }

          const model = lui?.page?.getViewModel()?.VUEMODEL;
          const table = model?.baseTableNames[0] || model?.gridTableNames[0];
          const gridTable = model?.gridTableNames[0];
          if (!table) {
            return;
          }
          const tableSet = new Set([table]);
          if (gridTable && gridTable !== table) {
            tableSet.add(gridTable);
          }

          const tableNames = Array.from(tableSet);
          lui.message.success(`数据表名：${tableNames.join("、")}`);
          lui.utils.copyToClipBoard(table);
          return;
        }

        // Alt + Shift + T
        // 获取当前标签的数据表名，并在数据字典中打开。
        if (keyCode == 84 && !ctrlKey && altKey && shiftKey) {
          // 阻塞浏览器的默认事件
          e.preventDefault();
          e.stopPropagation();
          if (window === window.top || typeof lui === "undefined" || !lui || lui?.isFrameworkTop) {
            return;
          }

          const model = lui?.page?.getViewModel()?.VUEMODEL;
          const table = model?.baseTableNames[0] || model?.gridTableNames[0];
          if (!table) {
            return;
          }
          lui.utils.copyToClipBoard(table);
          lui.page.open("B7STM00403", table);
          return;
        }

        // Ctrl + Alt + Shift + T
        // 输入数据表名，并在数据字典中打开。
        if (keyCode == 84 && ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let userInput = prompt("请输入数据库表名：");
          if (userInput == null) {
            return;
          }
          const table = userInput.trim().toUpperCase();
          if (Toolkit.isTableName(table)) {
            lui.utils.copyToClipBoard(table);
            lui.page.open("B7STM00403", table);
          } else {
            lui.message.warning("请输入正确的数据库表名！");
          }
          return;
        }

        // Ctrl + Alt + Shift + ←
        // 第一条数据。
        if (keyCode == 37 && ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let doc = Toolkit.getTargetDocument();
          let btn = doc.querySelector("i.ivu-icon-ios-skip-backward");
          if (btn && !btn.parentElement.disabled) {
            btn.click();
          }
          return;
        }
        // Alt + Shift + ←
        // 前一条数据，前一页。
        if (keyCode == 37 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          // 按钮配置清单（按优先级排序）
          const BUTTON_CONFIGS = [
            {
              selector: "i.ivu-icon-ios-arrow-back",
              disabledCheck: btn => btn.parentElement.disabled,
            },
            {
              selector: "i.lui-pre",
              disabledCheck: btn => btn.parentElement.disabled,
            },
            {
              selector: "li.v-page-prev.primary-button",
              disabledCheck: btn => btn.classList.contains("v-page-disabled"),
            },
          ];

          const targetDoc = Toolkit.getTargetDocument();

          // 顺序查找可操作按钮
          for (const { selector, disabledCheck } of BUTTON_CONFIGS) {
            const btn = targetDoc.querySelector(selector);
            if (btn && !disabledCheck(btn)) {
              btn.click();
              break; // 找到第一个可用按钮后终止查找
            }
          }
          return;
        }

        // Alt + Shift + →
        // 后一条数据，后一页。
        if (keyCode == 39 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          // 按钮配置清单（按优先级排序）
          const BUTTON_CONFIGS = [
            {
              selector: "i.ivu-icon-ios-arrow-forward",
              disabledCheck: btn => btn.parentElement.disabled,
            },
            {
              selector: "i.lui-next",
              disabledCheck: btn => btn.parentElement.disabled,
            },
            {
              selector: "li.v-page-next.primary-button",
              disabledCheck: btn => btn.classList.contains("v-page-disabled"),
            },
          ];

          const targetDoc = Toolkit.getTargetDocument();

          // 顺序查找可操作按钮
          for (const { selector, disabledCheck } of BUTTON_CONFIGS) {
            const btn = targetDoc.querySelector(selector);
            if (btn && !disabledCheck(btn)) {
              btn.click();
              break; // 找到第一个可用按钮后终止查找
            }
          }
          return;
        }

        // Ctrl + Alt + Shift + →
        // 最后一条数据。
        if (keyCode == 39 && ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let doc = Toolkit.getTargetDocument();
          const btn = doc.querySelector("i.ivu-icon-ios-skip-forward");
          if (btn && !btn.parentElement.disabled) {
            btn.click();
          }
          return;
        }

        // Alt + Shift + ↑
        // 打开列表。
        if (keyCode == 38 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let doc = Toolkit.getTargetDocument();
          const btn = doc.querySelector("i.lui-base-list");
          btn?.click();
          return;
        }

        // Alt + Shift + S
        // 保存页面。
        if (keyCode == 83 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          let doc = Toolkit.getTargetDocument();
          const btn = doc.querySelector(
            '#guide__toolbar > button.ivu-btn.ivu-btn-default.c-button.focus[name="toolbar_Save"]'
          );
          btn?.click();
          return;
        }

        // Alt + Shift + M
        // 自动登录/解锁
        if (keyCode == 77 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          const doc = window !== window.top ? window.top.document : document;
          LiEMSModule.login(doc, defaultUsername, defaultPassword);
          return;
        }

        // Alt + Shift + P
        // 打开小铃铛消息弹窗
        if (keyCode == 80 && !ctrlKey && altKey && shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          const doc = window !== window.top ? window.top.document : document;
          const btn = doc.querySelector("#guide__message_notice > i");
          btn?.click();
          return;
        }
      };
    },
  };

  // ====================== 6. 设置模块 ======================
  const SettingsModule = {
    style: `
    .liems-overlay {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      isolation: isolate;
    }

    .liems-dialog {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 90vw;
      max-width: 960px;
      height: 85vh;
      background: #ffffff;
      border: 1px solid #e2e4e8;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      overflow: hidden;
    }

    .liems-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      border-bottom: 1px solid #e2e4e8;
      background: #ffffff;
    }

    .liems-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .liems-header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: rgba(72, 128, 255, 0.1);
      border-radius: 8px;
    }

    .liems-header-icon svg {
      width: 20px;
      height: 20px;
      color: rgb(72, 128, 255);
    }

    .liems-header h2 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a2e;
      margin: 0;
    }

    .liems-close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: transparent;
      border: none;
      border-radius: 6px;
      color: #6b7280;
      cursor: pointer;
      transition: all 0.2s;
    }

    .liems-close-btn:hover {
      background: #f3f4f6;
      color: #1a1a2e;
    }

    .liems-tabs {
      display: flex;
      gap: 4px;
      padding: 0 24px;
      border-bottom: 1px solid #e2e4e8;
      background: #ffffff;
    }

    .liems-tab {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      color: #6b7280;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .liems-tab:hover {
      color: #1a1a2e;
      border-bottom-color: #e2e4e8;
    }

    .liems-tab.active {
      color: rgb(72, 128, 255);
      border-bottom-color: rgb(72, 128, 255);
    }

    .liems-tab svg {
      width: 16px;
      height: 16px;
    }

    .liems-content {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      background: #fafbfc;
    }

    .liems-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      padding: 16px 24px;
      border-top: 1px solid #e2e4e8;
      background: #ffffff;
    }

    .liems-btn {
      padding: 8px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .liems-btn-secondary {
      background: transparent;
      border: 1px solid #e2e4e8;
      color: #1a1a2e;
    }

    .liems-btn-secondary:hover {
      background: #f3f4f6;
    }

    .liems-btn-primary {
      background: rgb(72, 128, 255);
      border: none;
      color: #ffffff;
    }

    .liems-btn-primary:hover {
      background: rgb(52, 108, 235);
    }

    .liems-section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .liems-section-title {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a2e;
      margin: 0;
    }

    .liems-section-desc {
      font-size: 14px;
      color: #6b7280;
      margin: 4px 0 0;
    }

    .liems-card {
      background: #ffffff;
      border: 1px solid #e2e4e8;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 16px;
    }

    .liems-form-address,
    .liems-form-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .liems-form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;
    }

    .liems-label {
      font-size: 12px;
      font-weight: 500;
      color: #6b7280;
    }

    .liems-label-required::after {
      content: ' *';
      color: #ef4444;
    }

    .liems-input {
      height: 36px;
      padding: 0 12px;
      background: #fafbfc;
      border: 1px solid #e2e4e8;
      border-radius: 6px;
      color: #1a1a2e;
      font-size: 14px;
      outline: none;
      transition: all 0.2s;
    }

    .liems-input:focus {
      border-color: rgb(72, 128, 255);
      box-shadow: 0 0 0 2px rgba(72, 128, 255, 0.2);
    }

    .liems-input::placeholder {
      color: #9ca3af;
    }

    .liems-input.error {
      border-color: #ef4444;
    }

    .liems-input.error:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }

    .liems-input-flex {
      flex: 1;
    }

    .liems-input-sm {
      width: 112px;
    }

    .liems-input-md {
      width: 128px;
    }

    .liems-input-menu {
      width: 160px;
    }

    .liems-add-bottom-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      padding: 16px;
      margin-top: 16px;
      background: transparent;
      border: 2px dashed #e2e4e8;
      border-radius: 8px;
      color: #6b7280;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .liems-add-bottom-btn:hover {
      border-color: rgb(72, 128, 255);
      background: rgba(72, 128, 255, 0.05);
      color: rgb(72, 128, 255);
    }

    .liems-add-bottom-btn svg {
      width: 16px;
      height: 16px;
    }

    .liems-icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: transparent;
      border: 1px solid #e2e4e8;
      border-radius: 6px;
      color: #6b7280;
      cursor: pointer;
      transition: all 0.2s;
    }

    .liems-icon-btn:hover {
      background: #f3f4f6;
      color: #1a1a2e;
    }

    .liems-icon-btn.danger {
      border-color: rgba(239, 68, 68, 0.3);
      color: #ef4444;
    }

    .liems-icon-btn.danger:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .liems-icon-btn svg {
      width: 14px;
      height: 14px;
    }

    .liems-add-link {
      display: flex;
      align-items: center;
      gap: 4px;
      background: transparent;
      border: none;
      color: rgb(72, 128, 255);
      font-size: 12px;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .liems-add-link:hover {
      opacity: 0.8;
    }

    .liems-add-link svg {
      width: 12px;
      height: 12px;
    }

    .liems-delete-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 12px;
      background: transparent;
      border: none;
      border-radius: 6px;
      color: #ef4444;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .liems-delete-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .liems-delete-btn svg {
      width: 14px;
      height: 14px;
    }

    .liems-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .liems-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .liems-backup-card {
      padding: 20px;
    }

    .liems-backup-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .liems-backup-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(72, 128, 255, 0.1);
      border-radius: 8px;
    }

    .liems-backup-icon svg {
      width: 20px;
      height: 20px;
      color: rgb(72, 128, 255);
    }

    .liems-backup-title {
      font-size: 14px;
      font-weight: 500;
      color: #1a1a2e;
      margin: 0;
    }

    .liems-backup-desc {
      font-size: 12px;
      color: #6b7280;
      margin: 2px 0 0;
    }

    .liems-upload-zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      border: 2px dashed #e2e4e8;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    .liems-upload-zone svg {
      width: 32px;
      height: 32px;
      color: #9ca3af;
      margin-bottom: 8px;
    }

    .liems-upload-text {
      font-size: 14px;
      color: #6b7280;
      margin: 0;
    }

    .liems-upload-hint {
      font-size: 12px;
      color: #9ca3af;
      margin: 4px 0 0;
    }

    .liems-full-btn {
      width: 100%;
      padding: 10px 16px;
    }

    .liems-table-container {
      border: 1px solid #e2e4e8;
      border-radius: 8px;
      overflow: hidden;
    }

    .liems-table-scroll {
      max-height: calc(85vh - 320px);
      overflow-y: auto;
    }

    .liems-table {
      width: 100%;
      border-collapse: collapse;
    }

    .liems-table th {
      position: sticky;
      top: 0;
      padding: 12px 16px;
      background: #f3f4f6;
      font-size: 12px;
      font-weight: 600;
      color: #6b7280;
      text-align: center;
      white-space: nowrap;
    }

    .liems-table td {
      padding: 12px 16px;
      font-size: 14px;
      color: #1a1a2e;
      text-align: center;
    }

    .liems-table tbody tr:nth-child(odd) {
      background: #ffffff;
    }

    .liems-table tbody tr:nth-child(even) {
      background: #f9fafb;
    }

    .liems-table tr:hover td {
      background: rgba(72, 128, 255, 0.05);
    }

    .liems-table .shortcut-col {
      white-space: nowrap;
    }

    .liems-table td.muted {
      color: #6b7280;
      text-align: center;
    }

    .liems-kbd {
      display: inline-block;
      padding: 4px 8px;
      background: #f3f4f6;
      border-radius: 4px;
      font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
      color: #1a1a2e;
    }

    .liems-about-center {
      text-align: center;
      margin-bottom: 24px;
    }

    .liems-about-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      background: rgba(72, 128, 255, 0.1);
      border-radius: 16px;
    }

    .liems-about-icon svg {
      width: 32px;
      height: 32px;
      color: rgb(72, 128, 255);
    }

    .liems-about-title {
      font-size: 20px;
      font-weight: 600;
      color: #1a1a2e;
      margin: 0;
    }

    .liems-about-version {
      font-size: 14px;
      color: #6b7280;
      margin: 4px 0 0;
    }

    .liems-about-content {
      max-width: 448px;
      margin: 0 auto;
    }

    .liems-download-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background: #fafbfc;
      border: 1px solid #e2e4e8;
      border-radius: 8px;
      text-decoration: none;
      margin: 0;
      width: calc(50% - 6px);
      transition: background 0.2s;
    }

    .liems-download-link:hover {
      background: #f3f4f6;
    }

    .liems-download-link > svg {
      width: 24px;
    }

    .liems-download-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .liems-download-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(72, 128, 255, 0.1);
      border-radius: 8px;
    }

    .liems-download-icon svg {
      width: 32px;
      height: 32px;
      color: rgb(72, 128, 255);
    }

    .liems-download-name {
      font-size: 14px;
      font-weight: 500;
      color: #1a1a2e;
      margin: 0;
    }

    .liems-download-url {
      font-size: 12px;
      color: #6b7280;
      margin: 2px 0 0;
    }

    .liems-download-arrow {
      width: 16px;
      height: 16px;
      color: #9ca3af;
    }

    .liems-feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .liems-feature-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 8px;
    }

    .liems-feature-dot {
      width: 6px;
      height: 6px;
      margin-top: 6px;
      background: rgb(72, 128, 255);
      border-radius: 50%;
      flex-shrink: 0;
    }

    .liems-footer-note {
      text-align: center;
      font-size: 12px;
      color: #9ca3af;
      margin-top: 16px;
    }

    .liems-hidden {
      display: none !important;
    }

    @media (max-width: 768px) {
      .liems-grid-3 {
        grid-template-columns: 1fr;
      }
      .liems-grid-2 {
        grid-template-columns: 1fr;
      }
    }
  `,
    icons: {
      settings:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
      x: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',
      plus: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>',
      minus:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" /></svg>',
      download:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>',
      upload:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>',
      server:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>',
      database:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
      keyboard:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M8 14h8" /></svg>',
      info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      external:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>',
      scriptcat:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo AAB1MAAA6mAAADqYAAAXcJy6UTwAAAFfUExURQAAABKW2hOX3xKW2xSW2xOW2xGW2hKW3RKW3BKV 2RKV2hKW2BGW2RGW2xCY4BOV2RSW2ACZ/xOX2xCU3BOV2xKb2xGU3BKX3A2U1xGV2hOW3BOY3BKW 2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2hKW2xKW2xKW2xKW2xGW2RKW 2xKW2xKW2xKW2w6W2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW3BKW2xKW2xKW2xKW 2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW3BKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKX3BKW 2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKX 2xGW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2xKW2////3/rAosAAABzdFJOUwAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAmTBkPu/zNbRra/c9vG8f+0XEFs9J5VgGchGtUPvQs6RvbDskR HrorwdnsUhSA6geUcPICO3KgPQU05OtCN+X71cz67UQDOk0vF4w/BglmIGiv3eEGExxhp1/wAAAA AWJLR0R0322obQAAAAd0SU1FB+oBHwoAD9M5ZHoAAAGpSURBVDjLjZP5V0FBFMd7fcmj0q4o9BDx UrSIohBC+6pF2lfRMv//Oc0bj46aTr4/zb3fz/meO3PmtrX9L6EdgEbb3NRqaLNdYOcO3ZjVBujE b1vUATbrmK6DVbCPSw6nC4LeULMNegEup0Mat6MG2CYIcXsmvSI6aabQCdE76XETMmFTAbuPUMlT fopQiV7/lKx0fGpC1/QMYZIDwVmqYECu1TPTXQzonpsndUlUjWJ+rpsBxp4FwtVCj5EBvQjxgRB6 GdCHRYnnS4voq90b4QgPiIShvhuWlnnA8lIDiMZ4QCyqvlM/VlZ5wOoKtSgwYIgnkjwgmYgbBpSE tVQ6wwMy6dSakoB18qfWGZDNJfM8N5/MZRmAwY1NHrC5MQgFGDINY4sHbGHYNMQSgPD2b387TL+G 8g2xs7u3zwP2/QeHDDg6/usShRM25OnZeaF4UWr2ShfFQunyigHXN7d399mHJqL0kL2/sz4+QR2S 6vmlKNdtufjyrLbrmzJCz+XXiqf69lb1VF7LtBz5sYBmM/D+8ZlIfH68A2YzZ0cto2osRi0trHTL +gKCsezpL5goCwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wMS0zMVQxMDowMDoxNSswMDowMFfg uHAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDEtMzFUMTA6MDA6MTUrMDA6MDAmvQDMAAAAKHRF WHRkYXRlOnRpbWVzdGFtcAAyMDI2LTAxLTMxVDEwOjAwOjE1KzAwOjAwcaghEwAAAABJRU5ErkJg gg=="/></svg>',
      greasyfork:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo AAB1MAAA6mAAADqYAAAXcJy6UTwAAAEjUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKE9PT1RUVPz8/GRkZHJycmNjYxMTE97e3jY2NmJiYgEB AZaWlvHx8TQ0NGFhYSYmJmBgYJGRke/v7zAwMJeXl/Ly8jIyMl9fXwYGBru7u/Dw8C8vLyQkJPn5 +f39/V1dXQUFBby8vC4uLgABAZiYmPPz80lJSfX19f///0pKSr29vSwsLKioqOHh4b6+visrK9/f 37+/v8DAwO3t7cLCwhEREQQEBK6uruvr64qKivv7+w8PDzo6Og0NDTg4OCkpKf7+/gICAlxcXDMz MwMDA/f396urq8zMzPr6+vb29qmpqTk5OaCgoKGhoUFBQfOowzMAAAAQdFJOUwANV5nK6vskmvUI ifoj0jDlBb6+AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+oBHwks E/xP7cIAAAF3SURBVDjLhZPpVsIwEIXTJaWlLKOCItQqCiqKiBVF676jIiIg7sv7P4VJG0oTjof7 J+mZr0lm5g5CgSRZUbGmYVWRJTSqiG5AIEOPCOGoGQNOMTMajscTMDHJE5CID+NJDDCVSgsETgb/ Y/o9nZoRCXZGNAGZ2SwlcuIt/jtMAGvOnqfEgkCYXn6xfD4gFoVcaLY6LBWKYC2vrFKixBM6qZ8B a+vlDUoUobJZ3eIAQ0IyWZztcg12dut7+65bPeAIGSl0cQ7tI7COXaoTDlCQ6q3OqX1W2feAcw5Q EfY3zkXdj7t8QTHS2M659OPuVSYMaAEAzjUjCjccgIN949a+u28Swn4IX6HylWlRov4YeqQilL+d IkTzyQrSlAUAspTo1LqDQkmGSPToSzvPfVZq0ixBVtpLptXwm0XaLRLdnHdGm7WbGkZQv0SAl1dm GGo5UY3e2/vH58ByzLQ88fX984vjYduPamh7b3BGFB6c8aM3fnj/H/8/2BpN/zXuyngAAAAldEVY dGRhdGU6Y3JlYXRlADIwMjYtMDEtMzFUMDk6NDQ6MTkrMDA6MDAz6OpiAAAAJXRFWHRkYXRlOm1v ZGlmeQAyMDI2LTAxLTMxVDA5OjQ0OjE5KzAwOjAwQrVS3gAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAA MjAyNi0wMS0zMVQwOTo0NDoxOSswMDowMBWgcwEAAAAASUVORK5CYII="/></svg>',
      openuserjs:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo AAB1MAAA6mAAADqYAAAXcJy6UTwAAAFQUExURdvl3dzm3t7n3uDo3+Hp4Nzm3dbi283b1sTV0b7R zrvPzc3c1pOyuGiUokyBlD13jUuBlGiVo5Ozub/Sz8zb1Zm3vD93jiFjfhJYdwxVdD94jmmVo5q4 vMzb1p67vkd9khpeexBXdh5hfS1rhTdyii1shR9hfRFXdkd+kp67vxhdehlee0J6j4SosavDxLrO zKvExYWpskN7kEh+k9bi2hlde1GEl5e2usPU0Nrk3OLq4cPV0Zi2vFKFmBpefBtefN7n35Kytz53 jUF5j5a1utrl3dvk3WeUoiBifoKnscHT0CFjf8TV0kqAlCtqhKnCxNnk3EyBlb7Rzz12jQpTczRx iA1VdbzPzTRwiLnNy+Lq4KnCw9jj3IGmsIWpsUB5j5W1utnk3Rhde1CEl9nj3LnOzCpphDJvhzNw hw9WdglScjx2jUuAlJOzuL/Rzv///609kxgAAAABYktHRG9VCGGBAAAAB3RJTUUH6gEfCTMgjsWC SgAAAUdJREFUKM9jYCAAGJmYWYCAmYkRVZyVjZ2Dk4uLk4ObjRVVhpOHl4+fX0BQSBjFHBFRQTFx CUlJCXEpaRlZhGkicvIKikrKKiqqauoKGpqyMPMZROW1tHV09fT1DQyNFLSMZRjA9jCacApqm5qZ W1haWVla29ja2UsLs4FMc2B3dFJ0dnGFqHKzMVKXEuJmArKZOdw9lDy9WMESrIzWhmregj7MQDYL p6+in38AzCGWBqoSgUEsIAmu4JBQfSuYhJW+SphUOEwiIjIKiwTIqOgYhFHKUKPAlsfCLGe1jlOC Wg52bnxCIkTC1VxHEepcsAeTkhO8UqysArxczLQVoB6EBElSfKx/qr6/p7MpPEgggaitqJSWnuGn pKigISeCEuxOHplZWYqgYBdBiUROR3ff4Owc3tw8tKg1gUYtO3rUMjpgTwyYAAAQBzM+vDzhWgAA ACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wMS0zMVQwOTo1MToyOSswMDowMJrA+QUAAAAldEVYdGRh dGU6bW9kaWZ5ADIwMjYtMDEtMzFUMDk6NTE6MzIrMDA6MDAlMBXdAAAAKHRFWHRkYXRlOnRpbWVz dGFtcAAyMDI2LTAxLTMxVDA5OjUxOjMyKzAwOjAwciU0AgAAAABJRU5ErkJggg=="/></svg>',
      github:
        '<svg aria-hidden="true" focusable="false" class="octicon octicon-mark-github" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path></svg>',
    },
    defaultShortcuts: [
      { id: 1, shortcut: "Alt + F2", description: "打开/关闭设置" },
      { id: 2, shortcut: "Alt + F1", description: "打开/关闭快捷键帮助" },
      { id: 3, shortcut: "Alt + Shift + M", description: "自动登录/解锁" },
      { id: 4, shortcut: "Alt + Shift + F", description: "打开菜单，并选中输入框中内容" },
      {
        id: 5,
        shortcut: "Esc",
        description: "关闭弹窗；打开/关闭菜单；关闭在线用户列表页面",
      },
      { id: 6, shortcut: "Alt + Shift + W", description: "关闭当前标签页" },
      { id: 7, shortcut: "Alt + Shift + O", description: "关闭其他标签页" },
      { id: 8, shortcut: "Alt + Shift + E", description: "关闭左侧标签页" },
      { id: 9, shortcut: "Alt + Shift + R", description: "关闭右侧标签页" },
      { id: 10, shortcut: "Alt + Shift + Q", description: "关闭全部标签页" },
      { id: 11, shortcut: "F4", description: "刷新当前标签页" },
      {
        id: 12,
        shortcut: "Shift + F4",
        description: "强制刷新当前标签页",
        note: "先刷新缓存再刷新标签页",
      },
      {
        id: 13,
        shortcut: "F8",
        description: "获取当前标签页的HTML地址",
        note: "\\app\\sf\\bzh\\B7SFS00034.html",
      },
      { id: 14, shortcut: "Ctrl + F8", description: "获取当前标签页的程序号", note: "B7SFS00034" },
      {
        id: 15,
        shortcut: "Alt + F8",
        description: "获取当前标签页的XML地址",
        note: "\\app\\sf\\bzh\\B7SFS00034.xml",
      },
      {
        id: 16,
        shortcut: "Shift + F8",
        description: "获取当前标签页的JS地址",
        note: "\\app\\sf\\bzh\\B7SFS00034.js",
      },
      { id: 17, shortcut: "Alt + T", description: "获取当前标签页的数据表名" },
      {
        id: 18,
        shortcut: "Alt + Shift + T",
        description: "获取当前标签页的数据表名，并在数据字典中打开",
      },
      {
        id: 19,
        shortcut: "Ctrl + Alt + Shift + T",
        description: "输入数据表名，并在数据字典中打开",
      },
      { id: 20, shortcut: "Ctrl + Alt + Shift + ←", description: "第一条" },
      { id: 21, shortcut: "Ctrl + Alt + Shift + →", description: "最后一条" },
      { id: 22, shortcut: "Alt + Shift + ←", description: "上一条/上一页" },
      { id: 23, shortcut: "Alt + Shift + →", description: "下一条/下一页" },
      { id: 24, shortcut: "Alt + Shift + ↑", description: "打开列表" },
      { id: 25, shortcut: "Alt + Shift + S", description: "保存" },
      { id: 26, shortcut: "Alt + Shift + P", description: "打开铃铛消息弹窗" },
    ],
    generateId: () => Math.random().toString(36).substring(2, 11),
    getDefaultSettings: function () {
      return {
        projects: [
          {
            id: this.generateId(),
            name: "",
            addresses: [""],
            auths: [{ display: "", account: "", password: "" }],
          },
        ],
        platform: {
          address: "",
          account: "",
          password: "",
          menuCategories: [
            {
              id: this.generateId(),
              categoryName: "常用",
              items: [
                {
                  id: this.generateId(),
                  menuName: "技术支持",
                  programId: "B1YFG00300",
                  tooltip: "技术支持",
                },
                {
                  id: this.generateId(),
                  menuName: "消息列表",
                  programId: "B1CMG00013",
                  tooltip: "消息列表",
                },
              ],
            },
            {
              id: this.generateId(),
              categoryName: "项目启动",
              items: [
                {
                  id: this.generateId(),
                  menuName: "项目主计划",
                  programId: "B1PMG20110",
                  tooltip: "添加项目人员",
                },
                {
                  id: this.generateId(),
                  menuName: "考核责任书",
                  programId: "B1PMM80100",
                  tooltip: "考核责任书",
                },
                {
                  id: this.generateId(),
                  menuName: "出厂申请",
                  programId: "B1CAM00052",
                  tooltip: "出厂申请",
                },
                {
                  id: this.generateId(),
                  menuName: "授权申请",
                  programId: "B1CAM00053",
                  tooltip: "授权申请",
                },
              ],
            },
            {
              id: this.generateId(),
              categoryName: "项目汇报",
              items: [
                {
                  id: this.generateId(),
                  menuName: "项目日志",
                  programId: "B1PMM80300",
                  tooltip: "项目日志",
                },
                {
                  id: this.generateId(),
                  menuName: "公司文档管理",
                  programId: "B1EPM30042",
                  tooltip: "公司文档管理",
                },
                {
                  id: this.generateId(),
                  menuName: "项目月报",
                  programId: "B1PMM30000",
                  tooltip: "项目月报",
                },
                {
                  id: this.generateId(),
                  menuName: "月度人员工时管理",
                  programId: "B1PMM10124",
                  tooltip: "月度人员工时管理",
                },
              ],
            },
            {
              id: this.generateId(),
              categoryName: "项目费用",
              items: [
                {
                  id: this.generateId(),
                  menuName: "出差管理",
                  programId: "B1OAG90010",
                  tooltip: "出差管理",
                },
                {
                  id: this.generateId(),
                  menuName: "项目临时申请表",
                  programId: "B1PJG80001",
                  tooltip: "临时费用申请",
                },
                {
                  id: this.generateId(),
                  menuName: "报销单",
                  programId: "B1BDG20003",
                  tooltip: "报销单",
                },
                {
                  id: this.generateId(),
                  menuName: "预算调整",
                  programId: "B1BUM00510",
                  tooltip: "预算调整",
                },
                {
                  id: this.generateId(),
                  menuName: "供应商信息",
                  programId: "B1VDG00010",
                  tooltip: "供应商信息，租房先建立供应商",
                },
                {
                  id: this.generateId(),
                  menuName: "合同评审",
                  programId: "B1SAG00060",
                  tooltip: "合同评审",
                },
                {
                  id: this.generateId(),
                  menuName: "合同付款单",
                  programId: "B1SAG00070",
                  tooltip: "合同付款单",
                },
              ],
            },
            {
              id: this.generateId(),
              categoryName: "人员信息",
              items: [
                {
                  id: this.generateId(),
                  menuName: "通讯录",
                  programId: "B1HRS20100",
                  tooltip: "通讯录",
                },
                {
                  id: this.generateId(),
                  menuName: "人力地图",
                  programId: "B1HRG06101",
                  tooltip: "人力地图",
                },
                {
                  id: this.generateId(),
                  menuName: "人员查找",
                  programId: "B1HRS20100",
                  tooltip: "人员查找",
                },
                {
                  id: this.generateId(),
                  menuName: "个人信息",
                  programId: "B1HRG20101",
                  tooltip: "个人信息",
                },
              ],
            },
            {
              id: this.generateId(),
              categoryName: "绩效考核",
              items: [
                {
                  id: this.generateId(),
                  menuName: "项目绩效管理KPI",
                  programId: "B1PJM10100",
                  tooltip: "项目绩效管理KPI",
                },
                {
                  id: this.generateId(),
                  menuName: "学员考核申请表",
                  programId: "B1PMM40040",
                  tooltip: "学员考核申请表",
                },
                {
                  id: this.generateId(),
                  menuName: "考核计划维护",
                  programId: "B1EPM60029",
                  tooltip: "在当年的考核计划中选择数据，按钮“生成专业特长考核”",
                },
                {
                  id: this.generateId(),
                  menuName: "专业特长考核申请",
                  programId: "B1EPG60030",
                  tooltip: "专业特长考核申请，需要先填写《考核计划维护》",
                },
                {
                  id: this.generateId(),
                  menuName: "课件查询",
                  programId: "B1EPM60020",
                  tooltip: "课件查询",
                },
                {
                  id: this.generateId(),
                  menuName: "请假申请",
                  programId: "B1HRM13104",
                  tooltip: "请假申请",
                },
                {
                  id: this.generateId(),
                  menuName: "年中总结",
                  programId: "B1BAG00010",
                  tooltip: "年中总结",
                },
                {
                  id: this.generateId(),
                  menuName: "年终总结",
                  programId: "B1OAG00020",
                  tooltip: "年终总结",
                },
              ],
            },
          ],
        },
      };
    },
    settingsDialog: class {
      constructor() {
        this.settings = this.loadSettings();
        this.activeTab = "liems";
        this.overlay = null;
        this.fileInput = null;
        this.escHandler = null;
        this.topDoc = window.top.document;
      }

      loadSettings() {
        try {
          const saved = GM_getValue("settings");
          return saved ? saved : SettingsModule.getDefaultSettings();
        } catch (e) {
          return SettingsModule.getDefaultSettings();
        }
      }

      saveSettings() {
        GM_setValue("settings", this.settings);
      }

      // 验证必填字段
      validateSettings() {
        const errors = [];

        // 验证 LiEMS 项目认证信息
        this.settings.projects.forEach((project, pIndex) => {
          project.auths.forEach((auth, aIndex) => {
            if (!auth.display.trim()) {
              errors.push({ type: "auth", project: pIndex, auth: aIndex, field: "display" });
            }
            if (!auth.account.trim()) {
              errors.push({ type: "auth", project: pIndex, auth: aIndex, field: "account" });
            }
            if (!auth.password.trim()) {
              errors.push({ type: "auth", project: pIndex, auth: aIndex, field: "password" });
            }
          });
        });

        // 验证运营管理平台菜单
        this.settings.platform.address.trim() ||
          errors.push({ type: "platform", field: "address" });
        this.settings.platform.account.trim() ||
          errors.push({ type: "platform", field: "account" });
        this.settings.platform.password.trim() ||
          errors.push({ type: "platform", field: "password" });
        this.settings.platform.menuCategories.forEach((category, cIndex) => {
          category.items.forEach((item, iIndex) => {
            if (!item.menuName.trim()) {
              errors.push({ type: "menu", category: cIndex, item: iIndex, field: "menuName" });
            }
            if (!item.programId.trim()) {
              errors.push({ type: "menu", category: cIndex, item: iIndex, field: "programId" });
            }
          });
        });

        return errors;
      }

      // 高亮错误字段
      highlightErrors(errors) {
        // 清除所有错误样式
        this.overlay.querySelectorAll(".liems-input.error").forEach(el => {
          el.classList.remove("error");
        });

        errors.forEach(err => {
          if (err.type === "auth") {
            const projectCard = this.overlay.querySelectorAll("[data-project-id]")[err.project];
            if (projectCard) {
              const authRow = projectCard.querySelectorAll(".liems-form-row")[err.auth];
              if (authRow) {
                const input = authRow.querySelector(`[data-auth-field="${err.field}"]`);
                if (input) input.classList.add("error");
              }
            }
          } else if (err.type === "platform") {
            const platformCard = this.overlay.querySelectorAll(".liems-card")[0];
            const input = platformCard.querySelector(`[data-platform-field="${err.field}"]`);
            if (input) input.classList.add("error");
          } else if (err.type === "menu") {
            const categoryCard = this.overlay.querySelectorAll("[data-category-id]")[err.category];
            if (categoryCard) {
              const itemRow = categoryCard.querySelectorAll(".liems-form-row")[err.item];
              if (itemRow) {
                const input = itemRow.querySelector(`[data-item-field="${err.field}"]`);
                if (input) input.classList.add("error");
              }
            }
          }
        });
      }

      open() {
        this.injectStyles();
        this.render();
        this.bindEvents();
        // 禁止页面滚动
        this.topDoc.body.style.overflow = "hidden";
      }

      close() {
        if (this.overlay) {
          this.overlay.remove();
          this.overlay = null;
        }
        if (this.escHandler) {
          this.topDoc.removeEventListener("keydown", this.escHandler);
          this.escHandler = null;
        }
        // 恢复页面滚动
        this.topDoc.body.style.overflow = "";
      }

      injectStyles() {
        if (this.topDoc.getElementById("liems-settings-styles")) return;
        const style = this.topDoc.createElement("style");
        style.id = "liems-settings-styles";
        style.textContent = SettingsModule.style;
        this.topDoc.head.appendChild(style);
      }

      render() {
        this.overlay = this.topDoc.createElement("div");
        this.overlay.className = "liems-overlay";
        this.overlay.innerHTML = this.getDialogHTML();
        this.topDoc.body.appendChild(this.overlay);
        this.updateBackupFileName();
        this.renderActiveTab();
      }

      getDialogHTML() {
        return `
        <div class="liems-dialog">
          <div class="liems-header">
            <div class="liems-header-left">
              <div class="liems-header-icon">${SettingsModule.icons.settings}</div>
              <h2>设置</h2>
            </div>
            <button class="liems-close-btn" data-action="close">${SettingsModule.icons.x}</button>
          </div>

          <div class="liems-tabs">
            <button class="liems-tab active" data-tab="liems">${SettingsModule.icons.server} LiEMS</button>
            <button class="liems-tab" data-tab="operation">${SettingsModule.icons.database} 运营管理平台</button>
            <button class="liems-tab" data-tab="backup">${SettingsModule.icons.download} 备份恢复</button>
            <button class="liems-tab" data-tab="shortcuts">${SettingsModule.icons.keyboard} 快捷键</button>
            <button class="liems-tab" data-tab="about">${SettingsModule.icons.info} 关于</button>
          </div>

          <div class="liems-content" id="liems-tab-content"></div>

          <div class="liems-footer">
            <button class="liems-btn liems-btn-secondary" data-action="cancel">取消</button>
            <button class="liems-btn liems-btn-primary" data-action="save">保存</button>
          </div>
        </div>
        <input type="file" accept=".json" id="liems-file-input" style="display:none">
      `;
      }

      renderActiveTab() {
        const content = this.topDoc.getElementById("liems-tab-content");
        if (!content) return;

        switch (this.activeTab) {
          case "liems":
            content.innerHTML = this.getLiEMSTabHTML();
            this.bindLiEMSPasswordToggle();
            break;
          case "operation":
            content.innerHTML = this.getOperationTabHTML();
            this.bindOperationPasswordToggle();
            break;
          case "backup":
            content.innerHTML = this.getBackupTabHTML();
            break;
          case "shortcuts":
            content.innerHTML = this.getShortcutsTabHTML();
            break;
          case "about":
            content.innerHTML = this.getAboutTabHTML();
            break;
        }
      }

      // 密码框获得焦点时显示，失去焦点时隐藏
      bindLiEMSPasswordToggle() {
        if (!this.overlay) return;
        const passwordInputs = this.overlay.querySelectorAll('input[data-auth-field="password"]');
        passwordInputs.forEach(input => {
          input.addEventListener("focus", () => {
            input.type = "text";
          });
          input.addEventListener("blur", () => {
            input.type = "password";
          });
        });
      }
      // 密码框获得焦点时显示，失去焦点时隐藏
      bindOperationPasswordToggle() {
        if (!this.overlay) return;
        const passwordInputs = this.overlay.querySelectorAll(
          'input[data-platform-field="password"]'
        );
        passwordInputs.forEach(input => {
          input.addEventListener("focus", () => {
            input.type = "text";
          });
          input.addEventListener("blur", () => {
            input.type = "password";
          });
        });
      }

      getLiEMSTabHTML() {
        const projects = this.settings.projects;
        return `
        <div style="margin-bottom:16px">
          <h3 class="liems-section-title">项目配置</h3>
          <p class="liems-section-desc">配置LiEMS项目的地址和账号信息</p>
        </div>
        ${projects
          .map(
            (project, pIndex) => `
          <div class="liems-card" data-project-id="${project.id}">
            <div style="display:flex;justify-content:space-between;margin-bottom:16px">
              <div class="liems-form-group" style="flex:1;margin-bottom:0">
                <label class="liems-label liems-label-required">项目名称</label>
                <input type="text" class="liems-input" value="${project.name}" data-field="name" placeholder="请输入项目名称" />
              </div>
              <button class="liems-delete-btn" data-action="remove-project" data-project-id="${project.id}" style="margin-left:16px;margin-top:20px">
                ${SettingsModule.icons.minus} 删除项目
              </button>
            </div>

            <div class="liems-form-group">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <label class="liems-label liems-label-required">服务器地址</label>
                <button class="liems-add-link" data-action="add-address" data-project-id="${project.id}">${SettingsModule.icons.plus} 添加地址</button>
              </div>
              ${project.addresses
                .map(
                  (addr, aIndex) => `
                <div class="liems-form-address">
                  <input type="text" class="liems-input liems-input-flex" value="${addr}" data-address-index="${aIndex}" placeholder="http://example.com:port" />
                  ${
                    project.addresses.length > 1 ?
                      `
                    <button class="liems-icon-btn danger" data-action="remove-address" data-project-id="${project.id}" data-address-index="${aIndex}">${SettingsModule.icons.minus}</button>
                  `
                    : ""
                  }
                </div>
              `
                )
                .join("")}
            </div>

            <div class="liems-form-group">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <label class="liems-label liems-label-required">认证信息</label>
                <button class="liems-add-link" data-action="add-auth" data-project-id="${project.id}">${SettingsModule.icons.plus} 添加认证</button>
              </div>
              ${project.auths
                .map(
                  (auth, authIndex) => `
                <div class="liems-form-row">
                  <input type="text" class="liems-input liems-input-sm" value="${auth.display}" data-auth-index="${authIndex}" data-auth-field="display" placeholder="显示名称 *"/>
                  <input type="text" class="liems-input liems-input-flex" value="${auth.account}" data-auth-index="${authIndex}" data-auth-field="account" placeholder="账号 *"/>
                  <input type="password" class="liems-input liems-input-flex" value="${auth.password}" data-auth-index="${authIndex}" data-auth-field="password" placeholder="密码 *"/>
                  ${
                    project.auths.length > 1 ?
                      `
                    <button class="liems-icon-btn danger" data-action="remove-auth" data-project-id="${project.id}" data-auth-index="${authIndex}">${SettingsModule.icons.minus}</button>
                  `
                    : ""
                  }
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
        <button class="liems-add-bottom-btn" data-action="add-project">${SettingsModule.icons.plus} 添加项目</button>
      `;
      }

      getOperationTabHTML() {
        const op = this.settings.platform;
        return `
        <div class="liems-card">
          <h4 style="font-size:14px;font-weight:600;color:#1a1a2e;margin:0 0 16px">基础信息</h4>
          <div class="liems-grid-3">
            <div class="liems-form-group" style="margin-bottom:0">
              <label class="liems-label liems-label-required">服务器地址</label>
              <input type="text" class="liems-input" value="${op.address}" data-platform-field="address" placeholder="http://example.com" />
            </div>
            <div class="liems-form-group" style="margin-bottom:0">
              <label class="liems-label liems-label-required">账号</label>
              <input type="text" class="liems-input" value="${op.account}" data-platform-field="account" placeholder="请输入账号" />
            </div>
            <div class="liems-form-group" style="margin-bottom:0">
              <label class="liems-label liems-label-required">密码</label>
              <input type="password" class="liems-input" value="${op.password}" data-platform-field="password" data-password-toggle="true" placeholder="请输入密码" />
            </div>
          </div>
        </div>

        <div style="margin-bottom:16px">
          <h3 class="liems-section-title">常用菜单</h3>
          <p class="liems-section-desc">配置快速访问菜单，按分类整理</p>
        </div>

        ${op.menuCategories
          .map(
            cat => `
          <div class="liems-card" data-category-id="${cat.id}">
            <div style="display:flex;justify-content:space-between;margin-bottom:16px">
              <div class="liems-form-group" style="width:256px;margin-bottom:0">
                <label class="liems-label liems-label-required">分类名称</label>
                <input type="text" class="liems-input" value="${cat.categoryName}" data-category-field="categoryName" placeholder="请输入分类名称" />
              </div>
              <button class="liems-delete-btn" data-action="remove-category" data-category-id="${cat.id}" style="margin-top:20px">
                ${SettingsModule.icons.minus} 删除分类
              </button>
            </div>

            <div class="liems-form-group">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <label class="liems-label">菜单项</label>
                <button class="liems-add-link" data-action="add-menu-item" data-category-id="${cat.id}">${SettingsModule.icons.plus} 添加菜单</button>
              </div>
              ${cat.items
                .map(
                  item => `
                <div class="liems-form-row" data-item-id="${item.id}">
                  <input type="text" class="liems-input liems-input-menu" value="${item.menuName}" data-item-field="menuName" placeholder="菜单名 *" />
                  <input type="text" class="liems-input liems-input-md" value="${item.programId}" data-item-field="programId" placeholder="程序号 *" />
                  <input type="text" class="liems-input liems-input-flex" value="${item.tooltip}" data-item-field="tooltip" placeholder="提示语（可选）" />
                  ${
                    cat.items.length > 1 ?
                      `
                    <button class="liems-icon-btn danger" data-action="remove-menu-item" data-category-id="${cat.id}" data-item-id="${item.id}">${SettingsModule.icons.minus}</button>
                  `
                    : ""
                  }
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
        <button class="liems-add-bottom-btn" data-action="add-category">${SettingsModule.icons.plus} 添加分类</button>
      `;
      }

      getBackupTabHTML() {
        return `
        <div>
          <h3 class="liems-section-title">备份与恢复</h3>
          <p class="liems-section-desc" style="margin-bottom:24px">导出或导入您的配置数据</p>
        </div>

        <div class="liems-grid-2">
          <div class="liems-card liems-backup-card">
            <div class="liems-backup-header">
              <div class="liems-backup-icon">${SettingsModule.icons.download}</div>
              <div>
                <h4 class="liems-backup-title">导出配置</h4>
                <p class="liems-backup-desc">将当前配置保存为JSON文件</p>
              </div>
            </div>
            <div class="liems-form-group">
              <label class="liems-label">备份文件名</label>
              <input type="text" class="liems-input" id="liems-backup-filename" placeholder="LiEMS Config" />
            </div>
            <button class="liems-btn liems-btn-primary liems-full-btn" data-action="backup">导出备份</button>
          </div>

          <div class="liems-card liems-backup-card">
            <div class="liems-backup-header">
              <div class="liems-backup-icon">${SettingsModule.icons.upload}</div>
              <div>
                <h4 class="liems-backup-title">导入配置</h4>
                <p class="liems-backup-desc">从JSON文件恢复配置</p>
              </div>
            </div>
            <div class="liems-upload-zone">
              ${SettingsModule.icons.upload}
              <p class="liems-upload-text">点击下方按钮选择配置文件</p>
              <p class="liems-upload-hint">仅支持 .json 格式</p>
            </div>
            <button class="liems-btn liems-btn-secondary liems-full-btn" data-action="restore">选择文件并恢复</button>
          </div>
        </div>
      `;
      }

      getShortcutsTabHTML() {
        return `
        <div>
          <h3 class="liems-section-title">快捷键列表</h3>
          <p class="liems-section-desc" style="margin-bottom:16px">LiEMS 支持的所有键盘快捷键</p>
        </div>

        <div class="liems-table-container">
          <div class="liems-table-scroll">
            <table class="liems-table">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>快捷键</th>
                  <th>功能描述</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                ${SettingsModule.defaultShortcuts
                  .map(
                    s => `
                  <tr>
                    <td class="muted">${s.id}</td>
                    <td class="shortcut-col"><span class="liems-kbd">${s.shortcut}</span></td>
                    <td>${s.description}</td>
                    <td class="muted">${s.note || "-"}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
      }

      getAboutTabHTML() {
        return `
        <div class="liems-about-center">
          <div class="liems-about-icon">${SettingsModule.icons.settings}</div>
          <h3 class="liems-about-title">LiEMS Helper</h3>
          <p class="liems-about-version">版本 ${GM_info.script.version} | 作者: ${GM_info.script.author}</p>
        </div>

        <div class="liems-about-content">
          <div class="liems-card" style="display: flex;flex-wrap: wrap;gap: 12px;align-items: flex-start;">
            <h4 style="font-size:14px;font-weight:500;color:#1a1a2e;margin:0 0 8px;flex: 0 0 100%;">脚本下载</h4>
            <a href="https://greasyfork.org/zh-CN/scripts/564687" target="_blank" rel="noopener noreferrer" class="liems-download-link">
              <div class="liems-download-left">
                <div class="liems-download-icon">${SettingsModule.icons.greasyfork}</div>
                <div>
                  <p class="liems-download-name">GreasyFork</p>
                  <p class="liems-download-url">greasyfork.org</p>
                </div>
              </div>
              ${SettingsModule.icons.external}
            </a>
            <a href="https://openuserjs.org/scripts/HaleShaw/LiEMS_Helper" target="_blank" rel="noopener noreferrer" class="liems-download-link">
              <div class="liems-download-left">
                <div class="liems-download-icon">${SettingsModule.icons.openuserjs}</div>
                <div>
                  <p class="liems-download-name">OpenUserJS</p>
                  <p class="liems-download-url">openuserjs.org</p>
                </div>
              </div>
              ${SettingsModule.icons.external}
            </a>
            <a href="https://scriptcat.org/zh-CN/script-show-page/5330" target="_blank" rel="noopener noreferrer" class="liems-download-link">
              <div class="liems-download-left">
                <div class="liems-download-icon">${SettingsModule.icons.scriptcat}</div>
                <div>
                  <p class="liems-download-name">ScriptCat</p>
                  <p class="liems-download-url">scriptcat.org</p>
                </div>
              </div>
              ${SettingsModule.icons.external}
            </a>
            <a href="https://github.com/HaleShaw/TM-LiEMSHelper" target="_blank" rel="noopener noreferrer" class="liems-download-link" style="margin-bottom:0">
              <div class="liems-download-left">
                <div class="liems-download-icon">${SettingsModule.icons.github}</div>
                <div>
                  <p class="liems-download-name">Github</p>
                  <p class="liems-download-url">github.com</p>
                </div>
              </div>
              ${SettingsModule.icons.external}
            </a>
          </div>

          <div class="liems-card">
            <h4 style="font-size:14px;font-weight:500;color:#1a1a2e;margin:0 0 8px">功能说明</h4>
            <ul class="liems-feature-list">
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> LiEMS 系统丰富的快捷键支持</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> LiEMS 系统常用菜单样式优化</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> LiEMS 系统菜单搜索结果显示优化</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> LiEMS 系统在线用户显示优化</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> LiEMS 系统快速重启（需部署class）</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> 运营管理平台常用菜单快速访问</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> 运营管理平台任务列表显示优化</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> 运营管理平台自动登录</li>
              <li class="liems-feature-item"><span class="liems-feature-dot"></span> 运营管理平台在线考试复制题目及试卷</li>
              <li class="liems-feature-item" style="margin-bottom:0"><span class="liems-feature-dot"></span> 配置数据备份与恢复</li>
            </ul>
          </div>

          <p class="liems-footer-note">如有问题或建议，请在脚本页面留言反馈</p>
        </div>
      `;
      }

      updateBackupFileName() {
        const input = this.topDoc.getElementById("liems-backup-filename");
        if (input) {
          const now = new Date();
          const formatted = `LiEMS Config ${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
          input.value = formatted;
        }
      }

      bindEvents() {
        if (!this.overlay) return;

        // 点击遮罩关闭（只在点击遮罩本身时关闭，点击对话框内部不关闭）
        this.overlay.addEventListener("click", e => {
          if (e.target === this.overlay) {
            this.close();
          }
        });

        // 委托事件处理
        this.overlay.addEventListener("click", e => {
          const target = e.target.closest("[data-action]");
          if (!target) return;

          const action = target.dataset.action;

          switch (action) {
            case "close":
            case "cancel":
              this.close();
              break;
            case "save":
              this.collectFormData();
              const errors = this.validateSettings();
              if (errors.length > 0) {
                alert("请填写所有必填项！");
                this.highlightErrors(errors);
                return;
              }
              this.saveSettings();
              this.close();
              break;
            case "add-project":
              this.addProject();
              break;
            case "remove-project":
              this.removeProject(target.dataset.projectId);
              break;
            case "add-address":
              this.addAddress(target.dataset.projectId);
              break;
            case "remove-address":
              this.removeAddress(target.dataset.projectId, parseInt(target.dataset.addressIndex));
              break;
            case "add-auth":
              this.addAuth(target.dataset.projectId);
              break;
            case "remove-auth":
              this.removeAuth(target.dataset.projectId, parseInt(target.dataset.authIndex));
              break;
            case "add-category":
              this.addCategory();
              break;
            case "remove-category":
              this.removeCategory(target.dataset.categoryId);
              break;
            case "add-menu-item":
              this.addMenuItem(target.dataset.categoryId);
              break;
            case "remove-menu-item":
              this.removeMenuItem(target.dataset.categoryId, target.dataset.itemId);
              break;
            case "backup":
              this.handleBackup();
              break;
            case "restore":
              this.topDoc.getElementById("liems-file-input").click();
              break;
          }
        });

        // Tab 切换
        this.overlay.addEventListener("click", e => {
          const tab = e.target.closest("[data-tab]");
          if (!tab) return;

          this.collectFormData();
          this.activeTab = tab.dataset.tab;

          // 更新 tab 样式
          this.overlay.querySelectorAll(".liems-tab").forEach(t => t.classList.remove("active"));
          tab.classList.add("active");

          this.renderActiveTab();
          if (this.activeTab === "backup") {
            this.updateBackupFileName();
          }
        });

        // 输入事件
        this.overlay.addEventListener("input", e => {
          const input = e.target;
          if (input.tagName !== "INPUT") return;

          // 移除错误样式
          input.classList.remove("error");

          // 项目名称
          if (input.dataset.field === "name") {
            const card = input.closest("[data-project-id]");
            const projectId = card.dataset.projectId;
            const project = this.settings.projects.find(p => p.id === projectId);
            if (project) project.name = input.value;
          }

          // 项目地址
          if (input.dataset.addressIndex !== undefined) {
            const card = input.closest("[data-project-id]");
            const projectId = card.dataset.projectId;
            const project = this.settings.projects.find(p => p.id === projectId);
            if (project) project.addresses[parseInt(input.dataset.addressIndex)] = input.value;
          }

          // 项目认证
          if (input.dataset.authField) {
            const card = input.closest("[data-project-id]");
            const projectId = card.dataset.projectId;
            const project = this.settings.projects.find(p => p.id === projectId);
            if (project) {
              project.auths[parseInt(input.dataset.authIndex)][input.dataset.authField] =
                input.value;
            }
          }

          // 平台基础信息
          if (input.dataset.platformField) {
            this.settings.platform[input.dataset.platformField] = input.value;
          }

          // 分类名称
          if (input.dataset.categoryField) {
            const card = input.closest("[data-category-id]");
            const categoryId = card.dataset.categoryId;
            const category = this.settings.platform.menuCategories.find(c => c.id === categoryId);
            if (category) category[input.dataset.categoryField] = input.value;
          }

          // 菜单项
          if (input.dataset.itemField) {
            const row = input.closest("[data-item-id]");
            const itemId = row.dataset.itemId;
            const card = input.closest("[data-category-id]");
            const categoryId = card.dataset.categoryId;
            const category = this.settings.platform.menuCategories.find(c => c.id === categoryId);
            if (category) {
              const item = category.items.find(i => i.id === itemId);
              if (item) {
                const field = input.dataset.itemField;
                const oldMenuName = item.menuName;
                item[field] = input.value;
                // 自动填充提示语
                if (field === "menuName" && (item.tooltip === "" || item.tooltip === oldMenuName)) {
                  item.tooltip = input.value;
                  const tooltipInput = row.querySelector('[data-item-field="tooltip"]');
                  if (tooltipInput) tooltipInput.value = input.value;
                }
              }
            }
          }
        });

        // 文件选择
        const fileInput = this.topDoc.getElementById("liems-file-input");
        fileInput.addEventListener("change", e => {
          const file = e.target.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = event => {
            try {
              const data = JSON.parse(event.target.result);
              this.settings = data;
              this.saveSettings();
              this.renderActiveTab();
              alert("配置已成功恢复！");
            } catch (err) {
              alert("文件错误，请选择正确的配置文件。");
            }
          };
          reader.readAsText(file);
          e.target.value = "";
        });
      }

      collectFormData() {
        // 数据已在 input 事件中实时更新
      }

      // 项目操作
      addProject() {
        this.settings.projects.push({
          id: SettingsModule.generateId(),
          name: "",
          addresses: [""],
          auths: [{ display: "", account: "", password: "" }],
        });
        this.renderActiveTab();
      }

      removeProject(projectId) {
        this.settings.projects = this.settings.projects.filter(p => p.id !== projectId);
        this.renderActiveTab();
      }

      addAddress(projectId) {
        const project = this.settings.projects.find(p => p.id === projectId);
        if (project) {
          project.addresses.push("");
          this.renderActiveTab();
        }
      }

      removeAddress(projectId, index) {
        const project = this.settings.projects.find(p => p.id === projectId);
        if (project) {
          project.addresses.splice(index, 1);
          this.renderActiveTab();
        }
      }

      addAuth(projectId) {
        const project = this.settings.projects.find(p => p.id === projectId);
        if (project) {
          project.auths.push({ display: "", account: "", password: "" });
          this.renderActiveTab();
        }
      }

      removeAuth(projectId, index) {
        const project = this.settings.projects.find(p => p.id === projectId);
        if (project) {
          project.auths.splice(index, 1);
          this.renderActiveTab();
        }
      }

      // 分类操作
      addCategory() {
        this.settings.platform.menuCategories.push({
          id: SettingsModule.generateId(),
          categoryName: "",
          items: [{ id: SettingsModule.generateId(), menuName: "", programId: "", tooltip: "" }],
        });
        this.renderActiveTab();
      }

      removeCategory(categoryId) {
        this.settings.platform.menuCategories = this.settings.platform.menuCategories.filter(
          c => c.id !== categoryId
        );
        this.renderActiveTab();
      }

      addMenuItem(categoryId) {
        const category = this.settings.platform.menuCategories.find(c => c.id === categoryId);
        if (category) {
          category.items.push({
            id: SettingsModule.generateId(),
            menuName: "",
            programId: "",
            tooltip: "",
          });
          this.renderActiveTab();
        }
      }

      removeMenuItem(categoryId, itemId) {
        const category = this.settings.platform.menuCategories.find(c => c.id === categoryId);
        if (category) {
          category.items = category.items.filter(i => i.id !== itemId);
          this.renderActiveTab();
        }
      }

      // 备份操作
      handleBackup() {
        const filename =
          this.topDoc.getElementById("liems-backup-filename").value || "LiEMS Config";
        const dataStr = JSON.stringify(this.settings, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = this.topDoc.createElement("a");
        a.href = url;
        a.download = `${filename}.json`;
        this.topDoc.body.appendChild(a);
        a.click();
        this.topDoc.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    },
    toggleSettings: function () {
      let overlay = window.top.document.querySelector(".liems-overlay");
      if (overlay) {
        overlay.remove();
        overlay = null;
      } else {
        new SettingsModule.settingsDialog().open();
      }
    },
    toggleShortcut: function () {
      let overlay = window.top.document.querySelector(".liems-overlay");
      if (overlay) {
        overlay.remove();
        overlay = null;
      } else {
        const dialog = new SettingsModule.settingsDialog();
        dialog.open();
        const shortcutTab = dialog.overlay.querySelector('.liems-tab[data-tab="shortcuts"]');
        if (shortcutTab) {
          shortcutTab.click();
        }
      }
    },
  };

  // ====================== 7. 高级模块 ======================
  const AdvanceModule = {
    /**
     * 添加重启按钮
     * 需要在后台添加class文件
     * Liems\WEB-INF\classes\net\luculent\liems\web\cp\CommonUtils.class
     */
    handleRestart: function () {
      // 需要等待整个页面全部元素加载完成再添加重启按钮，不然事件无法添加成功
      setTimeout(() => {
        const messageBtn = document.querySelector("#guide__message_notice");
        if (messageBtn) {
          let existingRestartBtn = document.getElementById("guide__restart");
          if (existingRestartBtn) {
            existingRestartBtn.remove();
          }

          const restartStyle = `
          #guide__restart > i {
            font-size: 24px;
            color: #c8c9d0;
          }
          #guide__restart > i:hover {
            color: var(--lui-primary-8) !important;
          }
        `;
          Toolkit.addStyle(restartStyle);
          let restartBtn = document.createElement("span");
          restartBtn.className = "msg-wrap";
          restartBtn.setAttribute("id", "guide__restart");
          restartBtn.setAttribute("title", "重启系统");
          let restartIcon = document.createElement("i");
          restartIcon.className = "ivu-icon ivu-icon-ios-power normal";
          restartIcon.addEventListener("click", () => {
            lui.modal.confirm(
              "确定要重启系统吗？",
              () => {
                lui.ajax("CommonUtils@restart");
                console.log("如果重启失败，请检查是否有部署class文件。");
                console.log(
                  "Liems\\WEB-INF\\classes\\net\\luculent\\liems\\web\\cp\\CommonUtils.class"
                );
              },
              "",
              "重启确认",
              "确定",
              "关闭"
            );
          });
          restartBtn.appendChild(restartIcon);
          messageBtn.before(restartBtn);
        }
      }, 5000);
    },
  };

  // ====================== 8. 运营管理平台 ======================
  const PlatformModule = {
    /**
     * 处理 LiEMS 相关页面路径的跳转和功能初始化。
     * 根据当前页面的路径，执行对应的操作，如页面跳转、自动登录、首页初始化等。
     */
    routing: function () {
      const pathActions = {
        "/Liems/Login.jsp": () => (location.pathname = "/Liems/login.html"),
        "/Liems/home/500.html": () => (location.pathname = "/Liems/login.html"),
        "/Liems/login.html": this.handleLogin,
        "/Liems/newHomePage/index.jsp": this.initHomePage,
        "/Liems/newHomePage/newTask.jsp": this.handleTask,
        "/Liems/web/web04/zxks.jsp": () => this.handleExam(),
        "/Liems/home.html": () => {
          GM_registerMenuCommand("⚙️设置（Alt + F2）", SettingsModule.toggleSettings);
          this.initHotkey();
        },
      };
      pathActions[location.pathname]?.();
    },

    /**
     * 处理自动登录逻辑。
     * 该函数会在页面加载 1 秒后尝试从存储中获取用户信息，
     * 若存在用户信息且满足登录条件，则自动填充用户名和密码并点击登录按钮。
     */
    handleLogin: function () {
      setTimeout(() => {
        const users = Object.values(GM_getValue("Luculent")?.users || {});
        if (!users.length) return;

        const { name, password } = users[0];
        const loginBtn = document.querySelector(
          "div.login-right-info > div.login-right-info-btn > button"
        );
        const [userInput, pwdInput] = ["#username", "#password"].map(s =>
          document.querySelector(s)
        );

        if (loginBtn?.textContent === "登录" && userInput && pwdInput) {
          userInput.value = name;
          pwdInput.value = password;
          loginBtn.click();
        }
      }, 1e3);
    },

    /**
     * 优化待办任务样式。
     */
    handleTask: function () {
      Toolkit.waitForElement(".daiban2", element => {
        Toolkit.addStyle(Constants.SNIPPETS.LuculentTaskStyle);
        let spanList = element.querySelectorAll(".daiban_tit > span");
        for (let span of spanList) {
          span.textContent = span.getAttribute("title").replace(/[.．......]+$/, "");
        }
      });
      PlatformModule.initHotkey();
    },

    /**
     * 初始化首页相关功能。
     * 该函数会覆盖默认的新闻详情展示函数，并且尝试在页面中查找指定的菜单父元素，
     * 若找到则根据存储的菜单数据创建常用菜单。
     */
    initHomePage: function () {
      PlatformModule.overwriteShowDetail();
      Toolkit.waitForElement(
        ".lu-cont-wrap > .lu-cont > .lu-cont3 > .lu-cont3-left > .lu-cont3-left2",
        PlatformModule.createCommonMenu
      );
      PlatformModule.initHotkey();
    },

    /**
     * 创建常用菜单
     *
     * @param {HTMLElement} ele - 要填充菜单的 DOM 元素
     * @param {Object} menus - 包含菜单项的对象
     */
    createCommonMenu: function (ele, menus) {
      Toolkit.addStyle(Constants.SNIPPETS.LuculentCommonMenuStyle);
      const settingsDialog = new SettingsModule.settingsDialog();
      const menuCategories = settingsDialog.settings?.platform?.menuCategories;
      ele.previousElementSibling.querySelector(".lu-cont5112").remove();
      let menuHtml = "";
      menuCategories.forEach(category => {
        let menuBoxHtml = `<div class="commonMenu-container"><div class="commonMenu-title-container"><span class="commonMenu-title">${category.categoryName}</span></div><div class="commonMenu-item-container">`;
        let menuItemHtml = ``;
        category.items.forEach(item => {
          menuItemHtml += `<a class="commonMenu-item" href='javascript:openPgm("${item.programId}","","")' title="${item.tooltip}">${item.menuName}</a>`;
        });
        menuBoxHtml += menuItemHtml + `</div></div>`;
        menuHtml += menuBoxHtml;
      });
      ele.innerHTML = menuHtml;
    },

    /**
     * 覆盖默认的 showDetail 函数，用于在新窗口中打开指定 id 的新闻详情页面
     * @param {number} id - 要显示的新闻的 id
     */
    overwriteShowDetail: function () {
      showDetail = function (id) {
        const url = window.location.origin + "/Liems/portal/detailNews.jsp?newsId=" + id;
        window.open(url, "_blank");
      };
    },

    /**
     * 处理考试相关操作。
     * 该方法用于在考试页面中添加特定样式，并复制试卷内容和标题到剪贴板。
     */
    handleExam: function () {
      Toolkit.addStyle(Constants.SNIPPETS.LuculentExamStyle);
      PlatformModule.copyExamContent();
      PlatformModule.copyExamTitle();
    },

    /**
     * 复制试卷所有内容到剪贴板。
     */
    copyExamContent: function () {
      Toolkit.waitForElement(".sj-title", element => {
        let copyBtn = document.createElement("button");
        copyBtn.textContent = "复制试卷内容";
        copyBtn.setAttribute("title", "点击复制试卷全部内容");
        copyBtn.className = "btn-copy-exam";
        copyBtn.addEventListener("click", function () {
          let content = document.querySelector(".tm-container")?.textContent || "";
          content = content.replace(/\s/g, "");
          Toolkit.copyText(content);
          layer.msg("试卷内容复制成功");
        });
        element.appendChild(copyBtn);
      });
    },

    /**
     * 为页面上的每个考试标题添加点击事件监听器，点击时复制标题文本到剪贴板
     *
     * 此函数会遍历页面上所有的.tm-content 元素，并为它们添加一个点击事件监听器。
     * 当点击发生时，它会获取标题文本，去除文本末尾的括号（如果有），然后将处理后的文本复制到剪贴板。
     *
     */
    copyExamTitle: function () {
      Toolkit.waitForElement(
        ".tm-content",
        titles => {
          for (let title of titles) {
            title.setAttribute("title", "点击复制题目标题");
            title.addEventListener("click", function () {
              let content = title.querySelector("p")?.textContent || title.textContent;
              if (content) {
                const text = content
                  .trim()
                  .replace(/\s+/g, "")
                  .replace(/(\(\)|\（\）|\(\）|\（\))$/g, "")
                  .replace(/^\d+、/g, "")
                  .trim();
                Toolkit.copyText(text);
                layer.msg(`题目复制成功: ${text}`);
              }
            });
          }
        },
        { multiple: true }
      );
    },

    initHotkey: function () {
      document.onkeydown = function (e) {
        var keyCode = e.keyCode || e.which || e.charCode;
        var ctrlKey = e.ctrlKey || e.metaKey;
        var altKey = e.altKey || e.code === "AltLeft" || e.code === "AltRight" || e.keyCode === 18;
        var shiftKey = e.shiftKey;

        // Alt + F2
        // 打开油猴菜单“设置”
        if (keyCode == 113 && !ctrlKey && altKey && !shiftKey) {
          SettingsModule.toggleSettings();
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      };
    },
  };

  // ====================== 9. LiEMS核心模块 ======================
  const LiEMSModule = {
    routing: function (project) {
      if (window === window.top) {
        this.registerMenuCommand(project);
        Toolkit.addStyle(Constants.SNIPPETS.LiEMSMainStyle);
        this.expandMenuSearchResults();
        Toolkit.waitForElement(Constants.LIEMS_SELECTOR.tabsItem, this.addShortcutDesc, {
          multiple: true,
        });
        location.pathname === "/index.html" && AdvanceModule.handleRestart();
      }
      ShortcutModule.initHotkey();
      location.pathname === "/system/workbench.html" && OnlineUsersModule.handleOnlineUsers();
    },

    /**
     * 注册油猴菜单命令，根据传入的公司名称获取用户信息并创建登录菜单和快捷键帮助菜单。
     * @param {string} com - 公司名称，用于从存储中获取对应的用户信息。
     */
    registerMenuCommand: function (project) {
      const users = project.auths || [];
      const firstUser = users[0];
      if (firstUser) {
        defaultUsername = firstUser.account;
        defaultPassword = firstUser.password;
      }

      users.forEach(user => {
        const suffix = user === firstUser ? "（Alt + Shift + M）" : "";
        GM_registerMenuCommand(`👤登录-${user.display}${suffix}`, () =>
          LiEMSModule.login(null, user.account, user.password)
        );
      });
      GM_registerMenuCommand("⚙️设置（Alt + F2）", SettingsModule.toggleSettings);
      GM_registerMenuCommand("⌨️快捷键（Alt + F1）", SettingsModule.toggleShortcut);
    },

    /**
     * Add Shortcut Key Description.
     * @param {Array} items - 菜单项数组
     */
    addShortcutDesc: function (items) {
      if (items && items.length > 1) {
        const shortcuts = [
          " - F4",
          "",
          " - Alt+Shift+W",
          " - Alt+Shift+O",
          " - Alt+Shift+E",
          " - Alt+Shift+R",
          " - Alt+Shift+Q",
        ];
        items.forEach(
          (item, i) => i < shortcuts.length && shortcuts[i] && (item.textContent += shortcuts[i])
        );
      }
    },

    /**
     * 扩展菜单搜索结果的显示区域。
     * 此函数仅在首页执行，用于动态调整搜索结果的最大显示高度。
     * 根据可用空间计算最大可显示结果数量，但不超过预设的最大值。
     * 会在窗口大小改变时触发高度调整，并且在页面加载完成时进行初始高度设置。
     */
    expandMenuSearchResults: function () {
      if ("/index.html" !== location.pathname) {
        return;
      }

      // 添加防抖的resize事件监听
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(LiEMSModule.adjustResultsHeight, 250);
      });

      // 页面加载时初始化
      window.addEventListener("load", LiEMSModule.adjustResultsHeight);
    },

    /**
     * 调整菜单搜索结果的显示高度。
     * 根据窗口的可用高度计算最大可显示的搜索结果数量，并动态设置搜索结果列表的最大高度。
     */
    adjustResultsHeight: function () {
      const RESULTS_ITEM_HEIGHT = 32; // 每个搜索结果项的高度(px)
      const HEADER_HEIGHT = 50; // 页面顶部高度(px)
      const SEARCH_INPUT_HEIGHT = 150; // 搜索输入区域高度(px)
      const PADDING_HEIGHT = 20; // 页面顶部和底部的内边距(px)

      // 计算可用内容高度
      const availableHeight =
        window.innerHeight - HEADER_HEIGHT - SEARCH_INPUT_HEIGHT - PADDING_HEIGHT;

      // 计算最大可显示结果数量
      let maxDisplayCount = Math.floor(availableHeight / RESULTS_ITEM_HEIGHT);

      // 应用最大结果数量限制
      maxDisplayCount = Math.min(maxDisplayCount, Constants.MAX_DISPLAY_RESULTS);

      // 计算最终高度
      const resultsHeight = maxDisplayCount * RESULTS_ITEM_HEIGHT + PADDING_HEIGHT;

      const cssStyle = `
      .c-text-dp-autocomplete {
        max-height: ${resultsHeight}px !important;
      }
    `;
      Toolkit.addStyle(cssStyle, "liems-results-height");
    },

    /**
     * Login automatically.
     * @param {Object} doc Document object.
     * @param {String} name username.
     * @param {String} password password.
     */
    login: function (doc, name, password) {
      let targetDoc = doc || document;
      let nameDom = targetDoc.querySelector(Constants.LIEMS_SELECTOR.login.name);
      if (nameDom && name) {
        Toolkit.setValue(nameDom, name);
      }

      let passwordDom = targetDoc.querySelector(Constants.LIEMS_SELECTOR.login.password);
      if (passwordDom && password) {
        Toolkit.setValue(passwordDom, password);
      } else {
        return;
      }

      setTimeout(() => {
        let loginBtn = targetDoc.querySelector(Constants.LIEMS_SELECTOR.login.unlock);
        if (loginBtn && "解除锁定" === loginBtn.textContent.trim()) {
          loginBtn.click();
        } else {
          loginBtn = targetDoc.querySelector(Constants.LIEMS_SELECTOR.login.login);
          if (loginBtn && "登录" === loginBtn.textContent.trim()) {
            loginBtn.click();
          }
        }
      }, 100);
    },
  };

  function main() {
    Toolkit.logInfo(GM_info.script.name, GM_info.script.version);
    Toolkit.initData();
    const origin = location.origin;
    const settings = new SettingsModule.settingsDialog().settings;

    // 处理运营管理平台
    const platformAddress = settings.platform.address;
    if (platformAddress === origin) {
      PlatformModule.routing();
      return;
    }

    // 处理LiEMS
    let foundProject = false;
    for (let i = 0; i < settings.projects.length; i++) {
      const project = settings.projects[i];
      if (project.addresses.includes(origin)) {
        LiEMSModule.routing(project);
        foundProject = true;
        break;
      }
    }
    if (foundProject) {
      return;
    }

    // 处理其他网页
    GM_registerMenuCommand("⚙️设置", SettingsModule.toggleSettings);
  }
  main();
})();
