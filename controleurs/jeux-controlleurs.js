let jeuxvideo = [
    {
        id: "1",
        auteur: "Mojang",
        annee: 2013,
        titre: "MINECRAFT",
        imageUrl: "https://www.minecraft.net/content/dam/minecraft/home/Games_Subnav_Minecraft-228x350.png"
    },
    {
        id : "2",
        auteur: "David Guetta ft Sia",
        annee: 2011,
        titre: "Titanium",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg"
    },
    {
        id : "3",
        auteur: "Shaka Ponk",
        annee: 2019,
        titre: " Mauvaise reprise de Smells like teen spirits",
        imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
    },
    {
        id : "4",
        auteur: "Imagine Dragon",
        annee: 2018,
        titre: "Natural",
        imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
    },
    {
        id: "5",
        auteur: "Daft Punk",
        annee: 2013,
        titre: "Get lucky",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
        id: "6",
        auteur: "Daft Punk",
        annee: 2013,
        titre: "Test Musique",
        imageUrl: "https://media.istockphoto.com/vectors/pictograph-of-music-note-note-icon-vector-id845295676?k=20&m=845295676&s=170667a&w=0&h=nR-DXEDtQqETXU8yv98B4VB7V1g3K2u2lpu9bknKXgg="
    },
    {
        id: "7",
        auteur: "Daft Punk",
        annee: 2013,
        titre: "Get lucky",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    }
]

const getJeux = (req,res,next)=>{
    res.json({jeuxvideo});
}
const getJeuxById = (req,res,next)=> {
    const jId = req.params.jeuxId;
    const jeux = jeuxvideo.find((j)=>{
        return j.id === jId;
    
    })
    if (!jeux){
        return res.status(404).json({message: 'Jeux non trouvée pour cet identifiant'});
    }
    res.json({jeux});
}

const createJeux = (req,res,next) => {
        const {auteur,annee,titre,imageUrl} = req.body;//pour aller récupérer tous les champs directement dans le body
    const createdJeux = {
            id: uuidv4(),
            auteur,
            annee,
            titre,
            imageUrl,
    
    };
    jeuxvideo.push(createdJeux);
    res.status(201).json({jeux:createdJeux});
    
    
    }

const updateJeux = (req,res,next)=>{
        const{auteur,annee,titre,imageUrl} = req.body;//on récupère les données
        const jeuxId=req.params.jeuxId;
    
        const updatedJeux = {...jeuxvideo.find((j) =>{
            return j.id === jeuxId;//on récupère l'index
        }
        )};
        const jeuxIndex = jeuxvideo.findIndex(j => j.id ===  jeuxId);
    
        updatedJeux.auteur = auteur;
        updatedJeux.annee = annee;
        updatedJeux.titre = titre;
        updatedJeux.imageUrl = imageUrl;
    
        jeuxvideo[jeuxIndex]=updatedJeux;
    
        res.status(200).json({jeux:updatedJeux});
    
    }


exports.getJeux=getJeux;
exports.getJeuxById=getJeuxById;
exports.createJeux=createJeux;
exports.updateJeux=updateJeux;