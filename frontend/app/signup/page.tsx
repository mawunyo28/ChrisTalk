"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
} from "@heroui/react";
import Image from "next/image";
import community from "@/public/community.jpg";

export function Basic() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
        <Input placeholder="john@example.com" />
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
        <Button type="submit">
          {/* <Check /> */}
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}

const SignIn = () => {
  return (
    <div className=" h-full w-full flex justify-center-safe items-center-safe backdrop-blur-xs ">
      <div className="flex gap-8 p-8  rounded-l-3xl bg-surface shadow-lg">
        <div className="flex flex-col justify-center-safe gap-8">
          <span className="text-5xl font-bold !text-surface-foreground">
            Sign In
          </span>
          <Basic></Basic>
        </div>
        <div className="relative rounded-3xl border border-peach rounded-l-3xl">
          <Image
            src={community}
            alt=""
            className="rounded-l-3xl"
            height={800}
          />

          <div className="absolute inset-0 flex items-end-safe justify-center-safe pb-10 backdrop-blur-xs">
            <h1 className="!text-orange-500 text-5xl font-bold">
              Join a community of christ-centered people
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

e;
