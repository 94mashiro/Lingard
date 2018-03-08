import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)

export default () => {
  db.defaults({ posts: [], user: {}, count: 0 }).write()
}