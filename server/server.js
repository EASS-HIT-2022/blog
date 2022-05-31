const app = require("./index");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require('cors');
var morgan = require('morgan')

dotenv.config();
app.use(morgan('dev'))

app.use(cors())
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.listen(process.env.PORT || 5001, () => {
    console.log("Backend is running.");
});