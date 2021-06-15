$(function () {
    $(".table tbody tr").each(function () {
        const $td = $(this).children("td");

        $td.each(function (idx) {
            if (idx == 1 || idx == 2 || idx == 3) {
                const multiple_data = $(this).find(".multiple_data").text();
                const split_multiple_data = multiple_data.split("/");

                if (split_multiple_data.length > 1) {
                    let html = '';

                    for (let i = 0; i < split_multiple_data.length; i++) {
                        if ($(this).find(".multiple_data").data("type") == 'number') {
                            html += `<p class="p_row">${addCommas(split_multiple_data[i])}</p>`;
                        } else {
                            html += `<p class="p_row">${split_multiple_data[i]}</p>`;
                        }
                    }

                    $(this).find(".multiple_data").html(html);
                }
            }

        });
    });
});

function delModalShow() {
    if ($("input:checkbox[name=manufactureCheck]:checked").length == 0) return
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
    if ($("input:checkbox[name=manufactureCheck]:checked").length == 0) return
    $("#completeModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function cancelModalShow() {
    if ($("input:checkbox[name=manufactureCheck]:checked").length == 0) return
    $("#cancelModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function completeManufacturing(type) {
    console.log(type)
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let manufacture_pk_lst = [];
    for (var i = 2; i < $('#myTable tr').length; i++) {
        var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').prop('checked');
        if (chk == true) {
            var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
            manufacture_pk_lst.push(id);
        }
    }

    data['manufacturing_pk_lst'] = manufacture_pk_lst
    console.log(manufacture_pk_lst);
    $.ajax(
        {
            url: "/manufacture/api/manufacturing/complete/",
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
                location.href = "/manufacture/";
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        }
    );
}

function cancelManufacturing(type) {
    console.log(type)
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let manufacture_pk_lst = [];
    for (var i = 2; i < $('#myTable tr').length; i++) {
        var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').prop('checked');
        if (chk == true) {
            var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
            manufacture_pk_lst.push(id);
        }
    }
    const cancel_reason = $('input[name="cancel_reason"]').val();
    console.log('cancel_reason', cancel_reason)
    data['manufacture_pk_lst'] = manufacture_pk_lst
    data['cancel_reason'] = cancel_reason
    console.log(manufacture_pk_lst);
    $.ajax(
        {
            url: "/manufacture/api/manufacturing/cancel/",
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
                location.href = "/manufacture/";
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        }
    );
}