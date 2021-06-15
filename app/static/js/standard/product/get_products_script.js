$(document).ready(function () {
    $("#myTable tr").eq(1).children("td[data-column='4']").remove();
    // $("#myTable tr").eq(0).children('th').eq(4).attr('rowspan', '2');
    $("#myTable tr").eq(1).children("td[data-column='5']").remove();
    // $("#myTable tr").eq(0).children('th').eq(5).attr('rowspan', '2');
    $("#myTable tr").eq(1).children("td[data-column='6']").remove();
    // $("#myTable tr").eq(0).children('th').eq(6).attr('rowspan','2');

    $("#myTable-sticky tr").eq(1).children("td[data-column='4']").remove();
    // $("#myTable-sticky tr").eq(0).children('th').eq(4).attr('rowspan', '2');
    $("#myTable-sticky tr").eq(1).children("td[data-column='5']").remove();
    // $("#myTable-sticky tr").eq(0).children('th').eq(5).attr('rowspan', '2');
    $("#myTable-sticky tr").eq(1).children("td[data-column='6']").remove();
    // $("#myTable-sticky tr").eq(0).children('th').eq(6).attr('rowspan','2');
});

function delModalShow() {
    if ($("input:checkbox[name=productCheck]:checked").length == 0) return
    $("#delModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}
