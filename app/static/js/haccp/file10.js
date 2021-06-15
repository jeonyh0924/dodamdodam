function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file10Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();

    const tank_1 = $("input[name='tank_1']").prop('checked');
    const tank_2 = $("input[name='tank_2']").prop('checked');
    const tank_3 = $("input[name='tank_3']").prop('checked');
    const tank_4 = $("input[name='tank_4']").prop('checked');
    const tank_5 = $("input[name='tank_5']").prop('checked');

    const well_1 = $("input[name='well_1']").prop('checked');
    const well_2 = $("input[name='well_2']").prop('checked');
    const well_3 = $("input[name='well_3']").prop('checked');
    const well_4 = $("input[name='well_4']").prop('checked');

    const cleaning_1 = $("input[name='cleaning_1']").prop('checked');
    const cleaning_2 = $("input[name='cleaning_2']").prop('checked');
    const cleaning_3 = $("input[name='cleaning_3']").prop('checked');
    const cleaning_4 = $("input[name='cleaning_4']").prop('checked');
    const cleaning_5 = $("input[name='cleaning_5']").prop('checked');
    const cleaning_6 = $("input[name='cleaning_6']").prop('checked');
    const cleaning_7 = $("input[name='cleaning_7']").prop('checked');

    data['author'] = author;
    data['reporting_date'] = reporting_date;
    data['tank_1'] = tank_1;
    data['tank_2'] = tank_2;
    data['tank_3'] = tank_3;
    data['tank_4'] = tank_4;
    data['tank_5'] = tank_5;

    data['well_1'] = well_1;
    data['well_2'] = well_2;
    data['well_3'] = well_3;
    data['well_4'] = well_4;

    data['cleaning_1'] = cleaning_1;
    data['cleaning_2'] = cleaning_2;
    data['cleaning_3'] = cleaning_3;
    data['cleaning_4'] = cleaning_4;
    data['cleaning_5'] = cleaning_5;
    data['cleaning_6'] = cleaning_6;
    data['cleaning_7'] = cleaning_7;


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
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file10/",
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
            location.href = "/haccp/file10/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function file10Update(file10_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();

    const tank_1 = $("input[name='tank_1']").prop('checked');
    const tank_2 = $("input[name='tank_2']").prop('checked');
    const tank_3 = $("input[name='tank_3']").prop('checked');
    const tank_4 = $("input[name='tank_4']").prop('checked');
    const tank_5 = $("input[name='tank_5']").prop('checked');

    const well_1 = $("input[name='well_1']").prop('checked');
    const well_2 = $("input[name='well_2']").prop('checked');
    const well_3 = $("input[name='well_3']").prop('checked');
    const well_4 = $("input[name='well_4']").prop('checked');

    const cleaning_1 = $("input[name='cleaning_1']").prop('checked');
    const cleaning_2 = $("input[name='cleaning_2']").prop('checked');
    const cleaning_3 = $("input[name='cleaning_3']").prop('checked');
    const cleaning_4 = $("input[name='cleaning_4']").prop('checked');
    const cleaning_5 = $("input[name='cleaning_5']").prop('checked');
    const cleaning_6 = $("input[name='cleaning_6']").prop('checked');
    const cleaning_7 = $("input[name='cleaning_7']").prop('checked');

    data['author'] = author;
    data['reporting_date'] = reporting_date;
    data['tank_1'] = tank_1;
    data['tank_2'] = tank_2;
    data['tank_3'] = tank_3;
    data['tank_4'] = tank_4;
    data['tank_5'] = tank_5;

    data['well_1'] = well_1;
    data['well_2'] = well_2;
    data['well_3'] = well_3;
    data['well_4'] = well_4;

    data['cleaning_1'] = cleaning_1;
    data['cleaning_2'] = cleaning_2;
    data['cleaning_3'] = cleaning_3;
    data['cleaning_4'] = cleaning_4;
    data['cleaning_5'] = cleaning_5;
    data['cleaning_6'] = cleaning_6;
    data['cleaning_7'] = cleaning_7;


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
    data['memos'] = memos


    $.ajax({
        url: `/haccp/api/file10/${file10_pk}/`,
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

function exportTables10(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file10',
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
                a.href = '/media/' + "file10.xlsx";
                a.download = ' 용수저장탱크 점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
