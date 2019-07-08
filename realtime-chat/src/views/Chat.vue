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
      <v-layout row wrap ma-3 class="chat" v-chat-scroll>
        <v-flex
          xs12
          my-2
          v-for="message in messages"
          :key="message.id"
        >
          <v-flex
            v-text="`${message.name}: `"
            d-inline
            primary--text
          />
          <v-flex
            v-text="message.content"
            d-inline
          />
          <v-flex
            v-text="message.timestamp"
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
import db from '@/firebase/init'

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
      messages: []
    }
  },
  created () {
    let listener = db.collection('messages').orderBy('timestamp')
    listener.onSnapshot(response => {
      response.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: doc.data().timestamp
          })
        }
      })
    })
  }
}
</script>

<style>
.chat{
  max-height: 400px;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
