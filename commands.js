 
var request = require('request');
var fs = require('fs')
let respons = request('https://www.youtube.com/')
 
 request('https://www.youtube.com/', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  let responsBody = ''
  response.on('data', (c) => {
    //         console.log(`----c---${c}`)
            responsBody += c;
        });
        response.on('end', (c) => {
            fs.writeFile('youtube.com', responsBody, (err) => {
                if (err) {
                    throw err;
                } else {
                    console.log('finish')
                }
    
            });
        });
});

 
//  module.exports = {
//     pwd: function() {
//         // process.stdout.write('\nprompt > ');

//         // // The stdin 'data' event fires after a user types in a line
//         // process.stdin.on('data', function (data) {
//         //     var cmd = data.toString().trim() + ''; // remove the newline
//         //    if(cmd === 'pwd'){
//         //     console.log(process.cwd());
//         //    }
//         //   if(cmd = 'date'){
//         //       console.log( new Date())
//         //   }
           
//         //     process.stdout.write('\nprompt > ');
//         //   });
        
//     }
//   }
   