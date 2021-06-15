function file53Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];
    var cnt = 0;

    $("#table1 tbody tr").each(function () {
        const no = $(this).find("[name='no']").val() || 0;
        const result = $(this).find("[name='result']").prop('checked');
        const etc = $(this).find("[name='etc']").val();
        if (result == true) {
            cnt += 1
        }
        row_data.push({
            no: no,
            result: result,
            etc: etc,
        })
    });
    const total_checkpoint = cnt;
    const total_score = parseInt(cnt / 81 * 100);

    const author = $("input[name='author']").val();
    const company = $("input[name='company']").val();
    data['author'] = author
    data['company'] = company
    data['total_checkpoint'] = total_checkpoint
    data['total_score'] = total_score
    data['row_data'] = row_data

    $.ajax({
        url: "/haccp/api/file53/",
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
            location.href = "/haccp/file53/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file53Update(file53_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];
    var cnt = 0;

    $("#table1 tbody tr").each(function () {
        const no = $(this).find("[name='no']").val() || 0;
        const result = $(this).find("[name='result']").prop('checked');
        const etc = $(this).find("[name='etc']").val();
        if (result == true) {
            cnt += 1
        }
        row_data.push({
            no: no,
            result: result,
            etc: etc,
        })
    });
    const total_checkpoint = cnt;
    const total_score = parseInt(cnt / 81 * 100);

    const author = $("input[name='author']").val();
    const company = $("input[name='company']").val();
    data['author'] = author
    data['company'] = company
    data['total_checkpoint'] = total_checkpoint
    data['total_score'] = total_score
    data['row_data'] = row_data

    $.ajax({
        url: `/haccp/api/file53/${file53_pk}/`,
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
