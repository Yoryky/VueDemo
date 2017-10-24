<template>
  <div>
    <h1>我是一个自定义组件</h1>
    <h1>{{message}}</h1>
    <li>{{ todo.text }}</li>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  props: ['todo'],
  data () {
    return {
      message: 'wo shi'
    }
  },
  created: function () {
    console.log('message is: ' + this.message)
  }
}
</script>

