const { Client } = require("pg");

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 
    database: 'panel'
})

client.connect();
client.query(`select * from registration`, (err, result) => {
    if(!err){
        console.log(result.rows);
    } else{
        console.log(err.message);

    }
    client.end();
})



// $(document).ready(function(){


//     // var hiddenBox = $( "#submit" );
//     $( "#submit" ).on( "click", function (event){
            
        
//     });

   

// })


