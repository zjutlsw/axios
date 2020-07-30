# axios
Axios使用说明
通过axios简化了以前xmlhttprequest 以及fetch 对后端接口进行ajax请求的流程
并且他自己返回的是promise对象 所以可以通过async 和await 来对结果进行读取， 

同时他也支持浏览器或者nodejs端，前端调用是直接引入他的js文件，后端需要调用npm下载的安装包。

Axios支持函数调用和对象调用

Axios使用案例
另外注意 axios是post方式提交数据的时候  数据字段是用 data如
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
如果是get方式提交数据的时候，数据字段用params

Axios高阶使用
可以对axios进行必要封装提供适合自己的项目的设置
Const myAxios=axios.create({
  //新的实例可以对ajax请求进行基本的一些设置，比如 baseurl  headers或者timeout。
这样接下去调用axios接口的时候可以默认提供这些配置，简化使用代码。
});
同时 Axios可以对请求进行拦截 通过
myAxios.interceptors.request.use((config)=>{

//例如：config.headers.authorization=’token’
return config
})
请求拦截可以用在请求后端接口的时候 对请求的头或内容进行统一的处理 比如kwj
 Axios对响应进行拦截 通过
myAxios.interceptors.request.use((response)=>{
return response
},err=>{
  //第二个函数可以用来捕获错误信息
无需调用 return err;否则会引起接口调用方无法继续执行
})
响应拦截可以用在后端接口返回的时候对错误进行统一的处理。

怎么去熟悉一个新的技术体会，
首先第一步当然是去github找官方的库，通过他的说明去基本了解他的使用方法和一些案列，如果英文不行 可以使用翻译攻击了解他们的使用方法，但是这里并不包含具体的实现原理，可以考虑 把源码克隆到本地，然后关注几个文件夹第一个熟悉test下面的测试文件，里面包含了所有的测试条件以及他们的结果，如果要了解某个功能的具体的原理，首先要去package.json里找到入口文件，里面的main.js字段就表示了入口文件路径，然后进入文件以后，带着问题去寻找你刚刚的疑惑，比如方法该怎么去调用，先从总体上了解技术的实现框架，再具体的从某个内容出发一步一步去了解每个方法，最重要一点的就是 带着问题去看源码。

