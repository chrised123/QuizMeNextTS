// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Quix = {
  title: string,
  description: string,
  answers: { id: number, text: string}[]
}

const quiz = [
  {
    title: 'Who is my favorite friends character?',
    description: 'Friends is a popular tv series',
    answers: [
      {id: 1, text: 'Phoebe'},
      {id: 2, text: 'Ross'},
      {id: 3, text: 'Chandler'},
      {id: 4, text: 'Monica'},
    ]
  },{
    title: 'What is my favourite country?',
    description: 'To live in, to visit. Basically to do anything',
    answers: [
      {id: 1, text: 'Australia'},
      {id: 2, text: 'India'},
      {id: 3, text: 'Singapore'},
      {id: 4, text: 'New Zealand'},
    ]
  },{
    title: 'What is my favourite movie?',
    description: 'I know. I know. It always changes. So, pick the most appropriate answer below',
    answers: [
      {id: 1, text: 'Twilight'},
      {id: 2, text: 'The secret life of walter mitty'},
      {id: 3, text: 'King kong'},
      {id: 4, text: 'FF9'},
    ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quix[]>
) {
  res.status(200).json(quiz);
}
