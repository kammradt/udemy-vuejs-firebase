<template>
  <v-app>
    <v-content>
      <router-view />
      <Navbar />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
