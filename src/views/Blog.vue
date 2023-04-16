<template>
  <div>
    <a >
      <router-link to="/post">
        <b-icon-plus-square-fill style="color: #ada8a8; border-radius: 4px;" /> </router-link
    ></a>
    <h1>Entradas del blog</h1>
    <ul>
      <li v-for="blog in blog" :key="blog.id">
        <router-link :to="'/post/' + blog.id">{{ blog.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/blog")
      .then((response) => {
        this.blog = response.data;
      })
      .catch((error) => {
        console.error("Error al cargar el blog:", error);
      });
  },
};
</script>
