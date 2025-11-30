import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, PUBLICATIONS, RESEARCH_AREAS } from "../constants";

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const initializeAI = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not defined.");
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const getSystemInstruction = () => {
  const pubsText = PUBLICATIONS.map(p => `- "${p.title}" (${p.year}) published in ${p.journal}. Abstract: ${p.abstract}`).join('\n');
  const areasText = RESEARCH_AREAS.map(a => `- ${a.title}: ${a.description}`).join('\n');

  return `You are an AI assistant for the website of ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}.
  
  Your goal is to answer visitor questions professionally, concisely, and warmly, pretending to be a helpful assistant representing Ging.
  
  Here is the context about Ging:
  Bio: ${PERSONAL_INFO.about}
  
  Research Areas:
  ${areasText}
  
  Publications:
  ${pubsText}
  
  If asked about something not in this context, politely state that you are an AI focused on her academic work and suggest contacting her directly via email at ${PERSONAL_INFO.email}.
  Keep answers relatively short (under 150 words) unless asked for a detailed explanation. Use markdown for formatting.`;
};

export const startChat = async () => {
  const client = initializeAI();
  if (!client) throw new Error("AI Client could not be initialized");

  chatSession = client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: getSystemInstruction(),
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  if (!chatSession) {
    await startChat();
  }
  
  if (!chatSession) throw new Error("Chat session not initialized");

  return chatSession.sendMessageStream({ message });
};