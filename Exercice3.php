<?php
function checkOccurence ($array, $testNumber) {

  $i = 0;
  $j = 0;
  $currentElement = 0;

  while ($i < count($array)) {
      $currentElement = $array[$i];
    if ($currentElement == $testNumber) {
      $j++;
    }
    $i++;
  }
  echo ($j);
}

$tab = [2,5,6,9,7,8,1,2,5,4,6,3,2,5,0,2,6,0,3,0,2,9,2,0,2,3,2,3,2];

checkOccurence ($tab,2);

 ?>
