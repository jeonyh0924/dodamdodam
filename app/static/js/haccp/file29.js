function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


function file29Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const material_data = [];
    const memos = [];
    const material_bottom_data = [];
    const memos_bottom = [];
    console.log(token)

    $('#table1 tbody tr').each(function () {
        const name = $(this).find("[name='name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (name || delivery_produce_company || quantity) {
            material_data.push({
                name: name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
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

    $('#table3 tbody tr').each(function () {
        const name = $(this).find("[name='name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (name || delivery_produce_company || quantity) {
            material_bottom_data.push({
                name: name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
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
    const top_author = $("input[name='top_author']").val();
    const top_reporting_date = $("input[name='top_reporting_date']").val();
    const bottom_author = $("input[name='bottom_author']").val();
    const bottom_reporting_date = $("input[name='bottom_reporting_date']").val();

    data = {
        "top_author": top_author,
        "top_reporting_date": top_reporting_date,
        "bottom_author": bottom_author,
        "bottom_reporting_date": bottom_reporting_date,
        "row_data": material_data,
        "memos": memos,
        "row_data_bottom": material_bottom_data,
        "memos_bottom": memos_bottom
    }
    console.log(data)
    $.ajax({
        url: "/haccp/api/file29/",
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
            location.href = "/haccp/file29/";
        },
        error: function (response) {
            // alert(response.status);
            console.log(response.responseText);
        }
    })
}


function file29Update(checklist_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const material_data = [];
    const memos = [];
    const material_bottom_data = [];
    const memos_bottom = [];

    $('#table1 tbody tr').each(function () {
        const name = $(this).find("[name='name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        // const checked_list = [];
        //
        // $(this).find("[name='check']").each(function () {
        //     if ($(this).prop("checked")) {
        //         checked_list.push("True")
        //     } else {
        //         checked_list.push("False")
        //     }
        // })

        if (name || delivery_produce_company || quantity) {
            material_data.push({
                name: name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
                check_clean: check_clean
            })
        }
    })
    $('#table2 tbody tr').each(function () {
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (content || feedback_content || manager || approver) {
            memos.push({
                write_at: delivery_req_dt,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })
    console.log(memos)

    $('#table3 tbody tr').each(function () {
        const name = $(this).find("[name='name']").val();
        const delivery_produce_company = $(this).find("[name='delivery_produce_company']").val();
        const delivery_req_dt = $(this).find("[name='delivery_req_dt']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const check_grade = $(this).find("[name='check_grade']").prop("checked");
        const check_log = $(this).find("[name='check_log']").prop("checked");
        const check_packing = $(this).find("[name='check_packing']").prop("checked");
        const check_foreign = $(this).find("[name='check_foreign']").prop("checked");
        const check_clean = $(this).find("[name='check_clean']").prop("checked");

        if (name || delivery_produce_company || quantity) {
            material_bottom_data.push({
                name: name,
                delivery_produce_company: delivery_produce_company,
                due_date: delivery_req_dt,
                quantity: quantity,
                check_grade: check_grade,
                check_log: check_log,
                check_packing: check_packing,
                check_foreign: check_foreign,
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
        "material_data": material_data,
        "memos": memos,
        "material_bottom_data": material_bottom_data,
        "memos_bottom": memos_bottom
    }
    $.ajax({
        url: `/haccp/api/file29/${checklist_pk}/`,
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
            // location.href = `/haccp/file29/${checklist_pk}/`;
            location.reload();
        },
        error: function (response) {
            // alert(response.status);
            alert(response.responseJSON);
        }
    })
}


function exportTables(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file29',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            $(".load_bg").addClass('load_display');
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file29.xlsx";
                a.download = '원료/부원료 입고검수점검표- 공용' + ".xlsx";
                a.click();
            }
        }
    });
}
