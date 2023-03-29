<template>
  <div class="container">
    <div class="row">
      <div class="row align-items-center mt-5">
        <div class="col-md-7">
          <h4>Presentate:</h4>
          <p>
            En este espacio puedes presentarte y hacer llegar a tus
            clientes/pacientes el porque puede ser positivo el agendar una hora
            contigo. Recuerda que la primera impresión siempre es importante
            para la gente que ingrese a tu sitio.
            <br />
            <br />
            Nosotros te recomendamos que inicies tu presentación con cualquiera
            de las siguientes opciones:
            <br />
            •Presenta directamente quien eres y a que te dedicas.
            <br />
            •Presentate a través de un mensaje o reflexión.
            <br />
            •Presenta tu idea a través de una cita que ejemplifique y se aplique
            a lo que te desempeñas.
          </p>
        </div>
        <div class="col-md-5">
          <img
            src="../assets/doctora.jpg"
            alt="img"
            style="
              box-shadow: 15px 15px #adcce9, -15px -15px #fbadb0,
                0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
            "
          />
        </div>
      </div>
      <div class="row align-items-center mt-5">
        <div class="col-md-5">
          <img
            src="../assets/enfermedades.jpg"
            alt="img"
            style="
              box-shadow: 15px 15px #adcce9, -15px -15px #fbadb0,
                0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
            "
          />
        </div>
        <div class="col-md-7">
          <h4>Servicios y enfermedades tratadas:</h4>
          <p>
            En este espacio puedes presentar los servicios que prestas y, en
            caso de prestar cualquier tipo de servicio médico, las enfermedades
            que tratas. De igual manera si deseas agregar un punto a este
            espacio, nos lo debes hacer saber.
            <br />
            <br />
            Nosotros recomendamos que estos sean presentados de la siguiente
            manera:
          </p>
          <div class="row">
            <div class="col-6">
              <strong>Servicios:</strong>
              <br />
              <p>
                •Atención presencial.
                <br />
                •Atención online.
                <br />
                •Atención a domicilio.
                <br />
                •Medifica general.
                <br />
                •Etc.
              </p>
            </div>
            <div class="col-6">
              <strong>Enfermedades tratadas:</strong>
              <br />
              <p>
                •Fiebre.
                <br />
                •Resfriados.
                <br />
                •Etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center mt-5">
        <div class="col-md-7">
          <h4>Formación:</h4>
          <p>
            Si trabajas en el área de la salud, puede ser importante para tus
            posibles pacientes conocer tu formación profesional a través de los
            años. En este espacio te recomendamos listar toda tu formación, ya
            sea educación superior, cursos y similares, para así demostrar que
            estás más que capacitado.
          </p>
        </div>
        <div class="col-md-5">
          <img
            src="../assets/formacion.jpg"
            alt="img"
            style="
              box-shadow: 15px 15px #adcce9, -15px -15px #fbadb0,
                0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
            "
          />
        </div>
      </div>
      <div class="row justify-content-center mt-5 mb-5">
        <h4 class="mb-5">Ubicación:</h4>
        <Mapa
          style="padding: 0; box-shadow: 0 0 0 15px #fbadb0, 0 0 0 30px #adcce9"
        />
      </div>
    </div>
  </div>
</template>

<style>
p {
  text-align: justify;
}
</style>

<script>
import Mapa from "../components/Mapa.vue";
export default {
  components: {
    Mapa,
  },
};
</script>
