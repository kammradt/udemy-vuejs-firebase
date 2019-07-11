<template>
  <div>
    <!-- <Search class="search" /> -->
    <v-flex class="google-map" id="map" />
  </div>
</template>

<script>
/* eslint-disable */
import Search from '@/components/Search'
export default {
  name: 'Index',
  data () {
    return {
      lat: -26.2774326,
      lng: -48.8739195
    }
  },
  components: {
    Search
  },
  mounted () {
    this.renderMap()
  },
  methods: {
    renderMap () {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 18,
        maxZoom: 30,
        minZoom: 3,
        streetViewControl: false
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
