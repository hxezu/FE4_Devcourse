//WEB API => 웹 브라우저에서 제공해주는 API
// setTimeout, setInterval, DOM 이벤트, Promise, Fetch
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0); //0ms 이후에 실행해주세요

console.log("C");
console.log("D");
//이벤트 루프 : 콜스택이 비어져있는지 확인한 뒤 태스크 큐에 있는 작업을 콜스택에 넣어줌

// 실행 결과 : a->d->b->c
console.log("a");
setTimeout(() => {
  console.log("b");
});
setTimeout(() => {
  console.log("c");
});
console.log("d");

/* 태스크 큐
setTimeout
setInterval
setImmediate
DOM 이벤트 콜백
fetch.then()
*/

/* 마이크로 태스크 큐 (우선순위 높음)
queueMicrotask()
Promise.then()
Promise.catch()
Promise.finally()
MutationObserver
*/

// 실행 결과 : a->d->c->b
console.log("a");
setTimeout(() => {
  console.log("b");
});
Promise.resolve().then(() => {
  console.log("c");
});
console.log("d");
