function file17Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];


    $(".boolean").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                data[name] = name_data
            }
        } else {
            data[name] = $(this).prop('checked');
        }
    });

    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (content || feedback_content || manager || approver) {
            memos.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file17/",
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
            location.href = "/haccp/file17/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file17Update(file17_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];


    $(".boolean").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                data[name] = name_data
            }
        } else {
            data[name] = $(this).prop('checked');
        }
    });

    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (content || feedback_content || manager || approver) {
            memos.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file17/${file17_pk}/`,
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
