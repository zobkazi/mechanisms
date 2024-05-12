import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = process.env.PORT || 4001;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
