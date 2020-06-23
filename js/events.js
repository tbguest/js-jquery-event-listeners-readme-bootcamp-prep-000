//define functions here

function getIt() {
  $("p").on('click', function(){
    alert("Hey!")
    return
  })
}

function frameIt() {
  
  $('img').on('load', function(){
      $('img')[0].classList.add('tasty')
    // alert('tasty!')
    return
  });
}

function pressIt() {
  $('#typing').on("keydown", 
  function(key) {
    if(key.which == 71) {
      alert('g was pressed')
    }
    return
  })
}

function submitIt() {
  
  const formSubmit = $('input:submit')[0]
  $(formSubmit).on('submit', function() {
    alert("Your form is going to be submitted now."); 
    return
  })
}


$(document).ready(function(){

  // call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()

});
