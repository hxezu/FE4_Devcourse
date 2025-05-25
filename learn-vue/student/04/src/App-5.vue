<!--Composition API-->
<script>
import OptionCount from './components/OptionCount.vue'
import SetupAliasCount from './components/SetupAliasCount.vue'
import SetupCount from './components/SetupCount.vue'

export default {
  name: 'App-5',
  components: {
    OptionCount,
    SetupCount,
    SetupAliasCount,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <OptionCount />
  <SetupCount />
  <SetupAliasCount />
</template>
<style scoped></style>
