import React from "react";
import { useState } from "react";
import {
    Home,
    ClipboardList,
    Users,
    Settings,
    LogOut,
} from "lucide-react";

const MENU = [
    { label: "Dashboard", icon: Home },
    { label: "Customers", icon: ClipboardList },
    { label: "Users", icon: Users },
    { label: "Settings", icon: Settings },
];

const Homepage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="h-screen flex bg-[#F8F9FD] overflow-hidden">


            <aside
                className={`
    fixed md:static z-40
    h-full
    w-64 md:w-56 lg:w-64
    bg-white
    border-r border-gray-200
    flex flex-col
    shadow-[2px_0_20px_rgba(0,0,0,0.05)]
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
            >

                <div className="h-20 flex items-center justify-center border-b">
                    <div className="flex items-center gap-3 text-[#0B4EA2]">
                        <img
                            src="/JJTOOLS.jpg"
                            alt="JJ Tools"
                            className="h-9 w-9 rounded-lg"
                        />
                        <span className="text-lg font-semibold tracking-wide hidden md:block">
                            JJ Tools
                        </span>
                    </div>
                </div>


                <nav className="flex-1 px-3 md:px-4 py-6 space-y-2">
                    {MENU.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                className="
          w-full flex items-center gap-3 px-4 py-3 rounded-xl
          text-gray-700 font-medium
          hover:bg-blue-50 hover:text-[#0B4EA2]
          transition
        "
                            >
                                <Icon size={20} />
                                <span className="hidden md:inline">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>



                <div className="p-4 border-t">
                    <button
                        className="
              w-full flex items-center gap-3 px-4 py-3 rounded-xl
              text-red-600 font-medium
              hover:bg-red-50 transition
            "
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            <main className="flex-1 flex flex-col overflow-auto">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Dashboard
                    </h1>

                    <div className="text-sm text-gray-500">
                        Welcome, <span className="font-medium text-gray-700">Admin</span>
                    </div>
                </div>

                <div className="
          mt-10 bg-white rounded-2xl p-6
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        ">
                    <p className="text-gray-500 text-sm mb-2">Overview</p>
                    <div className="h-48 flex items-center justify-center text-gray-400">
                        ( Chart / Table / Activity log )
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Homepage;
