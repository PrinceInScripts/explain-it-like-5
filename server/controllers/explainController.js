import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const explainText = async (req, res) => {
  try {
    const { inputText, tone } = req.body;

    if (!inputText || !tone) {
      return res.status(400).json({ error: "Missing input text or tone." });
    }

    const tonePrompts = {
    like5: "Explain this like I’m 5: ",
    simple: "Explain this simply: ",
    analogy: "Explain this using an analogy: ",
    professional: "Explain this in a professional tone: ",
    funny: "Explain this in a funny and light-hearted way: ",
    motivational: "Explain this with a motivational and inspiring tone: ",
    };


    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${tonePrompts[tone]}${inputText}`,
        },
      ],
    });

    const explanation = completion.choices[0].message.content;
    res.status(200).json({ explanation });
  } catch (error) {
    console.error("Error generating explanation:", error.message);
    res.status(500).json({
      error: "Failed to generate explanation.",
      message: error.message,
    });
  }
};
