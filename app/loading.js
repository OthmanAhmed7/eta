// app/loading.js
"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    console.log("🔄 Global loader mounted");
    return () => console.log("✅ Global loader unmounted");
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
