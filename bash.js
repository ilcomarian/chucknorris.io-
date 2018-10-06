const Chuck  = require('chucknorris-io'),
      client = new Chuck();
  process.stdout.write('\nprompt > ');
// Retrieve a random chuck joke

    process.stdin.on('data', function (data) {
     var cmd = data.toString().trim() + ''; // remove the newline
    //                
  
    
  
client.getRandomJoke(cmd).then(function (response) {
    
 
    console.log(response.value)
   
    process.stdout.write('\nprompt >');
 


}).catch(function (err) {
    // handle error
});
                });




// var commands = require('./commands');
// var userCommand = 'pwd';
// commands[userCommand]();
// require('request')


// var https = require('https');
// var fs = require('fs')
// //The url we want is `www.nodejitsu.com:1337/`
// var options = {
//     host: 'en.wikipedia.org',
//     path: '/wiki/GTA',
//     //since we are listening on a custom port, we need to specify it by hand
//     port: '443',
//     //This is what changes the request to a POST request
//     method: 'GET'
// };
// let req = https.request(options, (o) => {
//     let responsBody = ''
//     console.log('star')
//     console.log(o.statusCode)
//     console.log('respons %j', o.headers)

//     o.once('data', (c) => {
//         console.log(`----c---${c}`)
//         responsBody += c;
//     });
//     o.on('end', (c) => {
//         fs.writeFile('youtube.com', responsBody, (err) => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log('finish')
//             }


//         })

//     })


// })
// req.on('error', (err) => {

//     console.log(err)

// })