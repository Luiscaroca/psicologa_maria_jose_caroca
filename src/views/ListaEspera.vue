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
              disabled
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Apellido Paterno"
              disabled
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Apellio Materno"
              disabled
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Rut:</label>
            <input
              class="form-control"
              type="text"
              name="Rut"
              placeholder="Rut"
              disabled
            />
          </div>

          <div class="col">
            <label class="form-label">Teléfono:</label>
            <input
              class="form-control"
              type="text"
              name="telefono"
              placeholder="Teléfono"
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Correo electrónico:</label>
            <input
              class="form-control"
              type="email"
              name="correo"
              placeholder="Correo electrónico"
            />
          </div>
          <div id="calendario" class="col">
            <label class="form-label">Fecha de nacimento:</label>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Ciudad:</label>
            <input
              class="form-control"
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              disabled
            />
          </div>
        </div>

        <div class="row mb-3">
          <label class="form-label">Motivo de espera:</label>
          <div class="col">
            <textarea
              class="form-control"
              style="resize: none"
              name="motivo"
              rows="3"
              placeholder="Motivo de espera (agregar fecha tentativa de atención)"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Agregar a lista de espera"
          class="modal-btn"
        />
      </form>
      <div class="col-md-5">
        <img
          style="width: 70%; display: block; margin: auto"
          src="../assets/logo.png"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>
