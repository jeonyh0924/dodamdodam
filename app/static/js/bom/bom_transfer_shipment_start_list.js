$(document).ready(function() {
    var message = $("#message").val();
    if(message !=''){
        alert(message);
        location.href="/bom/transfer/shipment/start/";
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

function shipmentCancel(){
    if($("input:checkbox[name=transferId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
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
    }).export('BOM 이송 출하 완료 리스트','xlsx')
}