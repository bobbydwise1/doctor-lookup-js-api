# _Doctor Lookup using an API_

#### _A web application where a user has a medical issue and requests list of doctors using a real-world medical doctors API._

#### By _**Robert Lee**_

## Description

This program requires the use of the BetterDoctorAPI:

https://developer.betterdoctor.com/

The user, who is assumed to live in Portland, Oregon, will input into a form a health condition they are in need to see a doctor for.  The user also will pick between 1 and 100 search results.  They will hit the "submit" button.

The user's request will go to the BetterDoctorAPI.  The returned output will be a list of real doctors in a 5 mile radius of Portland, Oregon, their web and street addresses, and how to contact them.

## Setup/Installation Requirements

* _Clone the project files from the associated Github repository._
* _Navigate to the root directory of the project, and type: $ npm install.  Node Package Manager will begin installing all required dependencies._
* _Create a file called .env in the root of the project directory._
* _Place your api key token in the .env file at the top level of your directory.  You must get your own API key from the betterdoctors developer API.  The contents of the .env file should read:_

apikey = YOUR_API_KEY_HERE

* _Consult the BetterDoctor API documentation for further requirements if necessary._
* _at the terminal window, type the following to start the program: $npm run start.  The program should atuomatically start in your preferred web browser._

## Requirements

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Known Bugs

_*The list of results contact phone numbers has not been cleaned of array special characters (ex: [ ])._

## Support and contact details

_{Contact Robert Lee at bobbydwise1@hotmail.com}_

## Technologies Used

_Atom editor, Javascript, jQuery, HTML, CSS, NPM, NPM Webpack, NPM Jasmine, NPM Karma, Bootstrap, BetterDoctorAPI, Postman._

### License

*This application is Licensed under the MIT software License agreement. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2019
**_Robert Lee_**
