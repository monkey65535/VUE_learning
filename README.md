# VUE_learning
VUE_learning

## 1. Hello Vue
> vue是法语中视图的意思，Vue.js是一个轻巧、高性能、可组件化的MVVM库，同时拥有非常容易上手的API。作者是尤雨溪

首先我们来写一个Hello Vue!

```
HTML：
<div id="app">
    <div>{{message}}</div>
    <input type="text" v-model="message">
</div>

JS：

new Vue({
    el:"#app",
    data:{
        message:"hello Vue!"
    }

})
```
## 2.Vue实例
这里的new Vue是一个Vue的实例化对象。
```
new Vue({
   el:'#app'
});
```
在上面的 `Hello Vue` 例子中，HTML是view层，JS是model层，通过vue.js（使用v-model这个指令）完成中间的底层逻辑，实现绑定的效果。改变其中的任何一层，另外一层都会改变。 这就是双向数据绑定。 如果不想实现这个效果，可以在绑定v-model之后将前面的`{{message}}`写成`{{*message}}`

!(双向数据绑定)[/src/img/vue1.png]

