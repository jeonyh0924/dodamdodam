function file22Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];

    $("#table1 tbody tr").each(function () {
        const content = $(this).find("[name='content']").val();
        const f1_frozen_warehouse = $(this).find("[name='f1_frozen_warehouse']").prop('checked');
        const f2_frozen_warehouse = $(this).find("[name='f2_frozen_warehouse']").prop('checked');
        const f2_defrost_warehouse = $(this).find("[name='f2_defrost_warehouse']").prop('checked');
        const f2_chill_warehouse = $(this).find("[name='f2_chill_warehouse']").prop('checked');
        const f3_frozen_warehouse_1 = $(this).find("[name='f3_frozen_warehouse_1']").prop('checked');
        const f3_frozen_warehouse_2 = $(this).find("[name='f3_frozen_warehouse_2']").prop('checked');
        const f3_rapidity_frozen_warehouse = $(this).find("[name='f3_rapidity_frozen_warehouse']").prop('checked');
        const f3_cooling_warehouse = $(this).find("[name='f3_cooling_warehouse']").prop('checked');
        const f3_defrost_warehouse = $(this).find("[name='f3_defrost_warehouse']").prop('checked');
        const f3_chill_warehouse = $(this).find("[name='f3_chill_warehouse']").prop('checked');
        const f3_launch_box_frozen_warehouse = $(this).find("[name='f3_launch_box_frozen_warehouse']").prop('checked');

        row_data.push({
            content: content,
            f1_frozen_warehouse: f1_frozen_warehouse,
            f2_frozen_warehouse: f2_frozen_warehouse,
            f2_defrost_warehouse: f2_defrost_warehouse,
            f2_chill_warehouse: f2_chill_warehouse,
            f3_frozen_warehouse_1: f3_frozen_warehouse_1,
            f3_frozen_warehouse_2: f3_frozen_warehouse_2,
            f3_rapidity_frozen_warehouse: f3_rapidity_frozen_warehouse,
            f3_cooling_warehouse: f3_cooling_warehouse,
            f3_defrost_warehouse: f3_defrost_warehouse,
            f3_chill_warehouse: f3_chill_warehouse,
            f3_launch_box_frozen_warehouse: f3_launch_box_frozen_warehouse,
        })
    });

    $('#table2 tbody tr').each(function () {
        var write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (write_at == '') {
            write_at = '0001-01-01'
        }
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
    const reporting_date = $("input[name='reporting_date']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data'] = row_data
    data['memos'] = memos

    $.ajax({
        url: "/haccp/api/file22/",
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
            location.href = "/haccp/file22/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file22Update(file22_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];

    $("#table1 tbody tr").each(function () {
        const content = $(this).find("[name='content']").val();
        const f1_frozen_warehouse = $(this).find("[name='f1_frozen_warehouse']").prop('checked');
        const f2_frozen_warehouse = $(this).find("[name='f2_frozen_warehouse']").prop('checked');
        const f2_defrost_warehouse = $(this).find("[name='f2_defrost_warehouse']").prop('checked');
        const f2_chill_warehouse = $(this).find("[name='f2_chill_warehouse']").prop('checked');
        const f3_frozen_warehouse_1 = $(this).find("[name='f3_frozen_warehouse_1']").prop('checked');
        const f3_frozen_warehouse_2 = $(this).find("[name='f3_frozen_warehouse_2']").prop('checked');
        const f3_rapidity_frozen_warehouse = $(this).find("[name='f3_rapidity_frozen_warehouse']").prop('checked');
        const f3_cooling_warehouse = $(this).find("[name='f3_cooling_warehouse']").prop('checked');
        const f3_defrost_warehouse = $(this).find("[name='f3_defrost_warehouse']").prop('checked');
        const f3_chill_warehouse = $(this).find("[name='f3_chill_warehouse']").prop('checked');
        const f3_launch_box_frozen_warehouse = $(this).find("[name='f3_launch_box_frozen_warehouse']").prop('checked');

        row_data.push({
            content: content,
            f1_frozen_warehouse: f1_frozen_warehouse,
            f2_frozen_warehouse: f2_frozen_warehouse,
            f2_defrost_warehouse: f2_defrost_warehouse,
            f2_chill_warehouse: f2_chill_warehouse,
            f3_frozen_warehouse_1: f3_frozen_warehouse_1,
            f3_frozen_warehouse_2: f3_frozen_warehouse_2,
            f3_rapidity_frozen_warehouse: f3_rapidity_frozen_warehouse,
            f3_cooling_warehouse: f3_cooling_warehouse,
            f3_defrost_warehouse: f3_defrost_warehouse,
            f3_chill_warehouse: f3_chill_warehouse,
            f3_launch_box_frozen_warehouse: f3_launch_box_frozen_warehouse,
        })
    });

    $('#table2 tbody tr').each(function () {
        var write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (write_at == '') {
            write_at = '0001-01-01'
        }
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
    const reporting_date = $("input[name='reporting_date']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file22/${file22_pk}/`,
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
