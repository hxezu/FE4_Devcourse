<script>
import CustomerList from './components/CustomerList.vue'
export default {
  components: {
    CustomerList,
  },
  data() {
    return { showAll: false }
  },
}
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          @click="showAll = !showAll"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div class="flow-root">
        <CustomerList :count="showAll ? 7 : 5" />
      </div>
    </div>
  </div>
</template>
<style></style>
