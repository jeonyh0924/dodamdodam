$(document).ready(function() {
    var uploadfile1 = $('#file_name1');
    if(uploadfile1.val()==''){
        uploadfile1.val("등록된 파일이 없습니다.");
        $("#file_label1").remove();
    }
    var uploadfile2 = $('#file_name2');
    if(uploadfile2.val()==''){
        uploadfile2.val("등록된 파일이 없습니다.");
        $("#file_label2").remove();
    }
    var uploadfile3 = $('#photo_name1');
    if(uploadfile3.val()==''){
        uploadfile3.val("등록된 파일이 없습니다.");
        $("#photo_label1").remove();
    }
    var uploadfile4 = $('#photo_name2');
    if(uploadfile4.val()==''){
        uploadfile4.val("등록된 파일이 없습니다.");
        $("#photo_label2").remove();
    }
    // 관련 파일 # 1
    var fileTarget = $('#id_cadfile1');
    fileTarget.on('change', function(){
      var file_value = $("#id_cadfile1").val();
      $("#upload_file1-clear_id").remove();
      $("#file_name1").val(file_value);
    });
    // 관련 파일 # 2
    var fileTarget2 = $('#id_cadfile2');
    fileTarget2.on('change', function(){
      var file_value2 = $("#id_cadfile2").val();
      $("#upload_file2-clear_id").remove();
      $("#file_name2").val(file_value2);
    });
    // 설비 사진 # 1
    var fileTarget3 = $('#id_cadfile3');
    var name3 = $("#photo_name1");

    fileTarget3.on('change', function(){
      $("#equipment_photo1-clear_id").remove();
      file_ext2(fileTarget3, name3);
    });
    // 설비 사진 # 2
    var fileTarget4 = $('#id_cadfile4');
    var name4 = $("#photo_name2");

    fileTarget4.on('change', function(){
      $("#equipment_photo2-clear_id").remove();
      file_ext2(fileTarget4, name4);
    });

    var evaluation_item = $("#id_evaluation_item").val().split(',');
    for(var i=0; i<evaluation_item.length;i++){
        var eval = evaluation_item[i].split('/');
        if(i==0){
            $("#eval_item1").val(eval[0]);
            $("#eval_score1").val(eval[1]);
        }else{
            var evalCount = $("#evaluation_count").val();
            var eval_clone = $(".eval_clone").html();
            eval_clone = eval_clone.replace(/currentBox/g,'currentBox'+evalCount);
            eval_clone = eval_clone.replace(/eval_item/g,'eval_item'+evalCount);
            eval_clone = eval_clone.replace(/eval_score/g,'eval_score'+evalCount);
            eval_clone = eval_clone.replace(/rowDelete\(/g,'rowDelete('+evalCount);
            $(".form-group-wrap").append(eval_clone);
            $("#evaluation_count").val(evalCount);
            $("#eval_item"+evalCount).val(eval[0]);
            $("#eval_score"+evalCount).val(eval[1]);
            evalCount++
            $("#evaluation_count").val(evalCount);
        }
    }

    var box_len = $(".form-group-wrap").children('div').length;
    if(box_len > 4) {
        $(".form-group-box .add").css('visibility','hidden');
    }
});

function fileClear(num) {
    $("#upload_file"+num+"-clear_id").prop("checked", "checked");
    $("#file_name"+num).val("등록된 파일이 없습니다.");
    $("#file_label"+num).remove();
}

function photoClear(num) {
    $("#equipment_photo"+num+"-clear_id").prop("checked", "checked");
    $("#photo_name"+num).val("등록된 파일이 없습니다.");
    $("#photo_label"+num).remove();
}
