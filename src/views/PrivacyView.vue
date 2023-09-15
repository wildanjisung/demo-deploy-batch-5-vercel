<template>
  <div>
    <h1>This is an Privacy page</h1>
    <h3>ini adalah parameter dinamis: {{ id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView',
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
