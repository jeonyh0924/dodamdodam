$(document).ready(function(){
    /* 사업자 등록증 파일 */
    var uploadfile = $('#file_name');
    if(uploadfile.val()==''){
        uploadfile.val("등록된 파일이 없습니다.");
        $("#file_label").remove();
    }

    /* 파일 수정 */
    var fileTarget = $('#id_registration_file');
    var name = $("#file_name");

    fileTarget.on('change', function(){
        $("#registration_file-clear_id").remove();
        file_ext2(fileTarget, name);
    });

    var manager_number = $("#id_manager_number").val();
    if(manager_number) {
        manager_number = manager_number.split('`');
    }

    for(var i=0; i<manager_number.length;i++){
        var manger=manager_number[i].split('/');

        if(manger[1].length==11) {
            manger[1] = manger[1].slice(0, 3) + '-' + manger[1].slice(3, 7) + '-' + manger[1].slice(7);
        }
        if(i==0){
            $("#manager1").val(manger[0]);
            $("#manager1_phone_number").val(manger[1]);
            if(manger[2] == '동의') {
                $("#kakao_talk1").prop("checked", true);
            } else {
                $("#kakao_talk1").prop("checked", false);
            }
        }else{
            var managerCount = $("#managerCount").val();
            var manager_clone = $(".manager_clone").html();
            manager_clone = manager_clone.replace(/currentBox/g,'currentBox'+managerCount);
            manager_clone = manager_clone.replace(/manager/g,'manager'+managerCount);
            manager_clone = manager_clone.replace(/rowDelete\(/g,'rowDelete('+managerCount);
            manager_clone = manager_clone.replace(/kakao_talk/g,'kakao_talk'+managerCount);
            $(".form-group-wrap").append(manager_clone);
            $("#managerCount").val(managerCount);
            $("#manager"+managerCount).val(manger[0]);
            $("#manager"+managerCount+"_phone_number").val(manger[1]);
            if(manger[2] == '동의') {
                $("#kakao_talk"+managerCount).prop("checked", true);
            } else {
                $("#kakao_talk"+managerCount).prop("checked", false);
            }
            managerCount++
            $("#managerCount").val(managerCount);
        }
    }

    var box_len = $(".form-group-wrap").children('div').length;
    if(box_len > 2) {
        $(".form-group-box .add").css('visibility','hidden');
    }

    // 매입 & 매출처 초기 셋팅
    $("[name='type']").trigger("change");

});

function fileClear() {
    $("#registration_file-clear_id").prop("checked", "checked");
    $("#file_name").val("등록된 파일이 없습니다.");
    $("#file_label").remove();
}
