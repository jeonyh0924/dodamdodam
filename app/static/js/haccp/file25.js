function file25Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];

    $("#table1 tbody tr").each(function () {
        var in_warehouse_date = $(this).find("[name='in_warehouse_date']").val();
        const transport_vehicle_status = $(this).find("[name='transport_vehicle_status']").prop("checked")
        const vehicle_temp = $(this).find("[name='vehicle_temp']").val() || 0;
        const in_warehouse_spot = $(this).find("[name='in_warehouse_spot']").val();
        const product_name = $(this).find("[name='product_name']").val();
        const in_warehouse_quantity = $(this).find("[name='in_warehouse_quantity']").val() || 0;
        var expiration = $(this).find("[name='expiration']").val();
        const deep_part_temp = $(this).find("[name='deep_part_temp']").val() || 0;
        const color = $(this).find("[name='color']").prop('checked');
        const foreign_packing = $(this).find("[name='foreign_packing']").prop('checked');
        const check_subject = $(this).find("[name='check_subject']").prop('checked');

        if (in_warehouse_date == '') {
            in_warehouse_date = '0001-01-01'
        }
        if (expiration == '') {
            expiration = '0001-01-01'
        }


        row_data.push({
            in_warehouse_date: in_warehouse_date,
            transport_vehicle_status: transport_vehicle_status,
            vehicle_temp: vehicle_temp,
            in_warehouse_spot: in_warehouse_spot,
            product_name: product_name,
            in_warehouse_quantity: in_warehouse_quantity,
            expiration: expiration,
            deep_part_temp: deep_part_temp,
            color: color,
            foreign_packing: foreign_packing,
            check_subject: check_subject,
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

        memos.push({
            write_at: write_at,
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver,
        })
    })


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file25/",
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
            location.href = "/haccp/file25/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file25Update(file25_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];

    $("#table1 tbody tr").each(function () {
        var in_warehouse_date = $(this).find("[name='in_warehouse_date']").val();
        const transport_vehicle_status = $(this).find("[name='transport_vehicle_status']").prop("checked")
        const vehicle_temp = $(this).find("[name='vehicle_temp']").val() || 0;
        const in_warehouse_spot = $(this).find("[name='in_warehouse_spot']").val();
        const product_name = $(this).find("[name='product_name']").val();
        const in_warehouse_quantity = $(this).find("[name='in_warehouse_quantity']").val() || 0;
        var expiration = $(this).find("[name='expiration']").val();
        const deep_part_temp = $(this).find("[name='deep_part_temp']").val() || 0;
        const color = $(this).find("[name='color']").prop('checked');
        const foreign_packing = $(this).find("[name='foreign_packing']").prop('checked');
        const check_subject = $(this).find("[name='check_subject']").prop('checked');

        if (in_warehouse_date == '') {
            in_warehouse_date = '0001-01-01'
        }
        if (expiration == '') {
            expiration = '0001-01-01'
        }


        row_data.push({
            in_warehouse_date: in_warehouse_date,
            transport_vehicle_status: transport_vehicle_status,
            vehicle_temp: vehicle_temp,
            in_warehouse_spot: in_warehouse_spot,
            product_name: product_name,
            in_warehouse_quantity: in_warehouse_quantity,
            expiration: expiration,
            deep_part_temp: deep_part_temp,
            color: color,
            foreign_packing: foreign_packing,
            check_subject: check_subject,
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

        memos.push({
            write_at: write_at,
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver,
        })
    })


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file25/${file25_pk}/`,
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