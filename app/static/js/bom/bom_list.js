$(document).ready(function() {
    $("#myTable tr").eq(1).children('td').eq(13).find('input').remove();
    $("#myTable tr").eq(1).children('td').eq(13).html("<input type='checkbox' style='zoom: 2;width: 20px;cursor: pointer;' id='checkAll'>");
    $("#myTable tr").eq(1).children('td').eq(12).remove();
    $("#myTable tr").eq(0).children('th').eq(12).attr('rowspan','2');

    $("#myTable-sticky tr").eq(1).children('td').eq(13).find('input').remove();
    $("#myTable-sticky tr").eq(1).children('td').eq(13).html("<input type='checkbox' style='zoom: 2;width: 20px;cursor: pointer;' id='checkAll1'>");
    $("#myTable-sticky tr").eq(1).children('td').eq(12).remove();
    $("#myTable-sticky tr").eq(0).children('th').eq(12).attr('rowspan','2');
    
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
function planNumSearch(){
    var search_word = $("#id_search_word").val();
    var token = $("input[name='csrfmiddlewaretoken']").val();
    // location.href= '/bom/list/?csrfmiddlewaretoken='+token+'&search_word='+search_word;
    location.href= '/bom/list/?search_word='+search_word;
}

function bomOrder(){
    if($("input:checkbox[name=bomId]:checked").length==0) {
        alert('체크박스를 선택해주세요');
        return
    }
    var bom_list = new Array();
    var token = $("input[name='csrfmiddlewaretoken']").val();
    for (var i = 0; i < $('#myTable tbody tr').length; i++) {
        var chk = $('#myTable tbody tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
        if(chk == true){
           var command_count = $('#myTable tbody tr').eq(i).children().find('input[type="number"]').val();
           if(command_count == ''){
               alert(' 입력수량을 확인하세요.');
               return
           }
           var id = $('#myTable tbody tr').eq(i).children().find('input[type="checkbox"]').val();
           var bom = {id: id,command_count:command_count};
           bom_list.push(bom);
        }
    }
    var reqeust_date = $("input[name='reqeust_date']").val();
    if(reqeust_date==''){
        alert('완료요청일을 입력해주세요.');
        return
    }
    url = '/bom/order/'

    $.ajax({
        url: url,
        method: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            bom_list :JSON.stringify(bom_list),
            reqeust_date:reqeust_date,
        },
    }).done(function(data){
        if(data['result']=='success'){
            alert('생산지시 되었습니다.');
            location.reload();
        }
    });
    return false;
}

function exportTables() {
    new Table2Excel('#myTable, #myTable-sticky', {
        widthRatio : .17,
        plugins: [
            Table2Excel.plugins.alignmentPlugin,
            Table2Excel.plugins.autoWidthPlugin,
            {
                worksheetCompleted({ workbook, tables, worksheet, table }) {
                    worksheet.getRow(2).hidden = true
                    worksheet.getColumn(13).hidden = true
                    worksheet.getColumn(14).hidden = true
                }
            }
        ]
    }).export('도면번호별 재고 ','xlsx')
}