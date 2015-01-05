<?php

// Define messages
$ok=function($message){
	echo "<span style=\"color:green\">$message</span><br>";
};
$error=function($message){
	echo "<span style=\"color:red\">$message</span><br>";
};

// Get requests
$requests=json_decode(file_get_contents('requests.json'));
$req=(int)$_GET['req'];
unset($_GET['req']);

// Verify the request
foreach($_GET as $name=>$value){
	if(!isset($_POST[$name])){
		$error("[$name] does not exist");
	}
	else{
		if($_POST[$name]===$value){
			$ok("[$name] equals to '$value'");
		}
		else{
			$error("[$name] '$value' is expected but '{$_POST[$name]}' encountered");
		}
		unset($_POST[$name]);
	}
}

// Verify all data
$verifyData=function($data,$expecting) use(&$verifyData,$ok,$error){
	foreach($data as $name=>$value){
		// Get expected value
		if(is_array($expecting)){
			$expected=$expecting[$name];
		}
		else if(property_exists($expecting,$name)){
			$expected=$expecting->$name;
		}
		else{
			$error("[$name] expected property does not exist");
			continue;
		}
		// Recursive
		if(is_array($value) || is_object($value)){
			$verifyData($value,$expected);
		}
		// Verify value
		else if($value===(string)$expected){
			$ok("[$name] equals to '$value'");
		}
		else{
			$error("[$name] '$expected' is expected but '$value' encountered");
			continue;
		}
	}
};
$verifyData($_POST,json_decode(file_get_contents('data.json')));

// Print links
echo '<br><a href="index.html?req='.$req.'">Retry</a>';
if($req<count($requests)){
	echo ' &middot; <a href="index.html?req='.($req+1).'">Next request</a>';
}
