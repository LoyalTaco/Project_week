$(document).ready(function() {

    $('.login-form form').on('submit', function(event) {
      event.preventDefault();
  
      if (document.querySelector('.login-form form').checkValidity()) {
        const loginData = $(this).serializeArray();
        if (loginData[0].value === localStorage.mdbAdminUserEmail && loginData[1].value === localStorage.mdbAdminUserPass) {
          localStorage.setItem("mdbAdminUserLogged", true);
          location.reload();
        } else {
          $('#error-modal .modal-body').html('Your email or password is incorrect.');
          $('#error-modal').modal('toggle');
        }
      } else {
        $('#error-modal .modal-body').html('Please provide correct login data.');
        $('#error-modal').modal('toggle');
      }
  
    })
  
    $('.logout').on('click', () => {
      localStorage.setItem("mdbAdminUserLogged", false);
      location.reload();
    })
  
    if (localStorage.mdbAdminUserLogged === "true") {
      $('.login-form').hide();
      $('.logout-form').show();
      $('.logged-user-message').html(`You are logged in as <strong>${localStorage.mdbAdminUserFirstName} ${localStorage.mdbAdminUserLastName}</strong>!`);
    }
  
  })