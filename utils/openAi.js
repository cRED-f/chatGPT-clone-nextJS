import OpenAI from "openai";
const openai = new OpenAI({
  apikey: process.env.OPEN_AI_KEY,
});

export default openai;
