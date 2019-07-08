<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-form ref="form" @submit.prevent="addMessage" class="ma-3">
        <v-text-field
          label="Type your message"
          v-model="message"
          :rules="messageRules"
          :counter="200"
          required
          class="pb-3"
          @keydown.enter="addMessage"
        />
        <v-btn
          @click="addMessage"
          v-text="'Send'"
          color="primary"
          class="headline font-weight-light"
          block
        />
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'NewMessage',
  props: {
    name: String
  },
  data () {
    return {
      message: null,
      messageRules: [
        v => (!!v) || 'Mesasge text is required',
        v => (v && v.length <= 200) || 'Message must be less than 200 characters'
      ]
    }
  },
  methods: {
    addMessage () {
      if (this.$refs.form.validate()) {
        db.collection('messages')
          .add({
            content: this.message,
            name: this.name,
            timestamp: moment(Date.now()).format('lll')
          })
        this.clear()
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
