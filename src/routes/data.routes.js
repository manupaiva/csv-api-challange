import express from "express";
const router = express.Router();
import {
  getFiles,
  getFile,
  getFilesList,
} from "../controllers/files.controller.js";

router
  // .get('/files',healtyCheck)
  .get("/files/data", getFiles)
  .get("/files/list", getFilesList)
  .get("/files/data/:id", getFile);

export default router;
