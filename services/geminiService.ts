import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateBusinessStrategy = async (businessName: string, businessType: string, goal: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const prompt = `
      Act as a senior digital business consultant in Yaoundé, Cameroon.
      
      Analyze the following business:
      Name: ${businessName}
      Type: ${businessType}
      Primary Goal: ${goal}

      Provide a concise, high-impact paragraph (approx 100 words) explaining specifically why a professional website is critical for THIS specific business type to achieve their goal in the local Cameroonian market. 
      Focus on trust, credibility, and customer acquisition. Avoid generic fluff. speak directly to the business owner.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 1024 }, // Use thinking for better reasoning
      }
    });

    return response.text || "Unable to generate strategy at this time.";
  } catch (error) {
    console.error("Error generating strategy:", error);
    return "An error occurred while generating your strategy. Please try again.";
  }
};