{
  type Status = string;

  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  function showStatus(status: StatusEnum) {
    if (status === "loading") console.log("로딩 중...");
    else if (status === "success") console.log("성공");
    else if (status === "error") console.log("실패");
  }

  showStatus(StatusEnum.Success);
}

{
  enum Direction {
    UP,
    Down,
    Left,
    Right,
  }

  console.log("UP");
  console.log(Direction.Right);
}

{
  // 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: Status) {
    switch (status) {
      case Status.Loading:
        console.log("로딩 중...");
        break;
      case Status.Success:
        console.log("성공");
        break;
      case Status.Error:
        console.log("실패!");
        break;
    }
  }
  showStatus(Status.Success);
}
{
  // const enum
  // enum
  // enum -> 번들 크기가 크지만, 디버깅이 용이함
  // const enum -> 번들 크기가 작지만, 디버깅이 불편함
  const enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  // console.log(Status.Loading);
}

{
  // enum 숫자값이 할당됨
  // 숫자 열거형 enum
  enum Direction {
    Up, // 0
    Down = 500, // 500
    Left = 600, // 501
    Right = 700, //502
  }

  console.log(Direction.Up);
  console.log(Direction.Down);
  console.log(Direction.Left);
  console.log(Direction.Right);
}
{
  // 숫자 열거형
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  console.log(StatusCode.OK);
  console.log(StatusCode[200]); // 리버스 매핑
}
{
  // 문자 열거형
  // 혼합 열거형
  enum Status {
    Loading = "loading",
    Error = 0,
    Success = "success",
  }

  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: "success",
    status: Status.Error,
  };
}
