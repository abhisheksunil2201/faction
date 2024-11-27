"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        router.replace("/channels/me");
        router.refresh();
      }
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-neutral-800">
      <div className="bg-neutral-900 text-gray-300 rounded-lg p-4 shadow-md w-[30rem] flex flex-col">
        <h1 className="text-2xl font-bold self-center my-6 text-white">
          Welcome back!
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-extrabold tracking-wider uppercase">
                    Username<span className="text-red-400 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none border-none bg-zinc-800"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-extrabold tracking-wider uppercase">
                    Password<span className="text-red-400 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none border-none bg-zinc-800"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full bg-neutral-950" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
