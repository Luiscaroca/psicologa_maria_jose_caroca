<template>
  <footer>
    <div class="container">
      <div class="row w-100">
        <div class="col-md-4">
          <div class="footer-brand">
            <div>
              <img src="../img/LOGO.png" alt="LOGO" />
            </div>
            <h4>Redes sociales:</h4>
            <div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100090508094513"
                    target="_blank"
                    ><font-awesome-icon
                      icon="fa-brands fa-square-facebook"
                      size="3x"
                  /></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/devpro.consultora/"
                    target="_blank"
                    ><font-awesome-icon icon="fa-brands fa-instagram" size="3x"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div>
            <div>
              <h4>Preguntas frecuentes</h4>
            </div>
            <div class="row">
              <div class="col-md-5">
                <ul>
                  <li
                    @mouseover="hover1 = true"
                    @mouseleave="hover1 = false"
                    :class="{ activo: hover1 }"
                  >
                    <router-link
                      to="/"
                      style="color: #2c3e50; text-decoration: none"
                      ><font-awesome-icon
                        icon="fa-solid fa-stop"
                        size="2xs"
                      />Pregunta frecuente</router-link
                    >
                  </li>
                  <li
                    @mouseover="hover2 = true"
                    @mouseleave="hover2 = false"
                    :class="{ activo: hover2 }"
                  >
                    <router-link
                      to="/"
                      style="color: #2c3e50; text-decoration: none"
                      ><font-awesome-icon
                        icon="fa-solid fa-stop"
                        size="2xs"
                      />Pregunta frecuente</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md-5">
                <ul>
                  <li
                    @mouseover="hover3 = true"
                    @mouseleave="hover3 = false"
                    :class="{ activo: hover3 }"
                  >
                    <router-link
                      to="/"
                      style="color: #2c3e50; text-decoration: none"
                      ><font-awesome-icon
                        icon="fa-solid fa-stop"
                        size="2xs"
                      />Pregunta frecuente</router-link
                    >
                  </li>
                  <li
                    @mouseover="hover4 = true"
                    @mouseleave="hover4 = false"
                    :class="{ activo: hover4 }"
                  >
                    <router-link
                      to="/"
                      style="color: #2c3e50; text-decoration: none"
                      ><font-awesome-icon
                        icon="fa-solid fa-stop"
                        size="2xs"
                      />Pregunta frecuente</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <div>
              <h4>Información de contacto</h4>
            </div>
            <ul>
              <li><span>Teléfono: </span>+56 9 0000 0000</li>
              <li><span>Correo:</span>contacto@consultoradevpro.cl</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center w-100">
      <div class="col-3" style="color: black">
        <font-awesome-icon icon="fa-regular fa-copyright" /> Dev&Pro 2023, Todos
        los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid rgb(0, 0, 0);
  background-color: rgb(197, 196, 196);
}
.footer-brand img {
  width: 50%;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.activo {
  text-decoration: underline;
}
</style>

<script>
export default {
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  },
};
</script>
