"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex md:flex-col flex-row gap-y-2 gap-x-2 items-center w-full  ">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="text-2xl" />
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaGithub className="text-2xl" />
      </Button>
    </div>
  );
};
