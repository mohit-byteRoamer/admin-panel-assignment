"use client"
import Sidebar from "./sidebar";
import Header from "./header";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout className="h-screen">
            <Header />
            <Layout className="flex mt-2">
                <Sider
                    width={250}
                    className="gap-4 overflow-y-scroll no-scrollbar"
                    theme="light"
                >
                    <Sidebar />
                </Sider>
                <Layout className="p-4 w-full">
                    <Content className="mt-12  overflow-y-scroll no-scrollbar">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
