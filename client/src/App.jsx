import React,{ useState } from "react";
import axios from "axios";
import TextInput from "./components/TextInput";
import ResponseOutput from "./components/ResponseOutput";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axiosInstance from "./api/axios";
import Loading from "./components/Loading";

function App() {
  const [inputText, setInputText] = useState("");
  const [tone, setTone] = useState("simple");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      setExplanation("Please enter some text to explain.");
      return;
    }
    setLoading(true);
    setExplanation("");

    try {
      const { data } = await axiosInstance.post("/explain", {
        inputText,
        tone,
      });
      if (!data || !data.explanation) {
        throw new Error("No explanation returned from server.");
      }

      setExplanation(data.explanation);
    } catch (error) {
      setExplanation("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header />
    
    <div className="min-h-screen flex flex-col items-center px-4">
      

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col md:flex-row gap-6 justify-center"
      >
        <TextInput
          inputText={inputText}
          setInputText={setInputText}
          tone={tone}
          setTone={setTone}
        />

        

        <ResponseOutput
          explanation={explanation}
          isLoading={loading}
          loading={loading}
        />
      </form>

      <Footer />
    </div>

    </>
  );
}

export default App;
