"use client";
import { Surface } from "@heroui/react";
import { Form, Button } from "@heroui/react";
import {
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import community from "@/public/community.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-0 ">
      <Surface className="py-2 w-96 rounded-4xl">
        <h1 className=" text-4xl text-center">SIGN UP</h1>
      </Surface>

      <Surface
        className=" p-4 w-1/2 h-5/9  gap-6 flex flex-row rounded-4xl"
        variant="default"
      >
        <Surface className="w-3/5 rounded-4xl relative" variant="tertiary">
          <Image
            src={community}
            alt="Community image"
            className="inset-0 rounded-4xl"
          />
        </Surface>
        <Surface
          className="w-2/5  h-full  rounded-4xl flex flex-col justify-center items-center"
          variant="tertiary"
        >
          <Form className="flex flex-col gap-4">
            <TextField
              isRequired
              name="email"
              type="email"
              className=" gap-4 items-center "
            >
              <Label className="text-lg self-start">Email</Label>
              <Input
                placeholder="john@example.com"
                className="text-lg "
              ></Input>
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
              className=" gap-4 items-start"
            >
              <Label className="text-lg self-start">Email</Label>
              <Input type="password" className="text-lg "></Input>
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
              className=" gap-4 items-center"
            >
              <Label className="text-lg self-start">Email</Label>
              <Input type="password" className="text-lg"></Input>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <div className="flex flex-row gap-4 ">
                <Button type="submit">
                  {/* <Check /> */}
                  Submit
                </Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
              </div>
            </div>
          </Form>
        </Surface>
      </Surface>
    </div>
  );
};

export default SignUp;
