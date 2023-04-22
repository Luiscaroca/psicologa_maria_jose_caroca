<template>
  <div class="container">
    <div class="row">
      <!-- TODO Botón regresar -->
      <!-- TODO Agregar fecha -->
      <div
        class="row align-self-start mt-5"
        style="text-align: left"
      >
        <h1>{{ post.title }}</h1>
      </div>
      <div class="row align-self-center mt-5">
        <img :src="'data:image;base64,' + post.image" />
      </div>
    </div>
    <div class="row align-self-start mt-5 mb-5">
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: [],
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_ROOT_API + `/post/${this.$route.params.id}`)
      .then((response) => {
        this.post = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar el post: ", error);
      });
  },
};
</script>
