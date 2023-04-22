<template>
  <header>
    <!-- Inicio del menú -->

    <nav
      class="navbar navbar-expand-md navbar-light"
      style="
        background: linear-gradient(to right, #adcce9, #fbadb0);
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
          tyle="background:red;"
          href="#"
          style="background: "
        >
          <img
            class="img-fluid d-inline-block align-text-top"
            width="380"
            alt="logo"
            src="../img/LOGO.png"
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
          style="
      --  background: #1c89ff;
      --  border-bottom-left-radius: 30%;
       "
        >
          <hr class="d-md-none d-lg-block" />
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
              >
                Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/agendar_hora"
                class="nav-link"
              >
                Agenda tu hora
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/blog"
                class="nav-link"
              >
                Blog
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contacto"
                class="nav-link"
              >
                Contacto
              </router-link>
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
                href="https://www.instagram.com/devpro.consultora/"
                target="_blank"
                style="color: #f56040"
              >
                <b-icon-instagram />
                <small class="d-md-none ms-2">Instagram</small></a
              >
            </li>
            <li class="nav-item col-5 col-md-auto p-3">
              <a
                href="https://www.facebook.com/profile.php?id=100090508094513"
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
