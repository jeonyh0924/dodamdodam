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
    
    var fileTarget = $('#id_upload_file1');
    var name = $("#file_name1");

    fileTarget.on('change', function(){
        $("#upload_file1-clear_id").remove();
        file_ext2(fileTarget, name);
    });

    var fileTarget2 = $('#id_upload_file2');
    var name2 = $("#file_name2");

    fileTarget2.on('change', function(){
        $("#upload_file2-clear_id").remove();
        file_ext2(fileTarget2, name2);
    });
});

function fileClear(num) {
    $("#upload_file"+num+"-clear_id").prop("checked", "checked");
    $("#file_name"+num).val("등록된 파일이 없습니다.");
    $("#file_label"+num).remove();
}