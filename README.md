# VUE

标签（空格分隔）： JavaScript从入门到放弃 VUE初步

---

## 1.概述
Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的库。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。

Vue.js 自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。

## 2.MVVM
### 3.1 MVC
MVC模式的意思是，软件可以分成三个部分:

 - 视图（View）：用户界面。
 - 控制器（Controller）：业务逻辑
 - 模型（Model）：数据保存

各部分通讯方式为：

 - View 传送指令到 Controller
 - Controller 完成业务逻辑后，要求 Model 改变状态
 - Model 将新的数据发送到 View，用户得到反馈

MVC框架的代表是`Backbone`

### 3.2 MVP
MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

 - 各部分之间的通信，都是双向的。
 - View 与 Model 不发生联系，都通过 Presenter 传递。
 - View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

### 3.3 MVVM
MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。
唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。


  参考链接：[MVC，MVP 和 MVVM 的图示-阮一峰](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

## 4.数据绑定
### 4.1 插值
数据绑定最基础的形式是文本插值，使用 `{{  }}` 语法（双大括号）：
```
<span>TEXT: {{ text }}</span>
```
 `{{  }}`  标签会被相应数据对象的 text 属性的值替换。每当这个属性变化时它也会更新。
也可以处理单次插值，后续数据变化就不在进行改变了
```
<span>TEXT: {{*text}}</span>
```

 `{{  }}` 还可以放在html内

```
<li data-id="{{id}}"></li>
```

**VUE指令和自身特性是不可以插值的，如果使用了插值，vue发出警告**

插值还可以绑定表达式：
```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}
```
这些表达式将在所属的 Vue 实例的作用域内计算。一个限制是每个绑定只能包含**单个表达式**，因此下面的语句是无效的：
```
<!-- 这是一个语句，不是一个表达式： -->
{{ var a = 1 }}

<!-- 流程控制也不可以，可改用三元表达式 -->
{{ if (ok) { return message } }}
```

## 5 指令
>指令 (Directives) 是特殊的带有前缀 v- 的特性。指令的值限定为绑定表达式，因此上面提到的 JavaScript 表达式及过滤器规则在这里也适用。指令的职责就是当其表达式的值改变时把某些特殊的行为应用到 DOM 上。

### 5.1 v-if
v-if指令 根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是`<template>`，将提出它的内容作为条件块。

注意：v-if指令操作的是 **DOM** ，当表达式为`true`的时候，会把绑定的元素添加到DOM中，如果表达式为`false`，对应的元素就会从DOM中移除

```
<h1 v-if="ok">Yes</h1>
```
在使用v-if的同时也可以添加一个v-else
```
<div id="dom">
    <h1 v-if="ok">我是对的</h1>
    <h2 v-else="ok">我是错的</h2>
</div>

<script>
var vue = new Vue({
    el:'#dom',
    data:{
        ok:true
    }
});
</script>
```
上面的例子中，当data中的ok为`true`的时候，显示h1，否则显示h2
如果需要对多个标签的添加，可以使用`template`标签。在页面中这个标签不会被输出
```
<template v-if="ok">
    <div class="aaa">这里是true的模块儿内容</div>
    <div class="aaa">这里是true的模块儿内容</div>
    <div class="aaa">这里是true的模块儿内容</div>
    <div class="aaa">这里是true的模块儿内容</div>
</template>
<template v-else="ok">
    <div class="aaa">false</div>
    <div class="aaa">false</div>
    <div class="aaa">false</div>
    <div class="aaa">false</div>
</template>
```

### 5.2 v-else
可以用 v-else 指令给 v-if 或 v-show 添加一个 “else 块”
```
<div id="dom">
    <h1 v-show="ok">我是对的</h1>
    <h2 v-else="ok">我是错的</h2>
</div>
```

### 5.3 v-show
另一个根据条件展示元素的选项是 v-show 指令。用法大体上一样：
```
<div id="dom">
    <h1 v-show="ok">我是对的</h1>
</div>
<script>
var vue = new Vue({
    el:'#dom',
    data:{
        ok:true,
        end:false
    }
})
</script>
```
不同的是有 v-show 的元素会始终渲染并保持在 DOM 中。v-show 是简单的切换元素的 CSS 属性 display。

![image_1atdbuqrp1bvn10rg147m1u2amgr9.png-11.4kB](http://static.zybuluo.com/dilidili/n270517gwqfm0vmpmq3d59hj/image_1atdbuqrp1bvn10rg147m1u2amgr9.png)

**注意 v-show 不支持 `<template>` 语法。**

如果对`template`语法使用v-show指令，那么不会被渲染，DOM结构中会出现下图的样子

![v-show template](http://static.zybuluo.com/dilidili/5wot8ax6soc7y14pxkt9nvma/image_1atdbfmsd15366p81h04m9g1a4c9.png )

**将v-show用在组件上的时候，因为指令的优先级，v-else会出现问题，所以不要这么做。我们可以使用另外一个v-show标签替换v-else**
例如：
```
<div id="dom">
    <h1 v-show="ok">我是对的</h1>
    <h2 v-show="!ok">我是错的</h2>
</div>
<script>
var vue = new Vue({
    el:'#dom',
    data:{
        ok:true,
        end:false
    }
})
</script>
```
### 5.4 v-model
>可以用 v-model 指令在表单控件元素上创建双向数据绑定。根据控件类型它自动选取正确的方法更新元素。尽管有点神奇，v-model 不过是语法糖，在用户输入事件中更新数据，以及特别处理一些极端例子。

#### 5.4.1 文本的双向数据绑定
```
<!--text-->
<div id="inp">
    <span>name:{{ data.message }}</span>
    <br>
    <input type="text" v-model="data.message">
    <br>
</div>

<script>
    var vue1 = new Vue({
        el:'#inp',
        data:{
            data:{
                message:'hello Vue!'
            }
        }
    });
</script>
```

#### 5.4.2 checkbox
单个checkbox的状态
```
<input type="checkbox" id="checkbox" v-model="data.checked">
<label for="checkbox">{{ data.checked }}</label>

<script>
    var vue1 = new Vue({
        el:'#inp',
        data:{
            data:{
                message:'hello Vue!',
                checked:null,
            }
        }
    });
</script>
```
多个勾选框，绑定到同一个数组：
```
<input type="checkbox" id="jack" value="Jack" v-model="data.checkNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="data.checkNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="data.checkNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ data.checkNames | json }}</span>

<!--这里的数据使用了json过滤器，将输出的数组转换为了json-->
<script>
    var vue1 = new Vue({
        el:'#inp',
        data:{
            data:{
                message:'hello Vue!',
                checked:null,
                checkNames:[]
            }
        }
    });
</script>
```
#### 5.4.3 radio
```
<input type="radio" id="one" value="One" v-model="data.packer">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="data.packer">
<label for="two">Two</label>
<br>
<span>Picked: {{ data.packer }}</span>

<script>
    var vue1 = new Vue({
        el:'#inp',
        data:{
            data:{
                message:'hello Vue!',
                checked:null,
                checkNames:[],
                packer:""
            }
        }
    });
</script>
```
#### 5.4.4 select
单选：
```
<select v-model="data.sel">
    <option selected>A</option>
    <option>B</option>
    <option>C</option>
</select>
<span>Selected: {{ data.sel }}</span>

<script>
    var vue1 = new Vue({
        el:'#inp',
        data:{
            data:{
                message:'hello Vue!',
                checked:null,
                checkNames:[],
                packer:"",
                sel:''
            }
        }
    });
</script>
```

## 1.属性计算
vue中可以在html的插值中放入表达式 

```
<div id="demo">
	<p>message:{{ message.split("").reverse().join("") }}</p>
</div>
<script>
	var vm = new Vue({
		el:'#demo',
		data:{
			message:'hello Vue!'
		}
	});
</script>
```
在模板中放入表达式非常便利，模板是为了描述视图的结构。但是在模板中放入太多逻辑，使得模板过重难以维护。  

为了便于维护，我们会把复杂的逻辑放入属性计算中，也就是Vue实例的选项参数中的`computed`属性中。  
```
<div id="demo">
	<p>{{rev}}</p>
</div>
<script>
	var vm = new Vue({
		el:'#demo',
		data:{
			message:'hello Vue!'
		},
		computed:{
			rev:function(){
				return this.message.split('').reverse().join("");
			}
		}
	});
</script>
```
对vue实例中的message修改，同时会在页面上反馈出来
```
vm.message = "这个是一个date!";
```
除了计算属性可以达到模板与逻辑分离，methods也可以实现  
```
<div id="demo">
	<p>{{rev}}</p>
	<p>{{revs()}}</p>
	<p>{{revs}}</p>
</div>
<script>
	var vm = new Vue({
		el:'#demo',
		data:{
			message:'hello Vue!'
		},
		computed:{
			rev:function(){
				return this.message.split('').reverse().join("");
			}
		},
		methods:{
			revs:function(){
				return this.message.split('').reverse().join('');
			}
		}
	});
	
	vm.message = "这是一个date!";
</script>
```
但是`methods`的计算和`computed`的计算有一些区别，他们之间最大的区别在于计算缓存。  

 - 计算缓存基于它依赖的数据，计算属性只有在它所依赖的数据发生改变改回重新执行得到值。如果数据不发生改变，多次访问计算属性，只会返回之前计算后的值，不会调用函数。  
 - 使用methods计算，每一次运算都会调用一次函数。  

所以：
**在计算大量数据的时候，推荐使用`computed` 而不希望使用缓存的时候，推荐使用`methods`**  

除了使用计算属性和methods之外，还可以讲逻辑放在watch中，观察数据改变做出相应的操作
```
<div id="demo">
	<input type="text"	v-model="que" />
	<p>{{que}}</p>
	<p>{{ans}}</p>
</div>
<script>
	var vm = new Vue({
		el:'#demo',
		data:{
			que:"",
			ans:'this is ans'
		},
		watch:{
			que:function(value){
				this.ans = "que has chenged"
			}
		}
	})
```
在这个例子中，当文本框输入内容之后，下方文本会变成*que has chenged*  
## 2.class与style绑定
> class和style可以使用 v-bind来绑定到元素上。
  v-bind在处理的时候只需要计算出表达式最终的字符串。
  v-bind:class 不止是可以用字符串，也可以使用对象或数组
  
### 2.1 class的绑定
```
<div id="demo">
	<p :class="className1">测试className为字符串</p>
	<p :class="{blue:isActive}">测试className为对象，如果isActive为true则添加</p>
	<p class="fontSize" :class="{red:isActive}">可以和普通的class特性共存</p>
	<p :class="classObj">绑定数据里的对象</p>
	<p :class="addClassObj">绑定计算属性，功能更加强大</p>
	<p :class='[isActive ? "red" : "","fontSize"]'>绑定数据里的数组,可以写三目表达式</p>
	<p :class='[{blue:isActive},"fontSize"]'>绑定数据里的数组,可使用对象形式代替三目表达式</p>
</div>

<script>
	var vm = new Vue({
		el:'#demo',
		data:{
			className1:'red',
			isActive:true,
			classObj:{
				red:false,
				fontSize:true
			}
		},
		computed:{
			addClassObj:function(){
				return {
					blue:this.isActive,
					fontSize:true
				}
			}
		}
	});
</script>
```
### 2.2 style的绑定
`v-bind`在处理的时候只需要计算出表达式最终的字符串
`v-bind:style`是一个对象的形式  

```
<div id="demo">
	<p v-bind:style="{color:'red','font-size':'50px'}">绑定对象字符串的形式</p>
	<p v-bind:style="styleObj">绑定数据中的对象</p>
	<p v-bind:style="[styleObj1,styleObj2]">绑定数组</p>
	<p v-bind:style="addStyleObj">使用计算属性</p>

</div>
<script>
var vm = new Vue({
			el:"#demo",
			data:{
				styleObj:{color:'blue','font-size':'30px'},
				styleObj1:{
					'font-size': "50px"
				},
				styleObj2:{
					border: '1px solid #000'
				}
			},
			computed:{
				addStyleObj:function (){
					//可以在这里做一系列操作
					return {
						color:'red',
						border: '1px solid #000'
					}	
				}
			}
		});
</script>
```


# Vue-定义组件

标签（空格分隔）： Vue

---
>组件可以扩展html元素，封装可重用的代码，是自定义元素，由vue编译器提供特殊功能。  

## 1. 定义组件
### 1.局部定义组件
如果想局部的定义组件，我们可以使用Vue对象中的`comonent`属性，在其中定义。
```
var vm = new Vue({
    el:'#app',
    data:{
        
    },
    component:{
        'ui-button':'<button> a button</button>'
    }
})
```
然后在页面中调用这个ui-button组件
```
<div id="app">
    <ui-button></ui-button>
    <ui-button></ui-button>
    <ui-button></ui-button>
</div>
```
![image_1b1tl7fi81789ietlh915itq0o9.png-2kB][1]    

![image_1b1tl85qdq4govprhg15101ijum.png-6.6kB][2]  

在局部范围内定义的组件，我们只能在这个vue对象中去使用。

### 1.2 全局定义组件
当我们想全局定义组件的时候，我们就需要使用Vue的component方法了。
```
Vue.compinent();
```
这个方法有两个参数，第一个参数是组件的名字，第二个参数是一些相关的选项（object）
```
 Vue.component('ui-button',{
    template:'<button>this is a component button</button>'
});
```
使用这个方法定义的组件，我们可以在任意的vue实例中去注册使用它。
![image_1b1tlk0141uvb1qkr1f2m1cbucj21g.png-6.1kB][3]  

![image_1b1tlkaqqvtm1r9v1552qn016sh1t.png-3.2kB][4]  

### 1.3自定义组件的限制：
当使用 DOM 作为模版时（例如，将el选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。尤其像这些元素 `<ul>` ， `<ol>`， `<table>` ， `<select>` 限制了能被它包裹的元素，`<option>`只能出现在其它元素内部。    

在自定义组件中使用这些受限制的元素时会导致一些问题。  

例如：
```
<table>
    <my-row></my-row>
</table>
```
在这里，自定义组件会被任务是无效内容，在渲染的时候会导致错误。我们可以使用特殊属性`is` 
```
<table>
   <tr is="my-row"></tr>
</table>
```
应当注意，如果您使用来自以下来源之一的字符串模板，这些限制将不适用：  

 - `<script type="text/x-template">`
 - JavaScript内联模版字符串
 - .vue 组件

因此，有必要的话请使用字符串模版。

### 1.4 组件中的data
组件中的data必须是是函数，如果不是函数，浏览器会发出警告。  
```
var vm = new Vue({
    el:'#app',
    data:{

    }
});  

Vue.component('my-span',{
    template:'<span>{{message}}</span>',
    data:{
        massage:'hello'
    }
})
```
![image_1b209gug5bvqv617g61kgj1q0g9.png-6.1kB][5]

为什么必须是一个函数？我们来看下面这个例子：
```
<div id="demo">
    <s-button></s-button>
    <s-button></s-button>
    <s-button></s-button>
</div>

<script>
    var data = {count:0};
    Vue.component('s-button',{
        template:'<button v-on:click="count++">{{count}}</button>',
        data:function(){
            return data;
        }
    });
    new Vue({
        el:'#demo'
    });
</script>
```
当点击组件中的button的时候，由于是对同一个对象进行的修改，导致所有button中的data同时被修改。  

如果我们换一种写法：
```
Vue.component('s-button',{
    template:'<button v-on:click="count++">{{count}}</button>',
    data:function(){
        return {
            count:0
        }
    }
});

new Vue({
    el:'#demo'
});
```
这样，每个组件的data就独立了出来，不会相互影响了。  



  [1]: http://static.zybuluo.com/dilidili/ow7xehgq4ay4us2qrf65l47o/image_1b1tl7fi81789ietlh915itq0o9.png
  [2]: http://static.zybuluo.com/dilidili/07ab4w19n2m8yvcis66ru4gb/image_1b1tl85qdq4govprhg15101ijum.png
  [3]: http://static.zybuluo.com/dilidili/5uya0prpbj1zykkymhs0mee3/image_1b1tlk0141uvb1qkr1f2m1cbucj21g.png
  [4]: http://static.zybuluo.com/dilidili/3t954b3n7z32uafzwrv4wwg5/image_1b1tlkaqqvtm1r9v1552qn016sh1t.png
  [5]: http://static.zybuluo.com/dilidili/2s753uy3bpx70xt0i5w26nb0/image_1b209gug5bvqv617g61kgj1q0g9.png



# Vue-组件间的通信

标签（空格分隔）：Vue

---
>组件意味着协同工作，通常父子组件会是这样的关系：  
组件 A 在它的模版中使用了组件 B。它们之间必然需要相互通信：父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件。  

>然而，在一个良好定义的接口中尽可能将父子组件解耦是很重要的。这保证了每个组件可以在相对隔离的环境中书写和理解，也大幅提高了组件的可维护性和可重用性。  

>在 Vue.js 中，父子组件的关系可以总结为 `props-down`, `events-up` 。父组件通过 `props` 向下传递数据给子组件，子组件通过 `events` 给父组件发送消息。  

## 1. 使用属性传递数据
每个组件实例都有自己独立的作用域，这意味着你不能并且不该在子组件的模板里直接引用父组件的数据。由父组件向子组件传递数据可以通过 `prop` 来完成。  

属性就是用来从父组件传递信息的自定义属性。子组件需要显式地用 `props` 选项 来明确声明它要接收的属性：  
```
<div id="app">
    <hello-span message="hello Vue!"></hello-span>
</div>
<script>
    Vue.component('hello-span',{
        template:'<span>{{message}}</span>',
        props:['message']
    });

    new Vue({
        el:"#app"
    })
</script>
```
注意：HTML属性是不区分大小写的，所以当使用非模板字符串的时候，需要使用短横分割命名标签名，使用驼峰命名法命名属性名
```
<div id="app">
    <hello-span my-mes="hello Vue!"></hello-span>
</div>
<script>
    Vue.component('hello-span',{
        template:'<span>{{myMes}}</span>',
        props:['myMes']
    });

    new Vue({
        el:"#app"
    })
</script>
```
如果不符合要求，浏览器会报错。

## 2.父组件传递给子组件
我们可以使用v-bind方法将组件的属性绑定到父组件的数据，这样，当父组件的数据发生变化的时候，就会传递给子组件。  
```
 <div id="app2">
   <!-- 可以使用v-bind方法将组件的属性绑定到父组件的数据，这样，当父组件的数据发生变化的时候，就会传递给子组件-->
    {{message}}
    <br>
    这里是子组件1
    <br>
    <child-com v-bind:message="message"></child-com>

    这里是子组件2
    <br>
    <child-com v-bind:options-obj="optionsObj"></child-com>
    这里是子组件3
    <br>
    <child-com></child-com>
</div>


<script>
    Vue.component('child-com',{
        //声明props
        props:["message",'optionsObj'],
        //设置模板
        template:'<p> hello 父组件信息{{message}} + 子组件的信息{{optionsObj}} </p>'
    });
    new Vue({
       el:'#app2',
        data:{
           message:'HELLO VUE',
            "optionsObj":[1,2,3]
        }
    });
</script>
```
实现的效果是这样的  
![image_1b2icd6bnf52149s9n4dfc1499.png-8kB][6]
在页面中的结构如下
![image_1b2ice0pdrj5i6cbg71h88b47m.png-17kB][7]  


## 3.单向数据流
在Vue的组件中，所有数据都是单向的。父组件的属性变化时，会传递给子组件。但并不会反向传递。这就避免了子组件不小心改变父组件状态的情况，使得应用的数据流更容易推理，而且，每次更新父组件，子组件的所有属性值都会被更新成最新值。
**不能在子组件内改变属性的值，否则控制台会报错**


  [6]: http://static.zybuluo.com/dilidili/946q5661gp2cjl1coseyeorf/image_1b2icd6bnf52149s9n4dfc1499.png
  [7]: http://static.zybuluo.com/dilidili/emhz1ez5blwppwfjqpeoplao/image_1b2ice0pdrj5i6cbg71h88b47m.png


# Vue中的事件，属性

标签（空格分隔）： Vue

---
## 1.事件对象 `$event`
vue中封装了事件对象，在事件调用的时候传入参数`$event`便可以使用
```
<input type="button" value="按钮" @click="show($event)">

 window.onload=function(){
    new Vue({
        el:'#box',
        data:{

        },
        methods:{
            show:function(ev){
                alert(ev.clientX);
            }
        }
    });
};
```
在这个`$event`中封装了原生JS的事件对象的各种方法，使用方法和原生JS完全相同。

## 2.事件冒泡和默认事件
在vue中，有两种取消事件冒泡的方式：

 - 1.使用事件对象
 - 2.在绑定事件时使用vue内置的阻止事件冒泡的方法

### 2.1 使用事件对象组织事件冒泡和默认事件

```
<div id="box">
    <div @click="show2()">
        <input type="button" value="按钮" @click="show()" @mousemove="stop($event)">
    </div>
</div>

window.onload=function(){
    new Vue({
        el:'#box',
        data:{

        },
        methods:{
            show:function(ev){
                alert(1);
                ev.cancelBubble=true;

            },
            show2:function(){
                alert(2);
            },
            stop:function(ev){
                //在input框中阻止拖动选择文字
                ev.preventDefault();
            }
        }
    });
};
```
使用事件对象阻止事件冒泡和默认事件，使用Js的原生的方法即可。

### 2.2使用Vue方法阻止
```
 <div @click="show2()">
    <input type="button" value="按钮" @click.stop="show()" @mousemove.prevent="stop()">
</div>

 window.onload=function(){
    new Vue({
        el:'#box',
        data:{

        },
        methods:{
            show:function(){
                alert(1);
            },
            show2:function(){
                alert(2);
            },
            stop:function(){
                //在input框中阻止拖动选择文字
            }
        }
    });
};
```
Vue中提供了`.stop`和`.prevent`方法，分别来阻止事件冒泡和浏览器默认事件

## 3.键盘事件
### 3.1 keyCode
在Vue中封装了keyCode事件，可以在事件绑定的时候使用后缀来添加，类似组织事件冒泡的方法。
```
 <input type="text" @keydown.13="show()">
```
### 3.2 常用键盘按键
在Vue中封装了常用的键盘按键的事件，例如回车,上下左右等等。
```
<input type="text" @keydown.enter="show()">
<input type="text" @keydown.up="show()">
<input type="text" @keydown.down="show()">
<input type="text" @keydown.left="show()">
<input type="text" @keydown.right="show()">
```
## 4.属性绑定
在Vue中使用v-bind来绑定在Vue实例中有体现属性

Vue不推荐使用这种方式，使用这样的方式可以展示出图片，但是会在控制台报错
```
<img src="{{url}}" />
```

Vue推荐使用v-bind来绑定属性
```
<img v-bind:src="url" />
```
`v-bind：src`可以简写为`：src`

### 4.1 class
当使用Vue中的数据来修改class的时候，有以下几种用法：

#### 4.1.1 使用数组进行class绑定
多个class绑定的时候，可以使用数组的形式去绑定，但是数组的值对应的是Vue对象中的数据。
```
<style>
    .red{  color:red;  }
    .blue{  background: blue;  }
</style>

<div id="box"  :class="[red,b]">AAAAA</div>

<script src="../js/vue.js"></script>
<script>
    new Vue({
        el:'#box',
        data:{
            red:'red',
            b:'blue'
        }
    });
</script>
```

#### 4.1.2 使用对象进行class的绑定
可以使用一个对像来绑定这个class，这种情况多用于在不同情况下添加或者取消class
```
<div id="box"  :class="{red:red,blue:b}">AAAAA</div>

<script src="../js/vue.js"></script>
<script>
    new Vue({
        el:'#box',
        data:{
            red:'red',
            b:true
        }
    });
</script>
```
在这种绑定方式下，class对应的对象的key是className,class对应的value是一个数据。当这个数据是false的时候就不添加这个class，反之添加这个class

也可以直接使用vue实例中的数据去绑定class
```
<div id="box"  :class="classJson">AAAAA</div>

<script src="../js/vue.js"></script>
<script>
    new Vue({
        el:'#box',
        data:{
            classJson:{
                red:true,
                blue:true
            }
        }
    });
</script>
```

### 4.2 style

#### 4.2.1 使用数组进行style绑定
可以使用数组对style进行绑定，但是style绑定的数组中的值必须在Vue实例中以对象的形式去展现
```
<div id="box">
    <p :style="[a,b]">AAAA</p>
</div>

<script>
    new Vue({
        el:'#box',
        data:{
            a:{
                color:'red'
            },
            b:{
                backgroundColor:'blue'
            }
        }
    });
</script>
```
符合样式必须使用驼峰命名法

#### 4.2.1 使用对象进行style绑定
```
<div id="box">
    <p :style="[a,b]">AAAA</p>
    <P :style="json">bbbbb</P>
</div>
<script>
    new Vue({
        el:'#box',
        data:{
            a:{
                color:'red'
            },
            b:{
                backgroundColor:'blue'
            },
            json:{
                color:'white',
                backgroundColor:'black'
            }
        }
    });
</script>
```

## 5 模板
### 5.1 数据只绑定一次
当在{{}}中的数据使用*时，数据更新不会触发页面的更新
```
<div id="box">
    <input type="text" v-model="msg">
    <hr>
    <p>{{msg}}</p>
    <p>{{*msg}}</p>
</div>
<script src="../js/vue.js"></script>
<script>
    new Vue({
        el: '#box',
        data:{
            msg:'ACS'
        }
    })
</script>
```
### 5.2html转意输出
如果在数据绑定的时候使用`{{{}}}`的时候，可以吧html转为真实的标签

### 5.3 过滤器
Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。过滤器应该被添加在 mustache 插值的尾部，由“管道符”指示：
```
{{ message | capitalize }}
```

**Vue 2.x 中，过滤器只能在 mustache 绑定中使用。为了在指令绑定中实现同样的行为，你应该使用计算属性。**

可以在Vue实例中的filters来自定义过滤器
```
new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```
过滤器可以串联：
```
{{ message | filterA | filterB }}
```
也可以接受参数
```
{{ message | filterA('arg1', arg2) }}
```
这里，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。

