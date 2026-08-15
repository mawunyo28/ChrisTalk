"use client";
import { Spinner, Surface, toast } from "@heroui/react";
import { Form, Button } from "@heroui/react";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import community from "@/public/community.jpg";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-6 ">
      <div className="relative z-10 -mb-6">
        <Surface className="px-8 py-3 rounded-full" variant="secondary">
          <Label className="text-2xl">SignUp</Label>
        </Surface>
      </div>

      <Surface
        className=" p-4 w-1/2 h-5/9  gap-6 flex flex-row rounded-4xl"
        variant="default"
      >
        <Surface
          className="w-3/5 rounded-4xl relative overflow-hidden"
          variant="tertiary"
        >
          <Image
            src={community}
            alt="Community image"
            fill
            className="object-cover  rounded-4xl"
          />
        </Surface>
        <Surface
          className="w-2/5  h-full gap-2  rounded-4xl flex flex-col justify-center items-center"
          variant="tertiary"
        >
          <Form
            className="flex flex-col gap-4"
            onSubmit={async (e) => {
              e.preventDefault();

              setLoading(true);

              const data = Object.fromEntries(new FormData(e.currentTarget));
              const email = data.email.toString();
              const password = data.email.toString();

              const supabase = createClient();

              const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                  emailRedirectTo: `${location.origin}/auth/callback`,
                },
              });

              if (error) {
                toast("An error occuring during signup", {
                  actionProps: {
                    children: "Dismiss",
                    onPress: () => toast.clear(),
                    variant: "tertiary",
                  },

                  description: error.message,
                  variant: "default",
                });

                setLoading(false);
                return;
              }

              setLoading(false);

              toast("Email Confirmation", {
                actionProps: {
                  children: "Dismiss",
                  onPress: () => toast.clear(),
                  variant: "tertiary",
                },

                description:
                  "Please check your email for a confirmation message",
                variant: "default",
              });

              // router.push("/home");
            }}
          >
            <TextField
              isRequired
              name="email"
              type="email"
              className=" gap-4 items-center "
              onChange={(value) => {
                setEmail(value);
              }}
              validate={(value) => {
                if (!value) return "Email is required";
                if (!/^\S+@\S+\.\S+$/.test(value))
                  return "Enter a valid email address";
                return null;
              }}
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
              onChange={(value) => {
                setPassword(value);
              }}
              className=" gap-4 items-start"
              validate={(value) => {
                if (!value) return "Password is required";
                if (value.length < 8) return "Must be at least 8 characters";
                if (!/[A-Z]/.test(value))
                  return "Must include an uppercase letter";
                if (!/[0-9]/.test(value)) return "Must include a number";
                return null;
              }}
            >
              <Label className="text-lg self-start">Password</Label>
              <Input type="password" className="text-lg "></Input>
              <FieldError />
            </TextField>

            <TextField
              name="confirm"
              type="password"
              className=" gap-4 items-center"
              validate={(value) => {
                if (!value) return "Please confirm your password";
                if (value !== password) return "Passwords do not match";
                return null;
              }}
            >
              <Label className="text-lg self-start">Confirm Password</Label>
              <Input type="password" className="text-lg"></Input>
              <FieldError />
            </TextField>

            <div className="flex justify-between gap-2 w-full">
              <Button type="submit" isPending={loading}>
                {loading ? <Spinner color="current" /> : <>Submit</>}
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
        </Surface>
      </Surface>
    </div>
  );
};

export default SignUp;
