import express from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import { middleware } from "./middlewares/ErrorHandlingMiddleware.js";
import fileUpload from "express-fileupload";

config();

const PORT = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

// Error handling, last middleware
app.use(middleware);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
