<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Findcare</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="description" content=""
	/>
	<!-- stylesheet -->
   <link href="<?= $css ?>/uikit.min.css" type="text/css" rel="stylesheet" media="screen,projection" />
   <link href="<?= $css ?>/style.css" type="text/css" rel="stylesheet" media="screen,projection" />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
	<h1>Find Care</h1>
	<?php
// 	 $data = array(
//         3  => 'http://example.com/news/article/2006/06/03/',
//         7  => 'http://example.com/news/article/2006/06/07/',
//         13 => 'http://example.com/news/article/2006/06/13/',
//         26 => 'http://example.com/news/article/2006/06/26/'
// );

// echo $this->calendar->generate(2006, 6, $data);
	?>
	<form id="bookdoctor">
		 <select class="uk-text-capitalize spec" id="spec" name="spec" onchange="getdoctor()">
                     <option value="none" disabled selected selected="selected">Select Speciality</option> 
         </select>
         <select class='uk-text-capitalize doctor' id='doctor' name='doctor'>         	
                     <option value='none' disabled selected selected="selected">Select Doctor</option> 
         </select>
         <input type="date" name="bdate" id="bdate" placeholder="Enter the date" onchange="checkforslot()">
         <span id="dateresult"></span>

	</form>

<script type="text/javascript">
	       function gotdoctor(response, textStatus){
             $('#doctor').html("");
              $('#doctor').append("\
                    <option value='none' disabled selected selected='selected'>Select Doctor</option> \
            ");
	       	for (var i = 0; i <response.data.length; i++) {
       	$('#doctor').append("\
                    <option value='"+response.data[i].did+"'>"+response.data[i].dname+"</option> \
       		");
       }
   }
         function gotspec(response, textStatus){
         	  $('#spec').html("");
                $('#spec').append("\
                    <option value='none' disabled selected selected='selected'>Select Speciality</option> \
            ");
	       	for (i=0; i<response.data.length; i++){
       	$('#spec').append("\
                    <option value='"+response.data[i].dspec+"'>"+response.data[i].dspec+"</option> \
       		");
       }
   }

        function gotslot(response, textStatus){
          console.log(response.data+" loooo");
            $('#dateresult').html("");
            if(response.data >= 10){
                $('#dateresult').append("Slot is not available");
              }else{
                  response.data = response.data+1;
                 $('#dateresult').append("<br><label>Slot is available</label><br>");
                 $('#dateresult').append("<label>Slot number : "+response.data+"</label>");
              }
          
   }

	function getdoctor() {
    // e.preventDefault();
		console.log("xyz");
	      var url = "<?= $base_url ?>/book/getdoctor";
        var spec = $("#spec").val();
        $.ajax({
            url: url,
            type: "POST",
            data: {
               spec: spec
            } ,
            dataType: "json",
            beforeSend: function(XMLHttpRequest) {
            
            },
            complete: function(XMLHttpRequest, textStatus) {
            },
            success: gotdoctor,
            error:function(XMLHttpRequest, textStatus) {
            	 console.log("error");
            },
        });
            }

    function checkforslot() {
    // e.preventDefault();
    console.log("xyz0");
        var url = "<?= $base_url ?>/book/checkforslot";
        var bdate = $("#bdate").val();
        var doctor = $("#doctor").val();
        $.ajax({
            url: url,
            type: "POST",
            data: {
              bdate: bdate,
              doctor: doctor
            } ,
            dataType: "json",
            beforeSend: function(XMLHttpRequest) {
            
            },
            complete: function(XMLHttpRequest, textStatus) {
            },
            success: gotslot,
            error:function(XMLHttpRequest, textStatus) {
               console.log("errorslot");
            },
        });
            }

 $(document).ready(function() {
 	console.log("xyz");
	      var url = "<?= $base_url ?>/book/getSpec";
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            beforeSend: function(XMLHttpRequest) {
            
            },
            complete: function(XMLHttpRequest, textStatus) {
            },
            success: gotspec,
            error:function(XMLHttpRequest, textStatus) {
            	 console.log("error");
            },
        });
 });
</script>
</body>
</html>
