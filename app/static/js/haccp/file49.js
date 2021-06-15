function file49Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var no = $(this).find("[name='no']").val() || 0;
        var reporting_date = $(this).find("[name='reporting_date']").val();
        const company = $(this).find("[name='company']").val();
        const tel = $(this).find("[name='tel']").val();
        const title = $(this).find("[name='title']").val();
        const expiration = $(this).find("[name='expiration']").val();
        const claim = $(this).find("[name='claim']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        var processing_date = $(this).find("[name='processing_date']").val();
        const processing_result = $(this).find("[name='processing_result']").prop('checked');
        const manager = $(this).find("[name='manager']").val();

        if (reporting_date == '') {
            reporting_date = '0001-01-01'
        }
        if (processing_date == '') {
            processing_date = '0001-01-01'
        }
        if (no == '') {
            no = '0'
        }
        row_data.push({
            no: no,
            reporting_date: reporting_date,
            company: company,
            tel: tel,
            title: title,
            expiration: expiration,
            claim: claim,
            feedback_content: feedback_content,
            processing_date: processing_date,
            processing_result: processing_result,
            manager: manager,
        })
    });
    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: "/haccp/api/file49/",
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
            location.href = "/haccp/file49/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file49Update(file49_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var no = $(this).find("[name='no']").val() || 0;
        var reporting_date = $(this).find("[name='reporting_date']").val();
        const company = $(this).find("[name='company']").val();
        const tel = $(this).find("[name='tel']").val();
        const title = $(this).find("[name='title']").val();
        const expiration = $(this).find("[name='expiration']").val();
        const claim = $(this).find("[name='claim']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        var processing_date = $(this).find("[name='processing_date']").val();
        const processing_result = $(this).find("[name='processing_result']").prop('checked');
        const manager = $(this).find("[name='manager']").val();

        if (reporting_date == '') {
            reporting_date = '0001-01-01'
        }
        if (processing_date == '') {
            processing_date = '0001-01-01'
        }
        if (no == '') {
            no = '0'
        }
        row_data.push({
            no: no,
            reporting_date: reporting_date,
            company: company,
            tel: tel,
            title: title,
            expiration: expiration,
            claim: claim,
            feedback_content: feedback_content,
            processing_date: processing_date,
            processing_result: processing_result,
            manager: manager,
        })
    });
    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: `/haccp/api/file49/${file49_pk}/`,
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
