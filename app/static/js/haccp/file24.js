function file24Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];

    $("#table1 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        const shipment_quantity = $(this).find("[name='shipment_quantity']").val() || 0;
        var expiration = $(this).find("[name='expiration']").val();
        const destination = $(this).find("[name='destination']").val();
        var start_time = $(this).find("[name='start_time']").val();
        var finish_time = $(this).find("[name='finish_time']").val();
        const vehicle_temp_before = $(this).find("[name='vehicle_temp_before']").val() || 0;
        const vehicle_temp_after = $(this).find("[name='vehicle_temp_after']").val() || 0;
        const product_packing_status = $(this).find("[name='product_packing_status']").prop('checked');

        if (expiration == '') {
            expiration = '0001-01-01'
        }
        if (start_time == '') {
            start_time = '00:00'
        }

        if (finish_time == '') {
            finish_time = '00:00'
        }

        row_data.push({
            product_name: product_name,
            shipment_quantity: shipment_quantity,
            expiration: expiration,
            destination: destination,
            start_time: start_time,
            finish_time: finish_time,
            vehicle_temp_before: vehicle_temp_before,
            vehicle_temp_after: vehicle_temp_after,
            product_packing_status: product_packing_status,
        })
    });

    $('#table2 tbody tr').each(function () {
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        memos.push({
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver,
        })
    })


    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    const vehicle_no = $("input[name='vehicle_no']").val();
    const driver = $("input[name='driver']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['vehicle_no'] = vehicle_no
    data['driver'] = driver
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file24/",
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
            location.href = "/haccp/file24/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file24Update(file24_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];

    $("#table1 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        const shipment_quantity = $(this).find("[name='shipment_quantity']").val() || 0;
        var expiration = $(this).find("[name='expiration']").val();
        const destination = $(this).find("[name='destination']").val();
        var start_time = $(this).find("[name='start_time']").val();
        var finish_time = $(this).find("[name='finish_time']").val();
        const vehicle_temp_before = $(this).find("[name='vehicle_temp_before']").val() || 0;
            const vehicle_temp_after = $(this).find("[name='vehicle_temp_after']").val() || 0;
        const product_packing_status = $(this).find("[name='product_packing_status']").prop('checked');

        if (expiration == '') {
            expiration = '0001-01-01'
        }
        if (start_time == '') {
            start_time = '00:00'
        }

        if (finish_time == '') {
            finish_time = '00:00'
        }

        row_data.push({
            product_name: product_name,
            shipment_quantity: shipment_quantity,
            expiration: expiration,
            destination: destination,
            start_time: start_time,
            finish_time: finish_time,
            vehicle_temp_before: vehicle_temp_before,
            vehicle_temp_after: vehicle_temp_after,
            product_packing_status: product_packing_status,
        })
    });

    $('#table2 tbody tr').each(function () {
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        memos.push({
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver,
        })
    })


    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    const vehicle_no = $("input[name='vehicle_no']").val();
    const driver = $("input[name='driver']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['vehicle_no'] = vehicle_no
    data['driver'] = driver
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file24/${file24_pk}/`,
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
