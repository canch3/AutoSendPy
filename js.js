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