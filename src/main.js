import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { doctorLookup } from './doctorLookup.js';

let globalArray = [];

$(document).ready(function() {

  let listOfDocs = new doctorLookup();
  let promise = listOfDocs.getDoctorNames();

  promise.then(function(response) {

    let body = JSON.parse(response);

console.log(body)

    let doctor_array = body.data;


    console.log(doctor_array);

  }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
