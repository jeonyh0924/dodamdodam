$(document).ready(function() {
  // 관련 파일 # 1
  var fileTarget = $('#id_cadfile1');
  fileTarget.on('change', function(){
    var file_value = $("#id_cadfile1").val();
    $("#file_name1").val(file_value);
  });
  // 관련 파일 # 2
  var fileTarget2 = $('#id_cadfile2');
  fileTarget2.on('change', function(){
    var file_value2 = $("#id_cadfile2").val();
    $("#file_name2").val(file_value2);
  });
  // 설비 사진 # 1
  var fileTarget3 = $('#id_cadfile3');
  var name3 = $("#file_name3");

  fileTarget3.on('change', function(){
    file_ext(fileTarget3, name3);
  });
  // 설비 사진 # 2
  var fileTarget4 = $('#id_cadfile4');
  var name4 = $("#file_name4");

  fileTarget4.on('change', function(){
    file_ext(fileTarget4, name4);
  });

});

