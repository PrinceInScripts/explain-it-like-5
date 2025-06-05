import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const TextInput = ({ inputText, setInputText, tone, setTone }) => {
  return (
    <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
      <label className="text-gray-700 font-medium">
        Paste your confusing text
      </label>
      <textarea
        className="p-3 border rounded-lg resize-none shadow-sm"
        value={inputText}
        rows={11}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something you don’t understand..."
      />

      {/* <div> */}
      <label className="font-semibold text-gray-700 flex items-center gap-2">
        Select tone:
        <div className="relative group cursor-pointer">
          <FaQuestionCircle className="text-gray-500" />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Tone affects how simple or professional the explanation is.
          </span>
        </div>
      </label>
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="like5">Explain like I’m 5</option>
        <option value="simple">Explain simply</option>
        <option value="analogy">Explain with analogy</option>
        <option value="professional">Professional</option>
        <option value="funny">Explain with funny</option>
        <option value="motivational">Motivational</option>
      </select>
      {/* </div> */}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Explain Now
      </button>
    </div>
  );
};

export default TextInput;
