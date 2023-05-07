require('dotenv/config');
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'



const generateAction = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  try {
    console.log('API request: ', req.body.input)
    const response =  await axios.post(`${process.env.API_URL}/users`, req.body.input)
    console.log('API response: ', response.data)


  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message ": err })

  }
}


export default generateAction