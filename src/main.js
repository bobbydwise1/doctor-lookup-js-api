import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { doctorLookup } from './doctorLookup.js';

$(document).ready(function() {
  let testurl = createURLForDoc("","diabetes","45.5122,-122.6587,",5,3)
  console.log("testOfDocs api url: ",testurl)

  let listOfDocs = new doctorLookup();
  let promise = listOfDocs.getDoctorNames();

  promise.then(function(response) {
    let body = JSON.parse(response);
    let doctor_array = body.data;
    $("#doctorOutput").text(doctor_array)
  }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
