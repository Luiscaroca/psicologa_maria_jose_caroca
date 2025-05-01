<template>
  <div
    data-aos="fade-up"
    data-aos-duration="500"
    style="width: 90%"
    class="mx-auto"
  >
    <h4 class="mb-5 text-center">Ubicación</h4>
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[-35.84514158031952, -71.60216534444504]"
      @move="log('move')"
      style="
        height: 500px;
        padding: 0;
        box-shadow: 0 0 0 15px #efbf35, 0 0 0 30px #2ab673;
      "
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-marker
        :lat-lng="[-35.84500158031952, -71.60216534444504]"
        @moveend="log('moveend')"
      >
        <l-popup>Oficina 708</l-popup>
      </l-marker>
    </l-map>
    <small class="d-block text-center mt-5"
      >Independencia 85, Piso 7, <strong>Oficina 708</strong> <br />Edificio
      Obispo Subercaseux
    </small>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 20,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>
