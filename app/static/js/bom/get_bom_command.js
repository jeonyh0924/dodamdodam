function workIndividual(obj){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = obj;
    var writer = $("#writer").val();
    $.ajax(
        {
            url: "/bom/work/individual",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                pk: pk,
                writer: writer,
            },
            success:function(data){
                if(data.result =='success'){
                    var bundle_id = data.id;
                    var a = document.createElement('a');
                    a.href = '/media/' + bundle_id.toString()+"/"+bundle_id.toString()+".xlsx";
                    a.download =bundle_id.toString()+".xlsx";
                    a.click();
                    location.reload();
                }
            },
        }
    );
}
function saveMemo(){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var memo = $("#memo").val();
    var writer = $("#writer").val();
    var pk = $("#pk").val();
    $.ajax(
        {
            url: "/bom/work/memo/save",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                pk: pk,
                memo:memo,
                writer:writer,
            },
            success:function(data){
                if(data.result =='success'){
                    alert('비고 등록되었습니다.')
                    location.reload();
                }
            },
        }
    );
}
function InstructionCancel(obj){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = obj;
    var instruction = 'off';
    $.ajax(
        {
            url: "/bom/job/bundle/instruction/save",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                pk: pk,
                instruction: instruction
            },
            success:function(data){
                if(data.result =='success'){
                    alert('지시 취소되었습니다.')
                    location.reload();
                }
            },
        }
    );
}
function InstructionSave(obj){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = obj;
    var instruction = 'on' ;
    $.ajax(
        {
            url: "/bom/job/bundle/instruction/save",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                pk: pk,
                instruction: instruction
            },
            success:function(data){
                if(data.result =='success'){
                    alert('지시 완료되었습니다.')
                    location.reload();
                }
            },
        }
    );
}
function closeModal() {
    $('.searchModal').hide();
    $('.sc_searchModal').hide();
    $('.sc_update_searchModal').hide();

};

function modalShow(obj){
    var pk = obj.split('/')[0];
    var memo = obj.split('/')[1];
    $("#memo").val(memo);
    $("#pk").val(pk);
     $("#modal").show();
}