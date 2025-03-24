"use client";

import React from "react";
import { Table as AntTable, } from "antd";
import { ANT_TABLE_PROPS_TYPES } from "../types";

const Table = ({
    columns,
    data,
    loading = false,
    rowKey = "key",
    pagination
}: ANT_TABLE_PROPS_TYPES) => {
    return <AntTable
        pagination={pagination}
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={rowKey}
    />;
};

export default Table;
