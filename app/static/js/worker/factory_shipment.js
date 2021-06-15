$('body').on('keydown', '#id_search_word', function (key) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    if (key.keyCode == 13) {
        const box_info_pk = $('#id_search_word').val();
        const order_pk = $('#order_pk').val();

        if (box_info_pk == '') return

        data = {
            'order_pk': order_pk,
        }
        $.ajax({
            url: `/work/api/box-info/${box_info_pk}/completion-product/`,
            method: 'PATCH',
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
                location.reload();
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        })
    }
})

function updateProduct(productInstancePK) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    data = {
        'order_id': ''
    }
    $.ajax({
        url: `/work/api/completion-product/${productInstancePK}/`,
        method: 'PATCH',
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
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function approval() {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const order_pk = $('#order_pk').val();
    data = {
        'order_pk': order_pk,
    }
    $.ajax({
        url: `/work/api/completion-product/release-approval/`,
        method: 'PATCH',
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
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}