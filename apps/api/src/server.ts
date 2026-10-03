import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_request, response) => {
  response.json({
    name: "FlowBoard API",
    status: "running",
  });
});

app.listen(PORT, () => {
  console.log(`FlowBoard API running at http://localhost:${PORT}`);
});
