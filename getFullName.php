<?php

// <!-- The code provided is supposed return a person's Full Name given their first and last names.
// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early. -->

class Dinglemouse {
private $firstName;
private $lastName;

public function __construct($firstName, $lastName) {
    $this -> firstName = $firstName;
    $this -> lastName = $lastName;
}

public function getFullName() {
return trim("$this->firstName $this->lastName");
}
}