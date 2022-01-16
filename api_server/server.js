const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// routes
app.use('/api/users/:id/update', (req, res) => {
    setTimeout(() => {
        res.send(req.body);
    }, [2000]);
});

app.listen(3333, () => {
    console.log('Server started on port 3000');
});