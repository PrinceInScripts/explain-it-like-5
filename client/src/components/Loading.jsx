import React from "react";


const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
    </div>
  );
};

export default Loading;
