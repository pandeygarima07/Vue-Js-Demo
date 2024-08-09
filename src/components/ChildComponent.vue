<template>
    <div>
      <h3>Child Component</h3>
      <p>{{ message }}</p>
      <button @click="notifyParent">Notify Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildComponent',
    props: ['message'],
    methods: {
      notifyParent() {
        this.$emit('child-event', 'Hello from Child Component');
      }
    }
  };
  </script>  