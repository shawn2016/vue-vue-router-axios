<template>
  <div>
    <div class="v-modal">

    </div>
  </div>
</template>
<script>
export default {
  name: "Dackground",
  data() {
    return {
      msg: "data"
    };
  }
};
</script>
<style scoped>
.v-modal {
  z-index: 2000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
</style>

