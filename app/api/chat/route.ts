import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const chat = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: "You are a friendly wellness assistant for 'Herbal Nutrix', a premium herbal detox brand. Your goal is to help customers understand the benefits of our detox teas and natural supplements. Be informative, encouraging, and natural-themed. If asked about ingredients, mention things like green tea, dandelion root, ginger, and turmeric." }]
        },
        ...history,
        {
          role: "user",
          parts: [{ text: message }]
        }
      ],
      config: {
        maxOutputTokens: 250,
      }
    });

    const response = await chat;
    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response from AI assistant" }, { status: 500 });
  }
}
