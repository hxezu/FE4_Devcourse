// props.ts 하면 interface 앞에 export 하고 App.tsx 에서 import 해야됨
// props.d.ts : 아무것도 안해도됨
// d: declaration file
// 자바 스크립트 라이브러리나 모듈에 대한 타입정보를 타입스크립트에 제공하기 위해 사용하는  파일형식

type User = {
  id: number;
  name: string;
};

interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  myFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
