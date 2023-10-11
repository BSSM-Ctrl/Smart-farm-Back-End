// @ts-check
// Formatting, Linting
// Formatting: Prettier
// Linting: ESLint
// Type checking: TypeScript

const http = require('http')

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
  const postIdRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('List of posts')
  } else if (postIdRegexResult) {
    //GET /post/:id
    const postId = postIdRegexResult[1]
    console.log(`postid: ${postId}`)
    res.statusCode = 20041
  
    res.end('Reading a post')
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Creating post')
  } else {
    res.statusCode = 404
    res.end('Not found.')
  }

  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})
