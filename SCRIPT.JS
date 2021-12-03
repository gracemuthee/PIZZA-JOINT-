$(document).ready(function() {
    
      $("#text-center").submit(function(event) 
        
        
        {
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping()  {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }

        function number() {
            var pizzaNumber = document.getElementById("quantity").value;
            return parseInt(pizzaNumber);
          }
      
          var userInput = new Order( size(), crust(), topping(), number());
          function Order( size, crust, topping, quantity) {
           
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = topping;
            this.newQuantity = quantity;
          }
          var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping 
           ) *
          userInput.newQuantity;
    
        
        alert("Your charges for Pizza" + totalCost);
        prompt("enter your email address");
        prompt("enter your phone number");
        prompt("enter your location");
        alert("Your pizza will be delivered");
    
        
        $("#text-center").reset();
    
        event.preventDefault();
      });
    });
    
    
      