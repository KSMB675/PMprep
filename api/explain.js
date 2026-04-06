// Vercel serverless function — handles AI explanation requests
// Keeps the Anthropic API key server-side (not exposed to the browser)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { question, correctAnswer, userAnswer } = req.body

  if (!question || correctAnswer === undefined || userAnswer === undefined) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const Anthropic = (await import('@anthropic-ai/sdk')).default
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 300,
    messages: [
      {
        role: 'user',
        content: `You are a CAPM/PMP exam tutor. A student answered a practice question incorrectly.

Question: ${question}
Correct answer: ${correctAnswer}
Student's answer: ${userAnswer}

Give a clear, concise explanation (2-3 sentences) of why the correct answer is right and what concept the student should review. Be encouraging but direct.`,
      },
    ],
  })

  return res.status(200).json({
    explanation: message.content[0].text,
  })
}
