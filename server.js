// Dependencies
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.static(path.join(__dirname, "./public"), { extensions: [".html"] })
);

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
