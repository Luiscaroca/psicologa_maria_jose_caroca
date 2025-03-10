<template>
  <header>
    <!-- Inicio del menú -->

    <nav
      class="navbar navbar-expand-md navbar-light"
      style="
        background: linear-gradient(to right, #efbf35, #2ab673);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      "
    >
      <div
        class="container-fluid"
        style="
          background: white;
          --background: linear-gradient(to right, white, white, #fbadb0);
          --border-bottom-left-radius: 0%;
          --border-top-left-radius: 0%;
          --border-bottom-right-radius: 10%;
          --border-top-right-radius: 10%;
        "
      >
        <!-- icono -->
        <a
          class="navbar-brand"
          href="#"
        >
          <img
            class="img-fluid d-inline-block align-text-top"
            alt="logo"
            src="../assets/logo.png"
          />
        </a>

        <!-- boton del menu -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- elementos del menu colapsable -->

        <div
          class="collapse navbar-collapse"
          id="menu"
        >
          <hr class="d-md-none d-lg-block" />
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a
                href="#sobre_mi"
                class="nav-link"
              >
                Sobre mí
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#servicios"
                class="nav-link"
              >
                Servicios
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#formacion"
                class="nav-link"
              >
                Formación
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#ubicacion"
                class="nav-link"
                >Ubicación</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#agendar_hora"
                class="nav-link"
                >Agendar hora</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#preguntas_frecuentes"
                class="nav-link"
              >
                Preguntas frecuentes
              </a>
            </li>
          </ul>

          <!-- enlaces redes sociales -->

          <hr class="d-md-none d-lg-block" />
          <hr
            class="d-none d-md-block"
            style="
              border: none;
              border-left: 1px solid hsla(200, 10%, 50%, 100);
              height: 7vh;
              width: 1px;
            "
          />
          <ul class="navbar-nav flex-row flex-wrap">
            <li class="nav-item col-5 col-md-auto p-3">
              <a
                href="https://www.doctoralia.cl/maria-jose-caroca-araya/psicologo/linares"
                target="_blank"
                style="color: #00c3a5"
              >
                <b-icon-journal-medical />
                <small class="d-md-none ms-2">Doctoralia</small>
              </a>
            </li>
            <li class="nav-item col-5 col-md-auto p-3">
              <a
                href="https://wa.me/56933914571"
                target="_blank"
                style="color: #49c958"
              >
                <b-icon-whatsapp />
                <small class="d-md-none ms-2">WhatsApp</small></a
              >
            </li>
            <li class="nav-item col-5 col-md-auto p-3">
              <a
                href="https://www.instagram.com/ps.mariajose.caroca"
                target="_blank"
                style="color: #f56040"
              >
                <b-icon-instagram />
                <small class="d-md-none ms-2">Instagram</small></a
              >
            </li>
            <li class="nav-item col-5 col-md-auto p-3">
              <a
                href="https://web.facebook.com/psicologa.linares/"
                target="_blank"
                style="color: #405de6"
              >
                <b-icon-facebook />
                <small class="d-md-none ms-2">Facebook</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Header */

/*Navbar*/
</style>

<script></script>
