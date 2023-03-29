<template>
  <GoogleMap
    api-key="AIzaSyAYO2pqkTtLv4vk3aobCS78H_COdQt7s0Y"
    style="width: 90%; height: 500px"
    :center="center"
    :zoom="17"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: -35.84551, lng: -71.59797 };

    return { center };
  },
});
</script>
