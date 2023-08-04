<?php
$email_to = "jack@jackstudios.com.au";
$email_subject = "New Queery";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$email_message = "Email Querry\n\n";
$email_message .= "name: ".$name."\n";
$email_message .= "email: ".$email."\n";
$email_message .= "message: ".$message."\n";
$headers = 'From: '.$email."\r\n";
@mail($email_to, $email_subject, $email_message, $headers);
?>

<style>
	.name{
	position: fixed;
	top: 10px;
	right: 10px;
	margin: 0px;
	background: #7cb7ea;
	height: 40px;
	border-radius: 5px;
    }
</style>
<div class="name"> 
	<h1 class="name" style="
   	text-align: center;
	padding: 5px;
	font: OCR A Extended;"
	Loading...
	</h1>
</div>
<meta http-equiv = "refresh" content = "3; url = http://jackstudios.com.au/ThankYou.html" />
<img style="width: 100%;" src="http://jackstudios.com.au/src/Images/MP.png">