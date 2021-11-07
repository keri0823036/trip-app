<template>
  <div id="app">
    <div id="viewer">
      <router-view></router-view>
    </div>
    <div id="navigation-bar">
      <NavigationBar />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
export default {
  name: 'App',
  components: { NavigationBar }
}
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 91px);
  background-color: var(--gray-20);

  #viewer {
    padding: 30px 12px;
  }

  #navigation-bar {
    position: fixed;
    bottom: 0;
  }
}
</style>
