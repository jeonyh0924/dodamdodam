function file21Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var change_data = $(this).find("[name='change_data']").val();
        var next_change_data = $(this).find("[name='next_change_data']").val();
        const content = $(this).find("[name='content']").prop('checked');
        const manager = $(this).find("[name='manager']").val();

        if (change_data == '') {
            change_data = '0001-01-01'
        }
        if (next_change_data == '') {
            next_change_data = '0001-01-01'
        }

        row_data.push({
            change_data: change_data,
            next_change_data: next_change_data,
            content: content,
            manager: manager,
        })
    });

    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: "/haccp/api/file21/",
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
            location.href = "/haccp/file21/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file21Update(file21_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var change_data = $(this).find("[name='change_data']").val();
        var next_change_data = $(this).find("[name='next_change_data']").val();
        const content = $(this).find("[name='content']").prop('checked');
        const manager = $(this).find("[name='manager']").val();

        if (change_data == '') {
            change_data = '0001-01-01'
        }
        if (next_change_data == '') {
            next_change_data = '0001-01-01'
        }

        row_data.push({
            change_data: change_data,
            next_change_data: next_change_data,
            content: content,
            manager: manager,
        })
    });

    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: `/haccp/api/file21/${file21_pk}/`,
        type: "PATCH",
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
