<!--디렉티브-->
<script>
export default {
  data() {
    return {
      message: 'Vue JS!',
      messageHTML: '<h1>Hello, Vue JS(with h1)</h1>',
      google: 'https://www.google.com',
      className: 'color_red',
      boolean: true,
      num: 10,
      type: 'green',
    }
  },
}
</script>

<template>
  <!--부분적으로 사용할 때 유용-->
  <div>Hello, {{ message }}</div>
  <!--컴파일 시 예외-->
  <div v-pre>Hello, {{ message }}</div>
  <!--v-html: 보안 취약 -->
  <div v-html="messageHTML"></div>
  <!--v-text: 자식 요소에 넣을 수 없음 -->
  <div v-text="message"></div>
  <a v-bind:href="google" target="_blank" v-bind:class="className">링크</a>
  <!--위아래 똑같은 코드-->
  <a :href="google" target="_blank" :class="className">링크</a>

  <!--false 일때 display:none -->
  <div v-show="boolean" class="box red-box"></div>
  <div class="box blue-box"></div>
  <!--display:none 이 아니라 DOM 트리에서 제거-->
  <!-- <div v-if="boolean" class="box red-box"></div> -->

  <div v-if="type === 'red'" class="box red-box"></div>
  <div v-else-if="type === 'blue'" class="box blue-box"></div>
  <div v-else-if="type === 'green'" class="box green-box"></div>
  <div v-else class="box yellow-box"></div>
</template>

<style>
.color_red {
  color: red;
}
.box {
  width: 100px;
  height: 100px;
}

.red-box {
  background-color: red;
}
.blue-box {
  background-color: blue;
}
.green-box {
  background-color: green;
}
.yellow-box {
  background-color: yellow;
}
</style>
