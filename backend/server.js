const db = require("./config/MySQL_DB_Config")
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post(`/signin`,
async function userLogin(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json({
          code: -1,
          message: "Please provide email and password",
        });
      }
      const query = "select * from auth where email = ?";
      const conn = await db.getConnection();
    } catch (err) {
      console.log("Failed to login: " + err.message);
      return res.json({
        code: -1,
        message: "Failed to login. Please try again.",
      });
    }
  }
)
