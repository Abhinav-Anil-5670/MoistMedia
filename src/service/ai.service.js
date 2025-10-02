const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Given the following base64 image, generate a short Instagram caption (max 1 lines) that is relevant, catchy, and natural. No generic filler, no hashtags." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config : {
        systemInstruction : "You are an assistant that analyzes images provided in base64 format and generates short, catchy Instagram captions. Your captions must:- Be at most 1 line long.- Be engaging, natural, and directly relevant to the image content.- Avoid generic filler, hashtags, or emojis unless the image strongly suggests them.- Sound human and Instagram-ready."
    }
  });
  return response.text;
}

module.exports = generateCaption
