export default function SignUp() {
  return (
    <>
      <div className="bg-white w-[375px] h-auto rounded-lg py-[40px] px-[20px] text-[#4f4f4f]">
        <header className="mb-[20px] flex flex-col gap-[10px] ">
          <span className="text-xl font-semibold ">Sign Into App</span>
          <p className="font-light text-[14px]">
            Please enter your details to continue.
          </p>
        </header>
        <div className="submitArea flex flex-col gap-[16px] mb-[32px]">
          <input
            className="nameWrapper w-[325px] h-[44px] border rounded-lg text-[14px] px-[16px] py-[14px]"
            placeholder="Enter Your Name"
          ></input>
          <input
            className="idWrapper w-[325px] h-[44px] border rounded-lg text-[14px] px-[16px] py-[14px]"
            placeholder="someone@example.com"
          ></input>
          <input
            className="pwWrapper w-[325px] h-[44px] border rounded-lg text-[14px] px-[16px] py-[14px]"
            placeholder="Enter Password"
          ></input>
          <p className="text-[14px] flex items-center ">
            <i className="fa-regular fa-square-check mr-[8px] text-[25px]"></i>I
            agree with <span className="font-bold mx-1">terms</span> and{" "}
            <span className="font-bold  ml-1">policies</span>.
          </p>
        </div>

        <div className="buttonWrapper flex flex-col gap-[16px] ">
          <button className="signinBtn w-[325px] h-[44px] border rounded-lg flex justify-center items-center bg-[#4F4F4F] text-[#f5f5f5] text-[14px]">
            Sign In
          </button>
          <button className="loginBtn w-[325px] h-[44px] border-1 border-[#4F4F4F] rounded-lg flex justify-center items-center text-[14px]">
            Go to Log In
          </button>
        </div>
      </div>
    </>
  );
}
