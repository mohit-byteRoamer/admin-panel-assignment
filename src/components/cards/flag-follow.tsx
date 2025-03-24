"use client"

import { DEEP_TEAL } from "@/constants/colors"
import { Edit2, Flag } from "@deemlol/next-icons"
import Button from "../buttons"
import Switch from "../switch"
import { useState } from "react"

export interface FLAG_FOLLOW_PROPS_TYPE {
    title: string
}

const FlagFollow = ({ title }: FLAG_FOLLOW_PROPS_TYPE) => {
    const [toggle, setToggle] = useState(false)
    const toggleHandler = (val: boolean) => setToggle(val)

    return (<div className="bg-white rounded-md">
        <div className="p-2 border-b flex items-center justify-between px-3">
            <span className="text-sm font-medium text-mulberry-pink !border-none">{title}</span>
            <div className="flex gap-2 items-center">
                <Button className="!bg-mulberry-pink !text-white !h-6" >
                    Sun, 24 Nov, 2024
                </Button>
                <div className="w-6 h-6 flex items-center justify-center rounded-md p-1 bg-deep-teal-light">
                    <Edit2 size={16} color={DEEP_TEAL} />
                </div>
            </div>
        </div>
        <div className="p-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Flag size={14} color={DEEP_TEAL} />
                <span>Flag for follow up:</span>
            </div>
            <Switch size="small" isToggle={toggle} onChange={toggleHandler} />
        </div>
    </div>)
}

export default FlagFollow