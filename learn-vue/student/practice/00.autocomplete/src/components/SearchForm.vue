<script>
import AutoComplete from './AutoComplete.vue'

export default {
  name: 'SearchForm',
  components: { AutoComplete },
  data() {
    return {
      inputValue: '',
      searchText: [
        'apple',
        'awesome',
        'animal',
        'banana',
        'born',
        'butterfly',
        'cat',
        'creative',
        'cookie',
      ],
      listShow: true,
    }
  },
  computed: {
    filterSearchText() {
      if (this.inputValue === '') return []
      return this.searchText.filter((v) => v.toUpperCase().includes(this.inputValue.toUpperCase()))
    },
  },
  methods: {
    setWord(word) {
      this.inputValue = word
      this.listShow = false
    },
    handleInput(event) {
      this.inputValue = event.target.value
      this.listShow = true
    },
  },
}
</script>
<template>
  <div
    class="search-form"
    :class="{ active: filterSearchText.length > 0 && listShow }"
    role="search"
  >
    <div class="input-group">
      <button type="button" aria-label="Search">
        <i class="fas fa-search"></i>
      </button>
      <input
        type="text"
        placeholder="Search"
        aria-autocomplete="list"
        aria-controls="auto-complete"
        :value="inputValue"
        @input="handleInput"
      />
      <button type="button" aria-label="Microphone">
        <i class="fas fa-microphone"></i>
      </button>
    </div>
    <AutoComplete :filterSearchText="filterSearchText" @setWord="setWord" />
  </div>
</template>
<style scoped></style>
