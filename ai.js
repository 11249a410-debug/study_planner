const Groq = require("groq-sdk")

const groq = new Groq({
apiKey:process.env.GROQ_API_KEY
})

async function createPlan(data){

const prompt = `
Create a structured study schedule.

Subjects: ${data.subjects}
Exam date: ${data.examDate}
Daily hours: ${data.hours}
Difficulty: ${data.difficulty}

Include:
Daily tasks
Revision sessions
Breaks
Weekly review
`

const response = await groq.chat.completions.create({

messages:[
{role:"user",content:prompt}
],

model:"llama3-70b-8192"
})

return response.choices[0].message.content
}

module.exports=createPlan
