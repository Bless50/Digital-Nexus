import Anthropic from '@anthropic-ai/sdk';

// Note: In a production environment, you should proxy requests through a backend
// to avoid exposing your API key in the client-side code.

export const generateBusinessStrategyStream = async (
    apiKey: string,
    businessName: string,
    businessType: string,
    goal: string,
    onChunk: (chunk: string) => void
): Promise<string> => {
    if (!apiKey) {
        const errorMsg = "API Key is missing. Please provide your Anthropic API key.";
        onChunk(errorMsg);
        return errorMsg;
    }

    const anthropic = new Anthropic({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true // Allowed for this client-side demo
    });

    const prompt = `
      Act as a senior digital business consultant in Yaoundé, Cameroon.
      
      Analyze the following business:
      Name: ${businessName}
      Type: ${businessType}
      Primary Goal: ${goal}

      Provide a concise, high-impact paragraph (approx 100 words) explaining specifically why a professional website is critical for THIS specific business type to achieve their goal in the local Cameroonian market. 
      Focus on trust, credibility, and customer acquisition. Avoid generic fluff. Speak directly to the business owner.
    `;

    try {
        const stream = await anthropic.messages.create({
            model: "claude-3-5-haiku-latest",
            max_tokens: 300,
            messages: [{ role: "user", content: prompt }],
            stream: true,
        });

        let fullText = "";
        for await (const chunk of stream) {
            if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
                const content = chunk.delta.text;
                if (content) {
                    fullText += content;
                    onChunk(content);
                }
            }
        }
        return fullText;

    } catch (error) {
        console.error("Error generating strategy:", error);
        throw new Error("Failed to generate strategy via Anthropic.");
    }
};
