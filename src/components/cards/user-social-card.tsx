import { COLOR_PRIMARY, COLOR_WHITE, DEEP_TEAL } from "@/constants/colors";
import Image from "next/image";
import Button from "../buttons";
import { ChevronDown, Facebook, Instagram, Mail, MessageCircle, Phone } from "@deemlol/next-icons";
import { SOCIAL_ICONS } from "@/constants/dummy-data/global-dummy-data";





const UserSocialCard = ({ userName, userDetails }) => {
    return (
        <div className="flex flex-col items-center w-[30%] bg-white  p-1.5 rounded-md shadow-md">
            {/* PROFILE IMAGE */}
            <div className="w-40 h-40 rounded-full mt-4 overflow-hidden">
                <Image
                    alt="profile"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    priority
                />
            </div>

            {/* USER INFO */}
            <div className="flex gap-2 mt-2 mb-2 text-sm font-semibold">
                <span>Mr. John Key</span>
                <span className="flex items-center border border-primary text-xxs rounded-md px-1 text-primary">
                    121212
                </span>
            </div>

            {/* STATUS BUTTON */}
            <Button bgColor={COLOR_PRIMARY} textColor={COLOR_WHITE}>
                <div className="flex justify-between items-center gap-2">
                    Active
                    <ChevronDown size={20} color="#FFFFFF" />
                </div>
            </Button>

            {/* SOCIAL ICONS */}
            <div className="flex mt-3 border rounded-lg border-dim">
                {SOCIAL_ICONS.map(({ component: Icon, key }) => (
                    <div key={key} className="px-4 p-1 border-r">
                        <Icon size={24} color={DEEP_TEAL} />
                    </div>
                ))}
                <div className="px-4 p-1">
                    <Image alt="WhatsApp" width={24} height={24} src="/icons/whatsapp.png" priority />
                </div>
            </div>

            {/* SEPARATOR */}
            <div className="w-full flex m-4 justify-center items-center gap-2">
                <div className="w-[10%] h-[2px] bg-gradient-to-r from-transparent to-[#004d55] rounded-full"></div>
                <div className="flex gap-4">
                    <Facebook size={20} color={DEEP_TEAL} />
                    <Instagram size={20} color={DEEP_TEAL} />
                    <Image alt="Twitter" width={20} height={20} src="/icons/twitter.png" priority />
                </div>
                <div className="w-[10%] h-[2px] bg-gradient-to-r from-[#004d55] to-transparent rounded-full"></div>
            </div>

            {/* USER DETAILS */}
            <div className="w-full flex flex-col gap-2 px-4 pb-4">
                {userDetails.map(({ label, value }) => (
                    <div key={label} className="w-full flex justify-between items-center">
                        <span className="text-gray-light-dark">{label}</span>
                        <span className="font-semibold">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserSocialCard;
