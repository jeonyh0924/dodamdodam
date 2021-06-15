function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file19Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];
    var row_data = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            }
        } else {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col2").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            }
        } else {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            }
        } else {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            }
        } else {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });


    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5]


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
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file19/",
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
            location.href = "/haccp/file19/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file19Update(file19_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];
    var row_data = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};

    $(".col2").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            }
        } else {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col1").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            }
        } else {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            }
        } else {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            }
        } else {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });


    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5]


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
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file19/${file19_pk}/`,
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
