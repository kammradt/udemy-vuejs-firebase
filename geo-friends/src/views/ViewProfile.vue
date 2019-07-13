<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center row wrap>
        <v-flex
          xs12
          sm9
          single-line
          pb-3
        >
          <v-card class="elevation-12">
            <v-toolbar dark color="primary" class="text-xs-center">
              <v-flex display-1 v-text="`Add a comment to ${profile.nickname}!`" />
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
        <v-flex
          xs12 sm8 md4
          pb-2
          px-2
          v-for="(comment, index) in comments"
          :key="index"
        >
          <v-card class="elevation-6">
            <v-card-text>
              <v-flex
                v-text="`${comment.from}: `"
                d-inline
                primary--text
              />
              <v-flex
                v-text="comment.content"
                d-inline
              />
              <v-flex
                v-text="comment.time"
                caption
                grey--text
              />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'ViewProfile',
  data () {
    return {
      loggedUser: null,
      profile: null,
      feedback: null,
      commentText: null,
      comments: []
    }
  },
  created () {
    let search = db.collection('users')

    // Get current user
    search.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(user => {
          this.loggedUser = user.data()
          this.loggedUser.id = user.id
        })
      })

    // Setting up the view profile clicked
    search.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data()
      })

    // Get comments
    let searchComments = db.collection('comments')
    searchComments.orderBy('time', 'asc')

    searchComments.where('to', '==', this.$route.params.id)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            this.comments.unshift({
              from: change.doc.data().from,
              content: change.doc.data().content,
              time: moment(change.doc.data().time).format('lll')
            })
          }
        })
      })
  },
  methods: {
    addComment () {
      if (this.commentText && this.commentText.length <= 400) {
        this.feedback = null
        db.collection('comments').add({
          to: this.$route.params.id,
          from: this.loggedUser.nickname,
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
      setTimeout(() => this.feedback = null, 4000)
    }
  }
}
</script>
