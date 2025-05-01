<template>
  <div class="container">
    <SobreMi />
    <Servicios />
    <Formacion />
    <div
      class="row justify-content-center mt-5 mb-5"
      id="ubicacion"
    >
      <Mapa />
    </div>
    <Agendar />
    <PreguntasFrecuentes />
  </div>
</template>

<style scoped>
h4 {
  text-align: center;
}

p {
  text-align: justify;
}

small {
  text-align: center;
}
</style>

<script>
import SobreMi from "../components/SobreMi.vue";
import Mapa from "../components/Mapa.vue";
import Agendar from "../components/Agendar.vue";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes.vue";
import Servicios from "../components/Servicios.vue";
import Formacion from "../components/Formacion.vue";
export default {
  components: {
    SobreMi,
    Servicios,
    Formacion,
    Mapa,
    Agendar,
    PreguntasFrecuentes,
  },
};
</script>
