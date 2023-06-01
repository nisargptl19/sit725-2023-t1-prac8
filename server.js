var express = require("express");
const router = require("./routes/routes");
let http = require("http").createServer(app);
let io = require("socket.io")(http);
var app = express();

// db connection
require("./dbConnection");

var port = process.env.port || 3001;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

http.listen(port, () => {
  console.log("App listening to: " + port);
});
