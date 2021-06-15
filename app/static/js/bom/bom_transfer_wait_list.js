$(document).ready(function() {
    var message = $("#message").val();
    var menu = $("input[name='menu']").val();
    if(message !=''){
        alert(message);
        if(menu =='finished'){
            location.href="/bom/finished/transfer/wait/";
        }else{
            location.href="/bom/transfer/wait/";
        }
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
$(document).keypress(function(e) { if (e.keyCode == 13) e.preventDefault(); });

function exportTables() {
    new Table2Excel('#myTable, #myTable-sticky', {
        widthRatio : .17,
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
    }).export('BOM 이송 대기 리스트','xlsx')
}
function transferCommand(){
    if($("input:checkbox[name=transferId]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    }else{
        var due_date = $("#id_due_date").val(); 
        var manager = $("#id_manager").val(); 
        if(due_date==''){
            alert('납기일을 체크해주세요');
            return
        }
        if(manager==''){
            alert('담당자를 체크해주세요');
            return
        }
        $("form input[name='manager']").val(manager);
        $("form input[name='due_date']").val(due_date);
        $("form").submit();
    }
}


