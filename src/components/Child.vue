<<template>
  <div>
      <h2>child子组件部分</h2>
      <p>{{message}}</p>
      <button v-on:click="sendMsgToParent">向父组件传值</button>
  </div>
</template>

<script>
export default {
  name: 'child-component',
  props: ['message'],
  data () {
    return {
      message: 'wo shi'
    }
  },
  methods: {
    sendMsgToParent: function () {
      this.$emit('listenToChildEvent', 'message from child')
    }
  },
  created: function () {
    console.log('message is: ' + this.message)
  }
}
</script>

<style>

</style>