<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <div class="left-content">
          <h3>
            <strong>Puedes contactarme directamente:</strong>
          </h3>
          <br />
          <form
            action="mailto:mjcaroca.araya@gmail.com?subject=Contacto vía página web"
            method="post"
            enctype="text/plain"
          >
            <div class="mb-3">
              <label class="form-label">Nombre:</label>
              <input
                type="text"
                name="Nombre"
                class="form-control"
                placeholder="Nombre"
              />
            </div>
            <div class="mb-3">
              <label id="labelcomentario" class="form-label"
                >Deja tu comentario:</label
              >
              <textarea
                name="Comentario"
                class="form-control"
                style="resize: none"
                placeholder="Comentario"
                rows="3"
              ></textarea>
            </div>
            <input type="submit" value="Enviar" class="modal-btn" />
          </form>
        </div>
      </div>

      <div class="col">
        <div class="right-content">
          <img
            class="mb-5"
            style="width: 45%; display: block; margin: auto"
            src="../assets/logo.png"
            alt="img"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="left-content">
          <h3>
            <strong>Suscríbete</strong>
          </h3>
          <p>
            También puedes suscribirte con tu correo electrónico y podrás
            recibir distintas noticias e información para cuidar tu salud
            mental.
          </p>
          <form>
            <div>
              <div class="mb-3">
                <label class="form-label">Ingresa acá tu correo:</label>
                <input
                  type="text"
                  name="Correosub"
                  id="textcorreosub"
                  class="form-control"
                  placeholder="Correo electrónico"
                />
              </div>

              <input
                type="submit"
                value="Suscríbete"
                class="modal-btn"
                data-bs-toggle="modal"
                data-bs-target="#hola"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <div class="right-content">
          <h3>
            <strong>También puedes ver mis datos de contacto:</strong>
          </h3>
          <br />
          <p>
            <strong>Correo:</strong> mjcaroca.araya@gmail.com

            <br />
            <br />

            <strong>Número de teléfono:</strong> +56 9 3391 4571
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=56933914571"
            target="_blank"
            ><i class="fa-brands fa-whatsapp"></i>Da clic aquí para comunicarnos
            vía WhatsApp directamente.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
