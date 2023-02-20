const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", rootRouter);

const port = 5000;
app.listen(port, async () => {
  console.log(`Server is running in http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
