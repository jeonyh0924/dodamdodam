$(document).ready(function() {
    var message = $("#message").val();
    var pk = $("#pk").val();
    if(message !=''){
        alert(message);
        location.href="/bom/transfer/shipment/detail/"+pk;
    }
    $("input[name='assign_count']").keyup(function(){
        var tableTr = $("table tbody tr"); 
        var trNum = $(this).closest('tr').prevAll().length;
        var remain_count = tableTr.eq(trNum).children().eq(6).text();
        if(parseInt(remain_count)<parseInt(this.value)){
            $(this).val(remain_count);
        }
    });
});

function shipmentCommand(){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var tfc = $("input[name='tfc']").val();
    if($("input:checkbox[name=processId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
        var shipmentList = new Array();
        for (var i = 1; i < $('#myTable tr').size(); i++) {
            var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
            var count = parseInt($('#myTable tr').eq(i).find('input[name="assign_count"]').val());
            if(chk == true){
                if(isNaN(count)){
                    alert('올바른 입력 수량을 입력해주세요.');
                    return
                }
                var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
                var shipment = {id: id, count:count};
                shipmentList.push(shipment);
           }
       }
        $.ajax({
            url: '/bom/transfer/shipment/command/',
            method: 'POST',
            data: {
                    csrfmiddlewaretoken: token,
                    menu :'piece',
                    tfc:tfc,
                    shipmentList :JSON.stringify(shipmentList)},
            dataType : 'json',
            success : function(data) {
                if(data.result =='success'){
                    alert('출하 명령 되었습니다.');
                    location.reload();
                }
            }
        });
    }
}
function transferCancel(){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var tfc = $("input[name='tfc']").val();
    if($("input:checkbox[name=processId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
        var shipmentList = new Array();
        for (var i = 1; i < $('#myTable tr').size(); i++) {
            var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
            if(chk == true){
                var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
                var shipment = {id: id};
                shipmentList.push(shipment);
           }
       }
        $.ajax({
            url: '/bom/transfer/cancel/',
            method: 'POST',
            data: {
                    csrfmiddlewaretoken: token,
                    menu :'piece',
                    tfc:tfc,
                    shipmentList :JSON.stringify(shipmentList)},
            dataType : 'json',
            success : function(data) {
                if(data.result =='success'){
                    alert('이송 취소 되었습니다.');
                    if(data.reload=='on'){
                        location.reload();
                    }else{
                        if($("#id_type").val()=='EX_MANAGER'){
                            location.href = '/shipment/list'
                        }else{

                            location.href ='/bom/transfer/shipment/wait/'
                        }
                    }
                }
            }
        });
    }
}
function shipmentCancel(){
    if($("input:checkbox[name=processId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
        $("form").attr("action", "/bom/transfer/shipment/cancel/");
        $("form").submit();
    }
}