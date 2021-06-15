function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file6Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    const lst = [];
    const memos = [];

    const author = $("input[name='author']").val();

    $(".col1").each(function () {
        const name = $(this).attr("name");
        if (name == 'work_date') {
            file_data1[name] = $(this).val();
        } else if ($(this).prop('checked')) {
            file_data1[name] = $(this).prop('checked');
        }
    });
    $(".col2").each(function () {
        const name = $(this).attr("name");
        if (name == 'work_date') {
            file_data2[name] = $(this).val();
        } else if ($(this).prop('checked')) {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        if (name == 'work_date') {
            file_data3[name] = $(this).val();
        } else if ($(this).prop('checked')) {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        if (name == 'work_date') {
            file_data4[name] = $(this).val();
        } else if ($(this).prop('checked')) {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        if (name == 'work_date') {
            file_data5[name] = $(this).val();
        } else if ($(this).prop('checked')) {
            file_data5[name] = $(this).prop('checked');
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
    data['file_data'] = [file_data1, file_data2, file_data3, file_data4, file_data5];

    $.ajax({
        url: "/haccp/api/file6/",
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
            location.href = "/haccp/file6/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file6Update(file6_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};

    const memos = [];

    const author = $("input[name='author']").val();


    const work_date = $("input[name='col1_work_date']").val();
    const personal_1_1 = $("input[name='col1_personal_1']").prop("checked");
    const personal_2_1 = $("input[name='col1_personal_2']").prop("checked");
    const personal_3_1 = $("input[name='col1_personal_3']").prop("checked");
    const personal_4_1 = $("input[name='col1_personal_4']").prop("checked");
    const personal_5_1 = $("input[name='col1_personal_5']").prop("checked");

    const ago_1_1 = $("input[name='col1_ago_1']").prop("checked");
    const ago_2_1 = $("input[name='col1_ago_2']").prop("checked");
    const ago_3_1 = $("input[name='col1_ago_3']").prop("checked");
    const ago_4_1 = $("input[name='col1_ago_4']").prop("checked");
    const ago_5_1 = $("input[name='col1_ago_5']").prop("checked");
    const ago_6_1 = $("input[name='col1_ago_6']").prop("checked");
    const ago_7_1 = $("input[name='col1_ago_7']").prop("checked");
    const ago_8_1 = $("input[name='col1_ago_8']").prop("checked");

    const progressing_1_1 = $("input[name='col1_progressing_1']").prop("checked");
    const progressing_2_1 = $("input[name='col1_progressing_2']").prop("checked");
    const progressing_3_1 = $("input[name='col1_progressing_3']").prop("checked");
    const progressing_4_1 = $("input[name='col1_progressing_4']").prop("checked");
    const progressing_5_1 = $("input[name='col1_progressing_5']").prop("checked");
    const progressing_6_1 = $("input[name='col1_progressing_6']").prop("checked");

    const after_1_1 = $("input[name='col1_after_1']").prop("checked");
    const after_2_1 = $("input[name='col1_after_2']").prop("checked");
    const after_3_1 = $("input[name='col1_after_3']").prop("checked");
    const after_4_1 = $("input[name='col1_after_4']").prop("checked");
    const after_5_1 = $("input[name='col1_after_5']").prop("checked");

    const trash_1 = $("input[name='col1_trash']").prop("checked");

    const storage_1_1 = $("input[name='col1_storage_1']").prop("checked");
    const storage_2_1 = $("input[name='col1_storage_2']").prop("checked");

    const approve_1_1 = $("input[name='col1_approve_1']").prop("checked");
    const approve_2_1 = $("input[name='col1_approve_2']").prop("checked");

    file_data1['work_date'] = work_date;
    file_data1['personal_1'] = personal_1_1;
    file_data1['personal_1'] = personal_1_1;
    file_data1['personal_2'] = personal_2_1;
    file_data1['personal_3'] = personal_3_1;
    file_data1['personal_4'] = personal_4_1;
    file_data1['personal_5'] = personal_5_1;

    file_data1['ago_1'] = ago_1_1;
    file_data1['ago_2'] = ago_2_1;
    file_data1['ago_3'] = ago_3_1;
    file_data1['ago_4'] = ago_4_1;
    file_data1['ago_5'] = ago_5_1;
    file_data1['ago_6'] = ago_6_1;
    file_data1['ago_7'] = ago_7_1;
    file_data1['ago_8'] = ago_8_1;

    file_data1['progressing_1'] = progressing_1_1;
    file_data1['progressing_2'] = progressing_2_1;
    file_data1['progressing_3'] = progressing_3_1;
    file_data1['progressing_4'] = progressing_4_1;
    file_data1['progressing_5'] = progressing_5_1;
    file_data1['progressing_6'] = progressing_6_1;

    file_data1['after_1'] = after_1_1;
    file_data1['after_2'] = after_2_1;
    file_data1['after_3'] = after_3_1;
    file_data1['after_4'] = after_4_1;
    file_data1['after_5'] = after_5_1;

    file_data1['trash'] = trash_1;
    file_data1['storage_1'] = storage_1_1;
    file_data1['storage_2'] = storage_2_1;

    file_data1['approve_1'] = approve_1_1;
    file_data1['approve_2'] = approve_2_1;


    const work_date_2 = $("input[name='col2_work_date']").val();
    const personal_1_2 = $("input[name='col2_personal_1']").prop("checked");
    const personal_2_2 = $("input[name='col2_personal_2']").prop("checked");
    const personal_3_2 = $("input[name='col2_personal_3']").prop("checked");
    const personal_4_2 = $("input[name='col2_personal_4']").prop("checked");
    const personal_5_2 = $("input[name='col2_personal_5']").prop("checked");

    const ago_1_2 = $("input[name='col2_ago_1']").prop("checked");
    const ago_2_2 = $("input[name='col2_ago_2']").prop("checked");
    const ago_3_2 = $("input[name='col2_ago_3']").prop("checked");
    const ago_4_2 = $("input[name='col2_ago_4']").prop("checked");
    const ago_5_2 = $("input[name='col2_ago_5']").prop("checked");
    const ago_6_2 = $("input[name='col2_ago_6']").prop("checked");
    const ago_7_2 = $("input[name='col2_ago_7']").prop("checked");
    const ago_8_2 = $("input[name='col2_ago_8']").prop("checked");

    const progressing_1_2 = $("input[name='col2_progressing_1']").prop("checked");
    const progressing_2_2 = $("input[name='col2_progressing_2']").prop("checked");
    const progressing_3_2 = $("input[name='col2_progressing_3']").prop("checked");
    const progressing_4_2 = $("input[name='col2_progressing_4']").prop("checked");
    const progressing_5_2 = $("input[name='col2_progressing_5']").prop("checked");
    const progressing_6_2 = $("input[name='col2_progressing_6']").prop("checked");

    const after_1_2 = $("input[name='col2_after_1']").prop("checked");
    const after_2_2 = $("input[name='col2_after_2']").prop("checked");
    const after_3_2 = $("input[name='col2_after_3']").prop("checked");
    const after_4_2 = $("input[name='col2_after_4']").prop("checked");
    const after_5_2 = $("input[name='col2_after_5']").prop("checked");

    const trash_2 = $("input[name='col2_trash']").prop("checked");

    const storage_1_2 = $("input[name='col2_storage_1']").prop("checked");
    const storage_2_2 = $("input[name='col2_storage_2']").prop("checked");

    const approve_1_2 = $("input[name='col2_approve_1']").prop("checked");
    const approve_2_2 = $("input[name='col2_approve_2']").prop("checked");

    file_data2['work_date'] = work_date_2;
    file_data2['personal_1'] = personal_1_2;
    file_data2['personal_2'] = personal_2_2;
    file_data2['personal_3'] = personal_3_2;
    file_data2['personal_4'] = personal_4_2;
    file_data2['personal_5'] = personal_5_2;

    file_data2['ago_1'] = ago_1_2;
    file_data2['ago_2'] = ago_2_2;
    file_data2['ago_3'] = ago_3_2;
    file_data2['ago_4'] = ago_4_2;
    file_data2['ago_5'] = ago_5_2;
    file_data2['ago_6'] = ago_6_2;
    file_data2['ago_7'] = ago_7_2;
    file_data2['ago_8'] = ago_8_2;

    file_data2['progressing_1'] = progressing_1_2;
    file_data2['progressing_2'] = progressing_2_2;
    file_data2['progressing_3'] = progressing_3_2;
    file_data2['progressing_4'] = progressing_4_2;
    file_data2['progressing_5'] = progressing_5_2;
    file_data2['progressing_6'] = progressing_6_2;

    file_data2['after_1'] = after_1_2;
    file_data2['after_2'] = after_2_2;
    file_data2['after_3'] = after_3_2;
    file_data2['after_4'] = after_4_2;
    file_data2['after_5'] = after_5_2;

    file_data2['trash'] = trash_2;
    file_data2['storage_1'] = storage_1_2;
    file_data2['storage_2'] = storage_2_2;

    file_data2['approve_1'] = approve_1_2;
    file_data2['approve_2'] = approve_2_2;


    const work_date_3 = $("input[name='col3_work_date']").val();
    const personal_1_3 = $("input[name='col3_personal_1']").prop("checked");
    const personal_2_3 = $("input[name='col3_personal_2']").prop("checked");
    const personal_3_3 = $("input[name='col3_personal_3']").prop("checked");
    const personal_4_3 = $("input[name='col3_personal_4']").prop("checked");
    const personal_5_3 = $("input[name='col3_personal_5']").prop("checked");

    const ago_1_3 = $("input[name='col3_ago_1']").prop("checked");
    const ago_2_3 = $("input[name='col3_ago_2']").prop("checked");
    const ago_3_3 = $("input[name='col3_ago_3']").prop("checked");
    const ago_4_3 = $("input[name='col3_ago_4']").prop("checked");
    const ago_5_3 = $("input[name='col3_ago_5']").prop("checked");
    const ago_6_3 = $("input[name='col3_ago_6']").prop("checked");
    const ago_7_3 = $("input[name='col3_ago_7']").prop("checked");
    const ago_8_3 = $("input[name='col3_ago_8']").prop("checked");

    const progressing_1_3 = $("input[name='col3_progressing_1']").prop("checked");
    const progressing_2_3 = $("input[name='col3_progressing_2']").prop("checked");
    const progressing_3_3 = $("input[name='col3_progressing_3']").prop("checked");
    const progressing_4_3 = $("input[name='col3_progressing_4']").prop("checked");
    const progressing_5_3 = $("input[name='col3_progressing_5']").prop("checked");
    const progressing_6_3 = $("input[name='col3_progressing_6']").prop("checked");

    const after_1_3 = $("input[name='col3_after_1']").prop("checked");
    const after_2_3 = $("input[name='col3_after_2']").prop("checked");
    const after_3_3 = $("input[name='col3_after_3']").prop("checked");
    const after_4_3 = $("input[name='col3_after_4']").prop("checked");
    const after_5_3 = $("input[name='col3_after_5']").prop("checked");

    const trash_3 = $("input[name='col3_trash']").prop("checked");

    const storage_1_3 = $("input[name='col3_storage_1']").prop("checked");
    const storage_2_3 = $("input[name='col3_storage_2']").prop("checked");

    const approve_1_3 = $("input[name='col3_approve_1']").prop("checked");
    const approve_2_3 = $("input[name='col3_approve_2']").prop("checked");

    file_data3['work_date'] = work_date_3;
    file_data3['personal_1'] = personal_1_3;
    file_data3['personal_2'] = personal_2_3;
    file_data3['personal_3'] = personal_3_3;
    file_data3['personal_4'] = personal_4_3;
    file_data3['personal_5'] = personal_5_3;

    file_data3['ago_1'] = ago_1_3;
    file_data3['ago_2'] = ago_2_3;
    file_data3['ago_3'] = ago_3_3;
    file_data3['ago_4'] = ago_4_3;
    file_data3['ago_5'] = ago_5_3;
    file_data3['ago_6'] = ago_6_3;
    file_data3['ago_7'] = ago_7_3;
    file_data3['ago_8'] = ago_8_3;

    file_data3['progressing_1'] = progressing_1_3;
    file_data3['progressing_2'] = progressing_2_3;
    file_data3['progressing_3'] = progressing_3_3;
    file_data3['progressing_4'] = progressing_4_3;
    file_data3['progressing_5'] = progressing_5_3;
    file_data3['progressing_6'] = progressing_6_3;

    file_data3['after_1'] = after_1_3;
    file_data3['after_2'] = after_2_3;
    file_data3['after_3'] = after_3_3;
    file_data3['after_4'] = after_4_3;
    file_data3['after_5'] = after_5_3;

    file_data3['trash'] = trash_3;
    file_data3['storage_1'] = storage_1_3;
    file_data3['storage_2'] = storage_2_3;

    file_data3['approve_1'] = approve_1_3;
    file_data3['approve_2'] = approve_2_3;


    const work_date_4 = $("input[name='col4_work_date']").val();
    const personal_1_4 = $("input[name='col4_personal_1']").prop("checked");
    const personal_2_4 = $("input[name='col4_personal_2']").prop("checked");
    const personal_3_4 = $("input[name='col4_personal_3']").prop("checked");
    const personal_4_4 = $("input[name='col4_personal_4']").prop("checked");
    const personal_5_4 = $("input[name='col4_personal_5']").prop("checked");

    const ago_1_4 = $("input[name='col4_ago_1']").prop("checked");
    const ago_2_4 = $("input[name='col4_ago_2']").prop("checked");
    const ago_3_4 = $("input[name='col4_ago_3']").prop("checked");
    const ago_4_4 = $("input[name='col4_ago_4']").prop("checked");
    const ago_5_4 = $("input[name='col4_ago_5']").prop("checked");
    const ago_6_4 = $("input[name='col4_ago_6']").prop("checked");
    const ago_7_4 = $("input[name='col4_ago_7']").prop("checked");
    const ago_8_4 = $("input[name='col4_ago_8']").prop("checked");

    const progressing_1_4 = $("input[name='col4_progressing_1']").prop("checked");
    const progressing_2_4 = $("input[name='col4_progressing_2']").prop("checked");
    const progressing_3_4 = $("input[name='col4_progressing_3']").prop("checked");
    const progressing_4_4 = $("input[name='col4_progressing_4']").prop("checked");
    const progressing_5_4 = $("input[name='col4_progressing_5']").prop("checked");
    const progressing_6_4 = $("input[name='col4_progressing_6']").prop("checked");

    const after_1_4 = $("input[name='col4_after_1']").prop("checked");
    const after_2_4 = $("input[name='col4_after_2']").prop("checked");
    const after_3_4 = $("input[name='col4_after_3']").prop("checked");
    const after_4_4 = $("input[name='col4_after_4']").prop("checked");
    const after_5_4 = $("input[name='col4_after_5']").prop("checked");

    const trash_4 = $("input[name='col4_trash']").prop("checked");

    const storage_1_4 = $("input[name='col4_storage_1']").prop("checked");
    const storage_2_4 = $("input[name='col4_storage_2']").prop("checked");

    const approve_1_4 = $("input[name='col4_approve_1']").prop("checked");
    const approve_2_4 = $("input[name='col4_approve_2']").prop("checked");

    file_data4['work_date'] = work_date_4;
    file_data4['personal_1'] = personal_1_4;
    file_data4['personal_2'] = personal_2_4;
    file_data4['personal_3'] = personal_3_4;
    file_data4['personal_4'] = personal_4_4;
    file_data4['personal_5'] = personal_5_4;

    file_data4['ago_1'] = ago_1_4;
    file_data4['ago_2'] = ago_2_4;
    file_data4['ago_3'] = ago_3_4;
    file_data4['ago_4'] = ago_4_4;
    file_data4['ago_5'] = ago_5_4;
    file_data4['ago_6'] = ago_6_4;
    file_data4['ago_7'] = ago_7_4;
    file_data4['ago_8'] = ago_8_4;

    file_data4['progressing_1'] = progressing_1_4;
    file_data4['progressing_2'] = progressing_2_4;
    file_data4['progressing_3'] = progressing_3_4;
    file_data4['progressing_4'] = progressing_4_4;
    file_data4['progressing_5'] = progressing_5_4;
    file_data4['progressing_6'] = progressing_6_4;

    file_data4['after_1'] = after_1_4;
    file_data4['after_2'] = after_2_4;
    file_data4['after_3'] = after_3_4;
    file_data4['after_4'] = after_4_4;
    file_data4['after_5'] = after_5_4;

    file_data4['trash'] = trash_4;
    file_data4['storage_1'] = storage_1_4;
    file_data4['storage_2'] = storage_2_4;

    file_data4['approve_1'] = approve_1_4;
    file_data4['approve_2'] = approve_2_4;


    const work_date_5 = $("input[name='col5_work_date']").val();
    const personal_1_5 = $("input[name='col5_personal_1']").prop("checked");
    const personal_2_5 = $("input[name='col5_personal_2']").prop("checked");
    const personal_3_5 = $("input[name='col5_personal_3']").prop("checked");
    const personal_4_5 = $("input[name='col5_personal_4']").prop("checked");
    const personal_5_5 = $("input[name='col5_personal_5']").prop("checked");

    const ago_1_5 = $("input[name='col5_ago_1']").prop("checked");
    const ago_2_5 = $("input[name='col5_ago_2']").prop("checked");
    const ago_3_5 = $("input[name='col5_ago_3']").prop("checked");
    const ago_4_5 = $("input[name='col5_ago_4']").prop("checked");
    const ago_5_5 = $("input[name='col5_ago_5']").prop("checked");
    const ago_6_5 = $("input[name='col5_ago_6']").prop("checked");
    const ago_7_5 = $("input[name='col5_ago_7']").prop("checked");
    const ago_8_5 = $("input[name='col5_ago_8']").prop("checked");

    const progressing_1_5 = $("input[name='col5_progressing_1']").prop("checked");
    const progressing_2_5 = $("input[name='col5_progressing_2']").prop("checked");
    const progressing_3_5 = $("input[name='col5_progressing_3']").prop("checked");
    const progressing_4_5 = $("input[name='col5_progressing_4']").prop("checked");
    const progressing_5_5 = $("input[name='col5_progressing_5']").prop("checked");
    const progressing_6_5 = $("input[name='col5_progressing_6']").prop("checked");

    const after_1_5 = $("input[name='col5_after_1']").prop("checked");
    const after_2_5 = $("input[name='col5_after_2']").prop("checked");
    const after_3_5 = $("input[name='col5_after_3']").prop("checked");
    const after_4_5 = $("input[name='col5_after_4']").prop("checked");
    const after_5_5 = $("input[name='col5_after_5']").prop("checked");

    const trash_5 = $("input[name='col5_trash']").prop("checked");

    const storage_1_5 = $("input[name='col5_storage_1']").prop("checked");
    const storage_2_5 = $("input[name='col5_storage_2']").prop("checked");

    const approve_1_5 = $("input[name='col5_approve_1']").prop("checked");
    const approve_2_5 = $("input[name='col5_approve_2']").prop("checked");

    file_data5['work_date'] = work_date_5;
    file_data5['personal_1'] = personal_1_5;
    file_data5['personal_2'] = personal_2_5;
    file_data5['personal_3'] = personal_3_5;
    file_data5['personal_4'] = personal_4_5;
    file_data5['personal_5'] = personal_5_5;

    file_data5['ago_1'] = ago_1_5;
    file_data5['ago_2'] = ago_2_5;
    file_data5['ago_3'] = ago_3_5;
    file_data5['ago_4'] = ago_4_5;
    file_data5['ago_5'] = ago_5_5;
    file_data5['ago_6'] = ago_6_5;
    file_data5['ago_7'] = ago_7_5;
    file_data5['ago_8'] = ago_8_5;

    file_data5['progressing_1'] = progressing_1_5;
    file_data5['progressing_2'] = progressing_2_5;
    file_data5['progressing_3'] = progressing_3_5;
    file_data5['progressing_4'] = progressing_4_5;
    file_data5['progressing_5'] = progressing_5_5;
    file_data5['progressing_6'] = progressing_6_5;

    file_data5['after_1'] = after_1_5;
    file_data5['after_2'] = after_2_5;
    file_data5['after_3'] = after_3_5;
    file_data5['after_4'] = after_4_5;
    file_data5['after_5'] = after_5_5;

    file_data5['trash'] = trash_5;
    file_data5['storage_1'] = storage_1_5;
    file_data5['storage_2'] = storage_2_5;

    file_data5['approve_1'] = approve_1_5;
    file_data5['approve_2'] = approve_2_5;


    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        if (write_at || content || feedback_content || manager || approver) {
            memos.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })
    data['author'] = author;
    data['memos'] = memos;
    data['file_data'] = [file_data1, file_data2, file_data3, file_data4, file_data5];

    console.log(data)
    $.ajax({
        url: `/haccp/api/file6/${file6_pk}/`,
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

function exportTables6(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file6',
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
                a.href = '/media/' + "file6.xlsx";
                a.download = '일일위생점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
