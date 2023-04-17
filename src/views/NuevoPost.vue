<template>
  <div>
    <h1>Agrega una nueva entrada</h1>
    <form @submit.prevent="createPost">
      <div>
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="blog.title" required />
      </div>
      <div>
        <label for="body">Cuerpo:</label>
        <textarea id="body" v-model="blog.body" required></textarea>
      </div>
      <button type="submit">Crear entrada</button>
    </form>
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
    };
  },
  methods: {
    createPost() {
      axios
        .post(process.env.VUE_APP_ROOT_API + "/post", this.blog)
        .then((response) => {
          this.$router.push("/blog");
        })
        .catch((error) => {
          console.error("Error al crear el post:", error);
        });
    },
  },
};
</script>
