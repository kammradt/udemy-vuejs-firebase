<template>
  <v-container align-content-center>
    <v-card class="ma-3">
      <v-flex
        v-text="'Lets chat!  💬'"
        primary--text
        font-weight-light
        display-2
        text-xs-center
        pt-4
      />
      <v-layout row wrap ma-3>
        <v-flex xs12 v-for="i in [1,2,3,4,5,6]" :key="i" my-2>
          <v-flex
            v-text="`Name: ${i}: `"
            d-inline
            primary--text
          />
          <v-flex
            v-text="`Message: ${i}`"
            d-inline
          />
          <v-flex
            v-text="`Time ${i}`"
            caption
            grey--text
          />
        </v-flex>
      </v-layout>
      <v-card-actions>
        <NewMessage :name="name" />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
  name: 'Chat',
  props: {
    name: String
  },
  components: {
    NewMessage
  },
  data () {
    return {
    }
  }
}
</script>
