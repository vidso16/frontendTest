$(document).ready(function () {


  if ($('.btn-email').on('click')) {
    $("#btn-search").on("click", function (e) {
      e.preventDefault();
      localStorage.clear(); //Clears storage for next request
      email = $('.form-email[type="text"]').val().toLowerCase();
  
      var x, y;
      regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (email.match(regEx)) {
        x = true;
      } else {
        x = false;
      }
  
      if (x === true) {
        document.querySelector('.form-email[type="text"]').parentNode.classList.remove("error");
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('.form-email[type="text"]').parentNode.classList.add("error");
      }
    });
  
    $('input[type="text"]').keypress(function (event) {
      email = $('.form-email[type="text"]').val().toLowerCase();
      regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (email.match(regEx)) {
        x = true;
        document.querySelector('.form-email[type="text"]').parentNode.classList.remove("error");
      } else {
        x = false;
      }
      keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13') {
        /**
         * Makes a request to ltv API to search an specific email address.
         * If there's a response, it gets stored in the local storage and redirects to results page
         */
        event.preventDefault();
        localStorage.clear(); //Clears storage for next request
  
        var x, y;
  
  
        if (x === true) {
          const proxyurl = "";
          const url =
            'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
          fetch(proxyurl + url)
            .then((response) => response.text())
            .then(function (contents) {
              localStorage.setItem("userObject", contents);
              window.location.href = "result.html";
            })
            .catch((e) => console.log(e));
        } else if (x !== true) {
          document.querySelector('.form-email[type="text"]').parentNode.classList.add("error");
        }
      }
    });
  
  
  } else {
    document.querySelector('.form-phone[type=text]:nth-child(2)').parentNode.classList.add("error");
  }
  
/**
 * PHONE NUMBER VALIDATION
 */

  if ($('.btn-phone').on('click')) {
    $("#btn-search").on("click", function (e) {
      e.preventDefault();
      localStorage.clear(); //Clears storage for next request
      phone = $('.form-phone[type="text"]').val().toLowerCase();

      var x, y;
      regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (phone.match(regEx)) {
        x = true;
      } else {
        x = false;
      }

      if (x === true) {
        document.querySelector('.form-phone[type="text"]').parentNode.classList.remove("error");
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('.form-phone[type="text"]').parentNode.classList.add("error");
      }
    });


    $('.form-phone[type="text"]').keypress(function (event) {
      phone = $('.form-phone[type="text"]').val(),toLowerCase();
      regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (phone.match(regEx)) {
        x = true;
        document.querySelector('.form-phone[type="text"]').parentNode.classList.remove("error");
      } else {
        x = false;
      }
      keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13') {
        /**
         * Makes a request to ltv API to search an specific.
         * If there's a response, it gets stored in the local storage and redirects to results page
         */
        event.preventDefault();
        localStorage.clear(); //Clears storage for next request

        var x, y;


        if (x === true) {
          const proxyurl = "";
          const url =
            'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;

          fetch(proxyurl + url)
            .then((response) => response.text())
            .then(function (contents) {
              localStorage.setItem("userObject", contents);
              window.location.href = "result.html";
            })
            .catch((e) => console.log(e));
        } else if (x !== true) {
          document.querySelector('.form-phone[type="text"]').parentNode.classList.add("error");
        }
      }
    });

  } else {
    document.querySelector('input[type=text]:nth-child(1)').parentNode.classList.add("error");
  }

});

