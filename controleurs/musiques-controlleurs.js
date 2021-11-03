const { v4 : uuidv4 } = require('uuid');

let musiques = [
    {
        id: "1",
        auteur: "Daft Punk",
        annee: 2013,
        titre: "Get lucky",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
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
];

const getMusiques = (req,res,next)=>{
    res.json({musiques});
}
const getMusiqueById = (req,res,next)=> {
    const mId = req.params.musiqueId;
    const musique = musiques.find((m) =>{
        return m.id === mId;
    
    })
    if(!musique){
        return res.status(404).json({message: 'Musique non trouvée pour cet identifiant'});
    }
    res.json(musique);
}



const createMusique=(req,res,next) => {
    const {auteur,annee,titre,imageUrl} = req.body;//pour aller récupérer tous les champs directement dans le body
const createdMusique = {
        id: uuidv4(),
        auteur,
        annee,
        titre,
        imageUrl,

};
musiques.push(createdMusique);
res.status(201).json({musique:createdMusique});

}

const updateMusique = (req,res,next)=>{
    const{auteur,annee,titre,imageUrl} = req.body;//on récupère les données
    const musiqueId=req.params.musiqueId;

    const updatedMusique = {...musiques.find((m) =>{
        return m.id === musiqueId;//on récupère l'index
    }
    )};
    const musiqueIndex = musiques.findIndex(m => m.id ===  musiqueId);

    updatedMusique.auteur = auteur;
    updatedMusique.annee = annee;
    updatedMusique.titre = titre;
    updatedMusique.imageUrl = imageUrl;

    musiques[musiqueIndex]=updatedMusique;

    res.status(200).json({musique:updatedMusique});
};

const deleteMusique = (req,res,next)=>{
    const musiqueId=req.params.musiqueId;
    musiques=musiques.filter(m=> m.id !== musiqueId);
    res.status(200).json({message:"Musique supprimée!"})
}




exports.getMusiques=getMusiques;
exports.getMusiqueById=getMusiqueById;
exports.createMusique=createMusique;
exports.updateMusique=updateMusique;
exports.deleteMusique=deleteMusique;