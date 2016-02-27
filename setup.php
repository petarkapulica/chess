<?php
  $row = 1;
  $count = 65;
  for($field = 1 ; $field < 65 ; $field++)
  {
    if( $field % 8 == 0 && $row % 2 == 0 )
    {
      echo '<div data-color="white" data-field='. --$count .'>'.$count.'<span class="dot"></span></div>' . '<br>';
      $row++;
    }
    elseif( $field % 8 == 0 && $row % 2 != 0 )
    {
      echo '<div data-color="black" data-field='. --$count .'>'.$count.'<span class="dot"></span></div>' . '<br>';
      $row++;
    }
    elseif( $field % 2 == 0  && $row % 2 != 0)
    {
      echo '<div data-color="black"  data-field='. --$count .'>'.$count.'<span class="dot"></span></div>';
    }
    elseif( $field % 2 != 0  && $row % 2 == 0 )
    {
      echo '<div data-color="black" data-field='. --$count .'>'.$count.'<span class="dot"></span></div>';
    }
    else
    {
      echo '<div data-color="white"  data-field='. --$count .'>'.$count.'<span class="dot"></span></div>';
    }
  }
?>
