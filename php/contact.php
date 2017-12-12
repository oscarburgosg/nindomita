<?php

	$errors = array();

	// Check if name has been entered
	if (!isset($_POST['name'])) {
		$errors['name'] = 'Ingresa tu nombre/Enter your name';
	}
	
  // Check if phone has been entered
	if (!isset($_POST['phone'])) {
		$errors['phone'] = 'Ingresa tu telefono/Enter your phone number';
	}

	// Check if email has been entered and is valid
	if (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errors['email'] = 'Ingresa tu email/Enter your email address';
	}

	//Check if message has been entered
	if (!isset($_POST['message'])) {
		$errors['message'] = 'Cuentanos tu inquietud/Enter your message';
	}

	$errorOutput = '';

	if(!empty($errors)){

		$errorOutput .= '<div class="alert alert-danger alert-dismissible" role="alert">';
 		$errorOutput .= '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

		$errorOutput  .= '<ul>';

		foreach ($errors as $key => $value) {
			$errorOutput .= '<li>'.$value.'</li>';
		}

		$errorOutput .= '</ul>';
		$errorOutput .= '</div>';

		echo $errorOutput;
		die();
	}



	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$from = $email;
	$to = 'info@naturalezaindomita.cl';  // please change this email id
	$subject = 'Contacto desde www.naturalezaindomita.cl';

	$body = "Hola. Mi nombre es $name - phone number $phone. Los contacto desde la web.\n Mi email es $email\n Les quiero preguntar lo siguiente:\n $message";

	$headers = "From: ".$from;


	//send the email
	$result = '';
	if (mail ($to, $subject, $body, $headers)) {
		$result .= '<div class="alert alert-success alert-dismissible" role="alert">';
 		$result .= '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$result .= '¡Gracias! estaremos en contacto / Thank you!, we will contact you ASAP';
		$result .= '</div>';

		echo $result;
		die();
	}

	$result = '';
	$result .= '<div class="alert alert-danger alert-dismissible" role="alert">';
	$result .= '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
	$result .= 'UPS! Por favor intenta nuevamente. / Please try again';
	$result .= '</div>';

	echo $result;
