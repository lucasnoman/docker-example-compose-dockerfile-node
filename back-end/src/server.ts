import { createServer } from 'node:http';
import { client } from './database/connect';

try {
  await client.connect();
} catch (error) {
  console.log('Error connecting to database: ', error);
}

async function selectCounter() {
  const result = await client.query('select * from counter;');
  return result.rows[0].count;
}

async function updateCounter() {
  return await client.query('update counter set count = count + 1;');
}

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const countNumber = await selectCounter();
    res.end(JSON.stringify(countNumber));
  } else if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    await updateCounter();
    const countNumber = await selectCounter();
    res.end(JSON.stringify(countNumber));
  }
});

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
