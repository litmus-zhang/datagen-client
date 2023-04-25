require('dotenv/config');
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';





const configuration = new Configuration({
  apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Write me a well detailed JSON data with the title below. Please make sure the data goes in-depth on the title and shows that the data is of highest quality.

Title:`;

const generateAction = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  try {
    console.log('API request: ', req.body.input)
    const { input } = req.body.input
    const baseCompletion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${basePromptPrefix}${input}`,
      temperature: 0.7,
      max_tokens: 256,
    })


    const outputs = baseCompletion.data.choices.pop()?.text;
    res.status(200).json({ outputs })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message ": err })

  }
}


export default generateAction