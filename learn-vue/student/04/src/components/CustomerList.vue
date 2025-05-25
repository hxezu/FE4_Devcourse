<script>
import CustomerListItem from './CustommerListItem.vue'
export default {
  name: 'CustomerList',
  components: {
    CustomerListItem,
  },
  props: {
    count: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      items: [
        { name: 'Neil Sims', email: 'email@windster.com', amount: '$320' },
        { name: 'James', email: 'james@gmail.com', amount: '$250' },
        { name: 'Smith', email: 'smith@gmail.com', amount: '$600' },
        { name: 'Mike', email: 'mike@gmail.com', amount: '$200' },
        { name: 'Yarn', email: 'arn@gmail.com', amount: '$140' },
        { name: 'Npm', email: 'npm@gmail.com', amount: '$220' },
        { name: 'Han', email: 'han@gmail.com', amount: '$450' },
      ],
    }
  },
  computed: {
    showItems() {
      return this.items.slice(0, this.count)
    },
  },
}
</script>
<template>
  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
    <li v-for="(item, index) in showItems" :key="index" class="py-3 sm:py-4">
      <div class="flex items-center">
        <CustomerListItem :name="item.name" :email="item.email" :amount="item.amount" />
      </div>
    </li>
  </ul>
</template>
<style scoped></style>
