<template>
  <div class="container">
    <div class="row">
      <div class="row justify-content-center mt-3">
        <div class="col align-self-center">
          <h1>Entradas del blog</h1>
        </div>
        <!-- TODO revisar verificacion de final de transicion -->
        <div
          class="col align-self-center"
          style="position: absolute; text-align: right"
        >
          <a>
            <router-link to="/post">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="grey"
                class="bi bi-plus-square-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
                />
              </svg> </router-link
          ></a>
        </div>
      </div>
      <div
        class="col-lg-4 col-sm-6 col-12 item animate-item post-1210 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-design category-science tag-design tag-science tag-software-development"
        id="post-1210"
        style="opacity: 1; transform: translate(0px, 0px)"
      >
        <article
          class="news-item item-style"
          v-for="blog in blog"
          :key="blog.id"
        >
          <router-link :to="'/post/' + blog.id">
            <a> <img :src="'data:image;base64,' + blog.image" /> </a>
            <div class="news-item-info">
              <div class="news-item-date">May 24, 2021</div>
              <h3 class="news-item-heading item-heading">
                <a>{{ blog.title }}</a>
              </h3>
            </div>
          </router-link>
        </article>
      </div>
    </div>
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
      .get(process.env.VUE_APP_ROOT_API + "/blog")
      .then((response) => {
        this.blog = response.data;
      })
      .catch((error) => {
        console.error("Error al cargar el blog: ", error);
      });
  },
};
</script>
