<template>
  <div class="container">
    <div class="row">
      <form class="col-md-6">
        <div class="row mb-3">
          <label class="form-label">Nombre Completo:</label>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Nombres"
              name="Nombre"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Apellido Paterno"
              name="Apellido Paterno"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Apellio Materno"
              name="Apellido Materno"
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Contraseña:</label>
            <input
              class="form-control"
              type="password"
              name="Contraseña"
              placeholder="Contraseña"
            />
          </div>

          <div class="col">
            <label class="form-label">Confirmar contraseña:</label>
            <input
              class="form-control"
              type="password"
              name="ConfContraseña"
              placeholder="Vuelva a ingresar su contraseña"
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Rut:</label>
            <input
              class="form-control"
              type="text"
              placeholder="Rut"
              name="Rut"
            />
          </div>

          <div class="col">
            <label class="form-label">Teléfono:</label>
            <input
              class="form-control"
              type="text"
              placeholder="Teléfono"
              name="telefono"
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Correo electrónico:</label>
            <input
              class="form-control"
              type="email"
              placeholder="Correo electrónico"
              name="correo"
            />
          </div>
          <div class="col">
            <label class="form-label">Fecha de nacimento:</label>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Ciudad:</label>
            <input
              class="form-control"
              type="text"
              placeholder="Ciudad"
              name="ciudad"
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="form-label">Motivo de Consulta:</label>
          <div class="col">
            <textarea
              class="form-control"
              style="resize: none"
              name="motivo"
              rows="3"
              placeholder="Motivo de consulta"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Registrarme"
          class="modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#hola"
        />
      </form>
      <div class="col-md-5">
        <img
          style="width: 80%; display: block; margin: auto"
          src="../assets/logo.png"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>
