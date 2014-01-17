<?php

$expected=array(
	'_METHOD'	=> 'PUT',
	'firstname'	=> 'Foo',
	'lastname'	=> 'Bar',
	'age'		=> 27,
	'children'	=> array(
		'Audrey',
		'Nicholas',
		'Alison'
	)
);

foreach($expected as $name=>$value){
	if(array_key_exists($name,$_POST)){
		if($_POST[$name]==$value){
			echo "$name : OK</span><br>";
		}
		else{
			echo "<span style=\"color:red\">$name : '{$_POST[$name]}' has been encountered while '$value' is expected</span><br>";
		}
	}
	else{
		echo "<span style=\"color:red\">$name : key does not exist</span><br>";
	}
}