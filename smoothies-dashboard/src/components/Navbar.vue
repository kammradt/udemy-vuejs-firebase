<template>
  <v-toolbar color="secondary" dark>
    <v-toolbar-side-icon />
    <v-toolbar-title>Smoothies</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        color="primary"
        dark
        absolute
        bottom
        right
        fab
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>