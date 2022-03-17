const { Client } = require("pg");

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 
    database: 'panel'
})


// client.connect();
// client.query(`select * from registration`, (err, result) => {
//     if(!err){
//         console.log(result.rows);
//     } else{
//         console.log(err.message);

//     }
//     client.end();
// })



$(document).ready( async function(){

    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const dogPic = await response.json()
    $('#dogPic').attr('src', dogPic.message)
    $('#dogPic').click(async function(){
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const dogPic = await response.json()
      $('#dogPic').attr('src', dogPic.message)

    })

    $( "#submit" ).on( "click", function(event){
        let name = $('#first_name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let lastname = $('#last_name').val();

        sendToDataBase(name,lastname,email, password)
        // alter the name or do something else with
    });



    function sendToDataBase(name,lastname,email, password){
        //  const { Pool, Client } =  require("pg");

        // const pool = new Pool({
        // user: "postgres",
        // host: "localhost",
        // database: "panel",
        // password: "Trav1612",
        // port: "5432"
        // });
    
        if(name.length < 1){
            alert('Please enter FIRST NAME!');
        } else if(lastname.length < 1){
            alert('Please enter LAST NAME!');
        } else if(email.length < 1){
            alert('Please enter EMAIL!');
        } else if(password.length < 5){
            alert('Please enter VALID PASSWORD!');
        } else {
            alert('WELCOME!')

            //code to send to Db
        }
    
        // give me access to the name var from the onclick
        // console.log(name,email, password)
        // alert('function has been called')

        // 1. Check name, email, pawword are values. If any of them are not OK, alert user
        // 2. Set up our DB call. Create poo, and run insert statement
        // 3. Use the name, email, and password params and pyt in your query, then insert

    }


})


