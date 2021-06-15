$(document).ready(function() {
  var fileTarget = $('#id_cadfile1');
  var name = $("#file_name1");

  fileTarget.on('change', function(){
    file_ext(fileTarget, name);
  });

  var fileTarget2 = $('#id_cadfile2');
  var name2 = $("#file_name2");

  fileTarget2.on('change', function(){
    file_ext(fileTarget2, name2);
  });

});

