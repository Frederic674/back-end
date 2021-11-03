const express=require('express');
const router = express.Router();
//chemin racine: /api/films



let films = [
    {
        id: "1",
        auteur: "Avengers",
        annee: 2013,
        titre: "AVENGERS",
        resume: "Il était une fois",
        imageUrl: "https://fr.web.img3.acsta.net/medias/nmedia/18/85/31/58/20042068.jpg"
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

router.get('/',(req,res,next) =>{
    console.log('liste des films');
    res.json(films);

});

module.exports=router;