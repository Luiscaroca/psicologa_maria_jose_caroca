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
      .get(process.env.VUE_APP_ROOT_API + `/post/${this.$route.params.id}`)
      .then((response) => {
        this.blog = response.data;
      })
      .catch((error) => {
        console.error("Error al cargar el post:", error);
      });
  },
};
</script>
