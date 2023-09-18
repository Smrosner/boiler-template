const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000 || process.env.PORT;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Hello from server port 3000");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});