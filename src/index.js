import "./styles.css";
import cv from "./CV/CV.md";
import marked from "marked";

const htmlCV = marked(cv);

document.getElementById("app").innerHTML = `${htmlCV}`;
