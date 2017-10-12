//Hide All Tabs on Start
$('.table').hide();
//$('#PartsTable').hide();
//Open tab when clicking nav buttons
$('#OpenRepair').click(function(){
  $('.table').hide();
  $('#OpenROTable').toggle();
});
$('#Parts').click(function(){
  $('.table').hide();
  $('#PartsTable').toggle();
});

//Show hint for username and password

//Detect correct username and password
$('#usr').on('keyup', function(){
  if ('#usr' == "Admin") {
    return true;
    alert('true');
  }
});

$('#psw').on('keyup', function(){
  if ('#psw' == 'password') {
    return true;
    alert('true');
  }
});

//Hide hint username and password match
