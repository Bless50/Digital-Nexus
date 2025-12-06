import OpenAI from "openai";

// Note: In a production environment, you should proxy requests through a backend
// to avoid exposing your API key in the client-side code.
const apiKey = process.env.OPENAI_API_KEY || '';

const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

export const generateBusinessStrategyStream = async (
    businessName: string,
    businessType: string,
    goal: string,
    onChunk: (chunk: string) => void
): Promise<string> => {
    if (!apiKey) {
        const errorMsg = "API Key is missing. Please configure OPENAI_API_KEY in your .env file.";
        onChunk(errorMsg);
        return errorMsg;
    }

    const prompt = `
      Act as a senior digital business consultant in Yaoundé, Cameroon.
      
      Analyze the following business:
      Name: ${businessName}
      Type: ${businessType}
      Primary Goal: ${goal}

      Provide a concise, high-impact paragraph (approx 100 words) explaining specifically why a professional website is critical for THIS specific business type to achieve their goal in the local Cameroonian market. 
      Focus on trust, credibility, and customer acquisition. Avoid generic fluff. speak directly to the business owner.
    `;

    try {
        const stream = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            stream: true,
        });

        let fullText = "";
        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
                fullText += content;
                onChunk(content);
            }
        }
        return fullText;

    } catch (error) {
        console.error("Error generating strategy:", error);
        throw new Error("Failed to generate strategy via OpenAI.");
    }
};
