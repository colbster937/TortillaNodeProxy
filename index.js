const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'http://dns.tortillagames.org',
    changeOrigin: true,
    secure: false,
    ws: true,
}));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`HTTP proxy running on http://localhost:${PORT}`);
});
