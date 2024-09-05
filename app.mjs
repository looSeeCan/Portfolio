import express from "express";
import path from "node:path";

const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
