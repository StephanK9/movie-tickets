var newReleases = ["Avatar", "Life"];
var senior  = ["Senior"];
var youth = ["Youth"];
var nine = ["9:00 am"];
function Ticket(movie, time, age, Price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 10;
}
Ticket.prototype.addToPrice = function () {
  if(newReleases.includes(this.movie)) {
    this.price += 4;
  }
  if(senior.includes(this.age)) {
    this.price -= 2;
  }
  if(youth.includes(this.age)) {
    this.price -=4;
  }
  if(nine.includes(this.time)) {
    this.price -= 2;
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
    console.log(newTicket)

    $("#selectedMovie").append(newTicket.movie);
    $("#selectedTime").append(newTicket.time);
    $("#selectedAge").append(newTicket.age);
    $("#selectedPrice").append(newTicket.price);

    $("#inputForm").hide();
    $("#result").show();

  });
});
