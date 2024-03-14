"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){

    const {data:session} = useSession();
    
    const url = `${session?.user?.image}`;
    
    return (
        <header className="w-full h-20 border-b border-gray-400 flex justify-between p-3 mx-3">
            <div className="flex items-center">
                <Link href='/'>
                <Avatar>
                    <AvatarImage src={url} alt='default-user' />
                    <AvatarFallback>Insider</AvatarFallback>
                </Avatar>
                </Link>
            </div>
            <div className="invisible sm:visible flex space-x-3 items-center w-1/4">
                <Input placeholder="Search..." className="text-black p-3"/>
                <Button variant='ghost'>Search</Button>
            </div>
            <div className="flex items-center space-x-10 mr-4">
                {session?.user ? (
                    <Button onClick={() => signOut()} variant='destructive'>SignOut</Button>
                ) : (
                    <>
                        <Button variant='secondary' size='default'>
                            <Link href='/api/auth/signin'>Log In</Link>
                        </Button>
                        <Button variant='secondary'>
                            <Link href='/signup'>Sign Up</Link>
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}