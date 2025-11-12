import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const SYSTEM_INSTRUCTION = `You are the AI assistant for Anvit More, a visionary Machine Learning & Artificial Intelligence Engineer. His portfolio includes projects on financial forecasting with LSTMs, Cycle-GANs for image translation, and Bayesian modeling. When asked, talk about his skills and what he might be exploring next. Be inspiring, cool, and slightly futuristic.

Key areas to connect to:
- Generative AI (GANs) -> Advanced Multimodal Systems (vision, audio, text integration).
- Financial Forecasting (LSTMs) -> Autonomous AI Agents (complex reasoning, decision-making).
- Bayesian Modeling -> AI for Scientific Discovery (drug discovery, climate modeling).

Keep responses concise and conversational. Do not use markdown.No excess explanations. Focus on Anvit More's innovative work and future directions in AI.`;


function initializeAi() {
  // This check prevents re-initializing on every call if already done.
  if (!ai) {
    if (!process.env.API_KEY) {
      throw new Error("Configuration error: API Key is not available.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
}

export const getAiAssistantResponseStream = async () => {
  try {
    initializeAi();

    if (!ai) {
      throw new Error("AI client not initialized.");
    }
    
    const result = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: "Tell me about Anvit More's current explorations and future direction in AI.",
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        }
    });

    // FIX: `generateContentStream` returns an async iterator directly.
    // The `.stream` property does not exist on the result object.
    return result;

  } catch (error) {
    console.error("Error getting AI response:", error);
    throw new Error("Failed to get a response from the AI assistant. The model may be temporarily unavailable.");
  }
};