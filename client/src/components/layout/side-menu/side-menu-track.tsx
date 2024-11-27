"use client";
import React, { useState } from "react";
import SideMenuItem from "./side-menu-item";
import { cn } from "@/lib/utils";
import { BsDiscord } from "react-icons/bs";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Divider from "@/components/ui/divider";

type SideMenuTrackProps = {
  servers: any[];
};

type ServerMenuItemProps = {
  server: any;
  isActive: boolean;
} & React.ComponentProps<typeof SideMenuItem>;

const ServerMenuItem = ({
  server,
  isActive,
  ...props
}: Omit<ServerMenuItemProps, "tooltipContent">) => {
  return (
    <SideMenuItem
      isActive={isActive}
      notificationCount={server.messages}
      tooltipContent={<div className="font-semibold">{server.name}</div>}
      className="mx-auto my-2"
      image={{
        url: server.photo,
        alt: server.name,
      }}
      {...props}
    />
  );
};

export default function SideMenuTrack({ servers }: SideMenuTrackProps) {
  const [active, setActive] = useState<string>("default");
  const serversDummy = [
    {
      id: "1",
      name: "Server 1",
      photo: "https://picsum.photos/id/10/200/200",
      messages: 12,
    },
    {
      id: "2",
      name: "Server 2",
      photo: "https://picsum.photos/id/10/200/200",
      messages: 12,
    },
  ];
  return (
    <>
      <TooltipProvider>
        {/*
          Direct messages side menu button
        */}
        <SideMenuItem
          href="/channels/me"
          onClick={() => setActive("default")}
          tooltipContent={<div className="font-semibold">Direct messages</div>}
          notificationCount={432}
          className={cn(
            "mx-auto mb-2 flex items-center justify-center bg-foreground",
            active === "default" ? "bg-primary text-white" : "text-gray-300"
          )}
          isActive={active === "default"}
        >
          <BsDiscord fontSize={26} />
        </SideMenuItem>

        <Divider className="w-8" />

        {/*
          List of servers
        */}
        {servers?.map((server) => (
          <ServerMenuItem
            href={`/channels/${server.id}`}
            key={server.id}
            server={server}
            isActive={active === server.id}
            onClick={() => {
              setActive(server.id);
            }}
          />
        ))}
      </TooltipProvider>
    </>
  );
}
