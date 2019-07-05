<template>
  <v-toolbar color="secondary" dark>
    <v-toolbar-side-icon />
    <router-link :to="{ name: 'Index' }">
      <v-toolbar-title>
        <v-btn outline color="white">Smoothies</v-btn>
      </v-toolbar-title>
    </router-link>
    <v-spacer />
    <v-toolbar-items>
      <router-link :to="{ name: 'AddSmoothie' }">
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
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  a { text-decoration: none }
</style>
