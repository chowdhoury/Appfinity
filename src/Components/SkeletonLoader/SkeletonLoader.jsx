import React from "react";

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-4 bg-white rounded-sm">
          <div className="skeleton w-full h-40 rounded-lg mb-4"></div>
          <div className="skeleton h-6 w-3/4 mb-4"></div>
          <div className="flex justify-between">
            <div className="skeleton h-8 w-16 rounded-sm"></div>
            <div className="skeleton h-8 w-12 rounded-sm"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
