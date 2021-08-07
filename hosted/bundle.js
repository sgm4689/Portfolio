"use strict";

var InDepth = function InDepth(props) {
  if (props.example.length === 0) {
    return null;
  } else {
    return (/*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "title"
      }, props.example.Name), /*#__PURE__*/React.createElement("div", {
        id: "descDiv"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "title"
      }, "About The Game"), /*#__PURE__*/React.createElement("p", null, props.example.Description)), /*#__PURE__*/React.createElement("div", {
        id: "roleDiv"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "title"
      }, "My Job"), /*#__PURE__*/React.createElement("p", null, props.example.Role)), /*#__PURE__*/React.createElement("div", {
        className: "imageContainer"
      }, props.example.URLs.map(function (value, index) {
        return (/*#__PURE__*/React.createElement("img", {
            src: value,
            alt: index,
            className: "exampleImg img-thumbnail",
            width: "200",
            height: "200"
          })
        );
      })))
    );
  }
};

var setup = function setup() {
  ReactDOM.render( /*#__PURE__*/React.createElement(InDepth, {
    example: []
  }), document.querySelector("#footer"));
  var projects = document.querySelectorAll(".selection");
  projects.forEach(function (value, index, obj) {
    value.addEventListener('click', function () {
      sendAjax('GET', value.id, null, function (data) {
        ReactDOM.render( /*#__PURE__*/React.createElement(InDepth, {
          example: data
        }), document.querySelector("#footer"));
      });
    });
  });
};

$(document).ready(function () {
  setup();
});
"use strict";

var redirect = function redirect(response) {
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cashe: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
