const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const date    = new Date();
  const now     = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`;
  const oopsies = [
        '2022-4',
        '2022-12',
        '2025-3',
  ];
  const yesorno = oopsies.includes(now) ? "Yes. Yes he did." : "No, not yet."

  res.end(`
    <title>didjakespilladrinkonhismacbookthismonth.com</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      h1{padding:1em;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);}
    </style>
    <body>
      <h1>${yesorno}</h1>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
