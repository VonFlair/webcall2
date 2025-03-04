import { OpenAI } from 'openai'
import { Langfuse } from 'langfuse'

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const langfuse = new Langfuse({
    publicKey: process.env.LANGFUSE_PUBLIC_KEY!,
    secretKey: process.env.LANGFUSE_SECRET_KEY!,
  })

  const trace = langfuse.trace({
    name: 'chat-interaction',
  })

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages,
    stream: true,
  })

  // Process stream and log to Langfuse
  return new Response(completion.toReadableStream())
}