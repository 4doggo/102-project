var answer = prompt('Have you ever been to Uganda?');
var message;

if (answer === 'Yes'){
    message = 'Wow thats awesome!';
} else if (answer === 'No'){ 
    message = 'Nows the perfect time to visit!';
} 

document.write('<h2>' + message + '</h2>');