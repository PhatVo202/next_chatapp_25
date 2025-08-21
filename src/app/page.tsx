"use client";

import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/nextjs";



export default function Home() {

  return (
    <>

      <UserButton />

      Hello chat app
    </>
  );
}

