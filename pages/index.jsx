import React from "react";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();

  const goHomapage = () => {
    router.push("./Homepage")
  }
  const distributor = () => {
    router.push("./Homepage2")
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EEF2FF] via-[#F5F7FF] to-[#E0E7FF] px-4">
      <div
        className="
          w-full max-w-md mb-32
          bg-white/80 backdrop-blur-xl
          border border-blue-200/60
          rounded-3xl
          shadow-[0_20px_60px_rgba(37,99,235,0.25)]
          p-8
          animate-fadeIn
        "
      >
        <div className="flex justify-center mb-4"></div>

        <h1 className="text-center text-2xl font-semibold text-gray-800">
          The Tools Shop
        </h1>


        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder=" username"
              className="
                mt-2 w-full px-4 py-2.5 rounded-xl
                border border-gray-300
                bg-white/70 text-gray-900
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500
                transition
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder=" password"
              className="
                mt-2 w-full px-4 py-2.5 rounded-xl
                border border-gray-300
                bg-white/70 text-gray-900
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500
                transition
              "
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-6">
            <button
              type="button"
              onClick={goHomapage}
              className="
                    group
                    w-44 py-3 rounded-2xl
                    font-semibold text-white text-sm
                    bg-gradient-to-r from-blue-600 to-blue-700
                    shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                    transition-all duration-200
                    hover:from-blue-700 hover:to-blue-800
                    hover:-translate-y-1
                    active:scale-95
                    cursor-pointer
                  "
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-base">JJ Tools Login</span>
              </div>
            </button>

            <button
              type="button"
              onClick={distributor}
              className="
                    group
                    w-44 py-3 rounded-2xl
                    font-semibold text-white text-sm 
                    bg-pink-500
                    border border-blue-200
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-200
                    hover:bg-pink-500
                    hover:-translate-y-1
                    active:scale-95
                    cursor-pointer
    "
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-base">Distributor Login</span>
              </div>
            </button>
          </div>


        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          The Tools Shop © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Index;
