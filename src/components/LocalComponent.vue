<template>
    <div>
      <h2>Local Component</h2>
      <button @click="emitEvent">Click Me</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LocalComponent',
    methods: {
      emitEvent() {
        this.$emit('local-event', 'Hello from Local Component');
      }
    }
  };
  </script>  