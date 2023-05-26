import{_ as e,o,c as a,N as t}from"./chunks/framework.e35b7731.js";const m=JSON.parse('{"title":"从 CORS 简单请求+预检请求理解跨域","description":"","frontmatter":{},"headers":[],"relativePath":"documents/cors.md","lastUpdated":1685072047000}'),c={name:"documents/cors.md"},r=t('<h1 id="从-cors-简单请求-预检请求理解跨域" tabindex="-1">从 CORS 简单请求+预检请求理解跨域 <a class="header-anchor" href="#从-cors-简单请求-预检请求理解跨域" aria-label="Permalink to &quot;从 CORS 简单请求+预检请求理解跨域&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>当一个资源从与该资源本身所在的服务器不同的<strong>域、协议、端口（只要一个不同）</strong> 请求一个资源时，资源会发起一个跨域 HTTP 请求。同源策略参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy" target="_blank" rel="noreferrer">浏览器的同源策略 | MDN</a></p><p>出于安全原因，浏览器限制从脚本内发起的跨源 HTTP 请求，XMLHttpRequest 和 Fetch API，只能从加载应用程序的同一个域请求 HTTP 资源，除非使用<strong>CORS头文件</strong>。</p><p>对于浏览器限制这个词，要着重解释一下：不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。</p><h2 id="cors概述" tabindex="-1">CORS概述 <a class="header-anchor" href="#cors概述" aria-label="Permalink to &quot;CORS概述&quot;">​</a></h2><p>跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。</p><p>另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），<strong>浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。</strong></p><p><strong>服务器确认允许之后，才发起实际的 HTTP 请求。</strong> 在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。</p><p><img src="https://user-images.githubusercontent.com/25027560/50205846-accac300-03a4-11e9-8654-2d646d237820.png" alt="图片URL"></p><h2 id="简单请求" tabindex="-1">简单请求 <a class="header-anchor" href="#简单请求" aria-label="Permalink to &quot;简单请求&quot;">​</a></h2><p>不会触发CORS预检的请求称为简单请求，满足以下<strong>所有条件</strong>的才会被视为简单请求，基本上我们日常开发只会关注前面两点：</p><ol><li>使用<code>GET、POST、HEAD</code>其中一种方法</li><li>只使用了如下的安全首部字段，不得人为设置其他首部字段 <ul><li><code>Accept</code></li><li><code>Accept-Language</code></li><li><code>Content-Language</code></li><li><code>Content-Type</code> 仅限以下三种 <ul><li><code>text/plain</code></li><li><code>multipart/form-data</code></li><li><code>application/x-www-form-urlencoded</code></li></ul></li><li>HTML头部 header field 字段：<code>DPR、Download、Save-Data、Viewport-Width、WIdth</code></li></ul></li><li>请求中的任意<code>XMLHttpRequestUpload</code>对象均没有注册任何事件监听器；<code>XMLHttpRequestUpload</code>对象可以使用<code>XMLHttpRequest.upload</code>属性访问</li><li>请求中没有使用<code>ReadableStream</code>对象</li></ol><h2 id="预检请求" tabindex="-1">预检请求 <a class="header-anchor" href="#预检请求" aria-label="Permalink to &quot;预检请求&quot;">​</a></h2><p>需预检的请求要求必须首先使用<code>OPTIONS</code>方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。<strong>预检请求</strong>的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。</p><p>下面的请求会触发预检请求，其实非简单请求之外的就会触发预检，就不用记那么多了。</p><ol><li>使用了<code>PUT、DELETE、CONNECT、OPTIONS、TRACE、PATCH</code>方法</li><li>人为设置了非规定内的其他首部字段，参考上面简单请求的安全字段集合，还要特别注意<code>Content-Type</code>的类型</li><li><code>XMLHttpRequestUpload</code>对象注册了任何事件监听器</li><li>请求中使用了<code>ReadableStream</code>对象</li></ol><p>以下是一个发起预检请求的例子 发起请求的<code>origin</code>与请求的服务器的<code>host</code>不同，而且根据上面的条件判断，触发了预检</p><p><img src="https://user-images.githubusercontent.com/25027560/50205862-b6542b00-03a4-11e9-8101-a3d8523baa02.png" alt="图片URL"></p><p><img src="https://user-images.githubusercontent.com/25027560/50205868-ba804880-03a4-11e9-95d9-d5f4df2816b0.png" alt="图片URL"></p><h2 id="请求附带身份凭证-cookies" tabindex="-1">请求附带身份凭证（cookies） <a class="header-anchor" href="#请求附带身份凭证-cookies" aria-label="Permalink to &quot;请求附带身份凭证（cookies）&quot;">​</a></h2><p>如果发起请求时设置<code>withCredentials</code>标志设置为<code>true</code>，从而向服务器发送<code>cookie</code>， 但是如果服务器端的响应中未携带<code>Access-Control-Allow-Credentials: true</code>，浏览器将不会把响应内容返回给请求的发送者。</p><p>对于附带身份凭证的请求，服务器不得设置<code>Access-Control-Allow-Origin</code>的值为<code>*</code>， 必须是某个具体的域名。</p><p>注意，简单<code>GET</code>请求不会被预检；如果对此类带有身份凭证请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。</p><h2 id="完整请求流程" tabindex="-1">完整请求流程 <a class="header-anchor" href="#完整请求流程" aria-label="Permalink to &quot;完整请求流程&quot;">​</a></h2><p><img src="https://user-images.githubusercontent.com/25027560/50205881-c409b080-03a4-11e9-8a57-a2a6d0e1d879.png" alt="图片URL"></p><p>文章借鉴于：<a href="https://github.com/amandakelake/blog/issues/62" target="_blank" rel="noreferrer">https://github.com/amandakelake/blog/issues/62</a></p>',27),d=[r];function i(l,s,n,p,h,u){return o(),a("div",null,d)}const T=e(c,[["render",i]]);export{m as __pageData,T as default};
