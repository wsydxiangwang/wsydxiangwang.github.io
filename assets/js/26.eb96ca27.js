(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(a,t,e){"use strict";e.r(t);var o=e(33),s=Object(o.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"安装服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装服务"}},[a._v("#")]),a._v(" 安装服务")]),a._v(" "),e("h2",{attrs:{id:"mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[a._v("#")]),a._v(" mac")]),a._v(" "),e("p",[a._v("Mac上启动MongoDB服务命令很简单，如果是安装MongoDB后第一次启动MongoDB的话，运行命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo mongod --dbpath /data/db\n")])])]),e("p",[e("code",[a._v("--dbpath")]),a._v("用来指定数据库的存放目录，由自己决定。如果已经执行过上面的命令，下次再执行只需要运行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo mongod\n")])])]),e("p",[a._v("即可，无需再指定新的目录。")]),a._v(" "),e("p",[a._v("上面的命令只能以前台方式启动"),e("code",[a._v("MongoDB")]),a._v("的进程，一旦会话结束，进程也就随之关闭。")]),a._v(" "),e("p",[a._v("不过"),e("code",[a._v("MongoDB")]),a._v("还提供了后台进程启动方式，方法是加上"),e("code",[a._v("--fork")]),a._v("参数，并且要注意的是，当使用"),e("code",[a._v("--fork")]),a._v("参数时必须指定另一个参数"),e("code",[a._v("--logpath")]),a._v("，命令如下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo mongod --fork --logpath /data/mongodb.log\n")])])]),e("p",[e("code",[a._v("--logpath")]),a._v("也就是"),e("code",[a._v("MongoDB")]),a._v("日志的存放路径，同上面的数据库路径一样，由自己决定。")]),a._v(" "),e("p",[a._v("最后执行命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mongo\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);