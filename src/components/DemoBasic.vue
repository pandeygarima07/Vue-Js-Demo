<template>
    <div id="app">
      <header>
        <h1>Basics Demo</h1>
      </header>
  
      <main>
        <!-- Data Binding -->
        <section>
          <h2>Data Binding</h2>
          <p>{{ message }}</p>
          <input v-model="message" placeholder="Edit this message" />
        </section>
  
        <!-- Event Handling -->
        <section>
          <h2>Event Handling</h2>
          <button @click="handleClick">Click Me</button>
          <p v-if="clicked">Button was clicked!</p>
        </section>
  
        <!-- Directives -->
        <section>
          <h2>Directives</h2>
          <ul>
            <li v-for="item in items" :key="item">{{ item }}</li>
          </ul>
          <p v-if="items.length === 0">No items found.</p>
        </section>
  
        <!-- Computed Properties -->
        <section>
          <h2>Computed Properties</h2>
          <p>Full Name: {{ fullName }}</p>
          <input v-model="firstName" placeholder="First Name" />
          <input v-model="lastName" placeholder="Last Name" />
        </section>
  
        <!-- Watchers -->
        <section>
          <h2>Watchers</h2>
          <p>Watch Value: {{ watchedValue }}</p>
          <input v-model="watchedValue" placeholder="Type to watch value" />
        </section>

        <!-- Components -->
        <section>
          <h1>Components Demo</h1>
          <GlobalComponent @global-event="handleGlobalEvent" />

          <LocalComponent @local-event="handleLocalEvent" />

          <ChildComponent message="This is a message passed from the parent" @child-event="handleChildEvent" />
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import GlobalComponent from './GlobalComponent.vue';
  import LocalComponent from './LocalComponent.vue';
  import ChildComponent from './ChildComponent.vue';

  export default {
    name: 'DemoBasic',
    components: {
      GlobalComponent,
      LocalComponent,
      ChildComponent
    },
    data() {
      return {
        message: 'Hello Vue!',
        clicked: false,
        items: ['Item 1', 'Item 2', 'Item 3'],
        firstName: '',
        lastName: '',
        watchedValue: ''
      }
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`
      }
    },
    methods: {
      handleClick() {
        this.clicked = true
      },
      handleGlobalEvent(data) {
        alert(data);
      },
      handleLocalEvent(data) {
        alert(data);
      },
      handleChildEvent(data) {
        alert(data);
      }
    },
    watch: {
      watchedValue(newValue) {
        console.log(`New watched value: ${newValue}`)
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  header {
    padding: 1em;
    background: #303d37;
    color: white;
  }
  
  main {
    padding: 1em;
    margin: 0 auto;
    max-width: 600px;
  }
  
  section {
    margin-bottom: 2em;
  }
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  input {
    margin: 0.5em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5em 1em;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  