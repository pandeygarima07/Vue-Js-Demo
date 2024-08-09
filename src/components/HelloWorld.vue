<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="changeMessage">Change Message</button>
    <p v-if="newMessage">{{ newMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    changeMessage() {
      this.newMessage = 'Its CLICKED!';
    }
  }
}
</script>

<style scoped>
.hello {
  font-size: 20px;
  color: #223446;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
