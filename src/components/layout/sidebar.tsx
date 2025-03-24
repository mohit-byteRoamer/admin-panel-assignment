"use client";

import React, { useMemo } from "react";
import { Menu } from "antd";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/constants/menuItems";
import { getMenuKeyByPath } from "@/utils/global-functions";

const Sidebar = () => {
    const pathname = usePathname();
    const selectedKey = useMemo(() => getMenuKeyByPath(pathname), [pathname]);
    return (
        <Menu
            theme="light"
            defaultSelectedKeys={selectedKey ? [selectedKey] : []}
            mode="inline"
            items={MENU_ITEMS}
            className="!bg-primary !text-white !mt-16"
        />
    );
};

export default Sidebar;
