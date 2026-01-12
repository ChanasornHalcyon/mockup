import React, { useState } from "react";
import {
    Home,
    ClipboardList,
    Users,
    Settings,
    LogOut,
    Package,
    Menu,
    X,
} from "lucide-react";
import Customers2 from "./Customer2";
import Products from "./Products";
import Dashboard2 from "./Dashboard2";
const MENU = [
    { key: "dashboard2", label: "Dashboard", icon: Home },
    { key: "customers", label: "Customers", icon: ClipboardList },
    { key: "products", label: "Products", icon: Package },
    { key: "settings", label: "Settings", icon: Settings },
];

const Homepage2 = () => {
    const [activePage, setActivePage] = useState("dashboard2");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activePage) {
             case "dashboard2":
                return <Dashboard2 />;
            case "customers":
                return <Customers2 />;

                case "products":
                return <Products />;
            default:

        }
    };

    return (
        <div className="h-screen flex bg-[#F8F9FD] overflow-hidden relative">

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <aside
                className={`
          fixed md:static z-40
          h-full
          w-64
          bg-white border-r
          flex flex-col
          shadow-[2px_0_20px_rgba(0,0,0,0.05)]
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >

                <div className="h-20 flex items-center justify-between px-5 border-b">
                    <div className="flex items-center gap-3 text-[#0B4EA2]">
                        <img
                            src="/FDMLOGO.jpg"
                            className="h-15 w-auto rounded-lg"
                        />
                        {/* <span className="text-lg font-semibold tracking-wide">
                            FDM
                        </span> */}
                    </div>


                    <button
                        className="md:hidden text-gray-500"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={22} />
                    </button>
                </div>


                <nav className="flex-1 px-4 py-6 space-y-2">
                    {MENU.map((item) => {
                        const Icon = item.icon;
                        const active = activePage === item.key;

                        return (
                            <button
                                key={item.key}
                                onClick={() => {
                                    setActivePage(item.key);
                                    setSidebarOpen(false);
                                }}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-3 rounded-xl
                                    font-medium transition cursor-pointer
                                    ${active
                                        ? "bg-blue-100 text-[#0B4EA2]"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-[#0B4EA2]"
                                    }
                                    `}
                            >
                                <Icon size={20} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>


                <div className="p-4 border-t">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition">
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>


            <main className="flex-1 flex flex-col overflow-auto">

                <div className="md:hidden flex items-center gap-3 p-4 bg-white border-b">
                    <button onClick={() => setSidebarOpen(true)}>
                        <Menu className="text-black" size={24} />
                    </button>
                    <span className="font-semibold text-gray-700">
                        {MENU.find((m) => m.key === activePage)?.label}
                    </span>
                </div>


                <div className="p-4 md:p-6">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default Homepage2;
