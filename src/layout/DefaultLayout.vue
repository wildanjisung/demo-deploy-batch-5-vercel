<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/setting">Setting</router-link> |
      <router-link to="/setting/privacy">Privacy</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped>
.container {
  margin-left: 50px
}
</style>