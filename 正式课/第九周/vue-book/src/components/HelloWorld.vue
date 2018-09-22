<template>
  <div class="hello">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from '@/common/tabs.vue';
  export default {
    name: 'HelloWorld',
    components:{
      //注册本组件 要使用的 的组件
      Tab
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

