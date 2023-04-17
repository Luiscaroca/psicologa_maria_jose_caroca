<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
    <img :src="imageSrc" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {},
      imageSrc: "",
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_ROOT_API + `/post/${this.$route.params.id}`)
      .then((response) => {
        this.blog = response.data;
        axios
          .get(
            process.env.VUE_APP_ROOT_API + `/image/${this.$route.params.id}`,
            { responseType: "blob" }
          )
          .then((response) => {
            // Convierte los datos de tipo blob a imagen
            const reader = new FileReader();
            reader.readAsDataURL(response.data);
            reader.onloadend = () => {
              this.imageSrc = reader.result;
            };
          });
      })
      .catch((error) => {
        console.error("Error al cargar el post: ", error);
      });
  },
};
</script>
