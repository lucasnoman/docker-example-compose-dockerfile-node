import pg from 'pg';

const { Client } = pg;
export const client = new Client({
  connectionString: 'postgresql://docker:docker@postgre:5432/docker',
});
