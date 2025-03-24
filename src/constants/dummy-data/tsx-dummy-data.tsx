"use client"

import { COLOR_MULBERRY_PINK } from "@/constants/colors";
import { X } from "@deemlol/next-icons";
import { COLUMNS_TYPES } from "../types";

export const COLUMNS: COLUMNS_TYPES[] = [
    {
        title: "Incompatible Fields",
        dataIndex: "incompatibleFields",
        key: "incompatibleFields",
        render: (text: string, data: any) => (
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