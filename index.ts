import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.use(cors({
  origin: ['http://127.0.0.1:3001', 'http://localhost:3001'],
  credentials: true
}))

app.post('/set-cookie', (req: Request, res: Response) => {
  res.cookie('name', 'devin', {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
    sameSite: 'none',
    secure: true
  })
  res.status(204).send();
})

app.get('/upload-cookie', (req: Request, res: Response) => {
  console.log(req.cookies)
  res.json({ cookies: req.cookies })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
