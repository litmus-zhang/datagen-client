require('dotenv/config');
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';



type Data = {
  name: string
}

const configuration = new Configuration({
  apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Generate data in json format, with the following title 

Title: `

const generateAction = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  try {
    console.log('API request: ', req.body.input)
    const baseCompletion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${basePromptPrefix}${req.body.input}`,
      temperature: 0.85,
      max_tokens: 250,

    })
    const output = baseCompletion.data.choices[0].text;
    return res.status(200).json({ output })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err })

  }
}


export default generateAction