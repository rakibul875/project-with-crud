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

const singUpPage = () => {

    const handelRegister=async(e)=>{

        e.preventDefault()

        const user=new FormData(e.currentTarget)
        const userData=Object.fromEntries(user.entries())
        console.log(userData)

        const {data,error}=await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            image:userData.image
        })

        if(data){
            alert('SingUp Successful')
            redirect('/')
        }
        if(error){
            alert(error.message)
        }

    }


  return (
    <div className="container mx-auto">
      <div className="text-center my-7">
        <h1 className="text-4xl font-semibold">Create Account</h1>
        <p className="text-gray-400 text-lg">
          Start your adventure with Wanderlust
        </p>
      </div>
      <div className="p-2 lg:p-6 bg-white shadow-md max-w-3xl mx-auto">
        <Form onSubmit={handelRegister} className="flex w-96 flex-col gap-4 mx-auto p-2 mb-5">
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Your Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="image"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Image Url</Label>
            <Input placeholder="Enter Your Image Url" />
            <FieldError />
          </TextField>
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
              Create Account
            </Button>
          </div>
        </Form>
        <div className="">
          <h1 className="text-gray-400 text-center">Or sign up with</h1>
          <div className="flex justify-center my-2">
            <button className="btn w-96 mx-auto rounded-full items-center"><FaGoogle/> Sign Up With Google</button>
          </div>
          <p className="mt-2 text-center">Already have an account? <span className="text-cyan-500 text-lg"><Link href={'/login'}>Sign In</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default singUpPage;
