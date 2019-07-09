import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDcBX0XWVH7KOySB45j8Pl2ojqR16ybo9I',
  authDomain: 'geo-friends-vue.firebaseapp.com',
  databaseURL: 'https://geo-friends-vue.firebaseio.com',
  projectId: 'geo-friends-vue',
  storageBucket: '',
  messagingSenderId: '26909917349',
  appId: '1:26909917349:web:7704074c9272fa09'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()