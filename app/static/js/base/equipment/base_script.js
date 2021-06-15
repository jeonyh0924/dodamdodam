//********  파일 확장자 제한  ********//

/* 등록 */
function file_ext(file_id, file_name) {
    var file_value = file_id.val();

    file_id_slice = file_value.slice(file_value.lastIndexOf(".") + 1).toLowerCase();
    if(file_id_slice == "jpg" || file_id_slice == "png" || file_id_slice == "jpeg") {
        file_name.val(file_value);
    }
    else {
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : jpg, jpeg, png');
        file_id.val('');
        file_name.val('등록된 파일이 없습니다.');
    }
}

/* 수정 */
function file_ext2(file_id, file_name) {
    var file_value = file_id.val();

    file_id_slice = file_value.slice(file_value.lastIndexOf(".") + 1).toLowerCase();
    if(file_id_slice == "jpg" || file_id_slice == "png" || file_id_slice == "jpeg") {
        file_name.val(file_value);
    }
    else {
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : jpg, jpeg, png');
        file_id.val('');
        return;
        
    }
}

$(function() {
    var evaluation_count = $("#evaluation_count").val();
    
    $(".form-group-box .add").click(function () {
         var eval_clone = $(".eval_clone").html();
         eval_clone = eval_clone.replace(/currentBox/g,'currentBox'+evaluation_count);
         eval_clone = eval_clone.replace(/eval_item/g,'eval_item'+evaluation_count);
         eval_clone = eval_clone.replace(/eval_score/g,'eval_score'+evaluation_count);
         eval_clone = eval_clone.replace(/rowDelete\(/g,'rowDelete('+evaluation_count);
         $(".form-group-wrap").append(eval_clone);
         evaluation_count++;
         $("#evaluation_count").val(evaluation_count);

         var box_len = $(".form-group-wrap .form-group-box").length;
         if(box_len > 3) {
             $(this).css('visibility','hidden');
         }
    });
});

function rowDelete(obj) {
    $("#currentBox"+obj).remove();

    var box_len = $(".form-group-wrap .form-group-box").length;
    if(box_len < 4) {
        $(".form-group-box .add").css('visibility','visible');
    }
}

function add_equipment() {
    var boxSize = $(".form-group-wrap .form-group-box");

    var item_group ='';
    
    for(var i=0; i<boxSize.size();i++){
        if(boxSize.eq(i).find('input.evaluation_items').val().length > 0 && boxSize.eq(i).find('input.evaluation_scroes').val().length > 0) {
            item_group += boxSize.eq(i).find('input').eq(0).val();
            item_group += '/'+boxSize.eq(i).find('input').eq(1).val()+","
        }
    }

    item_group = item_group.slice(0,item_group.length-1);
   
    $("#id_evaluation_item").val(item_group);
    $('form').submit();
}