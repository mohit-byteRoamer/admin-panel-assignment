import { COLOR_BLACK } from "@/constants/colors";
import { Bell, ChevronDown, MessageCircle } from "@deemlol/next-icons";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center justify-between px-6 z-50">
            <div className="flex items-center">
                <Image
                    alt="logo"
                    width={165}
                    height={30}
                    src="/images/header-logo.png"
                    unoptimized
                    priority
                />
                <div className="text-xl text-black font-normal ml-20">
                    Hey, <span className="text-olive-green">Sammie</span> Welcome Back
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <MessageCircle size={24} color={COLOR_BLACK} />
                <Bell size={24} color={COLOR_BLACK} />
                <div className="w-10 h-10 border-2 border-slate-200 rounded-lg p-0.5">
                    <Image
                        alt="logo"
                        width={0}
                        height={0}
                        className="w-full h-full object-contain"
                        src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1742640083~exp=1742643683~hmac=d31afb7bfc9c897bd69dbc88ee3c156e76eb80ca5f3bcc46f66d9cdf6cf233cb&w=740"
                        unoptimized
                        priority
                    />
                </div>
                <div className="flex gap-2">
                    <div className="text-lg text-black font-medium">Robert Fox</div>
                    <ChevronDown size={24} color={COLOR_BLACK} />
                </div>
            </div>
        </header>
    );
};

export default Header;
