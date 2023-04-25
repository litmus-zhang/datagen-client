require('dotenv/config');
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';





const configuration = new Configuration({
  apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration);

const generateAction = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  try {
    console.log('API request: ', req.body.input)
    const { input } = req.body.input
    const baseCompletion = await openai.createCompletionletion({
      model: "text-davinci-003",
      prompt: `Generate the data in Javascript Object Notation format, with the title:
           ${input}`,
      temperature: 0.9,
      max_tokens: 300,
    })

    
    const output = baseCompletion.data.choices[0].text;
    return res.status(200).json({ output })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message ": err })

  }
}


export default generateAction