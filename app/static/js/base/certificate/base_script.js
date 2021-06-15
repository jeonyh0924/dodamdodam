//********  파일 확장자 제한  ********//

/* 등록 */
function file_ext(file_id, file_name) {
    var file_value = file_id.val();

    file_id_slice = file_value.slice(file_value.lastIndexOf(".") + 1).toLowerCase();
    if(file_id_slice == "jpg" || file_id_slice == "png" || file_id_slice == "jpeg" || file_id_slice == "pdf") {
        file_name.val(file_value);
    }
    else {
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : pdf, jpg, jpeg, png');
        file_id.val('');
        file_name.val('등록된 파일이 없습니다.');
    }
}

/* 수정 */
function file_ext2(file_id, file_name) {
    var file_value = file_id.val();

    file_id_slice = file_value.slice(file_value.lastIndexOf(".") + 1).toLowerCase();
    if(file_id_slice == "jpg" || file_id_slice == "png" || file_id_slice == "jpeg" || file_id_slice == "pdf") {
        file_name.val(file_value);
    }
    else {
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : pdf, jpg, jpeg, png');
        file_id.val('');
        return;
        
    }
}

function CertFormSubmit() {
    var number = $("input#id_number").val();
    if(number.indexOf('-') == -1) {
        alert('올바른 인증서 번호를 입력하세요.');
        $("input#id_number").focus();
    }
    else {
        $("form").submit();
    }
}
