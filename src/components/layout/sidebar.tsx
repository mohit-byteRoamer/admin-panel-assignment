"use client";
import React from "react";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { menuItems } from "@/constants/menuItems";

const Sidebar = () => {
    const router = useRouter();

    // Function to handle menu item click

    return (
        <>
            <div style={{ height: 32, margin: 16, background: 'red' }} />
            <Menu
                theme="light"
                defaultSelectedKeys={["5-1"]}
                mode="inline"
                items={menuItems}
                style={{
                    backgroundColor: "#4dafac",
                    color: "#fff"
                }}
            />
        </>
    );
};

export default Sidebar;
