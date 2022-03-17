

export function sendToDataBase(name,lastname,email, password){

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
        }
    
    // give me access to the name var from the onclick
    // console.log(name,email, password)
    // alert('function has been called')

    // 1. Check name, email, pawword are values. If any of them are not OK, alert user
    // 2. Set up our DB call. Create poo, and run insert statement
    // 3. Use the name, email, and password params and pyt in your query, then insert

}
// 