(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{435:function(t,a,s){"use strict";s.r(a);var n=s(33),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"更改文件名大小写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改文件名大小写"}},[t._v("#")]),t._v(" 更改文件名大小写")]),t._v(" "),s("p",[t._v("Git修改了文件名大小写后，远端将不识别对应文件。")]),t._v(" "),s("p",[t._v("例如：远端服务器"),s("code",[t._v("a.html")]),t._v("，本地重命名后"),s("code",[t._v("A.html")]),t._v("，提交后远端还是"),s("code",[t._v("a.html")]),t._v("。")]),t._v(" "),s("p",[t._v("操作步骤\n请按顺序执行如下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git mv --force a.html A.html\ngit add A.html\ngit commit –m "rename"\ngit push origin XXX(分支)\n')])])]),s("h2",{attrs:{id:"解决mac下每次git-pull-push都需要输入密码的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决mac下每次git-pull-push都需要输入密码的问题"}},[t._v("#")]),t._v(" 解决mac下每次git pull/push都需要输入密码的问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. > ssh-add -L\n   > The agent has no identities\n2. ssh-add\n\nOK\n")])])]),s("h2",{attrs:{id:"提交到错误的分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交到错误的分支"}},[t._v("#")]),t._v(" 提交到错误的分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("未提交的情况下\ngit add . (把所有改动暂存)\n\ngit stash (把暂存的文件提交到git的暂存栈)\n\ngit checkout 本该提交代码的分支\n\ngit stash pop (将暂存栈中的代码放出来)\n\n至于是继续改还是提交就随你了\n\n已提交的情况下\ngit checkout 不该提交代码提交了代码的分支\n\ngit reset HEAD~1 （最近一次提交放回暂存区, 并取消此次提交）\n\ngit stash (把暂存的文件提交到git的暂存栈)\n\ngit checkout 该提交代码的分支\n\ngit stash pop\n\n下面一顿操作随你猛了，等你把代码提交到了正确的分支后，再次切到刚刚错的分支\n\ngit push origin 错误的分支 -f (把不该上去的文件回退掉)\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);