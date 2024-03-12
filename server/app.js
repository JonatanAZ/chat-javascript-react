import express from 'express'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())

app.use(express.static(join(__dirname, '../frontend/dist')))

export default app