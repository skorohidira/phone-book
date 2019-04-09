console.log("Works");

var phbook = [];

function Person(name, surname, phone) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

function GetContact() {
var name = document.querySelector(".name").value;
var surname = document.querySelector(".surname").value;
var phone = document.querySelector(".phone").value;
var contact = new Person(name, surname, phone);
phbook.push(contact);
}

function AddContact() {
phbook.forEach(function(item, key){
console.log(item, " ", key);
 })
}
 



