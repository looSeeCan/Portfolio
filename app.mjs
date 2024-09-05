import express from "express";
import path from "node:path";
import helmet from "helmet";

const app = express();
app.use(helmet());

app.use(express.static(path.join(process.cwd(), "dist")));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});

// TODO: "main": app.mjs
