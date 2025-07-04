"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import {ModeToggle} from "./Toggletheme"
import {dark} from "@clerk/themes"
import { useTheme } from "next-themes";


export default function Navbar() {

const {theme} = useTheme();

    return <header className="shadow-sm">
        <div className="mx-auto flex max-w-7xl p-3 items-center justify-between gap-3">
            <Link href="/resume" className="flex items-center gap-3">
                <Image src={logo} alt="logo" width={35} height={35} className="rounded-full"/>
                <span className="text-xl font-bold tracking-tight">AI Resume Builder</span>
            </Link>
            <div className="flex items-center gap-2">
            <ModeToggle/>
            <UserButton 
            
            appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements:{
                    avatarBox:{
                        width:35,
                        height:35
                    }
                }
            }}
            >
                <UserButton.MenuItems>
                    <UserButton.Link 
                    label="Billing"
                    labelIcon = {<CreditCard className="size-4"/>}
                    href="/biling"
                    />
                </UserButton.MenuItems>
                </UserButton>
                </div>
        </div>
    </header>;
}