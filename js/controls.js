// setup controls
var controls = {};

// check local storage for devices
if (localStorage.getItem('controls')) {
  controls = JSON.parse(localStorage.getItem('controls'));
}

// if there are controls, display each one
if (controls) {

  $.each(controls, function(i, control) {

    var control_new = '<div class="card bg-light mb-3" style="max-width: 18rem;">' +
                        '<div class="card-header">' + control.name + '</div>' +
                        '<div class="card-body">' +
                          getControl(i, control) +
                        '</div>' +
                      '</div>';

    $('#controls').append(control_new);

  });

}

function getControl(i, control) {

  var control_html = '<div class="control_toggle">' +
                       '<button id="toggle_' + i + '" class="btn btn-success" onclick="buttonControl(' + control.source.field + ', \'' + control.source.writeKey + '\', 1)">On</button>' +
                       '<button id="toggle_' + i + '" class="btn btn-error" onclick="buttonControl(' + control.source.field + ', \'' + control.source.writeKey + '\', 0)">Off</button>' +
                     '</div>';

  return control_html;
}

function buttonControl(field, key, state) {

  // contruct URL to send request
  var url = 'http://api.thingspeak.com/update';

  // contruct data to send
  var data = 'api_key=' + key + '&' +
             'field' + field + '=' + state;

  // get ThingSpeak data using AJAX
  $.ajax({url: url, data: data, success: function(data){
      // check if there is a valid response
      if (data >> 0) {
        console.log(data);
      }
  }});

}
