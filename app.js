const express=require('express');

const app = express();

app.use(express.json());

const musiquesRoutes=require('./routes/musiques-routes');

app.use('/api/musiques',musiquesRoutes);

const filmsRoutes=require('./routes/films-routes');

app.use('/api/films',filmsRoutes);

const jeuxRoutes=require('./routes/jeux-routes');

app.use('/api/jeux',jeuxRoutes);

app.use((error,req,res,next)=>{
    res.status(error.code || 500);
    res.json({message:error.message || 'Une erreur est survenue'});
})

app.listen(5000);