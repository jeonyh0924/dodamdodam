function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file5Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const memos = [];

    const author = $("input[name='author']").val();

    $(".bool_tag").each(function () {
        const name = $(this).attr("name");
        if ($(this).prop('checked')) {
            data[name] = $(this).prop('checked');
        }
    });
    $(".date_tag").each(function () {
        const name = $(this).attr("name");
        console.log(name)
        if ($(this).val()) {
            data[name] = $(this).val();
        }
    });

    $('#table2 tbody tr').each(function () {
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        if (content || feedback_content || manager || approver) {
            memos.push({
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })
    data['author'] = author;
    data['memos'] = memos;

    $.ajax({
        url: "/haccp/api/file5/",
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
            location.href = "/haccp/file5/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function file5Update(file5_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const memos = [];

    const author = $("input[name='author']").val();

    $(".bool_tag").each(function () {
        const name = $(this).attr("name");
        if ($(this).prop('checked')) {
            data[name] = $(this).prop('checked');
        }
    });
    $(".date_tag").each(function () {
        const name = $(this).attr("name");
        if ($(this).val()) {
            data[name] = $(this).val();
        }
    });

    $('#table2 tbody tr').each(function () {
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        if (content || feedback_content || manager || approver) {
            memos.push({
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })
    data['author'] = author;
    data['memos'] = memos;

    $.ajax({
        url: `/haccp/api/file5/${file5_pk}/`,
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
        }
    })
}


function exportTables5(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file5',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file5.xlsx";
                a.download = '일반위생관리 및 공정 점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
