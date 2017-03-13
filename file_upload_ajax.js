/*Name:Shahane,Shweta Kisan
 Acc_No:jadrn058*/

$(document).ready(function()  {
    $('#submit_button').bind('click', function() {
        send_file();
        }
    );});


function send_file() {

   var fname= document.getElementById("image").value;
    //var pattern =/[^.]+$/;
    var ext= fname.split('.').pop();
    alert(ext);
    var sku_image_name=document.getElementById("sku").value;
    alert(sku_image_name);
    var newfname = sku_image_name+"."+ext;
    alert(newfname);
    newfname=newfname.toLowerCase();
    var form_data = new FormData($('form')[0]);
    form_data.append("image",newfname);
    var toDisplay = "<img src=\"/~jadrn058/_uploadDIR_/" + newfname + "\" />";
    alert(toDisplay);
    $.ajax({
            url: "/perl/jadrn058/upload.cgi",
            type: "post",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(response) {
	    alert(toDisplay);
             $('#pic').html(toDisplay);
            },
            error: function(response) {
		
                }
            });

}
