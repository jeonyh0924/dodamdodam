function file13Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var row_data = [];
    const memos = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    let file_data6 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            } else {
                file_data1[name] = '0001-01-01'
            }
        } else {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col2").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            } else {
                file_data2[name] = '0001-01-01'
            }
        } else {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            } else {
                file_data3[name] = '0001-01-01'
            }
        } else {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            } else {
                file_data4[name] = '0001-01-01'
            }
        } else {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            } else {
                file_data5[name] = '0001-01-01'
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });
    $(".col6").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data6[name] = name_data
            } else {
                file_data6[name] = '0001-01-01'
            }
        } else {
            file_data6[name] = $(this).prop('checked');
        }
    });

    $('#table2 tbody tr').each(function () {
        var write_at = $(this).find("[name='write_at']").val();
        if (write_at == '') {
            write_at = '0001-01-01'
        }
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


    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5, file_data6]


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file13/",
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
            location.href = "/haccp/file13/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file13Update(file13_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var row_data = [];
    const memos = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    let file_data6 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            } else {
                file_data1[name] = '0001-01-01'
            }
        } else {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col2").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            } else {
                file_data2[name] = '0001-01-01'
            }
        } else {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            } else {
                file_data3[name] = '0001-01-01'
            }
        } else {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            } else {
                file_data4[name] = '0001-01-01'
            }
        } else {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            } else {
                file_data5[name] = '0001-01-01'
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });
    $(".col6").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'report_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data6[name] = name_data
            } else {
                file_data6[name] = '0001-01-01'
            }
        } else {
            file_data6[name] = $(this).prop('checked');
        }
    });

    $('#table2 tbody tr').each(function () {
        var write_at = $(this).find("[name='write_at']").val();
        if (write_at == '') {
            write_at = '0001-01-01'
        }
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


    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5, file_data6]


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file13/${file13_pk}/`,
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
