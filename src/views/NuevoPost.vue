<template>
  <div class="container">
    <div class="row mt-4 mb-4">
      <div class="col mx-auto">
        <div class="card">
          <div class="card-header"><h2>Agrega una nueva entrada</h2></div>
          <div class="card-body">
            <form
              @submit.prevent="createPost"
              enctype="multipart/form-data"
            >
              <div
                class="form-group"
                style="text-align: left"
              >
                <label for="title">Título:</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="title"
                  v-model="blog.title"
                  required
                />
              </div>
              <div
                class="form-group mt-2"
                style="text-align: left"
              >
                <label for="body">Cuerpo:</label>
                <textarea
                  class="form-control"
                  name="body"
                  id="body"
                  rows="20"
                  v-model="blog.body"
                  required
                  style="resize: none"
                ></textarea>
              </div>
              <div
                class="form-group mt-2"
                style="text-align: left"
              >
                <label for="image">Imagen de portada:</label>
                <input
                  class="form-control"
                  name="image"
                  id="image"
                  type="file"
                  @change="handleFileUpload"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-2"
              >
                Crear entrada
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {
        title: "",
        body: "",
      },
      file: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    createPost() {
      const formData = new FormData();
      formData.append("image", this.file);
      axios
        .post(process.env.VUE_APP_ROOT_API + "/post", this.blog)
        .then((response) => {
          axios.post(process.env.VUE_APP_ROOT_API + "/upload", formData);
        })
        .then((response) => {
          this.$router.push("/blog");
        })
        .catch((error) => {
          console.error("Error al crear el post: ", error);
        });
    },
  },
};
</script>
