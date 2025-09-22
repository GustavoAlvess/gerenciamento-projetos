import express from "express";
import { createProjeto, deleteProjeto, getAllProjetos, getProjetosById  } from "../controllers/projetosController.js"

const router = express.Router();

router.get("/", getAllProjetos);
router.get("/:id", getProjetosById);
router.post("/", createProjeto);
router.delete("/:id", deleteProjeto);



export default router;