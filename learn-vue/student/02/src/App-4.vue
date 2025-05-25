<!--이벤트 수식어-->
<script>
export default {
  name: 'App-4',
  methods: {
    onSubmitHandler() {
      console.log('valid start..')
    },
    parent() {
      console.log('parent')
    },
    child() {
      console.log('child')
    },

    handleScrollPassive() {
      console.log('wheel')
    },

    onClickHandler() {
      console.log('click')
    },

    onKeydownHandler(event) {
      console.log(event)
      if (event.keyCode === 13) {
        console.log('enter 키 입력')
      }
    },
  },
}
</script>
<template>
  <a href="https://google.com" target="_blank" @click.prevent>구글</a>
  <form @submit.prevent="onSubmitHandler">
    <input type="text" name="id" />
    <input type="password" name="pw" />
    <button>로그인</button>
  </form>

  <!--이벤트가 발생한 타겟에만 이벤트 리스너가 호출되도록-->
  <div class="parent" @click.self="parent">
    <div class="child" @click.self="child"></div>
  </div>

  <!--passive-->
  <div class="parent2" @wheel.passive="handleScrollPassive">
    <div class="child2">wheel</div>
  </div>

  <!--이벤트가 한번만 실행-->
  <button @click.once="onClickHandler">Click</button>

  <!--Keyboard Modifier-->
  <!-- <input type="text" @keydown="onKeydownHandler" /> -->
  <!-- <input type="text" @keydown.enter="onKeydownHandler" /> -->
  <input type="text" @keydown.space.tab.esc="onKeydownHandler" />

  <br />
  <!--System Modifier-->
  <input type="text" @keydown.alt="onKeydownHandler" />
  <input type="text" @keydown.ctrl.enter="onKeydownHandler" />
</template>
<style scoped>
.parent {
  padding: 20px;
  background-color: red;
}
.child {
  padding: 20px;
  background-color: blue;
}

.parent2 {
  margin-top: 20px;
  height: 200px;
  overflow-y: scroll;
  border: 3px solid red;
}

.child2 {
  height: 2000px;
}
</style>
