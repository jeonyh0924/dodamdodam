$(document).ready(function () {
    // $("#myTable tr").eq(1).children("td[data-column='4']").remove();
    // $("#myTable tr").eq(0).children('th').eq(4).attr('rowspan', '2');
    // $("#myTable tr").eq(1).children("td[data-column='5']").remove();
    // $("#myTable tr").eq(0).children('th').eq(5).attr('rowspan', '2');
    // $("#myTable tr").eq(1).children("td[data-column='11").remove();
    // $("#myTable tr").eq(0).children('th').eq(10).attr('rowspan', '2');

    // $("#myTable-sticky tr").eq(1).children("td[data-column='4']").remove();
    // $("#myTable-sticky tr").eq(0).children('th').eq(4).attr('rowspan', '2');
    // $("#myTable-sticky tr").eq(1).children("td[data-column='5']").remove();
    // $("#myTable-sticky tr").eq(0).children('th').eq(5).attr('rowspan', '2');
    // $("#myTable-sticky tr").eq(1).children("td[data-column='6']").remove();
    // $("#myTable-sticky tr").eq(0).children('th').eq(6).attr('rowspan','2');
});

function delModalShow() {
    if ($("input:checkbox[name=orderCheck]:checked").length == 0) return
    $("#delModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}

function completeModalShow() {
    if ($("input:checkbox[name=orderCheck]:checked").length == 0) return
    $("#completeModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function cancelModalShow() {
    if ($("input:checkbox[name=orderCheck]:checked").length == 0) return
    $("#cancelModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function completeOrder(type) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let order_pk_lst = [];
    for (var i = 2; i < $('#myTable tr').length; i++) {
        var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').prop('checked');
        if (chk == true) {
            var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
            order_pk_lst.push(id);
        }
    }

    data['order_pk_lst'] = order_pk_lst
    $.ajax(
        {
            url: "/sales/api/order/complete/",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function (xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", token);
                    $(".load_bg").addClass('load_display');
                }
            },
            success: function (response) {
                alert("요청이 수락되었습니다.")
                location.href = "/sales/order/";
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        }
    );
}

function cancelOrder(type) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let order_pk_lst = [];
    for (var i = 2; i < $('#myTable tr').length; i++) {
        var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').prop('checked');
        if (chk == true) {
            var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
            order_pk_lst.push(id);
        }
    }
    const cancel_reason = $('input[name="cancel_reason"]').val();
    data['order_pk_lst'] = order_pk_lst
    data['cancel_reason'] = cancel_reason
    $.ajax(
        {
            url: "/sales/api/order/cancel/",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function (xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", token);
                    $(".load_bg").addClass('load_display');
                }
            },
            success: function (response) {
                alert("요청이 수락되었습니다.")
                location.href = "/sales/order/";
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        }
    );
}