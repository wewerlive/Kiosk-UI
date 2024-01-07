"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import WidthWrapper from "@/components/WidthWrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  type: z.enum(["male", "female"], {
    required_error: "You need to select a option.",
  }),
});

const Page: NextPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <>
      <WidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center px-4">
        <div className="relative isolate">
          <div>
            <div className="mx-auto max-w-6xl px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-2/3 space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-3 justify-center">
                            <FormLabel className="font-bold text-2xl">Select your gender</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-x-20"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="male" />
                                  </FormControl>
                                  <FormLabel className="flex flex-row text-xl font-semibold">
                                    <Image
                                        className="px-2"
                                        alt="male"
                                        width={100}
                                        height={100}
                                        src="/Male.png"
                                    />
                                    Male
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="female" />
                                  </FormControl>
                                  <FormLabel className="font-normal flex flex-row space-x-2 text-xl font-semibold">
                                  <Image
                                        className="px-2"
                                        alt="female"
                                        width={100}
                                        height={100}
                                        src="/Female.png"
                                    />
                                    Female
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button className={"size-lg w-full "} type="submit">Continue</Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </>
  );
};

export default Page;
