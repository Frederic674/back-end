const express=require('express');
const router = express.Router();
const musiquesControllers=require('../controleurs/musiques-controlleurs');//on va chercher dans le fichier musiques-controlleurs

//chemin racine: /api/musiques







router.get('/', musiquesControllers.getMusiques);


router.get('/:musiqueId', musiquesControllers.getMusiqueById);

router.post("/", musiquesControllers.createMusique);

router.patch("/:musiqueId", musiquesControllers.updateMusique);

router.delete("/:musiqueId",musiquesControllers.deleteMusique);

module.exports=router;