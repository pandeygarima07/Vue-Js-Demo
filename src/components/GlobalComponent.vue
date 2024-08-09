<template>
    <div>
      <h2>Global Component</h2>
      <button @click="emitEvent">Click Me</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GlobalComponent',
    methods: {
      emitEvent() {
        this.$emit('global-event', 'Hello from Global Component');
      }
    }
  };
  </script>
  