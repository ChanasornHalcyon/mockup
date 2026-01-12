import React, { useState } from "react";
import { motion } from "framer-motion";

const ModalAddCustomer = ({ onClose }) => {
  const [form, setForm] = useState({
    customer: "",
    country: "",
  });

  const COUNTRY_OPTIONS = ["Thailand", "Vietnam", "Japan", "China", "USA"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-start mt-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="bg-white w-[350px] sm:w-[520px] md:w-[450px] rounded-2xl shadow-xl">
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-black">
              Add Customer
            </h2>
            <button
              onClick={onClose}
              className="text-2xl text-black cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="p-6 space-y-5 text-sm">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-black">Customer</label>
              <input
                type="text"
                name="customer"
                value={form.customer}
                onChange={handleChange}
                placeholder=" Customer Name"
                className="p-2 border rounded-lg text-black bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-black">Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="p-2 border rounded-lg text-black bg-white cursor-pointer"
              >
                <option value="">-- Select Country --</option>
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-5 border-t flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg text-black cursor-pointer"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>

      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
    </>
  );
};

export default ModalAddCustomer;
