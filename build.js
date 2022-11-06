import fs from 'node:fs'
import {toJson} from 'plain-text-data-to-json'

const doc = fs.readFileSync('data.txt', 'utf8')

fs.writeFileSync(
  'index.js',
  '/**\n * List of, *like*, English (both British and American) filler words.\n */\nexport const fillers = ' +
    JSON.stringify(toJson(doc), null, 2) +
    '\n'
)
