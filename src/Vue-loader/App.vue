<template>
    <h1>hello VUE!</h1>
    <h2 @click="change">{{msg}}</h2>
    <my-muem></my-muem>
</template>

<script>
    import Muem from './components/Muem.vue';
    export default {
        data(){
            return {
                msg:'welcome Vue;'
            }
        },
        methods:{
            change:function(){
                this.msg = 'hahha';
            }
        },
        components:{
            'my-muem':Muem
        }
    }
</script>

<style>

</style>