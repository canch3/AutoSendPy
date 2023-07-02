function alerta(){
  let phone = "0"
  let date = "0"
  let time = "0"
  let message = "0"

  phone = document.getElementById('phone').value;
  date = document.getElementById('date').value;
  time = document.getElementById('time').value;
  message = document.getElementById('message').value;
  
  console.log(phone)
  console.log(date)
  console.log(time)
  console.log(message)

  
  alert("done")
  
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
      format: 'dd/mm/yyyy',
      minDate: new Date(),
      onClose: function() {
        validateDate();
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems, {
      twelveHour: false
    });
  });
  
  function validateDate() {
    var selectedDate = document.getElementById('date').value;
    var today = new Date();
    var selectedDateObj = new Date(selectedDate);
  
    if (selectedDateObj < today) {
      M.toast({html: 'Selecciona una fecha futura'});
      document.getElementById('date').value = '';
    }
  }
  window.onload = function() {
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('message').value = '';
  };

  function captureText(){
    const phone = getElementById("phone").innerHTML;
    const date = getElementById("date").innerHTML;
    const time = getElementById("time").innerHTML;
    const message = getElementById("message").innerHTML;
  }

  