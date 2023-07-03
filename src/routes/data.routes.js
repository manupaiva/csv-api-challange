import express from "express";
import {
  getFiles,
  getFile,
  getFilesList,
} from "../controllers/files.controller.js";
const router = express.Router();

router
  .get("/files", (req, res) => {
    res.status(200).json({ message: "all it's works" });
  })
  .get("/files/data", getFiles)
  .get("/files/list", getFilesList)
  .get("/files/data/:id", getFile);

export default router;
