import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorLookup } from './doctorLookup.js';

$(document).ready(function() {

  let listOfDocs = new DoctorLookup();
  let testurl = listOfDocs.createLink("","diabetes","45.5122,-122.6587,",5,3)
  console.log("testOfDocs api url: ",testurl)
  let promise = listOfDocs.getDoctorNames(testurl);

  promise.then(function(response) {
    let body = JSON.parse(response);
    let doctor_array = body.data;
    console.log(doctor_array);
    $("#doctorOutput").text(doctor_array)
  }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
