var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://CHRISTO:CHRISTO@christo.epyoa2e.mongodb.net/CHRISTO?retryWrites=true&w=majority&appName=CHRISTO")
    .then(()=>{
        console.log("CONNECTED TO DB")
    })
    .catch((err)=>{console.log(err)})