const express = require('express');
const categoryRoute = require('./src/routes/Category.route'); // Đảm bảo đúng đường dẫn
const brandRoute = require('./src/routes/Brand.route');
const userRoute = require('./src/routes/User.route');
const loginRoute = require('./src/routes/Login.route');
const cors = require('cors');
const app = express();
const auth = require('./src/middleware/auth');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //lây data từ FE lên



app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/brand', brandRoute);
app.use('/login', loginRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

