<template>
  <div class="container">
    <div class="row">
      <!--youcanbook.me-->
      <iframe
        src="https://kakoljca.youcanbook.me/?noframe=true&skipHeaderFooter=true"
        id="ycbmiframekakoljca"
        style="
          width: 100%;
          height: 1000px;
          border: 0px;
          background-color: transparent;
        "
        frameborder="0"
        allowtransparency="true"
      ></iframe>
    </div>
  </div>
</template>

<script>
window.addEventListener &&
  window.addEventListener(
    "message",
    function (event) {
      if (event.origin === "https://kakoljca.youcanbook.me") {
        document.getElementById("ycbmiframekakoljca").style.height =
          event.data + "px";
      }
    },
    false
  );
</script>
