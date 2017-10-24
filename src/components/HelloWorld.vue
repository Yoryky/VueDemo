<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ol>
        <todo-item></todo-item>
      </ol>
    </div>
    <button v-on:click="reverseMessage">逆转消息</button>
    <my-component
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </my-component>
    <button v-on:click="alertNewWindow">路由窗口1</button>
    <button v-on:click="alertParent">父子窗口测试</button>

  </div>
</template>

<script>
import Vue from 'vue'
import MyComponent from './MyComponent.vue'
Vue.component('todo-item', {
  template: '<li>待办事项策略</li>'
})

export default {
  name: 'HelloWorld',
  components: {
    MyComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'ni hao',
      seen: true,
      todos: [{ text: '学习javascrit' }, { text: '学习vue' }, { text: '学习jav' }],
      groceryList: [{ id: 0, text: '蔬菜' }]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },
    alertNewWindow: function () {
      this.$router.push({path: '/content-patent'})
    },
    alertParent: function () {
      this.$router.push({path: '/test-parent'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
