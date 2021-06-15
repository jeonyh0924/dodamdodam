$(document).ready(function(){
    $('#id_registration_number').attr('maxlength',10);
    $('#id_onwer_phone').attr('maxlength',11);
    $('#id_fax').attr('maxlength',11);
    $('#id_manager_number').attr('maxlength',11);


    $("#id_onwer_phone").keyup(function(){
        var obj = $("#id_onwer_phone").val();
        obj = PatternInspection(obj);
        $("#id_onwer_phone").val(obj);
        if(obj.length==11) {
            var formatText = obj.slice(0, 3) + '-' + obj.slice(3, 7) + '-' + obj.slice(7);
            $('#id_onwer_phone').val(formatText);
        }

    });
    $("#id_fax").keyup(function(){
        var obj = $("#id_fax").val();
        obj =  PatternInspection(obj);
        $("#id_fax").val(obj);
        if(obj.length==11) {
            var formatText = obj.slice(0, 3) + '-' + obj.slice(3, 7) + '-' + obj.slice(7);
            $('#id_fax').val(formatText);
        }
    });
    $("#id_manager_number").keyup(function(){
        var obj = $("#id_manager_number").val();
        obj =  PatternInspection(obj);
        $("#id_manager_number").val(obj);
        if(obj.length==11) {
            var formatText = obj.slice(0, 3) + '-' + obj.slice(3, 7) + '-' + obj.slice(7);
            $('#id_manager_number').val(formatText);
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
        }
    });

    var managerCount = $("#managerCount").val();
    $(".form-group-box .add").click(function () {
         var manager_clone = $(".manager_clone").html();
         manager_clone = manager_clone.replace(/currentBox/g,'currentBox'+managerCount);
         manager_clone = manager_clone.replace(/manager/g,'manager'+managerCount);
         manager_clone = manager_clone.replace(/rowDelete\(/g,'rowDelete('+managerCount);
         $(".form-group-wrap").append(manager_clone);
         managerCount++;
         $("#managerCount").val(managerCount);
    });
});

function rowDelete(obj) {
    $("#currentBox"+obj).remove();
}
function companyAdd() {  //사업자 번호 유효검사
    var number = $('#id_registration_number').val();

    var count= (number.match(/-/g) || []).length;  // - 갯수
    var onwer = $("#id_onwer_phone").val();
    var fax = $("#id_fax").val();
    var manager = $("#id_manager_number").val();
    if(onwer.length==10){
        var formatText = onwer.slice(0, 3) + '-' + onwer.slice(3, 6) + '-' + onwer.slice(6);
        $('#id_onwer_phone').val(formatText);
    }
    if(fax.length==10){
        var formatText = fax.slice(0, 3) + '-' + fax.slice(3, 6) + '-' + fax.slice(6);
        $('#id_fax').val(formatText);
    }
    if(manager.length==10){
        var formatText = manager.slice(0, 3) + '-' + manager.slice(3, 6) + '-' + manager.slice(6);
        $('#id_manager_number').val(formatText);
    }
    // if(number.length!=12|| count>2){
    //     alert("올바른 사업자번호를 입력하세요.");
    //     return
    // }else if(number.length==12){
    //     if(count!=2||number.indexOf("-")!=3 ||number.indexOf("-",5)!=6){
    //         alert("올바른 사업자번호를 입력하세요.");
    //         return;
    //     }
    // }
    var boxSize = $(".form-group-wrap .form-group-box");
    var manager_number ='';
    for(var i=0; i<boxSize.size();i++){
        manager_number +=boxSize.eq(i).find('input').eq(0).val();
        manager_number+='/'+boxSize.eq(i).find('input').eq(1).val()+","
    }
    $("#id_manager_number").val(manager_number);
    $('#companyForm').submit();
}