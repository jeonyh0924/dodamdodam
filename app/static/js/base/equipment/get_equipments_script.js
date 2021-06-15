$(document).ready(function(){
    /* 설비 평가 점수 평균값 출력 */
    $(".listView table tr td span.avg").each(function() {
        var avg;
        var sum = 0;
        var eval_data = $(this).text();

        eval_data = eval_data.split(',');
        
        for(var i=0; i<eval_data.length; i++) {
            var all_score = eval_data[i].split('/'); 
            sum += Number(all_score[1]);
        }

        avg = addCommas(parseFloat((sum / (eval_data.length)).toFixed(1)));

        $(this).text(avg);
    });

    setTimeout(() => {
        $("#myTable tr").eq(1).children("td[data-column='5']").remove();
        $("#myTable tr").eq(0).children('th').eq(5).attr('rowspan','2');

        $("#myTable-sticky tr").eq(1).children("td[data-column='5']").remove();
        $("#myTable-sticky tr").eq(0).children('th').eq(5).attr('rowspan','2');
    },0);
});

function delModalShow(){
    if($("input:checkbox[name=equipmentCheck]:checked").length==0) return
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
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var id = moment().format("YYMMDD_hhmmss");
    var date = moment().format("YYYY-MM-DD");

    $.ajax({
        url: "/base/equipment/export-equipment-list/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            id : id,
            date : date
        },
        success:function(data) {
            if(data.result =='success'){
                var id = data.id;
                var a = document.createElement('a');
                a.href = '/base/media/equipment/list/' + id.toString() + ".xlsx";
                a.download = id.toString() + "_설비목록.xlsx";
                a.click();
            }
        }
    });
}