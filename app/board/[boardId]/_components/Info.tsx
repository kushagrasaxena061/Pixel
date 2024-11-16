"use client";

import React from "react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRenameModal } from "@/store/use-rename-modal";
import Actions from "@/components/actions";
import { Hint } from "@/components/hint";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });
  const { onOpen } = useRenameModal();

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2  bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Button asChild className="px-2" variant="board">
        <Link href="/">
          <Image src="/logo.jpeg" alt="Board Logo" height={40} width={40} />
          <span
            className={cn(
              "font-semibold text-xl ml-2 text-black",
              font.className
            )}
          >
            Pixel
          </span>
        </Link>
      </Button>
      <TabSeparator />
      <Button
        onClick={() => onOpen(data._id, data.title)}
        variant="board"
        className="text-base font-normal px-2"
      >
        {data.title}
      </Button>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu className="" />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute w-[300px] top-2 left-2  bg-white rounded-md px-1.5 h-12 flex items-center shadow-md" />
  );
};
