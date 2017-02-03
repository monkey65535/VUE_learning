/**
 * Created by Artoria on 2016/12/18 0018.
 */
var URL= 'weibo.php';
Vue.filter('formatTime',function(t){
    function Zero(n){
        return n<10?'0'+n:''+n;
    }
    //1467530956 ->
    var now = new Date(t*1000);
    var year = now.getFullYear();	//年
    var mon = now.getMonth()+1; 	//月
    var date = now.getDate();		//日
    var hour = now.getHours();		//时
    var min = now.getMinutes();		//分
    var sec = now.getSeconds();		//秒
    return year+'-'+Zero(mon)+'-'+Zero(date)+' '+Zero(hour)+':'+Zero(min)+':'+Zero(sec);
});

var vm = new Vue({
    el:'.znsArea',
    data:{
        newTextArea:"",
        weiboData:[],
        pageListNum:0,
        nowPage:0,
        pageAct:0
    },
    methods:{
        newSubmit:function(){
            this.$http({
                url:URL,
                data:{
                    act:"add",
                    content:this.newTextArea
                }
            }).then(function(re){
                if(re.status === 200){
                    this.weiboData.unshift({
                        id:re.data.id,
                        content:re.request.params.content,
                        time:re.data.time,
                        acc:0,
                        ref:0
                    });
                    if(this.weiboData.length>6){
                        this.weiboData.pop();
                        this.getPageListNum();
                    }
                    this.newTextArea = "";
                    /*{id:7,content:"312312312",time:1482050342,acc:0,ref:0}*/
                }
            })
        },
        changePage:function(re){
            this.getNowPage(re+1);
        },
        accFn:function(id){
            this.$http({
                url:URL,
                data:{
                    act:'acc',
                    id:id
                }
            }).then(function(re){
                if(re){
                    this.weiboData.forEach(function(e,i){
                        if(e.id === id){
                            e.acc++;
                        }
                    })
                }
            })
        },
        refFn:function(id){
            this.$http({
                url:URL,
                data:{
                    act:'ref',
                    id:id
                }
            }).then(function(re){
                if(re){
                    this.weiboData.forEach(function(e,i){
                        if(e.id === id){
                            e.ref++;
                        }
                    })
                }
            })
        },
        deleteFn:function(id){
            this.$http({
                url:URL,
                data:{
                    act:'del',
                    id:id
                }
            }).then(function(re){
                if(re){
                    this.nowPage = this.pageAct;
                    this.getNowPage(this.pageAct);
                    this.getPageListNum();
                }
            })
        },
        getPageListNum:function(){
            this.$http({
                url:URL,
                data:{
                    act:'get_page_count'
                }
            }).then(function(re){
                this.pageListNum = re.data.count;
            })
        },
        getNowPage:function(num){
            this.$http({
                url:URL,
                data:{
                    act:'get',
                    page:num
                }
            }).then(function(re){
               if(re){
                   this.weiboData = eval('('+ re.data +')');
               }
            })
        }
    },
    ready:function(){
        this.getPageListNum();
        this.getNowPage(0);
    }
});
