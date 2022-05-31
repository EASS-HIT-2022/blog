const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const authRoute = require("./routes/auth");
const redis = require('redis');
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
})
client.set('visits', 0);
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "./images")));
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({
  storage: storage
});
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.get('/', function (req, res) {
  client.get('visits', (err, visits) => {
    client.set('visits', parseInt(visits) + 1)
  })
  res.send("IM ALIVE");
});
app.get('/hello', function (req, res) {
  client.get('visits', (err, visits) => {
    client.set('visits', parseInt(visits) + 1)
  })
  res.send("IM Yossi");
});
app.get('/visits', function (req, res) {
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is: ${parseInt(visits) + 1}`)
  })
});
module.exports = app;