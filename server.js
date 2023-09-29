import express from "express";
import cors from "cors";
import {districts} from "./data/districts";
import {houses} from "./data/houses";
import {p2h} from "./data/provider_to_houses";
import {providers} from "./data/providers";
import {streets} from "./data/streets";

const app = express();
const PORT = 3100;
app.use(cors());

app.get('/districts', (req, res) => {
    res.json(districts);
});
app.get('/houses', (req, res) => {
    res.json(houses);
});
app.get('/pth', (req, res) => {
    res.json(p2h);
});
app.get('/providers', (req, res) => {
    res.json(providers);
});
app.get('/streets', (req, res) => {
    res.json(streets);
});

app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`);
});
