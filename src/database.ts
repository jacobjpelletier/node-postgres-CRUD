import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
	DB_HOST,
	DATABASE,
	DATABASE_TEST,
	DB_USER,
	DB_PASSWORD,
	ENV,
} = process.env

let client
console.log(ENV)

if(ENV === 'test') {
	client = new Pool({
		host: DB_HOST,
		database: DATABASE_TEST,
		user: DB_USER,
		password: DB_PASSWORD,
	})
}

if(ENV === 'dev') {
	client = new Pool({
		host: DB_HOST,
		database: DATABASE,
		user: DB_USER,
		password: DB_PASSWORD,
	})
}

export default client