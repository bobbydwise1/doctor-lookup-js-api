export class DoctorLookup {
  createLink(fullname,symptom,geoLocation,radius,limit) {
    return ('https://api.betterdoctor.com/2016-03-01/doctors?query=' +
    symptom +
    '&location=' +
    geoLocation.replace(",","%2C") +
    "%2C" + radius +
    "&sort=best-match-asc" +
    "&fields=profile(first_name,last_name),practices(visit_address,phones,website,accepts_new_patients)" +
    "&skip=0&limit=" +
    limit +
    '&user_key=');
  }

  getDoctorNames(searchURL) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = searchURL + process.env.user_key;
      // let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=cancer&location=45.5122%2C-122.6587%2C5&user_location=45.5122%2C-122.6587&sort=best-match-asc&skip=0&limit=3&user_key=' + process.env.user_key;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

//note use process.env.user_key for api key
//for App name use Epicodus's App
