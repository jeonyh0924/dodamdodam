$(function() {
    $("#myTable tr").eq(1).children("td[data-column='2']").remove();
    $("#myTable tr").eq(0).children('th').eq(2).attr('rowspan','2');

    $("#myTable-sticky tr").eq(1).children("td[data-column='2']").remove();
    $("#myTable-sticky tr").eq(0).children('th').eq(2).attr('rowspan','2');
});

function delModalShow(){
    if($("input:checkbox[name=workerCheck]:checked").length==0) return
    $("#delModal").css('display','flex').children('.delete-modal-content').animate({
        marginTop : "0"
    },400);
}

function closeDelModal(){
    $(".deleteModal").css('display','none').children('.delete-modal-content').animate({
        marginTop : "50px"
    },400);
}