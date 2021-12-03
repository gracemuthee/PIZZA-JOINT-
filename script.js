$("button#final-order").click(function(event){
    event.preventDefault();

    $("#pizzatotal").hide();
    $(".delivery").hide();
    $("button#final-order").hide();
    let deliceryamount= checkoutTotal+150;
    console.log("Final Bill is: "+deliceryamount);
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

      $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
      $("#totalbill").hide();
      $("#finallmessage").slideDown(1200);
    }
    else {
      alert("Please fill in the details for delivery!");
      $(".delivery").show();
      $("button#final-order").show();
    }
  });