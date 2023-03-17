import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello Shivam!");
});

app.post("/", (req, res) => {
  res.send("Hello Shivam!");
});

app.listen(8080, () => {
  console.log("Listening On Port 8080");
});

// gcloud components install kubectl
// gcloud container clusters get-credentials ticketing-dev
// gcloud components install gke-gcloud-auth-plugin