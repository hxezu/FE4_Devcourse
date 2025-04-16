//Props 객체
// export default function User(props: { name: string; age: string }) {
//   console.log(props);
//   return (
//     <h1>
//       User : {props.name}/ {props.age}
//     </h1>
//   );
// }

//구조 분해 할당도 가능
export default function User({ name, age }: { name: string; age: string }) {
  return (
    <h1>
      User : {name}/ {age}
    </h1>
  );
}
