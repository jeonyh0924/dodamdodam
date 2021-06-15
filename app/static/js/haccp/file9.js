function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file9Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];
    const desc = [];
    var row_data = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    let file_data6 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            }
        } else if ($(this).prop('checked')) {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col2").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            }
        } else if ($(this).prop('checked')) {
            file_data2[name] = $(this).prop('checked');
        }
    });
    $(".col3").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            }
        } else if ($(this).prop('checked')) {
            file_data3[name] = $(this).prop('checked');
        }
    });
    $(".col4").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            }
        } else if ($(this).prop('checked')) {
            file_data4[name] = $(this).prop('checked');
        }
    });
    $(".col5").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            }
        } else if ($(this).prop('checked')) {
            file_data5[name] = $(this).prop('checked');
        }
    });
    $(".col6").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data6[name] = name_data
            }
        } else if ($(this).prop('checked')) {
            file_data6[name] = $(this).prop('checked');
        }
    });

    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5, file_data6]


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

    $('#table3 tbody tr').each(function () {
        const title = $(this).find("[name='title']").val();
        const metal = $(this).find("[name='metal']").prop("checked");
        const hair = $(this).find("[name='hair']").prop("checked");
        const thread = $(this).find("[name='thread']").prop("checked");
        const vinyl = $(this).find("[name='vinyl']").prop("checked");
        const mold = $(this).find("[name='mold']").prop("checked");
        const wood = $(this).find("[name='wood']").prop("checked");
        const plastic = $(this).find("[name='plastic']").prop("checked");
        const bug = $(this).find("[name='bug']").prop("checked");
        const etc = $(this).find("[name='etc']").val();

        if (title || metal || hair || thread || vinyl || mold || wood || plastic || bug || etc) {
            desc.push({
                title: title,
                metal: metal,
                hair: hair,
                thread: thread,
                vinyl: vinyl,
                mold: mold,
                wood: wood,
                plastic: plastic,
                bug: bug,
                etc: etc,
            })
        }
    })

    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos
    data['desc'] = desc

    console.log(data)

    $.ajax({
        url: "/haccp/api/file9/",
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
            location.href = "/haccp/file9/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
            console.log(response.responseJSON);
        }
    })
}

function file9Update(file9_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];
    const desc = [];
    var row_data = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    let file_data6 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
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
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });
    $(".col6").each(function () {
        const name = $(this).attr("name");
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data6[name] = name_data
            }
        } else {
            file_data6[name] = $(this).prop('checked');
        }
    });
    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5, file_data6]


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

    $('#table3 tbody tr').each(function () {
        const title = $(this).find("[name='title']").val();
        const metal = $(this).find("[name='metal']").prop("checked");
        const hair = $(this).find("[name='hair']").prop("checked");
        const thread = $(this).find("[name='thread']").prop("checked");
        const vinyl = $(this).find("[name='vinyl']").prop("checked");
        const mold = $(this).find("[name='mold']").prop("checked");
        const wood = $(this).find("[name='wood']").prop("checked");
        const plastic = $(this).find("[name='plastic']").prop("checked");
        const bug = $(this).find("[name='bug']").prop("checked");
        const etc = $(this).find("[name='etc']").val();

        if (title || metal || hair || thread || vinyl || mold || wood || plastic || bug || etc) {
            desc.push({
                title: title,
                metal: metal,
                hair: hair,
                thread: thread,
                vinyl: vinyl,
                mold: mold,
                wood: wood,
                plastic: plastic,
                bug: bug,
                etc: etc,
            })
        }
    })

    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos
    data['desc'] = desc

    console.log('data', data)


    $.ajax({
        url: `/haccp/api/file9/${file9_pk}/`,
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


function exportTables9(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file9',
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
                a.href = '/media/' + "file9.xlsx";
                a.download = '이물관리점검표(    월)' + ".xlsx";
                a.click();
            }
        }
    });
}
