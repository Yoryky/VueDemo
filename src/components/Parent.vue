<template>  
  <div>
    <child-component v-bind:message="parentMsg" v-on:listenToChildEvent="showMessageFromChild"></child-component>
    <p>{{childMsg}}</p>
  </div>
</template>  
  
<script>
  import ChildComponent from './Child.vue'
  export default {
    name: 'hello',
    components: {
      ChildComponent
    },
    data () {
      return {
        parentMsg: 'Message from parent',
        childMsg: 'waiting message from child'
      }
    },
    methods: {
      showMessageFromChild: function (data) {
        this.childMsg = data
      }
    }
  }
</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>  
  h1, h2 {  
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