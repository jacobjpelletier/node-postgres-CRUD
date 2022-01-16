import path from 'path'
import { Pool } from 'pg'
import { migrate } from 'postgres-migrations'

// pull environment variables
const poolConfig = {
	database: process.env.DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	max: Number(process.env.DB_POOL_SIZE),
	idleTimeoutMillis: Number(process.env.DB_POOL_CLIENT_IDLE_TIMEOUT),
	connectionTimeoutMillis: Number(
		process.env.DB_POOL_CLIENT_CONNECTION_TIMEOUT
	),
}

class Database {
	pool: Pool

	constructor() {
		this.pool = new Pool(poolConfig)
	}

	runMigrations = async (): Promise<void> => {
		const client = await this.pool.connect()
		try {
			// tell client to try to run migration script
			await migrate({ client }, path.resolve(__dirname, 'migrations/sql'))
    } catch (err) {
      console.error('migation failes', err)
    } finally {
			client.release()
		}
	}
}

const db = new Database()

export default db
