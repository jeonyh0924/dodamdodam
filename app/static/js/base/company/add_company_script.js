$(function() {
    /* 파일 등록 */
    var fileTarget = $('#id_registration_file');
    var name = $("#file_name");

    fileTarget.on('change', function(){
        file_ext(fileTarget, name);
    });
});