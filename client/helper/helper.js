const redirect = (response) => {
  window.location = response.redirect;
};

//Helper function to send ajax to the server
const sendAjax = (type, action, data, success) => {
  $.ajax({
    cashe: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function(xhr, status, error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};