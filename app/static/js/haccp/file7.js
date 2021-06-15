function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file7Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];
    var row_data = [];

    let row_1 = {};
    let row_2 = {};
    let row_3 = {};
    let row_4 = {};
    let row_5 = {};
    let row_6 = {};

    const reporting_date_ago = $("input[name='reporting_date_ago']").val();
    const reporting_date_after = $("input[name='reporting_date_after']").val();
    const good = $("input[name='good']").prop('checked');
    const bad = $("input[name='bad']").prop('checked');

    data['reporting_date_ago'] = reporting_date_ago
    data['reporting_date_after'] = reporting_date_after
    data['good'] = good
    data['bad'] = bad

    const hygiene_1_1 = $("input[name='hygiene_1_1']").prop('checked');
    const hygiene_1_2 = $("input[name='hygiene_1_2']").prop('checked');
    const hygiene_1_3 = $("input[name='hygiene_1_3']").prop('checked');
    const hygiene_1_4 = $("input[name='hygiene_1_4']").prop('checked');
    const hygiene_1_5 = $("input[name='hygiene_1_5']").prop('checked');
    const hygiene_1_6 = $("input[name='hygiene_1_6']").prop('checked');

    const hygiene_2_1 = $("input[name='hygiene_2_1']").prop('checked');
    const hygiene_2_2 = $("input[name='hygiene_2_2']").prop('checked');
    const hygiene_2_3 = $("input[name='hygiene_2_3']").prop('checked');
    const hygiene_2_4 = $("input[name='hygiene_2_4']").prop('checked');
    const hygiene_2_5 = $("input[name='hygiene_2_5']").prop('checked');
    const hygiene_2_6 = $("input[name='hygiene_2_6']").prop('checked');

    const hygiene_3_1 = $("input[name='hygiene_3_1']").prop('checked');
    const hygiene_3_2 = $("input[name='hygiene_3_2']").prop('checked');
    const hygiene_3_3 = $("input[name='hygiene_3_3']").prop('checked');
    const hygiene_3_4 = $("input[name='hygiene_3_4']").prop('checked');
    const hygiene_3_5 = $("input[name='hygiene_3_5']").prop('checked');
    const hygiene_3_6 = $("input[name='hygiene_3_6']").prop('checked');

    const hygiene_4_1 = $("input[name='hygiene_4_1']").prop('checked');
    const hygiene_4_2 = $("input[name='hygiene_4_2']").prop('checked');
    const hygiene_4_3 = $("input[name='hygiene_4_3']").prop('checked');
    const hygiene_4_4 = $("input[name='hygiene_4_4']").prop('checked');
    const hygiene_4_5 = $("input[name='hygiene_4_5']").prop('checked');
    const hygiene_4_6 = $("input[name='hygiene_4_6']").prop('checked');

    const health_1_1 = $("input[name='health_1_1']").prop('checked');
    const health_1_2 = $("input[name='health_1_2']").prop('checked');
    const health_1_3 = $("input[name='health_1_3']").prop('checked');
    const health_1_4 = $("input[name='health_1_4']").prop('checked');
    const health_1_5 = $("input[name='health_1_5']").prop('checked');
    const health_1_6 = $("input[name='health_1_6']").prop('checked');

    const health_2_1 = $("input[name='health_2_1']").prop('checked');
    const health_2_2 = $("input[name='health_2_2']").prop('checked');
    const health_2_3 = $("input[name='health_2_3']").prop('checked');
    const health_2_4 = $("input[name='health_2_4']").prop('checked');
    const health_2_5 = $("input[name='health_2_5']").prop('checked');
    const health_2_6 = $("input[name='health_2_6']").prop('checked');

    const access_1_1 = $("input[name='access_1_1']").prop('checked');
    const access_1_2 = $("input[name='access_1_2']").prop('checked');
    const access_1_3 = $("input[name='access_1_3']").prop('checked');
    const access_1_4 = $("input[name='access_1_4']").prop('checked');
    const access_1_5 = $("input[name='access_1_5']").prop('checked');
    const access_1_6 = $("input[name='access_1_6']").prop('checked');

    const access_2_1 = $("input[name='access_2_1']").prop('checked');
    const access_2_2 = $("input[name='access_2_2']").prop('checked');
    const access_2_3 = $("input[name='access_2_3']").prop('checked');
    const access_2_4 = $("input[name='access_2_4']").prop('checked');
    const access_2_5 = $("input[name='access_2_5']").prop('checked');
    const access_2_6 = $("input[name='access_2_6']").prop('checked');

    const access_3_1 = $("input[name='access_3_1']").prop('checked');
    const access_3_2 = $("input[name='access_3_2']").prop('checked');
    const access_3_3 = $("input[name='access_3_3']").prop('checked');
    const access_3_4 = $("input[name='access_3_4']").prop('checked');
    const access_3_5 = $("input[name='access_3_5']").prop('checked');
    const access_3_6 = $("input[name='access_3_6']").prop('checked');

    const access_4_1 = $("input[name='access_4_1']").prop('checked');
    const access_4_2 = $("input[name='access_4_2']").prop('checked');
    const access_4_3 = $("input[name='access_4_3']").prop('checked');
    const access_4_4 = $("input[name='access_4_4']").prop('checked');
    const access_4_5 = $("input[name='access_4_5']").prop('checked');
    const access_4_6 = $("input[name='access_4_6']").prop('checked');

    const write_1 = $("input[name='write_1']").prop('checked');
    const write_2 = $("input[name='write_2']").prop('checked');
    const write_3 = $("input[name='write_3']").prop('checked');
    const write_4 = $("input[name='write_4']").prop('checked');
    const write_5 = $("input[name='write_5']").prop('checked');
    const write_6 = $("input[name='write_6']").prop('checked');

    const approve_1 = $("input[name='approve_1']").prop('checked');
    const approve_2 = $("input[name='approve_2']").prop('checked');
    const approve_3 = $("input[name='approve_3']").prop('checked');
    const approve_4 = $("input[name='approve_4']").prop('checked');
    const approve_5 = $("input[name='approve_5']").prop('checked');
    const approve_6 = $("input[name='approve_6']").prop('checked');

    row_1['hygiene_1'] = hygiene_1_1
    row_1['hygiene_2'] = hygiene_2_1
    row_1['hygiene_3'] = hygiene_3_1
    row_1['hygiene_4'] = hygiene_4_1

    row_1['health_1'] = health_1_1
    row_1['health_2'] = health_2_1

    row_1['access_1'] = access_1_1
    row_1['access_2'] = access_2_1
    row_1['access_3'] = access_3_1
    row_1['access_4'] = access_4_1

    row_1['write'] = write_1
    row_1['approve'] = approve_1
    //
    row_2['hygiene_1'] = hygiene_1_2
    row_2['hygiene_2'] = hygiene_2_2
    row_2['hygiene_3'] = hygiene_3_2
    row_2['hygiene_4'] = hygiene_4_2

    row_2['health_1'] = health_1_2
    row_2['health_2'] = health_2_2

    row_2['access_1'] = access_1_2
    row_2['access_2'] = access_2_2
    row_2['access_3'] = access_3_2
    row_2['access_4'] = access_4_2

    row_2['write'] = write_2
    row_2['approve'] = approve_2
    //
    row_3['hygiene_1'] = hygiene_1_3
    row_3['hygiene_2'] = hygiene_2_3
    row_3['hygiene_3'] = hygiene_3_3
    row_3['hygiene_4'] = hygiene_4_3

    row_3['health_1'] = health_1_3
    row_3['health_2'] = health_2_3

    row_3['access_1'] = access_1_3
    row_3['access_2'] = access_2_3
    row_3['access_3'] = access_3_3
    row_3['access_4'] = access_4_3

    row_3['write'] = write_3
    row_3['approve'] = approve_3
    //
    row_4['hygiene_1'] = hygiene_1_4
    row_4['hygiene_2'] = hygiene_2_4
    row_4['hygiene_3'] = hygiene_3_4
    row_4['hygiene_4'] = hygiene_4_4

    row_4['health_1'] = health_1_4
    row_4['health_2'] = health_2_4

    row_4['access_1'] = access_1_4
    row_4['access_2'] = access_2_4
    row_4['access_3'] = access_3_4
    row_4['access_4'] = access_4_4

    row_4['write'] = write_4
    row_4['approve'] = approve_4
    //
    row_5['hygiene_1'] = hygiene_1_5
    row_5['hygiene_2'] = hygiene_2_5
    row_5['hygiene_3'] = hygiene_3_5
    row_5['hygiene_4'] = hygiene_4_5

    row_5['health_1'] = health_1_5
    row_5['health_2'] = health_2_5

    row_5['access_1'] = access_1_5
    row_5['access_2'] = access_2_5
    row_5['access_3'] = access_3_5
    row_5['access_4'] = access_4_5

    row_5['write'] = write_5
    row_5['approve'] = approve_5
    //
    row_6['hygiene_1'] = hygiene_1_6
    row_6['hygiene_2'] = hygiene_2_6
    row_6['hygiene_3'] = hygiene_3_6
    row_6['hygiene_4'] = hygiene_4_6

    row_6['health_1'] = health_1_6
    row_6['health_2'] = health_2_6

    row_6['access_1'] = access_1_6
    row_6['access_2'] = access_2_6
    row_6['access_3'] = access_3_6
    row_6['access_4'] = access_4_6

    row_6['write'] = write_6
    row_6['approve'] = approve_6

    row_data = [row_1, row_2, row_3, row_4, row_5, row_6]

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

    data['row_data'] = row_data
    data['memos'] = memos


    $.ajax({
        url: "/haccp/api/file7/",
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
            location.href = "/haccp/file7/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
            console.log(response.responseJSON);
        }
    })
}

