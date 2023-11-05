import express from "express";
import * as CatalogoController from "../controllers/catalogo.controller";
import { catalogo } from "../model/catalogo";

const router = express.Router();

router.get("/catalogo", (_, res) => {
  CatalogoController.getCatalogo()
    .then((obj) => {
      res.json(obj);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.post("/catalogo", (req: express.Request, res: express.Response) => {
  CatalogoController.postCatalogo(req.body as catalogo)
    .then((f) => {
      if (f) res.status(201).send("Inserted");
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.delete(
  "/catalogo/:Id",
  (req: express.Request, res: express.Response) => {
    const Id = parseInt(req.params.Id);
    CatalogoController.DeleteCatalogo(Id)
      .then((f) => {
        if (f) res.status(201).send("Deleted");
        else res.status(500).send();
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  }
);

router.put("/catalogo/:Id", (req: express.Request, res: express.Response) => {
  const Id = parseInt(req.params.Id);
  const UpdateCatalogo = req.body as catalogo;
  CatalogoController.UpdateCatalogo(Id, UpdateCatalogo)
    .then((updated) => {
      if (updated) {
        res.status(201).send("Updated");
      } else {
        res.status(500).send();
      }
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

export default router;
