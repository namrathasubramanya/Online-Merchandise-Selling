/*Name:Shahane,Shweta Kisan
 Acc_No:jadrn058*/

$(document).ready(function(){
	$("[name='sku']").val('');
	$("[name='sku']").focus();
   
    $.get("/perl/jadrn058/fetch_vendor.cgi",fix_vendor);
    $.get("/perl/jadrn058/fetch_category.cgi",fix_category);
    $.get("/perl/jadrn058/fetch_subcategory.cgi",fix_subcategory);
    
  var error_text = "Please enter valid";
  
  $("#sku").blur(function(){
  console.log("inside blur1");
    if (!$('#sku').val().match(/[A-Z]{3}-[0-9]{3}/i) && !error_text.includes(" SKU")) {
      error_text = error_text + " SKU";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } 
    else if ($('#sku').val().match(/[A-Z]{3}-[0-9]{3}/i)) 
    {
      error_text = error_text.replace(" SKU", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") 
      {
        $("#messageLine1").hide();
      }
    }
  });
  
  $("#sku").blur(function() {  
 console.log("inside blur2");
       var url = '/perl/jadrn058/check_dup_sku.cgi?sku=';
       url += $("#sku").val();
      $.get(url, handleSKUData);
       
  });
  
  $("#cat").on("focusout", function(e) {
    if ($("#cat").val() == -1 && !error_text.includes(" category")) {
      error_text = error_text + " category";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } else if ($("#cat").val() != -1) {
      console.log("here");
      error_text = error_text.replace(" category", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });
  
  $("#subcat").on("focusout", function(e) {
    if ($("#subcat").val() == -1 && !error_text.includes(" sub-category")) {
      error_text = error_text + " sub-category";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } else if ($("#subcat").val() != -1) {
      console.log("here");
      error_text = error_text.replace(" sub-category", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  }); 
  
  $("#ven").on("focusout", function(e) {
    if ($("#ven").val() == -1 && !error_text.includes(" vendor")) {
      error_text = error_text + " vendor";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } else if ($("#ven").val() != -1) {
      error_text = error_text.replace(" vendor", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });
  
  $("#mfgIdentity").on("focusout", function(e) {
    console.log($("#mfgIdentity").val());
    if (!$("#mfgIdentity").val() && !error_text.includes(" ManufacturerId")) {
      error_text = error_text + " ManufacturerId";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } else if ($("#mfgIdentity").val()) {
      error_text = error_text.replace(" ManufacturerId", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });
  
  $("#desc").on("focusout", function(e) {
    if (!$("#desc").val() && !error_text.includes(" description")) {
      error_text = error_text + " description";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();

    } else if ($("#desc").val()) {
      error_text = error_text.replace(" description", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });
  
  $("#prodFeatures").on("focusout", function(e) {
    if (!$("#prodFeatures").val() && !error_text.includes(" product features")) {
      error_text = error_text + " product features";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } else if($("#prodFeatures").val()) {
      error_text = error_text.replace(" features", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });
  
  $("#cost").on("focusout", function(e) {
    if ((!$.isNumeric($('#cost').val()) || !$("#cost").val()) && !error_text.includes(" cost")) {
      error_text = error_text + " cost";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
    } else if ($.isNumeric($('#cost').val())){
      error_text = error_text.replace(" cost", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });
 $("#retail").on("focusout", function(e) {
    if ((!$.isNumeric($('#retail').val()) || !$("#retail").val()) && !error_text.includes(" retail")) {
      error_text = error_text + " retail";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();
     
    } else if ($.isNumeric($('#retail').val())){
      error_text = error_text.replace(" retail", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
       
      }
    }
  });
  
  $("#image").on("focusout", function(e) {
    if (!$("#image").val() && !error_text.includes(" product_image")) {
      error_text = error_text + " product_image";
      $("#messageLine1").text(error_text);
      $("#messageLine1").show();

    } else if ($("#image").val()) {
      error_text = error_text.replace(" product_image", "");
      $("#messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#messageLine1").hide();
      }
    }
  });

  $('#add').on('click',function(){
  //alert("click");
  var sku= document.getElementById("sku").value;
      var cost=document.getElementById("cost").value;
      var retail=document.getElementById("retail").value;
      var cat = document.getElementById("cat").value;
      var ven = document.getElementById("ven").value;
      var subcat = document.getElementById("subcat").value;
      var mfgIdentity = document.getElementById("mfgIdentity").value;
      var desc = document.getElementById("desc").value;
      var prodFeatures= document.getElementById("prodFeatures").value;
      var image = document.getElementById("image").value;
      
      var msg=$("#messageLine2").text();
      //alert(msg);
      
      if (error_text == "Please enter valid" && (sku && cat && ven && mfgIdentity && desc && prodFeatures && cost && retail && image && subcat) && msg!="Duplicate Record") 
      {
      	send_file();
        var url = "/perl/jadrn058/add.cgi";
        url += "?sku="+sku+"&cat=" + cat + "&subcat="+subcat+"&ven="+ven+"&mfgIdentity="+mfgIdentity+"&desc="+desc+"&prodFeatures="+prodFeatures+"&cost="+cost+"&retail="+retail+"&image="+image;
        //alert(url);
        var req = new HttpRequest(url, handleInsertData);
        req.send();
    }
    else{
    console.log("invalid data");
    }
  
  });
  
  $('#add_reset').on('click',function(){
  console.log("reset");
  $('#status').prop('hidden',true);
  $('#status1').prop('hidden',true);  
  $('#add_pic').html(''); 
  });
 });
  
  function handleSKUData(response){  
   if(response.startsWith("duplicate")) {
       $("#messageLine2").text("Duplicate Record");
       }
       
   else if(response.startsWith("ok")) {
       $("#messageLine2").text("");
   }

}   
  
function fix_vendor(response) {
    var toWrite = "<option value=\"-1\">Select Vendor</option>";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length; i++) {
        tmp = tmpStr[i].split("=");
        toWrite += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
        }
    $('#ven').append(toWrite);
    }
    function fix_category(response) {
        var toWrite = "<option value=\"-1\">Select Category</option>";
        var tmpStr = response.split("||");
        for(i=0; i<tmpStr.length; i++) {
            tmp = tmpStr[i].split("=");
            toWrite += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
            }
        $('#cat').append(toWrite);
        }
        function fix_subcategory(response) {
            var toWrite = "<option value=\"-1\">Select Category</option>";
            var tmpStr = response.split("||");
            for(i=0; i<tmpStr.length; i++) {
                tmp = tmpStr[i].split("=");
                toWrite += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
                }
            $('#subcat').append(toWrite);
            }


      
            function handleInsertData(response) 
	    {
		if(response.startsWith("The record has been successfully inserted into the database")){
	   	console.log("inserted");
              $('#status1').css('color','blue');
               $('#status1').text("Record has been inserted successfully");  
              }
	       else
	       {
	        $('#status1').css('color','red');
               $('#status1').text("Record not inserted "); 
	       }
	       }
          

        function send_file() {
        var form_data = new FormData($('form')[0]);
        form_data.append("image", document.getElementById("image").files[0]);
	//alert(form_data);
	var fname = $("#image").val().toLowerCase();
        var toDisplay = "<img src=\"/~jadrn058/images/" + fname + "\" />";
	//alert(toDisplay);
        $.ajax( {
            url: "/perl/jadrn058/upload.cgi",
            type: "post",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(response) {
               $('#status').css('color','blue');
               $('#status').html("Your file has been received.");  
               $('#add_pic').html(toDisplay);
                },
            error: function(response) {
               $('#status').css('color','red');
               $('#status').html("Sorry, an upload error occurred, "+response.statusText+" filename "+fname);
                }
            });
        }
