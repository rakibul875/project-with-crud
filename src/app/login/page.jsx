"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const loginPage = () => {

    const handelLogin=async(e)=>{

        e.preventDefault()

        const user=new FormData(e.currentTarget)
        const userData=Object.fromEntries(user.entries())
        console.log(userData)

        const {data,error}=await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        })
        console.log(data)

        if(data){
            alert('Login Successful')
            redirect('/')
        }
        if(error){
            alert(error.message)
        }

    }


  return (
    <div className="container mx-auto">
      <div className="text-center my-7">
        <h1 className="text-5xl font-bold">Welcome Back</h1>
        <p className="text-gray-400 text-xl">
          Resume your adventure with Wanderlust
        </p>
      </div>
      <div className="p-2 lg:p-6 bg-white shadow-md max-w-3xl mx-auto">
        <Form onSubmit={handelLogin} className="flex w-96 flex-col gap-4 mx-auto p-2 mb-5">
        
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter Your Email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default loginPage;
