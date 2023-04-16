<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/post/${this.$route.params.id}`)
      .then((response) => {
        this.blog = response.data;
      })
      .catch((error) => {
        console.error("Error al cargar el post:", error);
      });
  },
};
</script>
