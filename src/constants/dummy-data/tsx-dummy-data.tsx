"use client"

import { COLOR_MULBERRY_PINK } from "@/constants/colors";
import { X } from "@deemlol/next-icons";

// TABLE DATA
export const columns = [
    {
        title: "Incompatible Fields",
        dataIndex: "incompatibleFields",
        key: "incompatibleFields",
        render: (text, data) => (
            <div className="flex gap-2 items-center">
                <X size={24} color={COLOR_MULBERRY_PINK} />
                <div className={data.key == "4" ? "text-mulberry-pink" : ""}>
                    {text}
                </div>
            </div>
        )
    },
    {
        title: "Guest Name",
        dataIndex: "guestName",
        key: "guestName",
    },
    {
        title: "K..",
        dataIndex: "k",
        key: "k",
    },
    {
        title: "Reasons",
        dataIndex: "reasons",
        key: "reasons",
    },
];