import { TableProps } from "antd";

export interface FLAG_FOLLOW_PROPS_TYPE {
    title: string
}

export interface USER_SOCIAL_CARD_PROPS_TYPES {
    userName: string,
    USER_DETAILS: any[],
    userId: string
}

export interface VIEW_EDIT_CARD_PROPS_TYPES {
    title: string
    isEdit?: boolean,
}

export interface SCROLL_LIST_PROPS_TYPE {
    list: any[]
}

export interface SWITCH_PROPS_TYPES {
    isToggle: boolean;
    onChange: (checked: boolean) => void;
    size?: "small" | "default";
}

export interface ANT_TABLE_PROPS_TYPES {
    columns: TableProps["columns"];
    data: any[];
    loading?: boolean;
    rowKey?: string;
    pagination?: false | TableProps<any>["pagination"];
}