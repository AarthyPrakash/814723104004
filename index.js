const express = require('express');
const logger = require('./logger');
const { getTopNotifications } = require('./service');

const app = express();

app.use(logger);

// ✅ THIS ROUTE MUST BE PRESENT
app.get('/notifications/top', async (req, res) => {
    try {
        const data = await getTopNotifications();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server running...");
});