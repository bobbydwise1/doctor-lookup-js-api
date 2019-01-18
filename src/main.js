import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorLookup } from './doctorLookup.js';

$(document).ready(function() {
  $("form#mainInputForm").submit(function(event){
    event.preventDefault();
    let listOfDocs = new DoctorLookup();
    let fullname = ""; //Use this line of code in a future refactor
    let symptom = $("#searchInputSymptom").val();
    let geolocation = "45.5122,-122.6587,";  //This is Portland Oregon
    let radius = 5;
    let limit = $("#searchInputNumResults").val();
    let testurl = listOfDocs.createLink(fullname,symptom,geolocation,radius,limit);
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
});
