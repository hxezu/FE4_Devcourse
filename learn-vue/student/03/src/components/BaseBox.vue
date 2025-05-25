<script>
export default {
  // props: ['bgcolor', 'size'],
  // props: { bgcolor: String, size: String },
  props: {
    bgcolor: {
      type: String,
      required: true,
      validator: (value) => ['red', 'blue', 'green'].includes(value),
    },
    size: {
      type: String,
      default() {
        return '40'
      },
    },
  },
}
</script>
<template>
  <div
    class="box"
    :style="{ backgroundColor: bgcolor, width: size + 'px', height: size + 'px' }"
  ></div>
</template>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: gray;
  margin: 0 5px;
}
</style>
