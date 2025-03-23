"use client";
import React from "react";
import { Menu } from "antd";
import { MENU_ITEMS } from "@/constants/menuItems";

const Sidebar = () => (
    <>
        <div style={{ height: 32, margin: 16, background: 'red' }} />
        <Menu
            theme="light"
            defaultSelectedKeys={["5-1"]}
            mode="inline"
            items={MENU_ITEMS}
            style={{
                backgroundColor: "#4dafac",
                color: "#fff"
            }}
        />
    </>
);

export default Sidebar;
