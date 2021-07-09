// ts
import { NextApiRequest as Req, NextApiResponse as Res } from 'next'


export default function ApiTest(req: Req, res: Res) {
  res.status(200).json({ test: true })
}