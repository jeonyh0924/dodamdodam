$(document).ready(function() {

    setTimeout(() => {
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
    }, 0);
});

function delModalShow(){
    if($("input:checkbox[name=companyCheck]:checked").length==0){
        alert('체크박스를 체크해주세요.')
        return
    } 
    $("#delModal").css('display','flex').children('.delete-modal-content').animate({
        marginTop : "0"
    },400);
}

function closeDelModal(){
    $(".deleteModal").css('display','none').children('.delete-modal-content').animate({
        marginTop : "50px"
    },400);
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
    }).export('거래처 목록','xlsx')
}