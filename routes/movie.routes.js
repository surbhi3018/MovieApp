module.exports= app =>{
    const movies= require("../controllers/movie.controller.js");

    var router = require("express").Router();



    router.get('/movies',movies.findAllMovies);

    router.get('/movies/:movieId',movies.findOne);
    
    app.use('/api', router);
};