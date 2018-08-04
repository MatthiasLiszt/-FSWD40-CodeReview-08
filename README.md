# Coder's Dating With Angular 4 and Firebase

## short description

dating page with bootstrap, angular and firebase

## long description

Creation of the data layer in Model-View-Controller manner over FireBase that tracks the following properties of each Person:

Name (string)

Surname (string)

Image (string, used to save the URL of an image)

Age (number)

Gender (string, possible values: “Male”, “Female”, “Not Specified”)

inRelation (Boolean, true or false, indicates if the person is currently involved in a personal relationship)

creation of (at least) 10 Persons for testing. You have to create some names, surnames and find some images for them. Feel free to use images from Google, or use other resources.

Correct creation of  the HTML structure (proper order of HTML elements) based on your Person’s test data. You need to show on the homepage of your project all Persons from your test data  

Correct usage of Bootstrap. Implement your design, or design similar to the screenshots above.

For small devices: 1 person per column, for medium devices: 2 persons per column, for wide screens: 4 Persons per column.  

Hint: Do not forget to create additional fields that were missing in CR5! They are currently not displayed in all design mockups!

Implementation of the “Like” button, as described in CodeReview 5.  NOTE: Like button can receive multiple hits by a single web page visitor. Like hits are saved in FireBase

Creation of 2 subpages that are filtering people per gender / adding a filter to make browsing easier:

“All” (no filter, main page of the system)

“Male” (gender property equals “Male”)

“Female” (gender property equals “Female”)


Bonus Points:

(10) If you click on a person’s name on the “All Persons” page, you will be redirected to the “Selected Person” page that displays:

Selected person’s data (name, surname, image etc.) filling the majority of the screen.

List of other persons from your test data, displayed differently from the selected person (e.g displayed underneath
