<template>
  <div id="app">
    <header>
      <h1>Vue Applications</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/demo-basic">Demo</router-link> |
        <router-link to="/register">Register</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #223446;
  margin-top: 60px;
}

header {
  padding: 1em;
  background: #72949b;
  color: white;
}

nav {
  margin-bottom: 1em;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
}

nav a.router-link-active {
  font-weight: bold;
}

main {
  padding: 1em;
}
</style>
