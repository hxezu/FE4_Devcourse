<script>
export default {
  name: 'BaseButton',
  data() {
    return { text: 'Login' }
  },
}
</script>
<template>
  <button>
    <!--이름 없는 슬록-->
    <slot><span>클릭</span></slot>
  </button>
</template>
<style scoped>
span {
  color: orange;
}
</style>
