<template>
  <v-container align-content-center>
    <v-flex font-weight-light display-2>
      Chat: {{ this.name }}
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    name: String
  },
  data () {
    return {
    }
  }
}
</script>
