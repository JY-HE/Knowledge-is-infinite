# 从 CORS 简单请求+预检请求理解跨域

## 概述
当一个资源从与该资源本身所在的服务器不同的**域、协议、端口（只要一个不同）** 请求一个资源时，资源会发起一个跨域 HTTP 请求。同源策略参考[浏览器的同源策略 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

出于安全原因，浏览器限制从脚本内发起的跨源 HTTP 请求，XMLHttpRequest 和 Fetch API，只能从加载应用程序的同一个域请求 HTTP 资源，除非使用**CORS头文件**。

对于浏览器限制这个词，要着重解释一下：不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。

## CORS概述
跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。

另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），**浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。**

**服务器确认允许之后，才发起实际的 HTTP 请求。** 在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。

![图片URL](https://user-images.githubusercontent.com/25027560/50205846-accac300-03a4-11e9-8654-2d646d237820.png)

## 简单请求
不会触发CORS预检的请求称为简单请求，满足以下**所有条件**的才会被视为简单请求，基本上我们日常开发只会关注前面两点：
1. 使用`GET、POST、HEAD`其中一种方法
2. 只使用了如下的安全首部字段，不得人为设置其他首部字段
    * `Accept`
    * `Accept-Language`
    * `Content-Language`
    * `Content-Type` 仅限以下三种
        - `text/plain`
        - `multipart/form-data`
        - `application/x-www-form-urlencoded`
    * HTML头部 header field 字段：`DPR、Download、Save-Data、Viewport-Width、WIdth`
3. 请求中的任意`XMLHttpRequestUpload`对象均没有注册任何事件监听器；`XMLHttpRequestUpload`对象可以使用`XMLHttpRequest.upload`属性访问
4. 请求中没有使用`ReadableStream`对象

## 预检请求
需预检的请求要求必须首先使用`OPTIONS`方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。**预检请求**的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

下面的请求会触发预检请求，其实非简单请求之外的就会触发预检，就不用记那么多了。

1. 使用了`PUT、DELETE、CONNECT、OPTIONS、TRACE、PATCH`方法
2. 人为设置了非规定内的其他首部字段，参考上面简单请求的安全字段集合，还要特别注意`Content-Type`的类型
3. `XMLHttpRequestUpload`对象注册了任何事件监听器
4. 请求中使用了`ReadableStream`对象

以下是一个发起预检请求的例子
发起请求的`origin`与请求的服务器的`host`不同，而且根据上面的条件判断，触发了预检

![图片URL](https://user-images.githubusercontent.com/25027560/50205862-b6542b00-03a4-11e9-8101-a3d8523baa02.png)

![图片URL](https://user-images.githubusercontent.com/25027560/50205868-ba804880-03a4-11e9-95d9-d5f4df2816b0.png)

## 请求附带身份凭证（cookies）
如果发起请求时设置`withCredentials`标志设置为`true`，从而向服务器发送`cookie`， 但是如果服务器端的响应中未携带`Access-Control-Allow-Credentials: true`，浏览器将不会把响应内容返回给请求的发送者。

对于附带身份凭证的请求，服务器不得设置`Access-Control-Allow-Origin`的值为`*`， 必须是某个具体的域名。

注意，简单`GET`请求不会被预检；如果对此类带有身份凭证请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。

## 完整请求流程
![图片URL](https://user-images.githubusercontent.com/25027560/50205881-c409b080-03a4-11e9-8a57-a2a6d0e1d879.png)


文章借鉴于：https://github.com/amandakelake/blog/issues/62