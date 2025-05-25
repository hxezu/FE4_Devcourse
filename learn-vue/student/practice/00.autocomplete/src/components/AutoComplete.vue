<script>
export default {
  name: 'AutoComplete',
  props: {
    filterSearchText: {
      type: Array,
      default() {
        return []
      },
    },
  },
  emits: ['setWord'],
}
</script>
<template>
  <ul
    class="auto-complete"
    id="auto-complete"
    role="listbox"
    aria-expanded="false"
    aria-hidden="true"
  >
    <li
      v-for="(item, index) in filterSearchText"
      :key="index"
      class="auto-complete-list"
      @click="$emit('setWord', item)"
    >
      <span><i class="fas fa-search"></i></span> {{ item }}
    </li>
  </ul>
</template>
<style scoped></style>
