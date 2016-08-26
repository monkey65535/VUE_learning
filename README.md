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

## 3. 插值
在上面的例子中，`{{message}}`叫做插值。

通过`{{value}}`的形式就能取到value的值，并与value进行绑定。Hello Vue中改变input中的值时相应也改变了js中的message，从而{{message}}也得到改变。

插值还支持一些简单的表达式：
```
{{message + 'vue is awesome'}}
{{ message.split('').reverse().join('') }}
```

## 4.常用的指令
### 4.1 v-model
> v-model可用于一些表单元素,常见的 input, checkbox,radio , select ,主要用于数据绑定。
```
<select v-model="selected" multiple>
  <option selected>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected | json }}</span>
```

### 4.2 v-for
列表渲染在实际开发中非常常见，vue.js使用v-for这个指令就能完成，在js中准备一些数据:
```
var bookData = {
		book: {
			id: 0,
			author: '',
			name: '',
			price: ''
		},
		books: [{
			id: 1,
			author: '曹雪芹',
			name: '红楼梦',
			price: 32.0
		}, {
			id: 2,
			author: '施耐庵',
			name: '水浒传',
			price: 30.0
		}, {
			id: '3',
			author: '罗贯中',
			name: '三国演义',
			price: 24.0
		}, {
			id: 4,
			author: '吴承恩',
			name: '西游记',
			price: 20.0
		}]
	}
```
可以使用 v-for 指令基于一个数组渲染一个列表。这个指令使用特殊的语法，形式为 item in items，items 是数据数组，item 是当前数组元素的别名： 在这个例子中，我们就使用book in books
```
<tr v-for="book in books">
				<td class="text-center">{{book.id}}</td>
				<td class="text-center">{{book.name}}</td>
				<td class="text-center">{{book.author}}</td>
				<td class="text-center">{{book.price}}</td>
				<td class="text-center">删除</td>
			</tr>
```

### 4.3 v-on
vue.js通过v-on完成事件处理与绑定，比如为一个button绑定click事件，我们就可以这么写:
```
<button v-on:click="doSomething">doSomething</button>
```
或者
```
<button @:click="doSomething">doSomething</button>
```
我们需要为v-on传入事件参数,然后在vue的实例中声明doSomething这个方法就可以调用了:
```
new Vue({
  el: '#app',
  methods: {
    doSomething: function () {
      /...../
    }
  }
})
```

