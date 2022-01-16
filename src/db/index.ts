import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
const {
	DB_HOST,
	DB_DB,
	DB_USER,
	DB_PASSWORD,
} = process.env

const client = new Pool({
	host: DB_HOST,
	database: DB_DB,
	user: DB_USER,
	password: DB_PASSWORD,
})

export default client