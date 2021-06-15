function file28Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const row_data = [];
    const memos = [];
    const row_data_bottom = [];
    const memos_bottom = [];

    const top_author = $("input[name='top_author']").val();
    const bottom_author = $("input[name='bottom_author']").val();

    const top_reporting_date = $("input[name='top_reporting_date']").val();
    const bottom_reporting_date = $("input[name='bottom_reporting_date']").val();

    const top_check_point_1 = $("input[name='top_check_point_1']").prop("checked");
    const top_check_point_2 = $("input[name='top_check_point_2']").prop("checked");
    const top_check_point_3 = $("input[name='top_check_point_3']").prop("checked");
    const top_check_point_4 = $("input[name='top_check_point_4']").prop("checked");
    const top_check_point_5 = $("input[name='top_check_point_5']").prop("checked");
    const top_check_point_6 = $("input[name='top_check_point_6']").prop("checked");

    const bottom_check_point_1 = $("input[name='bottom_check_point_1']").prop("checked");
    const bottom_check_point_2 = $("input[name='bottom_check_point_2']").prop("checked");
    const bottom_check_point_3 = $("input[name='bottom_check_point_3']").prop("checked");
    const bottom_check_point_4 = $("input[name='bottom_check_point_4']").prop("checked");
    const bottom_check_point_5 = $("input[name='bottom_check_point_5']").prop("checked");
    const bottom_check_point_6 = $("input[name='bottom_check_point_6']").prop("checked");


    $('#table1 tbody tr').each(function () {
        const row_name = $(this).find("[name='row_name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_properties = $(this).find("[name='check_properties']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (row_name || delivery_produce_company || quantity || delivery_req_dt) {
            row_data.push({
                row_name: row_name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
                check_properties: check_properties,
                check_clean: check_clean
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

    $('#table3 tbody tr').each(function () {
        const row_name = $(this).find("[name='row_name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_properties = $(this).find("[name='check_properties']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (row_name || delivery_produce_company || quantity || delivery_req_dt) {
            row_data_bottom.push({
                row_name: row_name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
                check_properties: check_properties,
                check_clean: check_clean
            })
        }
    })

    $('#table4 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (content || feedback_content || manager || approver) {
            memos_bottom.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })

    data = {
        "top_author": top_author,
        "top_reporting_date": top_reporting_date,

        "bottom_author": bottom_author,
        "bottom_reporting_date": bottom_reporting_date,

        'top_check_point_1': top_check_point_1,
        'top_check_point_2': top_check_point_2,
        'top_check_point_3': top_check_point_3,
        'top_check_point_4': top_check_point_4,
        'top_check_point_5': top_check_point_5,
        'top_check_point_6': top_check_point_6,

        'bottom_check_point_1': bottom_check_point_1,
        'bottom_check_point_2': bottom_check_point_2,
        'bottom_check_point_3': bottom_check_point_3,
        'bottom_check_point_4': bottom_check_point_4,
        'bottom_check_point_5': bottom_check_point_5,
        'bottom_check_point_6': bottom_check_point_6,

        "row_data": row_data,
        "memos": memos,
        "row_data_bottom": row_data_bottom,
        "memos_bottom": memos_bottom
    }
    $.ajax({
        url: "/haccp/api/file28/",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(data,),
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")
            location.href = "/haccp/file28/";
        },
        error: function (response) {
            alert(response.error_message);
            console.log(data.responseText);
        }
    })
}


function file28Update(file_ins_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    console.log('token', token)
    let data;

    const row_data = [];
    const row_data_bottom = [];

    const memos = [];
    const memos_bottom = [];

    const author = $("input[name='author']").val();

    const top_check_point_1 = $("input[name='top_check_point_1']").prop("checked");
    const top_check_point_2 = $("input[name='top_check_point_2']").prop("checked");
    const top_check_point_3 = $("input[name='top_check_point_3']").prop("checked");
    const top_check_point_4 = $("input[name='top_check_point_4']").prop("checked");
    const top_check_point_5 = $("input[name='top_check_point_5']").prop("checked");
    const top_check_point_6 = $("input[name='top_check_point_6']").prop("checked");

    const bottom_check_point_1 = $("input[name='bottom_check_point_1']").prop("checked");
    const bottom_check_point_2 = $("input[name='bottom_check_point_2']").prop("checked");
    const bottom_check_point_3 = $("input[name='bottom_check_point_3']").prop("checked");
    const bottom_check_point_4 = $("input[name='bottom_check_point_4']").prop("checked");
    const bottom_check_point_5 = $("input[name='bottom_check_point_5']").prop("checked");
    const bottom_check_point_6 = $("input[name='bottom_check_point_6']").prop("checked");


    $('#table1 tbody tr').each(function () {
        const row_name = $(this).find("[name='row_name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_properties = $(this).find("[name='check_properties']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (row_name || delivery_produce_company || quantity || delivery_req_dt) {
            row_data.push({
                row_name: row_name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
                check_properties: check_properties,
                check_clean: check_clean
            })
        }
    })
    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='delivery_req_dt']").val();
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
        const row_name = $(this).find("[name='row_name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_properties = $(this).find("[name='check_properties']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (row_name || delivery_produce_company || quantity || delivery_req_dt) {
            row_data_bottom.push({
                row_name: row_name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
                check_properties: check_properties,
                check_clean: check_clean
            })
        }
    })

    $('#table4 tbody tr').each(function () {
        const write_at = $(this).find("[name='delivery_req_dt']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        console.log(write_at)
        if (content || feedback_content || manager || approver) {
            memos_bottom.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })

    data = {
        "author": author,

        'top_check_point_1': top_check_point_1,
        'top_check_point_2': top_check_point_2,
        'top_check_point_3': top_check_point_3,
        'top_check_point_4': top_check_point_4,
        'top_check_point_5': top_check_point_5,
        'top_check_point_6': top_check_point_6,

        'bottom_check_point_1': bottom_check_point_1,
        'bottom_check_point_2': bottom_check_point_2,
        'bottom_check_point_3': bottom_check_point_3,
        'bottom_check_point_4': bottom_check_point_4,
        'bottom_check_point_5': bottom_check_point_5,
        'bottom_check_point_6': bottom_check_point_6,

        "row_data": row_data,
        "memos": memos,
        "row_data_bottom": row_data_bottom,
        "memos_bottom": memos_bottom,
    }

    console.log(data)
    $.ajax({
        url: `/haccp/api/file28/${file_ins_pk}/`,
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
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function exportTables28(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    console.log('token')
    console.log(token)
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file28',
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
                a.href = '/media/' + "file28.xlsx";
                a.download = '부원료 입고검수점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
