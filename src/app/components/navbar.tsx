"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className='')}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Skills">
        </MenuItem> */}
        {/* <MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem> */}
      </Menu>
    </div>
  );
}
