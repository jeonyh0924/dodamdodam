$(function () {
    $('#table1 tbody tr').each(function () {
        const product_type = $(this).find("[name='product_type']").data("type");

        $(this).find("[name='product_type'] option").each(function () {
            if ($(this).val() == product_type) {
                $(this).attr("selected", "selected");
            }
        })
    })

})

function manufacture_update(partial_unit_lst) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const partial_lst = [];

    $('#table1 tbody tr').each(function () {
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const unit = $(this).find("[name='product_type']").val();
        const is_completion = $(this).find("[name='is_completion']").prop("checked");

        partial_lst.push({
            quantity: quantity,
            unit: unit,
            is_completion: is_completion,

        })
    })
    const manufacture_id = $("input[name='id']").val();
    const cancel_reason = $("input[name='cancel_reason']").val();
    const due = $("input[name='due']").val();

    data = {
        "cancel_reason": cancel_reason,
        "due": due,
        "partial": partial_lst,
    }

    $.ajax({
        url: `/manufacture/api/manufacturing/${manufacture_id}/`,
        type: "PATCH",
        contentType: 'application/json',
        data: JSON.stringify(data,),
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function delModalShow(pk) {
    $("#deleteModal").find("[name='pk']").val(pk);
    $("#deleteModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function deletePartial() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    const pk = $("#deleteModal").find("[name='pk']").val();
    console.log(pk)
    $.ajax({
        url: ``,
        type: "PATCH",
        contentType: 'application/json',
        data: JSON.stringify(data,),
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")

        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function complete() {
    $('.manufacture-complete').submit();
}

function partial_quantity_modal_show(partial_ins_pk) {
    $(".partial_quantity_modal").find("[name='partial_ins_pk']").val(partial_ins_pk);
    $(".partial_quantity_modal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function quantity_log_create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    const partial_ins_pk = $("input[name='partial_ins_pk']").val();
    const partial_quantity = $("input[name='partial_quantity']").val() || 0;
    const worker = $("input[name='worker']").val();
    let data = {};

    console.log(partial_ins_pk, partial_quantity, worker)
    data = {
        'partial_manufacture': partial_ins_pk,
        'quantity': partial_quantity,
        'worker': worker
    }

    $.ajax({
        url: `/manufacture/api/quantity-log/`,
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(data,),
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}