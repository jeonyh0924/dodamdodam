$(document).ready(function() {
    var message = $("#message").val();
    if(message !=''){
        alert(message);
        location.href="/bom/transfer/shipment/wait/";
    }
    $("#myTable tr").eq(1).children('td').eq(0).find('input').remove();
    $("#myTable tr").eq(1).children('td').eq(0).html("<input type='checkbox' style='zoom: 2;width: 20px;cursor: pointer;' id='checkAll'>");
    
    $("#myTable-sticky tr").eq(1).children('td').eq(0).find('input').remove();
    $("#myTable-sticky tr").eq(1).children('td').eq(0).html("<input type='checkbox' style='zoom: 2;width: 20px;cursor: pointer;' id='checkAll1'>");

    $("#checkAll").on('click', function () {            //체크박스 올체크
        var tableTr = $("#myTable tbody tr");
        for(var i=0; i<tableTr.length;i++){
            if(tableTr.eq(i).hasClass("filtered") === false) {
                tableTr.eq(i).children().find('input[type="checkbox"]').prop("checked", this.checked)
            }
        }
    });
    $("#checkAll1").on('click', function () {            //체크박스 올체크
        var tableTr = $("#myTable tbody tr");
        for(var i=0; i<tableTr.length;i++){
            if(tableTr.eq(i).hasClass("filtered") === false) {
                tableTr.eq(i).children().find('input[type="checkbox"]').prop("checked", this.checked)
            }
        }
    });
});

function shipmentCommand(){
    if($("input:checkbox[name=transferId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
        $("form").submit();
    }
}
function transferCancel(){
    if($("input:checkbox[name=transferId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
        $("form").attr("action", "/bom/transfer/cancel/");
        $("form").submit();
    }
}


function exportTables() {
    new Table2Excel('#myTable, #myTable-sticky', {
        widthRatio : .1,
        plugins: [
            Table2Excel.plugins.alignmentPlugin,
            Table2Excel.plugins.autoWidthPlugin,
            {
                worksheetCompleted({ workbook, tables, worksheet, table }) {
                    worksheet.getRow(2).hidden = true
                    worksheet.getColumn(1).hidden = true
                }
            }
        ]
    }).export('BOM 이송 출하 대기 리스트','xlsx')
}
function shipmentIndividual(obj){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = obj;
    $.ajax(
        {
            url: "/bom/shipment/work/individual",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                pk: pk,
            },
            success:function(data){
                if(data.result =='success'){
                    var command_id = data.id;
                    var a = document.createElement('a');
                    a.href = '/media/' + command_id.toString()+"/"+command_id.toString()+".xlsx";
                    a.download =command_id.toString()+".xlsx";
                    a.click();

                }
            },
        }
    );
}
function ShipmentSelect(){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var shipment_list = new Array();
    for (var i = 0; i < $('#myTable tbody tr').length; i++) {
        var chk = $('#myTable tbody tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
        if(chk == true){
           var id = $('#myTable tbody tr').eq(i).children().find('input[type="checkbox"]').val();
           var shipment = {id: id};
           shipment_list.push(shipment);
        }
    }
    $.ajax(
        {
            url: "/bom/shipment/work/select",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                shipment_list :JSON.stringify(shipment_list),
            },
            success:function(data){
                if(data.result =='success'){
                    var zip_id = data.id;
                    var a = document.createElement('a');
                    a.href = '/media/shipment/' + zip_id.toString()+"/"+zip_id.toString()+".zip";
                    a.download =zip_id.toString()+".zip";
                    a.click();

                }
            },
        }
    );
}