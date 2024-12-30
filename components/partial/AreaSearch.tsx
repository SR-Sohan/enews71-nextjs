"use client";
import React, { useState } from "react";

const AreaSearch = () => {
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [upazila, setUpazila] = useState("");

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <form className="space-y-3 p-2 my-3 ">
        {/* First Row: Division and District */}
        <div className="flex gap-3">
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="flex-1 p-2 border rounded bg-white text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              --বিভাগ--
            </option>
            <option value="dhaka">ঢাকা</option>
            <option value="chittagong">চট্টগ্রাম</option>
            {/* Add more divisions as needed */}
          </select>

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="flex-1 p-2 border rounded bg-white text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              --জেলা--
            </option>
            <option value="dhaka">ঢাকা</option>
            <option value="gazipur">গাজীপুর</option>
            {/* Add more districts as needed */}
          </select>
        </div>

        {/* Second Row: Upazila */}
        <div>
          <select
            value={upazila}
            onChange={(e) => setUpazila(e.target.value)}
            className="w-full p-2 border rounded bg-white text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              --উপজেলা--
            </option>
            <option value="savar">সাভার</option>
            <option value="uttara">উত্তরা</option>
            {/* Add more upazilas as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          অনুসন্ধান করুন
        </button>
      </form>
    </div>
  );
};

export default AreaSearch;
