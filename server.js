const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = require("./app");

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}...`);
});
