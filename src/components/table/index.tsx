"use client";

import React from "react";
import { Table as AntTable, } from "antd";
import type { TableProps } from "antd";

interface AntTableProps {
    columns: TableProps["columns"];
    data: any[];
    loading?: boolean;
    rowKey?: string;
    pagination?: false | TableProps<any>["pagination"];
}

const Table = ({
    columns,
    data,
    loading = false,
    rowKey = "key",
    pagination
}: AntTableProps) => {
    return <AntTable pagination={pagination} columns={columns} dataSource={data} loading={loading} rowKey={rowKey} />;
};

export default Table;
