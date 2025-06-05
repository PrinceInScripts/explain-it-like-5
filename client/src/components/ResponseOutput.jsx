import React, { useState } from "react";
import { Copy } from "lucide-react";
import Loading from "./Loading";

const ExplanationDisplay = ({ explanation, isLoading }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (explanation) {
      navigator.clipboard.writeText(explanation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
      <label className="text-gray-700 font-medium">Here’s your explanation</label>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[280px] bg-gray-50 rounded-lg shadow-sm">
          <Loading />
        </div>
      ) : (
        <div className="relative">
          <textarea
            className="w-full min-h-[280px] p-3 border rounded-lg resize-none shadow-sm bg-gray-50"
            value={explanation || "Explanation will appear here"}
            readOnly
          />
        </div>
      )}

      <button
        onClick={handleCopy}
        disabled={isLoading || !explanation}
        className={`py-2 px-4 rounded-md text-sm transition-all duration-200 ${
          isLoading || !explanation
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {copied ? (
          <span className="text-green-600">Copied!</span>
        ) : (
          <span>
            Copy Explanation
            <Copy className="inline h-4 w-4 ml-1" />
          </span>
        )}
      </button>
    </div>
  );
};

export default ExplanationDisplay;
