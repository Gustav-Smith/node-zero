import { randomUUID } from "node:crypto"
import { sql } from './sql.js'

export class DatabasePostgres {
    async list(search = '') {
        let videos
        if (search) {
            videos = await sql`select * from videos where title ilike "${search}"` // operações assincronas 
        } else {
            videos = await sql`select * from videos` // operações assincronas 
        }
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = video 

        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration} )`
    }

    update(id, video) {

    }

    delete(id) {

    }
} 