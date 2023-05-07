require('dotenv').config();
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'



const generateAction = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  try {
    console.log('API request: ', req.body.input)
    const response =  await axios.post("http://localhost:8000/models", req.body.input)
    console.log('API response: ', response.data)
    return res.status(200).json(response.data)

  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message ": err })

  }
}


export default generateAction