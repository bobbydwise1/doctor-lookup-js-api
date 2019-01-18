import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { BikeStolen } from './bike.js';
import { DinoSpam } from './dino.js';

let globalArray = [];

$(document).ready(function() {

  let dinoNames = new DinoSpam();
  let promiseDinos = dinoNames.getDinoNames();


  promiseDinos.then(function(response){
    let body = JSON.parse(response);

    body[0].forEach(function(name) {
      globalArray.push(name);
    });
  });

  let stolenBikes = new BikeStolen();
  let promiseBikes = stolenBikes.getStolenBikes();

  promiseBikes.then(function(response) {

    let body = JSON.parse(response);
    let bikes_array = body.bikes;

    for (let i = 0; i < bikes_array.length; i++) {
        bikes_array[i].manufacturer_name = globalArray[i];
        $("#output").append("<li>" + bikes_array[i].title + ", " + bikes_array[i].manufacturer_name + " Last seen: " + bikes_array[i].stolen_location + "</li>")
      }


    console.log(globalArray);
    // document.getElementById("output").innerHTML = response;
  }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
