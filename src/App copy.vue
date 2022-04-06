<template>
  <div id="app" class="app">
    <div class='sidebar'>
      <AspireLogo/>
      <NavBar/>
    </div>
    <div class='main-container'>asdfasdfsdafshdfdfdfv</div>
  </div>
</template>

<script>
import AspireLogo from './components/atoms/AspireLogo/AspireLogo'
import NavBar from './components/atoms/NavBar/NavBar'


export default {
  name: 'App',
  components: {
    AspireLogo,
    NavBar
  }
}
</script>

<style>
.app {
  width: 1366px;
}

.sidebar {
  display: inline-block;
  width: 340px;
  background: #0C365A;
  height: 770px;
}

.main-container {
  display: inline-block;
  width: 1016px;
}

body {
  font-family: Open Sans, Regular;
}
</style>
