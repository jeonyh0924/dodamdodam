function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file1Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const row_data = [];
    const memos = [];

    $('#table1 tbody tr').each(function () {
        const visited_at = $(this).find("[name='visited_at']").val();
        const belong = $(this).find("[name='belong']").val();
        const name = $(this).find("[name='name']").val();
        const visited_purpose = $(this).find("[name='visited_purpose']").val();
        const visited_qualification_hygiene = $(this).find("[name='visited_qualification_hygiene']").prop("checked");
        const visited_qualification_wash_hand = $(this).find("[name='visited_qualification_wash_hand']").prop("checked");
        const visited_qualification_healthy = $(this).find("[name='visited_qualification_healthy']").prop("checked");
        const manager = $(this).find("[name='manager']").val();
        const approve = $(this).find("[name='approve']").prop("checked");
        console.log(visited_qualification_healthy)
        if (visited_at || belong || visited_purpose) {
            row_data.push({
                visited_at: visited_at,
                belong: belong,
                name: name,
                visited_purpose: visited_purpose,
                visited_qualification_hygiene: visited_qualification_hygiene,
                visited_qualification_wash_hand: visited_qualification_wash_hand,
                visited_qualification_healthy: visited_qualification_healthy,
                manager: manager,
                approve: approve
            })
        }
    })
    console.log(row_data)

    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        console.log(write_at, content, feedback_content, manager, approver)
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

    data = {
        "row_data": row_data,
        "memos": memos,
    }
    $.ajax({
        url: "/haccp/api/file1/",
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
            location.href = "/haccp/file1/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}


function file1Update(file_ins_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const row_data = [];
    const memos = [];

    $('#table1 tbody tr').each(function () {
        const visited_at = $(this).find("[name='visited_at']").val();
        const belong = $(this).find("[name='belong']").val();
        const name = $(this).find("[name='name']").val();
        const visited_purpose = $(this).find("[name='visited_purpose']").val();
        const visited_qualification_hygiene = $(this).find("[name='visited_qualification_hygiene']").prop("checked");
        const visited_qualification_wash_hand = $(this).find("[name='visited_qualification_wash_hand']").prop("checked");
        const visited_qualification_healthy = $(this).find("[name='visited_qualification_healthy']").prop("checked");
        const manager = $(this).find("[name='manager']").val();
        const approve = $(this).find("[name='approve']").prop("checked");
        if (visited_at || belong || visited_purpose) {
            row_data.push({
                visited_at: visited_at,
                belong: belong,
                name: name,
                visited_purpose: visited_purpose,
                visited_qualification_hygiene: visited_qualification_hygiene,
                visited_qualification_wash_hand: visited_qualification_wash_hand,
                visited_qualification_healthy: visited_qualification_healthy,
                manager: manager,
                approve: approve
            })
        }
    })

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

    data = {
        "row_data": row_data,
        "memos": memos,
    }
    console.log(data)
    $.ajax({
        url: `/haccp/api/file1/${file_ins_pk}/`,
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
            // location.href = `/haccp/file1/${file_ins_pk}/`;
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function exportTables(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file1',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            $(".load_bg").addClass('load_display');
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file1.xlsx";
                a.download = '외부인출입기록부 (2021년)' + ".xlsx";
                a.click();
            }
        }
    });
}
