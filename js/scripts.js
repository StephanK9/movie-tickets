var newReleases = ["Avatar", "Life"];


function Ticket(movie, time, age, Price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 6;
}
Ticket.prototype.addToPrice = function () {
  if(newReleases.includes(this.movie)) {
    this.price += 4;
  }
};



$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();


    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = $("#age").val();
    var price = 10;

    var newTicket = new Ticket(movie, time, age, price);
    newTicket.addToPrice();


    $("#result").text(newTicket)
    console.log(newTicket)
  });
});
