(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{342:function(t,s,a){t.exports=a.p+"assets/img/csrf.ac0fe4e8.png"},406:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"web安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web安全"}},[t._v("#")]),t._v(" WEB安全")]),t._v(" "),e("p",[t._v("前端安全分两类：CSRF、XSS")]),t._v(" "),e("h2",{attrs:{id:"csrf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),e("p",[t._v("CSRF(Cross-site request forgery), 即跨站请求伪造。指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户"),e("strong",[t._v("目前的登录状态")]),t._v("发起跨站请求。")]),t._v(" "),e("p",[t._v("要完成一次CSRF攻击，受害者必须依次完成两个步骤：")]),t._v(" "),e("ol",[e("li",[t._v("受害者登录A站点，并保留了登录凭证（Cookie）。")]),t._v(" "),e("li",[t._v("攻击者诱导受害者访问了站点B。")]),t._v(" "),e("li",[t._v("站点B向站点A发送了一个请求，浏览器会默认携带站点A的Cookie信息。")]),t._v(" "),e("li",[t._v("站点A接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是无辜的受害者发送的请求。")]),t._v(" "),e("li",[t._v("站点A以受害者的名义执行了站点B的请求。")]),t._v(" "),e("li",[t._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者完成了攻击。")]),t._v(" "),e("li",[t._v("跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等(来源不明的链接，不要点击)")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(342),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"防范措施"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防范措施"}},[t._v("#")]),t._v(" 防范措施")]),t._v(" "),e("ol",[e("li",[t._v("Cookie的SameSite属性")])]),t._v(" "),e("p",[t._v("CSRF攻击中重要的一环就是自动发送目标站点下的"),e("code",[t._v("Cookie")]),t._v(",然后就是这一份"),e("code",[t._v("Cookie")]),t._v("模拟了用户的身份。因此在"),e("code",[t._v("Cookie")]),t._v("上面下文章是防范的不二之选。")]),t._v(" "),e("p",[e("code",[t._v("SameSite")]),t._v("可以设置为三个值，"),e("code",[t._v("Strict")]),t._v("、"),e("code",[t._v("Lax")]),t._v("和"),e("code",[t._v("None")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("Strict")]),t._v("模式下，浏览器完全禁止第三方请求携带"),e("code",[t._v("Cookie")]),t._v("。比如请求"),e("code",[t._v("sanyuan.com")]),t._v("网站只能在"),e("code",[t._v("sanyuan.com")]),t._v("域名当中请求才能携带 "),e("code",[t._v("Cookie")]),t._v("，在其他网站请求都不能。")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("Lax")]),t._v("模式，就宽松一点了，但是只能在"),e("code",[t._v("get")]),t._v("方法提交表单况或者a标签发送"),e("code",[t._v("get")]),t._v("请求的情况下可以携带"),e("code",[t._v("Cookie")]),t._v("，其他情况均不能。")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("None")]),t._v("模式下，也就是默认模式，请求会自动携带上 Cookie。")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Token验证(主流)")])]),t._v(" "),e("ul",[e("li",[t._v("服务端给用户生成一个"),e("code",[t._v("token")]),t._v("，加密后传递给用户")]),t._v(" "),e("li",[t._v("用户在提交请求时，需要携带这个"),e("code",[t._v("token")])]),t._v(" "),e("li",[t._v("服务端验证"),e("code",[t._v("token")]),t._v("是否正确")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Referer 验证")])]),t._v(" "),e("p",[e("code",[t._v("Referer")]),t._v(" 可以作为一种辅助手段，来判断请求的来源是否是安全的，但是鉴于 "),e("code",[t._v("Referer")]),t._v(" 本身是可以被修改的，因此不能仅依赖于  "),e("code",[t._v("Referer")])]),t._v(" "),e("h2",{attrs:{id:"xss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),e("p",[t._v("XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 cookie，session tokens，或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。")]),t._v(" "),e("p",[t._v("这些操作一般可以完成下面这些事情:")]),t._v(" "),e("ol",[e("li",[t._v("窃取Cookie。")]),t._v(" "),e("li",[t._v("监听用户行为，比如输入账号密码后直接发送到黑客服务器。")]),t._v(" "),e("li",[t._v("修改 DOM 伪造登录表单。")]),t._v(" "),e("li",[t._v("在页面中生成浮窗广告。")])]),t._v(" "),e("p",[t._v("通常情况，XSS 攻击的实现有三种方式——"),e("strong",[t._v("存储型、反射型和文档型")]),t._v("。原理都比较简单，先来一一介绍一下。")]),t._v(" "),e("h3",{attrs:{id:"存储型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),e("p",[e("code",[t._v("存储型")]),t._v("，顾名思义就是将恶意脚本存储了起来，确实，存储型的 XSS 将脚本存储到了服务端的数据库，然后在客户端执行这些脚本，从而达到攻击的效果。")]),t._v(" "),e("p",[t._v("常见的场景是留言评论区提交一段脚本代码，如果前后端没有做好转义的工作，那评论内容存到了数据库，在页面渲染过程中"),e("code",[t._v("直接执行")]),t._v(", 相当于执行一段未知逻辑的 JS 代码，是非常恐怖的。这就是存储型的 XSS 攻击。")]),t._v(" "),e("h3",{attrs:{id:"反射型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),e("p",[e("code",[t._v("反射型XSS")]),t._v("指的是恶意脚本作为"),e("strong",[t._v("网络请求的一部分")]),t._v("。")]),t._v(" "),e("p",[t._v("比如我输入:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('http://sanyuan.com?q=<script>alert("你完蛋了")<\/script>\n')])])]),e("p",[t._v("这样，在服务器端会拿到"),e("code",[t._v("q")]),t._v("参数,然后将内容返回给浏览器端，浏览器将这些内容作为HTML的一部分解析，发现是一个脚本，直接执行，这样就被攻击了。")]),t._v(" "),e("p",[t._v("之所以叫它"),e("code",[t._v("反射型")]),t._v(", 是因为恶意脚本是通过作为网络请求的参数，经过服务器，然后再反射到HTML文档中，执行解析。和"),e("code",[t._v("存储型")]),t._v("不一样的是，服务器并不会存储这些恶意脚本。")]),t._v(" "),e("h3",{attrs:{id:"文档型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档型"}},[t._v("#")]),t._v(" 文档型")]),t._v(" "),e("p",[t._v("文档型的 XSS 攻击并不会经过服务端，而是作为中间人的角色，在数据传输过程劫持到网络数据包，然后修改里面的 html 文档！")]),t._v(" "),e("p",[t._v("DOM 型 XSS 攻击，实际上就是前端"),e("code",[t._v("JavaScript")]),t._v("代码不够严谨，把不可信的内容插入到了页面。在使用 "),e("code",[t._v(".innerHTML")]),t._v("、"),e("code",[t._v(".outerHTML")]),t._v("、"),e("code",[t._v(".appendChild")]),t._v("、"),e("code",[t._v("document.write()")]),t._v("等API时要特别小心，不要把不可信的数据作为 HTML 插到页面上，尽量使用"),e("code",[t._v(".innerText")]),t._v("、"),e("code",[t._v(".textContent")]),t._v("、"),e("code",[t._v(".setAttribute()")]),t._v("等。")]),t._v(" "),e("h3",{attrs:{id:"防范措施-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防范措施-2"}},[t._v("#")]),t._v(" 防范措施")]),t._v(" "),e("p",[t._v("明白了三种XSS攻击的原理，我们能发现一个共同点: "),e("strong",[t._v("都是让恶意脚本直接能在浏览器中执行")]),t._v("。")]),t._v(" "),e("p",[t._v("那么要防范它，就是要避免这些脚本代码的执行。")]),t._v(" "),e("ol",[e("li",[t._v("无论是在前端和服务端，都要对用户的输入进行转码或者过滤。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/&/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&amp;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/</g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&lt;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/>/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&gt;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v('/"/g')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&quto;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/'/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&##39;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/`/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&##96;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\//g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&##x2F;'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过转义，将攻击代码变成")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<script>alert(1)<\/script>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// &lt;script&gt;alert(1)&lt;&##x2F;script&gt;")]),t._v("\n")])])]),e("p",[t._v("当然也可以利用关键词过滤的方式，将 script 标签给删除。那么现在的内容只剩下:什么也没有了:）")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("HttpOnly")])]),t._v(" "),e("p",[t._v("很多XSS攻击脚本都是用来窃取"),e("code",[t._v("Cookie")]),t._v(", 而设置"),e("code",[t._v("Cookie")]),t._v("的"),e("code",[t._v("HttpOnly")]),t._v("属性后，JavaScript便无法读取"),e("code",[t._v("Cookie")]),t._v("的值。这样也能很好的防范XSS攻击。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("CSP")])]),t._v(" "),e("p",[t._v("在服务端使用 HTTP的"),e("code",[t._v("Content-Security-Policy")]),t._v("头部来指定策略，或者在前端设置"),e("code",[t._v("meta")]),t._v("标签。")]),t._v(" "),e("p",[t._v("例如下面的配置只允许加载同域下的资源：")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("Content-Security-Policy: default-src 'self'\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form-action 'self';"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("严格的 CSP 在 XSS 的防范中可以起到以下的作用：")]),t._v(" "),e("ul",[e("li",[t._v("限制其他域下的资源加载。")]),t._v(" "),e("li",[t._v("禁止向其它域提交数据。")]),t._v(" "),e("li",[t._v("禁止内联脚本执行（规则较严格，目前发现 GitHub 使用）。")]),t._v(" "),e("li",[t._v("禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。")]),t._v(" "),e("li",[t._v("合理使用上报可以及时发现 XSS，利于尽快修复问题。")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("对于url链接(例如图片的src属性)，那么直接使用"),e("code",[t._v("encodeURIComponent")]),t._v("来转义。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);