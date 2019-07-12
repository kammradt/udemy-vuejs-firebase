<template>
  <div>
    <v-flex class="google-map" id="map" />
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      lat: 39.913818,
      lng: 116.363625
    }
  },
  mounted () {
    // Getting the current authenticated user
    let user = firebase.auth().currentUser

    // Getting the geolocation of user with browser tool
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition => {
        this.lat = currentPosition.coords.latitude
        this.lng = currentPosition.coords.longitude

        // Finding the user record and adding the geolocation to it
        db.collection('users')
          .where('user_id', '==', user.uid)
          .get()
          .then(listOfDocs => {
            listOfDocs.forEach((doc) => {
              db.collection('users')
                .doc(doc.id)
                .update({
                  geolocation: {
                    lat: currentPosition.coords.latitude,
                    lng: currentPosition.coords.longitude
                  }
                })
            })
          }).then(() => {
            this.renderMap()
          })
      }, (error) => {
        console.log(error)
        this.renderMap()
      }, { maximumAge: 60000, timeout: 3000, enableHighAccuracy: true })
    } else {
      // Setting up the map with default values
      this.renderMap()
    }
  },
  methods: {
    renderMap () {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 2,
        maxZoom: 30,
        minZoom: 3,
        streetViewControl: false
      })

      db.collection('users').get().then(users => {
        users.docs.forEach(doc => {
          let data = doc.data()
          if (data.geolocation) {
            let marker = new google.maps.Marker({
              position: {
                lat: data.geolocation.lat,
                lng: data.geolocation.lng
              },
              map
            })
            // add click event to Marker
            marker.addListener('click', () => {
              this.$router.push({ name: 'ViewProfile', params: { id: doc.id } })
            })
          }
        })
      })
    }
  }
}
</script>

<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.search {
  z-index: 1;
}
</style>
