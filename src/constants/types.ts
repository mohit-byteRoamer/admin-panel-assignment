import { ReactNode } from "react";
import { ROUTES } from "./menuItems";

export interface SAMPLE_DATA_TYPES {
    key: string,
    incompatibleFields: string,
    guestName: string,
    k: string,
    reasons: string
}

export interface SOCIAL_ICONS_TYPES {
    component: any,
    key: string
}

export interface USER_DETAILS_TYPES {
    label: string;
    value: string;
}

export interface USER_DETAILS_LIST_TYPES {
    label: string;
    value: string;
}

export interface COLUMNS_TYPES {
    title: string,
    dataIndex: string,
    key: string
    render?: any
}

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = (typeof ROUTES)[RouteKeys];
export interface MENU_ITEM_TYPE {
    key: string;
    icon?: ReactNode;
    label: ReactNode | string;
    path: string;
    children?: MENU_ITEM_TYPE[];
}
