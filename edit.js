/*Name:Shahane,Shweta Kisan
 Acc_No:jadrn058*/

$(document).ready(function() {

$("#edit_cat").prop('disabled',true);
$("#edit_subcat").prop('disabled',true);
$("#edit_ven").prop('disabled',true);
$("#edit_mfgIdentity").prop('disabled',true);
$("#edit_cost").prop('disabled',true);
$("#edit_desc").prop('disabled',true);
$("#edit_prodFeatures").prop('disabled',true);
$("#edit_retail").prop('disabled',true);
$("#edit_image").prop('disabled',true);
$("#edit_upload").prop('disabled',true);
$("#edit").prop('disabled',true);

$.get("/perl/jadrn058/fetch_category.cgi",editCategory);
$.get("/perl/jadrn058/fetch_subcategory.cgi",editSubCategory);
$.get("/perl/jadrn058/fetch_vendor.cgi",editVendor);

var error_text = "Please enter valid";

$("#edit_sku").blur(function(){
  console.log("inside blur1");
    if (!$('#edit_sku').val().match(/[A-Z]{3}-[0-9]{3}/i) && !error_text.includes(" SKU")) {
      error_text = error_text + " SKU";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    }
    else if ($('#edit_sku').val().match(/[A-Z]{3}-[0-9]{3}/i))
    {
      error_text = error_text.replace(" SKU", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid")
      {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
$("#edit_sku").on('blur',function(e) {
	console.log("inside blur2");
        var url = '/perl/jadrn058/check_dup_sku.cgi?sku=';
        url += $("#edit_sku").val();
       $.get(url, editHandleData);
        });
	
$("#edit_cat").on("focusout", function(e) {
    if ($("#edit_cat").val() == -1 && !error_text.includes(" category")) {
      error_text = error_text + " category";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    } else if ($("#edit_cat").val() != -1) {
      console.log("here");
      error_text = error_text.replace(" category", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
  $("#edit_subcat").on("focusout", function(e) {
    if ($("#edit_subcat").val() == -1 && !error_text.includes(" sub-category")) {
      error_text = error_text + " sub-category";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    } else if ($("#edit_subcat").val() != -1) {
      console.log("here");
      error_text = error_text.replace(" sub-category", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
  $("#edit_ven").on("focusout", function(e) {
    if ($("#edit_ven").val() == -1 && !error_text.includes(" vendor")) {
      error_text = error_text + " vendor";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    } else if ($("#edit_ven").val() != -1) {
      error_text = error_text.replace(" vendor", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
  $("#edit_mfgIdentity").on("focusout", function(e) {
    console.log($("#edit_mfgIdentity").val());
    if (!$("#edit_mfgIdentity").val() && !error_text.includes(" ManufacturerId")) {
      error_text = error_text + " ManufacturerId";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    } else if ($("#edit_mfgIdentity").val()) {
      error_text = error_text.replace(" ManufacturerId", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
  $("#edit_desc").on("focusout", function(e) {
    if (!$("#edit_desc").val() && !error_text.includes(" description")) {
      error_text = error_text + " description";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();

    } else if ($("#edit_desc").val()) {
      error_text = error_text.replace(" description", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });

  $("#edit_prodFeatures").on("focusout", function(e) {
    if (!$("#edit_prodFeatures").val() && !error_text.includes(" product features")) {
      error_text = error_text + " product features";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    } else if($("#edit_prodFeatures").val()) {
      error_text = error_text.replace(" product features", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
  $("#edit_cost").on("focusout", function(e) {
    if ((!$.isNumeric($('#edit_cost').val()) || !$("#edit_cost").val()) && !error_text.includes(" cost")) {
      error_text = error_text + " cost";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();
    } else if ($.isNumeric($('#edit_cost').val())){
      error_text = error_text.replace(" cost", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
 $("#edit_retail").on("focusout", function(e) {
    if ((!$.isNumeric($('#edit_retail').val()) || !$("#edit_retail").val()) && !error_text.includes(" retail")) {
      error_text = error_text + " retail";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();

    } else if ($.isNumeric($('#edit_retail').val())){
      error_text = error_text.replace(" retail", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("edit_#messageLine1").hide();

      }
    }
  });

  $("#edit_image").on("focusout", function(e) {
    if (!$("#edit_image").val() && !error_text.includes(" product_image")) {
      error_text = error_text + " product_image";
      $("#edit_messageLine1").text(error_text);
      $("#edit_messageLine1").show();

    } else if ($("#edit_image").val()) {
      error_text = error_text.replace(" product_image", "");
      $("#edit_messageLine1").text(error_text);
      if (error_text == "Please enter valid") {
        $("#edit_messageLine1").hide();
      }
    }
  });
  
  $('#edit').on('click',function(){
  //alert("click");
    
    var sku= document.getElementById("edit_sku").value;
    var cost=document.getElementById("edit_cost").value;
    var retail=document.getElementById("edit_retail").value;
     var cat = document.getElementById("edit_cat").value;
    var ven = document.getElementById("edit_ven").value;
    var subcat = document.getElementById("edit_subcat").value;
    var mfgIdentity = document.getElementById("edit_mfgIdentity").value;
     var desc = document.getElementById("edit_desc").value;
     var prodFeatures= document.getElementById("edit_prodFeatures").value;
     var image = document.getElementById("edit_image").value;
     
     
    if (error_text == "Please enter valid" && (sku && cost && retail && cat && desc && ven && subcat && mfgIdentity && image && prodFeatures)) {
    	updateImage();
    var url = "/perl/jadrn058/update.cgi";
      url += "?sku="+sku+"&cat=" + cat + "&subcat="+subcat+"&ven="+ven+"&mfgIdentity="+mfgIdentity+"&desc="+desc+"&prodFeatures="+prodFeatures+"&cost="+cost+"&retail="+retail+"&image="+image;
      //alert(url);
     var req = new HttpRequest(url, handleUpdateData);
      req.send(); 
      } 
      else{
      console.log("error");
      }
  });
  
  $('#edit_reset').on('click',function(){
  $('#edit_sku').prop('disabled',false);
  $('#edit_status').prop('hidden',true);
  $('#edit_status1').prop('hidden',true); 
  $('#edit_pic').html(''); 
  });


});

function editHandleData(response){

    if(response.startsWith("duplicate")){
$("#edit_sku").prop('disabled',true);
$("#edit_cat").prop('disabled',false);
$("#edit_subcat").prop('disabled',false);
$("#edit_ven").prop('disabled',false);
$("#edit_mfgIdentity").prop('disabled',false);
$("#edit_cost").prop('disabled',false);
$("#edit_desc").prop('disabled',false);
$("#edit_prodFeatures").prop('disabled',false);
$("#edit_retail").prop('disabled',false);
$("#edit_image").prop('disabled',false);
$("#edit_upload").prop('disabled',false);
$("#edit").prop('disabled',false);
$("#edit_pic").css("display", "block");

  var url = '/perl/jadrn058/fetch_data.cgi?sku=';
    url += $("#edit_sku").val();
    //alert(url);
   $.get(url, fetchEditData);
}
else if(response.startsWith("ok")) {
//alert("SKU Not Found");
//var tt="SKU Not Found";
   $("#edit_messageLine1").text(tt);
	$('#edit').prop('disabled', false);
    }
}

function fetchEditData(response){
var rows = response.split("=");

	 document.getElementById("edit_ven").value = rows[3];
	document.getElementById("edit_cat").value = rows[1];
          document.getElementById("edit_subcat").value = rows[2];
          document.getElementById("edit_mfgIdentity").value = rows[4];
          document.getElementById("edit_desc").value = rows[5];
          document.getElementById("edit_prodFeatures").value = rows[6];
          document.getElementById("edit_cost").value = rows[7];
          document.getElementById("edit_retail").value = rows[8];
			    document.getElementById("edit_pic").innerHTML = rows[9];
          imageValue = "<img src='/~jadrn058/images/"+rows[9]+"'width='150px' height='150px' />";
                            $("#edit_pic").html(imageValue);
          
}

function editVendor(response) {
    var select = "<option value=\"-1\">Select Vendor</option>";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length; i++) {
        tmp = tmpStr[i].split("=");
        select += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
        }
    $('#edit_ven').append(select);
    }

function editCategory(response) {
    var select = "<option value=\"-1\">Select Category</option>";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length; i++) {
        tmp = tmpStr[i].split("=");
        select += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
        }
    $('#edit_cat').append(select);
    }
    function editSubCategory(response) {
        var select = "<option value=\"-1\">Select Sub-Category</option>";
        var tmpStr = response.split("||");
        for(i=0; i<tmpStr.length; i++) {
            tmp = tmpStr[i].split("=");
            select += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
            }
        $('#edit_subcat').append(select);
        }
        
              function handleUpdateData(response) {
	       $('#edit_status1').css('color','blue');
               $('#edit_status1').html("Update Successful");
                 }
          function updateImage() {
        var form_data = new FormData($('form')[0]);
        form_data.append("image", document.getElementById("edit_image").files[0]);
	var fname = $("#edit_image").val().toLowerCase();
        var toDisplay = "<img src=\"/~jadrn058/images/" + fname + "\" />";
	//alert(toDisplay);
	//alert(form_data);
        $.ajax( {
            url: "/perl/jadrn058/upload.cgi",
            type: "post",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(response) {
               $('#edit_status').css('color','blue');
               $('#edit_status').html("Your file has been received.");  
               $('#edit_pic').html(toDisplay);
                },
            error: function(response) {
               $('#edit_status').css('color','red');
               $('#edit_status').html("Sorry, an upload error occurred, "+response.statusText+" filename "+fname);
                }
            });
        }

