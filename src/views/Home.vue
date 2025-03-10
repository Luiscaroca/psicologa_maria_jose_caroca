<template>
  <div class="container">
    <div class="row">
      <SobreMi />
      <Servicios />
      <Formacion />
      <div
        class="row justify-content-center mt-5 mb-5"
        id="ubicacion"
      >
        <h4 class="mb-5">Ubicación</h4>
        <Mapa
          style="padding: 0; box-shadow: 0 0 0 15px #efbf35, 0 0 0 30px #2ab673"
        />
        <small class="justify-content-center mt-5"
          >Independencia 85, Piso 7, <strong>Oficina 708</strong> <br />Edificio
          Obispo Subercaseux
        </small>
      </div>
      <Agendar />
      <PreguntasFrecuentes />
    </div>
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
