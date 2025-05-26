<script setup>
import { reactive, ref, computed, watch, onMounted, provide } from 'vue'
import FirstChild from './components/FirstChild.vue'
import SecondChild from './components/SecondChild.vue'

// 반응형 데이터를 정의하는 방법 - ref, reactive
const count = ref(0) // 데이터의 타입을 가리지 않음, API 응답 데이터
const numArr = reactive([1, 2, 3]) // 하드 코딩

// 함수를 정의하는 방법 - methods 대체
const increment = () => {
  count.value += 1
}

// 계산된 속성 - computed
const doubleCount = computed(() => count.value * 2)

// 감시자 속성 - watch, watchEffect(deep: true, immediate:true), watchPostEffect(flush:'post')
watch(count, (n, o) => {
  console.log(n, o)
})

// 라이프 사이클 훅 - beforeCreate(), created() -> x
// onBeforeMount(), onMounted(), onBeforeUpdate(), onUpdated(), onBeforeUnmount(), onUnmounted()
onMounted(() => {
  console.log('onMounted')
})

//provide, inject
provide('count', count)
provide('increment', increment)
</script>

<template>
  <h1>{{ count }}</h1>
  <h1>doubleCount : {{ doubleCount }}</h1>
  <button @click="increment">증가</button>
  <h1>{{ numArr }}</h1>

  <!--z컴포넌트-->
  <FirstChild name="hhj" :age="20" @increment="increment" />
  <SecondChild />
</template>
<style scoped></style>
