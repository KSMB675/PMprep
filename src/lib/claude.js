export async function getExplanation(question, correctAnswer, userAnswer) {
  try {
    const response = await fetch('/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, correctAnswer, userAnswer }),
    })
    if (!response.ok) return null
    const data = await response.json()
    return data.explanation
  } catch {
    return null
  }
}
