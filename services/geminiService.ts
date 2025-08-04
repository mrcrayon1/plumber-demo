import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development and should not appear in production
  console.warn("API_KEY is not set. AI Assistant will not function.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getPlumbingDiagnosis = async (problemDescription: string): Promise<string> => {
  if (!API_KEY) {
    return "The AI assistant is currently unavailable. Please call us for assistance.";
  }

  const model = "gemini-2.5-flash";
  const systemInstruction = `You are a helpful, friendly AI assistant for Peaks Plumbing.
A customer is describing a plumbing issue. Your goal is to provide a brief, easy-to-understand summary of possible causes and then STRONGLY and CLEARLY advise them to schedule a professional service for a proper diagnosis and repair.
- DO NOT provide any DIY (do-it-yourself) instructions or suggest the user try to fix it themselves. This is for safety and to ensure proper repair.
- Keep your response to 2-3 short paragraphs.
- Always end by directing them to call Peaks Plumbing or use the online scheduling form.
- Be reassuring and professional.`;

  try {
    const response = await ai.models.generateContent({
        model,
        contents: problemDescription,
        config: {
            systemInstruction,
            temperature: 0.5,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error getting plumbing diagnosis:", error);
    return "Sorry, I encountered an error while analyzing your issue. Please give us a call at (515) 278-8803 for immediate assistance.";
  }
};