(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{472:function(t,a,s){"use strict";s.r(a);var e=s(33),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一句话说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一句话说明"}},[t._v("#")]),t._v(" 一句话说明")]),t._v(" "),s("h2",{attrs:{id:"keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),s("p",[s("code",[t._v("keep-alive")]),t._v("是 Vue 内置的一个组件，可以实现组件缓存，当组件切换时不会对当前组件进行卸载。")]),t._v(" "),s("p",[s("code",[t._v("activated")]),t._v("和"),s("code",[t._v("deactivated")]),t._v("两个生命周期, 将会在"),s("code",[t._v("<keep-alive>")]),t._v("树内的所有嵌套组件中触发, 用来得知当前组件是否处于活跃状态。")]),t._v(" "),s("ul",[s("li",[t._v("include - 字符串或正则表达式。只有名称匹配的组件会被缓存。")]),t._v(" "),s("li",[t._v("exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。")]),t._v(" "),s("li",[t._v("max - 数字。最多可以缓存多少组件实例。")])]),t._v(" "),s("p",[t._v("实现原理：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/v2/extend/keep-alive.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("keep-alive"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/answershuto/learnVue/blob/master/docs/%E8%81%8A%E8%81%8Akeep-alive%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E5%8F%8A%E5%85%B6%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.MarkDown",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊keep-alive组件的使用及其实现原理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"组件中-data-为什么是一个函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件中-data-为什么是一个函数"}},[t._v("#")]),t._v(" 组件中 data 为什么是一个函数")]),t._v(" "),s("p",[t._v("为什么组件中的 "),s("code",[t._v("data")]),t._v(" 必须是一个函数，然后 return 一个对象，而 "),s("code",[t._v("new Vue")]),t._v(" 实例里，"),s("code",[t._v("data")]),t._v(" 可以直接是一个对象？")]),t._v(" "),s("p",[t._v("因为组件是用来复用的，且 JS 里"),s("strong",[t._v("对象是引用关系")]),t._v("，如果组件中 "),s("code",[t._v("data")]),t._v(" 是一个对象，那么这样作用域没有隔离，子组件中的 "),s("code",[t._v("data")]),t._v(" 属性值会相互影响，如果组件中 "),s("code",[t._v("data")]),t._v(" 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 "),s("code",[t._v("data")]),t._v(" 属性值不会互相影响；而 "),s("code",[t._v("new Vue")]),t._v(" 的实例，是不会被复用的，因此不存在引用对象的问题。")]),t._v(" "),s("h2",{attrs:{id:"父子组件钩子函数执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子组件钩子函数执行顺序"}},[t._v("#")]),t._v(" 父子组件钩子函数执行顺序")]),t._v(" "),s("p",[t._v("Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：")]),t._v(" "),s("ul",[s("li",[t._v("加载渲染过程")])]),t._v(" "),s("p",[t._v("父 "),s("code",[t._v("beforeCreate")]),t._v(" -> 父 "),s("code",[t._v("created")]),t._v(" -> 父 "),s("code",[t._v("beforeMount")]),t._v(" -> 子 "),s("code",[t._v("beforeCreate")]),t._v(" -> 子 "),s("code",[t._v("created")]),t._v(" -> 子 "),s("code",[t._v("beforeMount")]),t._v(" -> 子 "),s("code",[t._v("mounted")]),t._v(" -> 父 "),s("code",[t._v("mounted")])]),t._v(" "),s("ul",[s("li",[t._v("子组件更新过程")])]),t._v(" "),s("p",[t._v("父 "),s("code",[t._v("beforeUpdate")]),t._v(" -> 子 "),s("code",[t._v("beforeUpdate")]),t._v(" -> 子 "),s("code",[t._v("updated")]),t._v(" -> 父 "),s("code",[t._v("updated")])]),t._v(" "),s("ul",[s("li",[t._v("父组件更新过程")])]),t._v(" "),s("p",[t._v("父 "),s("code",[t._v("beforeUpdate")]),t._v(" -> 父 "),s("code",[t._v("updated")])]),t._v(" "),s("ul",[s("li",[t._v("销毁过程")])]),t._v(" "),s("p",[t._v("父 "),s("code",[t._v("beforeDestroy")]),t._v(" -> 子 "),s("code",[t._v("beforeDestroy")]),t._v(" -> 子 "),s("code",[t._v("destroyed")]),t._v(" -> 父 "),s("code",[t._v("destroyed")])]),t._v(" "),s("h2",{attrs:{id:"父组件监听子组件的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父组件监听子组件的生命周期"}},[t._v("#")]),t._v(" 父组件监听子组件的生命周期")]),t._v(" "),s("p",[t._v("比如有父组件 "),s("code",[t._v("Parent")]),t._v(" 和子组件 "),s("code",[t._v("Child")]),t._v("，如果父组件监听到子组件挂载 "),s("code",[t._v("mounted")]),t._v(" 就做一些逻辑处理，可以通过以下写法实现：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// Parent.vue\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@mounted")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n// Child.vue\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mounted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("以上需要手动通过 "),s("code",[t._v("$emit")]),t._v(" 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 "),s("code",[t._v("@hook")]),t._v(" 来监听即可，如下所示：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//  Parent.vue\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@hook:")]),t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'父组件监听到 mounted 钩子函数 ...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n//  Child.vue\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'子组件触发 mounted 钩子函数 ...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n// 以上输出顺序为：\n// 子组件触发 mounted 钩子函数 ...\n// 父组件监听到 mounted 钩子函数 ...\n")])])]),s("p",[t._v("当然 "),s("code",[t._v("@hook")]),t._v(" 方法不仅仅是可以监听 "),s("code",[t._v("mounted")]),t._v("，其它的生命周期事件，例如："),s("code",[t._v("created")]),t._v("，"),s("code",[t._v("updated")]),t._v(" 等都可以监听。")])])}),[],!1,null,null,null);a.default=n.exports}}]);