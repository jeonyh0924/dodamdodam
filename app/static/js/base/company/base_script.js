$(document).ready(function(){
    $('#id_registration_number').attr('maxlength',10);
    $('#id_rep_number').attr('maxlength',11);
    $('#id_fax_number').attr('maxlength',11);
    $('.mpn').attr('maxlength',11);
    

    $("#id_rep_number").keyup(function(){
        var obj = $("#id_rep_number").val();
        obj = PatternInspection(obj);
        $("#id_rep_number").val(obj);
        if(obj.length==11) {
            var formatText = obj.slice(0, 3) + '-' + obj.slice(3, 7) + '-' + obj.slice(7);
            $('#id_rep_number').val(formatText);
        }
    });

    $("#id_fax_number").keyup(function(){
        var obj = $("#id_fax_number").val();
        obj =  PatternInspection(obj);
        $("#id_fax_number").val(obj);
        if(obj.length==11) {
            var formatText = obj.slice(0, 3) + '-' + obj.slice(3, 7) + '-' + obj.slice(7);
            $('#id_fax_number').val(formatText);
        }
    });
    
    $(document).on('keyup','.mpn',function() {
        var obj = $(this).val();
        obj =  PatternInspection(obj);
        $(this).val(obj);
        if(obj.length==11) {
            var formatText = obj.slice(0, 3) + '-' + obj.slice(3, 7) + '-' + obj.slice(7);
            $(this).val(formatText);
        }
    });
    

	$("#id_registration_number").keyup(function(){
        var tpl = $("#id_registration_number").parent();
        var obj = $("#id_registration_number").val();
            obj =  PatternInspection(obj);
            $("#id_registration_number").val(obj);
            $('#registerError').remove();

        var number = $('#id_registration_number').val();
        var count= (number.match(/-/g) || []).length;  // - 갯수
        if(number.length==10 && count == 0) {
            var formatText = number.slice(0, 3) + '-' + number.slice(3, 5) + '-' + number.slice(5);
            $('#id_registration_number').val(formatText);
            $('#registerError').remove();
        }else if(number.length!=12|| count>2 ||number.length==11){
            tpl.after("<ul class='errorlist' id='registerError'><li>올바르지 않은 사업자등록번호입니다.</li></ul>");
        }else if(number.length==12){
            if(count!=2||number.indexOf("-")!=3 ||number.indexOf("-",5)!=6){
                tpl.after("<ul class='errorlist' id='registerError'><li>올바르지 않은 사업자등록번호입니다.</li></ul>");
                return
            }
        }
    });
    
    var managerCount = $("#managerCount").val();

    $(".form-group-box .add").click(function () {
         var manager_clone = $(".manager_clone").html();
         manager_clone = manager_clone.replace(/currentBox/g,'currentBox'+managerCount);
         manager_clone = manager_clone.replace(/manager/g,'manager'+managerCount);
         manager_clone = manager_clone.replace(/rowDelete\(/g,'rowDelete('+managerCount);
         manager_clone = manager_clone.replace(/kakao_talk/g,'kakao_talk'+managerCount);
         $(".form-group-wrap").append(manager_clone);
         managerCount++;
         $("#managerCount").val(managerCount);

         var box_len = $(".form-group-wrap .form-group-box").length;
         if(box_len > 2) {
             $(this).css('visibility','hidden');
         }
    });

    // 매입 & 매출처 선택 시
    $("[name='type']").change(function() {
        $("[name='type2'], [name='rating']").attr("disabled","disabled");
        if($(this).val() == 'A') {
            $("[name='type2']").removeAttr("disabled");
        }
    });

    // 업체구분 선택 시
    $("[name='type2']").change(function() {
        $("[name='rating']").attr("disabled","disabled");
        if($(this).val() == 'B') {
            $("[name='rating']").removeAttr("disabled");
        }
    });

});

function rowDelete(obj) {
    $("#currentBox"+obj).remove();

    var box_len = $(".form-group-wrap .form-group-box").length;
    if(box_len < 3) {
        $(".form-group-box .add").css('visibility','visible');
    }
}
function companyAdd(){

    var boxSize = $(".form-group-wrap .form-group-box");
    var manager_group ='';

    for(var i=0; i<boxSize.size();i++){
        if(boxSize.eq(i).find('input.mn').val().length > 0 && boxSize.eq(i).find('input.mpn').val()) {

            manager_group += boxSize.eq(i).find('input').eq(0).val();
            manager_group += '/'+boxSize.eq(i).find('input').eq(1).val()+"`";
            /*
            if(boxSize.eq(i).find('.kakaotalk').is(":checked")) {
                boxSize.eq(i).find('.kakaotalk').val('동의');
            } else {
                boxSize.eq(i).find('.kakaotalk').val('동의안함');
            }
            manager_group += '/'+boxSize.eq(i).find('.kakaotalk').eq(0).val()+","
            */
        }
    }

    manager_group = manager_group.slice(0,manager_group.length-1);

    $("#id_manager_number").val(manager_group);
    $('form').submit();
}

/* 등록 */
function file_ext(file_id, file_name) {
    var file_value = file_id.val();

    file_id_slice = file_value.slice(file_value.lastIndexOf(".") + 1).toLowerCase();
    if(file_id_slice == "jpg" || file_id_slice == "png" || file_id_slice == "jpeg" || file_id_slice == "pdf") {
        file_name.val(file_value);
    }
    else {
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : jpg, jpeg, png, pdf');
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
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : jpg, jpeg, png, pdf');
        file_id.val('');
        return;
        
    }
}