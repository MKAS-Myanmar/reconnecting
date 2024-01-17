import { Input, PasswordInput } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";


const Login = () => {
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <div className="w-full h-[131vh] absolute mt-[-31vh] z-10">
        <Image
          className=" relative"
          src={"/siam.png"}
          alt="Logo"
          objectFit="contain"
          layout="fill"
          objectPosition="right bottom"
        />
      </div>
      <div className="grid place-items-center w-full h-full">
        <form action="" className="w-[20rem]  bg-red-500 z-50 relative px-6 py-4">
          <div className="">
            <h1 className="">Reconnecting</h1>

            <h6>Please login to use SIAM Admin</h6>
          </div>

          <Input  placeholder="User Name" rightSection={
            <FaUser/>
          }/>
          <PasswordInput className="mt-5" placeholder="password"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
