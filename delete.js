/*Name:Shahane,Shweta Kisan
 Acc_No:jadrn058*/

$(document).ready(function()  {

  
$.get("/perl/jadrn058/fetch_category.cgi",deleteCategory);
$.get("/perl/jadrn058/fetch_subcategory.cgi",deleteSubCategory);
$.get("/perl/jadrn058/fetch_vendor.cgi",deleteVendor);
  
 var error_text = "Please enter valid";
 
  $("#delete_sku").blur(function(){
  console.log("inside blur1");
    if (!$('#delete_sku').val().match(/[A-Z]{3}-[0-9]{3}/i) && !error_text.includes(" SKU")) {
      error_text = error_text + " SKU";
      $("#delete_messageLine1").text(error_text);
      $("#delete_messageLine1").show();
    }
    else if ($('#delete_sku').val().match(/[A-Z]{3}-[0-9]{3}/i))
    {
      error_text = error_text.replace(" SKU", "");
      $("#delete_messageLine1").text(error_text);
      if (error_text == "Please enter valid")
      {
        $("#delete_messageLine1").hide();
      }
    }
  });
$("#delete_sku").on('blur',function(e) {
        var url = '/perl/jadrn058/check_dup_sku.cgi?sku=';
        url += $("#delete_sku").val();
       $.get(url, deleteHandleData);
        });

$('#delete').bind('click',function(){
      var sku= document.getElementById("delete_sku").value;
      
      if(error_text == "Please enter valid" && (sku)){
       var url = "/perl/jadrn058/delete.cgi";
      url += "?sku="+sku;
     //alert(url);
     var req = new HttpRequest(url, handleDeleteData);
      req.send();}
      else
      {
      console.log("error");
      }
  });

});

function deleteHandleData(response){

    if(response.startsWith("duplicate")){
    $('#delete').prop('disabled', false);
    var url = '/perl/jadrn058/fetch_data.cgi?sku=';
    url += $("#delete_sku").val();
   $.get(url, fetchDeleteData);
}
else if($('#delete_sku').val()!='' && response.startsWith("ok")) {
document.getElementById("delete_messageLine2").innerHTML = "SKU not found";
$('#delete').prop('disabled', true);
    }
}

function fetchDeleteData(response){
var rows = response.split("=");

			    document.getElementById("delete_ven").value = rows[3];
			    document.getElementById("delete_cat").value = rows[1];
          document.getElementById("delete_subcat").value = rows[2];
          document.getElementById("delete_mfgIdentity").value = rows[4];
          document.getElementById("delete_desc").value = rows[5];
          document.getElementById("delete_prodFeatures").value = rows[6];
          document.getElementById("delete_cost").value = rows[7];
          document.getElementById("delete_retail").value = rows[8];
			    document.getElementById("delete_pic").innerHTML = rows[9];
          imageValue = "<img src='/~jadrn058/images/"+rows[9]+"'width='150px' height='150px' />";
                            $("#delete_pic").html(imageValue);
       
}

function deleteVendor(response) {
    var select = "<option value=\"-1\">Select Vendor</option>";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length; i++) {
        tmp = tmpStr[i].split("=");
        select += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
        }
    $('#delete_ven').append(select);
    }

function deleteCategory(response) {
    var select = "<option value=\"-1\">Select Category</option>";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length; i++) {
        tmp = tmpStr[i].split("=");
        select += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
        }
    $('#delete_cat').append(select);
    }
    function deleteSubCategory(response) {
        var select = "<option value=\"-1\">Select Sub-Category</option>";
        var tmpStr = response.split("||");
        for(i=0; i<tmpStr.length; i++) {
            tmp = tmpStr[i].split("=");
            select += "<option value=" + tmp[0] + ">"+tmp[1]+"</option>\n";
            }
        $('#delete_subcat').append(select);
        }
       
              function handleDeleteData(response) {
                //alert("delete successful");
		$('#delete_status').html("Record is deleted");
                $('#delete_pic').prop("hidden",true);
                document.getElementById("deleteFormData").reset();
		 
              }
