<script>
export default {
  name: 'CustommerListItem',
  props: { name: String, email: String, amount: String },
  data() {
    return {}
  },
}
</script>
<template>
  <div class="flex-1 min-w-0 ms-4">
    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{{ name }}</p>
    <p class="text-sm text-gray-500 truncate dark:text-gray-400">{{ email }}</p>
  </div>
  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
    {{ amount }}
  </div>
</template>
<style scoped></style>
