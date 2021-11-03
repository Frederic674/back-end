const express=require('express');
const router = express.Router();
const jeuxControllers=require('../controleurs/jeux-controlleurs');
const { v4 : uuidv4 } = require('uuid');
//chemin racine: /api/jeux



router.get('/',jeuxControllers.getJeux);

router.get('/:jeuxId',jeuxControllers.getJeuxById);


router.post("/", jeuxControllers.createJeux);

router.patch("/:jeuxId", jeuxControllers.updateJeux);

// router.delete("/:jeuxId",(req,res,next)=>{
//     const jeuxId=req.params.jeuxId;
//     jeuxvideo=jeuxvideo.filter(j=> j.id !== jeuxId);
//     res.status(200).json({message:"Jeux supprimé!"})
// });


module.exports=router;