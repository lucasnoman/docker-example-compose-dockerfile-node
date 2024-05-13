import pg from 'pg';

const { Client } = pg;
export const client = new Client({
  connectionString: 'postgresql://docker:docker@localhost:5432/docker',
});
