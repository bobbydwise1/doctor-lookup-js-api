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
    let geolocation = "45.5122,-122.6587";  //This is Portland Oregon
    let radius = 5;
    let limit = $("#searchInputNumResults").val();
    let testurl = listOfDocs.createLink(fullname,symptom,geolocation,radius,limit);
    console.log("testURL: ",testurl)
    let promise = listOfDocs.getDoctorNames(testurl);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let doctor_array = body.data;
      $("#doctorOutput").empty();
      if (doctor_array.length === 0)
      {$("#doctorOutput").append(`<div class="resultBox"><p>No results found</p></div>`)}
      else 
      {for (let i = 0; i < doctor_array.length; i++) {
       $("#doctorOutput").append(`<div class="resultBox"><p>Search Result: ${i}</p><h5>${doctor_array[i].profile.first_name} ${doctor_array[i].profile.last_name}</h5><p>Accepts new patients? ${doctor_array[i].practices[0].accepts_new_patients}</p><p>Website: " ${doctor_array[i].practices[0].website}</p><p>${doctor_array[i].practices[0].visit_address.street}</p>   <p>${doctor_array[i].practices[0].visit_address.city} ${doctor_array[i].practices[0].visit_address.state} ${doctor_array[i].practices[0].visit_address.zip}</p><p>${JSON.stringify(doctor_array[i].practices[0].phones)}</p></div>`)
      }}
    }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
