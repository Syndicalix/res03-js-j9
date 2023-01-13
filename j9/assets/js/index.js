import { Form } from "./Form.js";
import { Field } from "./Field.js";

let firstname = document.getElementById("firstname");
let firstnameField = new TextField(firstname);
firstnameField.name = firstname.getAttribute("name");

let lastname = document.getElementById("lastname");
let lastnameField = new TextField(lastname);
lastnameField.name = lastname.getAttribute('name');

let email = document.getElementById("email");
let emailField = new EmailField(email);
emailField.name = email.getAttribute("email");

let password = document.getElementById("password");
let passwordField = new PasswordField(password);
passwordField.name = password.getAttribute("password");

let confirmpassword = document.getElementById("confirm-password");
let confirmpasswordField = new PasswordField(confirmpassword);
confirmpasswordField.name = PasswordField("confirm-password");