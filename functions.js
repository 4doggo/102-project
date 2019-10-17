function askTravelQuestion() {
    var answer = prompt('Have you ever been to Uganda?');
    var message;

    if (answer === 'Yes') {
        message = 'Wow thats awesome!';
    } else if (answer === 'No') {
        message = 'Nows the perfect time to visit!';
    }

    return '<h2>' + message + '</h2>'; 

}

function javascript2() {
    var username = prompt('What is your name?');

    return '<h2>' + username + '</h2>';

}

function javascript3() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
  
    return '<h2>' + greeting + '</h2>';
}

function javascript4() {
    var feeling = prompt('Are you ready for your new journey?');
    var message;

    if (answer = '???') {
        message = 'Lets Go!';
    }
    return '<h2>' + message + '</h2>';
}


var howMany = function (){
    var count = prompt('Great, how many times have you visited Uganda?');
  
    while (count === '' || isNaN(count)){
      var count = prompt('Great, how many times have you visited Uganda? PLEASE enter a number');
    }
  
    return count;
  }
  
  function getItem() {
    var order = prompt('will you go to Uganda or Kenya?');
    var item;
    // var order = getCount();
    // var message;
  
    if (order === 'Uganda') {
      item = '<img src="images/uganda.png">';
    } else if (order === 'Kenya') {
      item = '<img src="images/kenya.png">';
    }
  
    return item;
  }
  
  function showOrder(){
    var item = getItem();
    var total = howMany();
    var result = '';
  
    for(var i = 0; i < total; i++){
      result = result + '<p>Country #' + (i + 1) + '' + item + '</p>';
    }
    return result;
  }