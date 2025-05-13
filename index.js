const express = require('express');
const app = express();
const categoryRoute = require('./src/routes/Category.route'); // Đảm bảo đúng đường dẫn


app.use(express.json());

app.use('/category', categoryRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

