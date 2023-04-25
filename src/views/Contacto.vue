<template>
  <div clas="container">
    <div class="row mt-4 mb-4">
      <div class="col-6 mx-auto">
        <div class="card">
          <div class="card-header">
            <h2>Contáctame vía correo</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div
                class="form-group"
                style="text-align: left"
              >
                <label for="name">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  v-model="name"
                />
                <div
                  v-if="errorName == true"
                  class="text-danger"
                >
                  {{ "El campo nombre es requerido." }}
                </div>
              </div>

              <div
                class="form-group mt-2"
                style="text-align: left"
              >
                <label for="useremail">Email</label>
                <input
                  type="useremail"
                  class="form-control"
                  name="useremail"
                  id="useremail"
                  v-model="useremail"
                />
                <div
                  v-if="errorMail == true"
                  class="text-danger"
                >
                  {{ "El campo email es requerido." }}
                </div>
              </div>

              <div
                class="form-group mt-2"
                style="text-align: left"
              >
                <label for="message">Mensaje</label>
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  rows="5"
                  v-model="message"
                  style="resize: none"
                ></textarea>
                <div
                  v-if="errorMessage == true"
                  class="text-danger"
                >
                  {{ "El campo mensaje es requerido." }}
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary mt-2"
              >
                Enviar
              </button>
              <div
                v-if="success"
                class="alert alert-success mt-3"
              >
                Correo enviado!
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      useremail: "",
      message: "",
      success: false,
      loaded: true,
      errorName: false,
      errorMail: false,
      errorMessage: false,
    };
  },
  methods: {
    submitForm() {
      if (this.name === "" || this.useremail === "" || this.message === "") {
        if (this.name === "") {
          this.errorName = true;
        } else {
          this.errorName = false;
        }
        if (this.useremail === "") {
          this.errorMail = true;
        } else {
          this.errorMail = false;
        }
        if (this.message === "") {
          this.errorMessage = true;
        } else {
          this.errorMessage = false;
        }
      } else {
        if (this.loaded) {
          this.loaded = false;
          this.success = false;
          this.errorName = false;
          (this.errorMail = false),
            (this.errorMessage = false),
            (this.errors = {});
          const data = {
            name: this.name,
            email: "kako.ljca@gmail.com",
            useremail: this.useremail,
            message: this.message,
          };
          fetch(process.env.VUE_APP_ROOT_API + "/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (response.ok) {
                this.name = "";
                this.useremail = "";
                this.message = "";
                this.loaded = true;
                this.success = true;
              } else {
                this.status = "Ocurrió un error enviando el correo.";
              }
            })
            .catch((error) => {
              this.loaded = true;
              if (error.response.status === 422) {
                this.status = "Ocurrió un error enviando el correo.";
              }
            });
        }
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
