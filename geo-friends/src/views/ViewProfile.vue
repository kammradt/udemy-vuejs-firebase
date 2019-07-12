<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 pt-5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary" class="text-xs-center">
              <v-flex display-1 v-text="'Add a comment!'" />
            </v-toolbar>
            <v-card-text>
              <v-flex
                v-if="feedback"
                v-text="feedback"
                headline
                class="text-xs-center error--text"
              />
              <v-form @submit.prevent="addComment">
                <v-textarea
                  label="Write down your comment"
                  prepend-icon="person"
                  type="text"
                  requiered
                  counter="400"
                  v-model="commentText"
                  @keydown.enter="addComment"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-text="'Comment'"
                @click="addComment"
                class="headline"
                block
                color="primary"
              />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'ViewProfile',
  data () {
    return {
      loggedUser: null,
      profile: null,
      feedback: null,
      commentText: null
    }
  },
  created () {
    let search = db.collection('users')

    search.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(user => {
          this.loggedUser = user.data()
          this.loggedUser.id = user.id
        })
      })

    search.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data()
      })
  },
  methods: {
    addComment () {
      if (this.commentText && this.commentText.length <= 400) {
        this.feedback = null
        db.collection('comments').add({
          to: this.$route.params.id,
          from: this.loggedUser.id,
          content: this.commentText,
          time: Date.now()
        }).then(() => {
          this.commentText = null
        })
      } else {
        this.showFeedback('Please, enter a valid comment!')
      }
    },
    showFeedback (text) {
      this.feedback = text
      // eslint-disable-next-line
      setTimeout(() => this.feedback = '', 4000)
    }
  }
}
</script>
