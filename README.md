
# 问题描述

无界微前端框架下，trigger 的位置计算有问题。


## 相关知识

 - [无界](https://wujie-micro.github.io/doc/)
 - [冒泡系列组件（比如下拉框）弹出位置不正确](https://wujie-micro.github.io/doc/question/#_4%E3%80%81%E5%86%92%E6%B3%A1%E7%B3%BB%E5%88%97%E7%BB%84%E4%BB%B6-%E6%AF%94%E5%A6%82%E4%B8%8B%E6%8B%89%E6%A1%86-%E5%BC%B9%E5%87%BA%E4%BD%8D%E7%BD%AE%E4%B8%8D%E6%AD%A3%E7%A1%AE)
 - [arco design vue - trigger](https://arco.design/vue/component/trigger)


## 问题复现

### 启动子应用

1. `cd sub-project`
2. `npm i`
3. `npm run dev`

### 启动主应用

1. `cd main-project`
2. `npm i`
3. `npm run dev`

main-project\src\App.vue中注意 `url` 的填写，填写子应用启动的url.

```html
<!-- 子应用 的id 和 地址端口-->
<a-layout-content>
    <WujieVue
    width="100%"
    height="100%"
    name="sub"
    url="http://127.0.0.1:5173/"
    :sync="true"
    ></WujieVue>
</a-layout-content>
```


