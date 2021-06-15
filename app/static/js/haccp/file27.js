function file27Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];
    const row_data_bottom = [];

    const memos = [];
    const memos_bottom = [];

    const top_author = $("input[name='top_author']").val();
    const top_reporting_date = $("input[name='top_reporting_date']").val();

    const bottom_author = $("input[name='bottom_author']").val();
    const bottom_reporting_date = $("input[name='bottom_reporting_date']").val();


    $('#table1 tbody tr').each(function () {
        const warehouse = $(this).find("[name='warehouse']").val();
        const origin_row_material_name = $(this).find("[name='origin_row_material_name']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const expiration = $(this).find("[name='expiration']").val();
        const temperature = $(this).find("[name='temperature']").val() || 0;
        const extra_check_foreign_material = $(this).find("[name='extra_check_foreign_material']").prop("checked");
        const extra_check_smell = $(this).find("[name='extra_check_smell']").prop("checked");
        const extra_check_color = $(this).find("[name='extra_check_color']").prop("checked");
        const extra_check_label = $(this).find("[name='extra_check_label']").prop("checked");
        const extra_check_origin = $(this).find("[name='extra_check_origin']").prop("checked");
        const extra_check_chilled = $(this).find("[name='extra_check_chilled']").prop("checked");
        const extra_check_frozen = $(this).find("[name='extra_check_frozen']").prop("checked");
        const extra_check_clean_condition = $(this).find("[name='extra_check_clean_condition']").prop("checked");
        const extra_check_car_clean_condition = $(this).find("[name='extra_check_car_clean_condition']").prop("checked");
        if (warehouse || origin_row_material_name || quantity || expiration) {
            row_data.push({
                warehouse: warehouse,
                origin_row_material_name: origin_row_material_name,
                quantity: quantity,
                expiration: expiration,
                temperature: temperature,
                extra_check_foreign_material: extra_check_foreign_material,
                extra_check_smell: extra_check_smell,
                extra_check_color: extra_check_color,
                extra_check_label: extra_check_label,
                extra_check_origin: extra_check_origin,
                extra_check_chilled: extra_check_chilled,
                extra_check_frozen: extra_check_frozen,
                extra_check_clean_condition: extra_check_clean_condition,
                extra_check_car_clean_condition: extra_check_car_clean_condition,
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
        const warehouse = $(this).find("[name='warehouse']").val();
        const origin_row_material_name = $(this).find("[name='origin_row_material_name']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const expiration = $(this).find("[name='expiration']").val();
        const temperature = $(this).find("[name='temperature']").val();
        const extra_check_foreign_material = $(this).find("[name='extra_check_foreign_material']").prop("checked");
        const extra_check_smell = $(this).find("[name='extra_check_smell']").prop("checked");
        const extra_check_color = $(this).find("[name='extra_check_color']").prop("checked");
        const extra_check_label = $(this).find("[name='extra_check_label']").prop("checked");
        const extra_check_origin = $(this).find("[name='extra_check_origin']").prop("checked");
        const extra_check_chilled = $(this).find("[name='extra_check_chilled']").prop("checked");
        const extra_check_frozen = $(this).find("[name='extra_check_frozen']").prop("checked");
        const extra_check_clean_condition = $(this).find("[name='extra_check_clean_condition']").prop("checked");
        const extra_check_car_clean_condition = $(this).find("[name='extra_check_car_clean_condition']").prop("checked");

        if (warehouse || origin_row_material_name || quantity || expiration) {
            row_data_bottom.push({
                warehouse: warehouse,
                origin_row_material_name: origin_row_material_name,
                quantity: quantity,
                expiration: expiration,
                temperature: temperature,
                extra_check_foreign_material: extra_check_foreign_material,
                extra_check_smell: extra_check_smell,
                extra_check_color: extra_check_color,
                extra_check_label: extra_check_label,
                extra_check_origin: extra_check_origin,
                extra_check_chilled: extra_check_chilled,
                extra_check_frozen: extra_check_frozen,
                extra_check_clean_condition: extra_check_clean_condition,
                extra_check_car_clean_condition: extra_check_car_clean_condition,
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

    if (top_reporting_date != '') {
        data['top_reporting_date'] = top_reporting_date
    }
    if (bottom_reporting_date != '') {
        data['bottom_reporting_date'] = bottom_reporting_date
    }
    data['top_author'] = top_author
    data['bottom_author'] = bottom_author
    data['row_data'] = row_data
    data['row_data_bottom'] = row_data_bottom
    data['memos'] = memos
    data['memos_bottom'] = memos_bottom

    console.log(data)
    $.ajax({
        url: "/haccp/api/file27/",
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
            location.href = "/haccp/file27/";
        },
        error: function (response) {
            console.log(response.status);
            console.log(response.responseJSON);
            console.log(response.responseText);
        }
    })
}

function file27Update(file27_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];
    const row_data_bottom = [];

    const memos = [];
    const memos_bottom = [];

    const top_author = $("input[name='top_author']").val();
    const top_reporting_date = $("input[name='top_reporting_date']").val();

    const bottom_author = $("input[name='bottom_author']").val();
    const bottom_reporting_date = $("input[name='bottom_reporting_date']").val();


    $('#table1 tbody tr').each(function () {
        const warehouse = $(this).find("[name='warehouse']").val();
        const origin_row_material_name = $(this).find("[name='origin_row_material_name']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const expiration = $(this).find("[name='expiration']").val();
        const temperature = $(this).find("[name='temperature']").val() || 0;
        const extra_check_foreign_material = $(this).find("[name='extra_check_foreign_material']").prop("checked");
        const extra_check_smell = $(this).find("[name='extra_check_smell']").prop("checked");
        const extra_check_color = $(this).find("[name='extra_check_color']").prop("checked");
        const extra_check_label = $(this).find("[name='extra_check_label']").prop("checked");
        const extra_check_origin = $(this).find("[name='extra_check_origin']").prop("checked");
        const extra_check_chilled = $(this).find("[name='extra_check_chilled']").prop("checked");
        const extra_check_frozen = $(this).find("[name='extra_check_frozen']").prop("checked");
        const extra_check_clean_condition = $(this).find("[name='extra_check_clean_condition']").prop("checked");
        const extra_check_car_clean_condition = $(this).find("[name='extra_check_car_clean_condition']").prop("checked");
        if (warehouse || origin_row_material_name || quantity || expiration) {
            row_data.push({
                warehouse: warehouse,
                origin_row_material_name: origin_row_material_name,
                quantity: quantity,
                expiration: expiration,
                temperature: temperature,
                extra_check_foreign_material: extra_check_foreign_material,
                extra_check_smell: extra_check_smell,
                extra_check_color: extra_check_color,
                extra_check_label: extra_check_label,
                extra_check_origin: extra_check_origin,
                extra_check_chilled: extra_check_chilled,
                extra_check_frozen: extra_check_frozen,
                extra_check_clean_condition: extra_check_clean_condition,
                extra_check_car_clean_condition: extra_check_car_clean_condition,
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
        const warehouse = $(this).find("[name='warehouse']").val();
        const origin_row_material_name = $(this).find("[name='origin_row_material_name']").val();
        const quantity = removeComma($(this).find("[name='quantity']").val()) || 0;
        const expiration = $(this).find("[name='expiration']").val();
        const temperature = $(this).find("[name='temperature']").val();
        const extra_check_foreign_material = $(this).find("[name='extra_check_foreign_material']").prop("checked");
        const extra_check_smell = $(this).find("[name='extra_check_smell']").prop("checked");
        const extra_check_color = $(this).find("[name='extra_check_color']").prop("checked");
        const extra_check_label = $(this).find("[name='extra_check_label']").prop("checked");
        const extra_check_origin = $(this).find("[name='extra_check_origin']").prop("checked");
        const extra_check_chilled = $(this).find("[name='extra_check_chilled']").prop("checked");
        const extra_check_frozen = $(this).find("[name='extra_check_frozen']").prop("checked");
        const extra_check_clean_condition = $(this).find("[name='extra_check_clean_condition']").prop("checked");
        const extra_check_car_clean_condition = $(this).find("[name='extra_check_car_clean_condition']").prop("checked");

        if (warehouse || origin_row_material_name || quantity || expiration) {
            row_data_bottom.push({
                warehouse: warehouse,
                origin_row_material_name: origin_row_material_name,
                quantity: quantity,
                expiration: expiration,
                temperature: temperature,
                extra_check_foreign_material: extra_check_foreign_material,
                extra_check_smell: extra_check_smell,
                extra_check_color: extra_check_color,
                extra_check_label: extra_check_label,
                extra_check_origin: extra_check_origin,
                extra_check_chilled: extra_check_chilled,
                extra_check_frozen: extra_check_frozen,
                extra_check_clean_condition: extra_check_clean_condition,
                extra_check_car_clean_condition: extra_check_car_clean_condition,
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

    if (top_reporting_date != '') {
        data['top_reporting_date'] = top_reporting_date
    }
    if (bottom_reporting_date != '') {
        data['bottom_reporting_date'] = bottom_reporting_date
    }
    data['top_author'] = top_author
    data['bottom_author'] = bottom_author
    data['row_data'] = row_data
    data['row_data_bottom'] = row_data_bottom
    data['memos'] = memos
    data['memos_bottom'] = memos_bottom

    console.log(data)
    $.ajax({
        url: `/haccp/api/file27/${file27_pk}/`,
        type: "PATCH",
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
            location.reload()
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseJSON);
            console.log(response.responseText);
        }
    })
}
