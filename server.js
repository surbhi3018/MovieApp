var express = require("express"),
  http = require("http"),
  fs = require("fs"),
  path = require("path"),
  cors = require("cors");  

  bodyParser = require("body-parser");

const PORT = 8085;


var app = express();

var corsOptions = {
  origin: "http://localhost:"+PORT
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

require("./routes/movie.routes")(app);
require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/user.routes")(app)

app.listen(PORT, function () {
  console.log("express has started on port ", PORT);
});