function file7Update(file7_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];
    var row_data = [];

    let row_1 = {};
    let row_2 = {};
    let row_3 = {};
    let row_4 = {};
    let row_5 = {};
    let row_6 = {};

    const reporting_date_ago = $("input[name='reporting_date_ago']").val();
    const reporting_date_after = $("input[name='reporting_date_after']").val();
    const good = $("input[name='good']").prop('checked');
    const bad = $("input[name='bad']").prop('checked');

    data['reporting_date_ago'] = reporting_date_ago
    data['reporting_date_after'] = reporting_date_after
    data['good'] = good
    data['bad'] = bad

    const hygiene_1_1 = $("input[name='hygiene_1_1']").prop('checked');
    const hygiene_1_2 = $("input[name='hygiene_1_2']").prop('checked');
    const hygiene_1_3 = $("input[name='hygiene_1_3']").prop('checked');
    const hygiene_1_4 = $("input[name='hygiene_1_4']").prop('checked');
    const hygiene_1_5 = $("input[name='hygiene_1_5']").prop('checked');
    const hygiene_1_6 = $("input[name='hygiene_1_6']").prop('checked');

    const hygiene_2_1 = $("input[name='hygiene_2_1']").prop('checked');
    const hygiene_2_2 = $("input[name='hygiene_2_2']").prop('checked');
    const hygiene_2_3 = $("input[name='hygiene_2_3']").prop('checked');
    const hygiene_2_4 = $("input[name='hygiene_2_4']").prop('checked');
    const hygiene_2_5 = $("input[name='hygiene_2_5']").prop('checked');
    const hygiene_2_6 = $("input[name='hygiene_2_6']").prop('checked');

    const hygiene_3_1 = $("input[name='hygiene_3_1']").prop('checked');
    const hygiene_3_2 = $("input[name='hygiene_3_2']").prop('checked');
    const hygiene_3_3 = $("input[name='hygiene_3_3']").prop('checked');
    const hygiene_3_4 = $("input[name='hygiene_3_4']").prop('checked');
    const hygiene_3_5 = $("input[name='hygiene_3_5']").prop('checked');
    const hygiene_3_6 = $("input[name='hygiene_3_6']").prop('checked');

    const hygiene_4_1 = $("input[name='hygiene_4_1']").prop('checked');
    const hygiene_4_2 = $("input[name='hygiene_4_2']").prop('checked');
    const hygiene_4_3 = $("input[name='hygiene_4_3']").prop('checked');
    const hygiene_4_4 = $("input[name='hygiene_4_4']").prop('checked');
    const hygiene_4_5 = $("input[name='hygiene_4_5']").prop('checked');
    const hygiene_4_6 = $("input[name='hygiene_4_6']").prop('checked');

    const health_1_1 = $("input[name='health_1_1']").prop('checked');
    const health_1_2 = $("input[name='health_1_2']").prop('checked');
    const health_1_3 = $("input[name='health_1_3']").prop('checked');
    const health_1_4 = $("input[name='health_1_4']").prop('checked');
    const health_1_5 = $("input[name='health_1_5']").prop('checked');
    const health_1_6 = $("input[name='health_1_6']").prop('checked');

    const health_2_1 = $("input[name='health_2_1']").prop('checked');
    const health_2_2 = $("input[name='health_2_2']").prop('checked');
    const health_2_3 = $("input[name='health_2_3']").prop('checked');
    const health_2_4 = $("input[name='health_2_4']").prop('checked');
    const health_2_5 = $("input[name='health_2_5']").prop('checked');
    const health_2_6 = $("input[name='health_2_6']").prop('checked');

    const access_1_1 = $("input[name='access_1_1']").prop('checked');
    const access_1_2 = $("input[name='access_1_2']").prop('checked');
    const access_1_3 = $("input[name='access_1_3']").prop('checked');
    const access_1_4 = $("input[name='access_1_4']").prop('checked');
    const access_1_5 = $("input[name='access_1_5']").prop('checked');
    const access_1_6 = $("input[name='access_1_6']").prop('checked');

    const access_2_1 = $("input[name='access_2_1']").prop('checked');
    const access_2_2 = $("input[name='access_2_2']").prop('checked');
    const access_2_3 = $("input[name='access_2_3']").prop('checked');
    const access_2_4 = $("input[name='access_2_4']").prop('checked');
    const access_2_5 = $("input[name='access_2_5']").prop('checked');
    const access_2_6 = $("input[name='access_2_6']").prop('checked');

    const access_3_1 = $("input[name='access_3_1']").prop('checked');
    const access_3_2 = $("input[name='access_3_2']").prop('checked');
    const access_3_3 = $("input[name='access_3_3']").prop('checked');
    const access_3_4 = $("input[name='access_3_4']").prop('checked');
    const access_3_5 = $("input[name='access_3_5']").prop('checked');
    const access_3_6 = $("input[name='access_3_6']").prop('checked');

    const access_4_1 = $("input[name='access_4_1']").prop('checked');
    const access_4_2 = $("input[name='access_4_2']").prop('checked');
    const access_4_3 = $("input[name='access_4_3']").prop('checked');
    const access_4_4 = $("input[name='access_4_4']").prop('checked');
    const access_4_5 = $("input[name='access_4_5']").prop('checked');
    const access_4_6 = $("input[name='access_4_6']").prop('checked');

    const write_1 = $("input[name='write_1']").prop('checked');
    const write_2 = $("input[name='write_2']").prop('checked');
    const write_3 = $("input[name='write_3']").prop('checked');
    const write_4 = $("input[name='write_4']").prop('checked');
    const write_5 = $("input[name='write_5']").prop('checked');
    const write_6 = $("input[name='write_6']").prop('checked');

    const approve_1 = $("input[name='approve_1']").prop('checked');
    const approve_2 = $("input[name='approve_2']").prop('checked');
    const approve_3 = $("input[name='approve_3']").prop('checked');
    const approve_4 = $("input[name='approve_4']").prop('checked');
    const approve_5 = $("input[name='approve_5']").prop('checked');
    const approve_6 = $("input[name='approve_6']").prop('checked');

    row_1['hygiene_1'] = hygiene_1_1
    row_1['hygiene_2'] = hygiene_2_1
    row_1['hygiene_3'] = hygiene_3_1
    row_1['hygiene_4'] = hygiene_4_1

    row_1['health_1'] = health_1_1
    row_1['health_2'] = health_2_1

    row_1['access_1'] = access_1_1
    row_1['access_2'] = access_2_1
    row_1['access_3'] = access_3_1
    row_1['access_4'] = access_4_1

    row_1['write'] = write_1
    row_1['approve'] = approve_1
    //
    row_2['hygiene_1'] = hygiene_1_2
    row_2['hygiene_2'] = hygiene_2_2
    row_2['hygiene_3'] = hygiene_3_2
    row_2['hygiene_4'] = hygiene_4_2

    row_2['health_1'] = health_1_2
    row_2['health_2'] = health_2_2

    row_2['access_1'] = access_1_2
    row_2['access_2'] = access_2_2
    row_2['access_3'] = access_3_2
    row_2['access_4'] = access_4_2

    row_2['write'] = write_2
    row_2['approve'] = approve_2
    //
    row_3['hygiene_1'] = hygiene_1_3
    row_3['hygiene_2'] = hygiene_2_3
    row_3['hygiene_3'] = hygiene_3_3
    row_3['hygiene_4'] = hygiene_4_3

    row_3['health_1'] = health_1_3
    row_3['health_2'] = health_2_3

    row_3['access_1'] = access_1_3
    row_3['access_2'] = access_2_3
    row_3['access_3'] = access_3_3
    row_3['access_4'] = access_4_3

    row_3['write'] = write_3
    row_3['approve'] = approve_3
    //
    row_4['hygiene_1'] = hygiene_1_4
    row_4['hygiene_2'] = hygiene_2_4
    row_4['hygiene_3'] = hygiene_3_4
    row_4['hygiene_4'] = hygiene_4_4

    row_4['health_1'] = health_1_4
    row_4['health_2'] = health_2_4

    row_4['access_1'] = access_1_4
    row_4['access_2'] = access_2_4
    row_4['access_3'] = access_3_4
    row_4['access_4'] = access_4_4

    row_4['write'] = write_4
    row_4['approve'] = approve_4
    //
    row_5['hygiene_1'] = hygiene_1_5
    row_5['hygiene_2'] = hygiene_2_5
    row_5['hygiene_3'] = hygiene_3_5
    row_5['hygiene_4'] = hygiene_4_5

    row_5['health_1'] = health_1_5
    row_5['health_2'] = health_2_5

    row_5['access_1'] = access_1_5
    row_5['access_2'] = access_2_5
    row_5['access_3'] = access_3_5
    row_5['access_4'] = access_4_5

    row_5['write'] = write_5
    row_5['approve'] = approve_5
    //
    row_6['hygiene_1'] = hygiene_1_6
    row_6['hygiene_2'] = hygiene_2_6
    row_6['hygiene_3'] = hygiene_3_6
    row_6['hygiene_4'] = hygiene_4_6

    row_6['health_1'] = health_1_6
    row_6['health_2'] = health_2_6

    row_6['access_1'] = access_1_6
    row_6['access_2'] = access_2_6
    row_6['access_3'] = access_3_6
    row_6['access_4'] = access_4_6

    row_6['write'] = write_6
    row_6['approve'] = approve_6

    row_data = [row_1, row_2, row_3, row_4, row_5, row_6]

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

    data['row_data'] = row_data
    data['memos'] = memos


    $.ajax({
        url: `/haccp/api/file7/${file7_pk}/`,
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
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function exportTables7(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file7',
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
                a.href = '/media/' + "file7.xlsx";
                a.download = '작업장 개인 위생 점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
