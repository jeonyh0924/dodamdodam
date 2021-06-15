function file54Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    const author = $("input[name='author']").val();
    var reporting_date = $("input[name='reporting_date']").val();
    const product_name = $("input[name='product_name']").val();
    var expiration = $("input[name='expiration']").val();

    var recall_start_date = $("input[name='recall_start_date']").val();
    var recall_complete_date = $("input[name='recall_complete_date']").val();
    const total_recall_time = $("input[name='total_recall_time']").val() || 0;

    const total_output = $("input[name='total_output']").val() || 0;
    const shipment_quantity = $("input[name='shipment_quantity']").val() || 0;

    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (expiration == '') {
        expiration = '0001-01-01'
    }
    if (recall_start_date == '') {
        recall_start_date = '0001-01-01T00:00'
    }
    if (recall_complete_date == '') {
        recall_complete_date = '0001-01-01T00:00'
    }

    const client_name_1 = $("input[name='client_name_1']").val();
    var shipment_date_1 = $("input[name='shipment_date_1']").val();
    const shipment_quantity_box_1 = $("input[name='shipment_quantity_box_1']").val() || 0;
    const shipment_quantity_kg_1 = $("input[name='shipment_quantity_kg_1']").val() || 0;
    const shipment_spot_1 = $("input[name='shipment_spot_1']").val();

    if (shipment_date_1 == '') {
        shipment_date_1 = '0001-01-01'
    }

    const client_name_2 = $("input[name='client_name_2']").val();
    var shipment_date_2 = $("input[name='shipment_date_2']").val();
    const shipment_quantity_box_2 = $("input[name='shipment_quantity_box_2']").val() || 0;
    const shipment_quantity_kg_2 = $("input[name='shipment_quantity_kg_2']").val() || 0;
    const shipment_spot_2 = $("input[name='shipment_spot_2']").val();

    if (shipment_date_2 == '') {
        shipment_date_2 = '0001-01-01'
    }

    const client_name_3 = $("input[name='client_name_3']").val();
    var shipment_date_3 = $("input[name='shipment_date_3']").val();
    const shipment_quantity_box_3 = $("input[name='shipment_quantity_box_3']").val() || 0;
    const shipment_quantity_kg_3 = $("input[name='shipment_quantity_kg_3']").val() || 0;
    const shipment_spot_3 = $("input[name='shipment_spot_3']").val();

    if (shipment_date_3 == '') {
        shipment_date_3 = '0001-01-01'
    }

    const total_recall_quantity = $("input[name='total_recall_quantity']").val() || 0;
    const total_none_recall_quantity = $("input[name='total_none_recall_quantity']").val() || 0;
    const recall_performance = $("input[name='recall_performance']").val() || 0;

    const recall_client_name_1 = $("input[name='recall_client_name_1']").val();
    const recall_quantity_pk_1 = $("input[name='recall_quantity_pk_1']").val() || 0;
    const none_recall_quantity_pk_1 = $("input[name='none_recall_quantity_pk_1']").val() || 0;

    const recall_client_name_2 = $("input[name='recall_client_name_2']").val();
    const recall_quantity_pk_2 = $("input[name='recall_quantity_pk_2']").val() || 0;
    const none_recall_quantity_pk_2 = $("input[name='none_recall_quantity_pk_2']").val() || 0;

    const recall_client_name_3 = $("input[name='recall_client_name_3']").val();
    const recall_quantity_pk_3 = $("input[name='recall_quantity_pk_3']").val() || 0;
    const none_recall_quantity_pk_3 = $("input[name='none_recall_quantity_pk_3']").val() || 0;

    const none_recall_content = $("textarea[name='none_recall_content']").val();
    const none_recall_feedback_content = $("textarea[name='none_recall_feedback_content']").val();


    data['author'] = author
    data['reporting_date'] = reporting_date

    data['product_name'] = product_name
    data['expiration'] = expiration

    data['recall_start_date'] = recall_start_date
    data['recall_complete_date'] = recall_complete_date
    data['total_recall_time'] = total_recall_time

    data['total_output'] = total_output
    data['shipment_quantity'] = shipment_quantity

    data['client_name_1'] = client_name_1
    data['shipment_date_1'] = shipment_date_1
    data['shipment_quantity_box_1'] = shipment_quantity_box_1
    data['shipment_quantity_kg_1'] = shipment_quantity_kg_1
    data['shipment_spot_1'] = shipment_spot_1

    data['client_name_2'] = client_name_2
    data['shipment_date_2'] = shipment_date_2
    data['shipment_quantity_box_2'] = shipment_quantity_box_2
    data['shipment_quantity_kg_2'] = shipment_quantity_kg_2
    data['shipment_spot_2'] = shipment_spot_2

    data['client_name_3'] = client_name_3
    data['shipment_date_3'] = shipment_date_3
    data['shipment_quantity_box_3'] = shipment_quantity_box_3
    data['shipment_quantity_kg_3'] = shipment_quantity_kg_3
    data['shipment_spot_3'] = shipment_spot_3

    data['recall_client_name_1'] = recall_client_name_1
    data['recall_quantity_pk_1'] = recall_quantity_pk_1
    data['none_recall_quantity_pk_1'] = none_recall_quantity_pk_1

    data['recall_client_name_2'] = recall_client_name_2
    data['recall_quantity_pk_2'] = recall_quantity_pk_2
    data['none_recall_quantity_pk_2'] = none_recall_quantity_pk_2

    data['recall_client_name_3'] = recall_client_name_3
    data['recall_quantity_pk_3'] = recall_quantity_pk_3
    data['none_recall_quantity_pk_3'] = none_recall_quantity_pk_3

    data['total_recall_quantity'] = total_recall_quantity
    data['total_none_recall_quantity'] = total_none_recall_quantity
    data['recall_performance'] = recall_performance

    data['none_recall_content'] = none_recall_content
    data['none_recall_feedback_content'] = none_recall_feedback_content


    console.log(data)

    $.ajax({
        url: "/haccp/api/file54/",
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
            location.href = "/haccp/file54/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file54Update(file54_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    const author = $("input[name='author']").val();
    var reporting_date = $("input[name='reporting_date']").val();
    const product_name = $("input[name='product_name']").val();

    var expiration = $("input[name='expiration']").val();
    var recall_start_date = $("input[name='recall_start_date']").val();
    var recall_complete_date = $("input[name='recall_complete_date']").val();

    const total_recall_time = $("input[name='total_recall_time']").val() || 0;

    const total_output = $("input[name='total_output']").val() || 0;
    const shipment_quantity = $("input[name='shipment_quantity']").val() || 0;

    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (expiration == '') {
        expiration = '0001-01-01'
    }
    if (recall_start_date == '') {
        recall_start_date = '0001-01-01T00:00'
    }
    if (recall_complete_date == '') {
        recall_complete_date = '0001-01-01T00:00'
    }

    const client_name_1 = $("input[name='client_name_1']").val();
    var shipment_date_1 = $("input[name='shipment_date_1']").val();
    const shipment_quantity_box_1 = $("input[name='shipment_quantity_box_1']").val() || 0;
    const shipment_quantity_kg_1 = $("input[name='shipment_quantity_kg_1']").val() || 0;
    const shipment_spot_1 = $("input[name='shipment_spot_1']").val();

    if (shipment_date_1 == '') {
        shipment_date_1 = '0001-01-01'
    }

    const client_name_2 = $("input[name='client_name_2']").val();
    var shipment_date_2 = $("input[name='shipment_date_2']").val();
    const shipment_quantity_box_2 = $("input[name='shipment_quantity_box_2']").val() || 0;
    const shipment_quantity_kg_2 = $("input[name='shipment_quantity_kg_2']").val() || 0;
    const shipment_spot_2 = $("input[name='shipment_spot_2']").val();

    if (shipment_date_2 == '') {
        shipment_date_2 = '0001-01-01'
    }

    const client_name_3 = $("input[name='client_name_3']").val();
    var shipment_date_3 = $("input[name='shipment_date_3']").val();
    const shipment_quantity_box_3 = $("input[name='shipment_quantity_box_3']").val() || 0;
    const shipment_quantity_kg_3 = $("input[name='shipment_quantity_kg_3']").val() || 0;
    const shipment_spot_3 = $("input[name='shipment_spot_3']").val();

    if (shipment_date_3 == '') {
        shipment_date_3 = '0001-01-01'
    }

    const total_recall_quantity = $("input[name='total_recall_quantity']").val() || 0;
    const total_none_recall_quantity = $("input[name='total_none_recall_quantity']").val() || 0;
    const recall_performance = $("input[name='recall_performance']").val() || 0;

    const recall_client_name_1 = $("input[name='recall_client_name_1']").val();
    const recall_quantity_pk_1 = $("input[name='recall_quantity_pk_1']").val() || 0;
    const none_recall_quantity_pk_1 = $("input[name='none_recall_quantity_pk_1']").val() || 0;

    const recall_client_name_2 = $("input[name='recall_client_name_2']").val();
    const recall_quantity_pk_2 = $("input[name='recall_quantity_pk_2']").val() || 0;
    const none_recall_quantity_pk_2 = $("input[name='none_recall_quantity_pk_2']").val() || 0;

    const recall_client_name_3 = $("input[name='recall_client_name_3']").val();
    const recall_quantity_pk_3 = $("input[name='recall_quantity_pk_3']").val() || 0;
    const none_recall_quantity_pk_3 = $("input[name='none_recall_quantity_pk_3']").val() || 0;

    const none_recall_content = $("textarea[name='none_recall_content']").val();
    const none_recall_feedback_content = $("textarea[name='none_recall_feedback_content']").val();


    data['author'] = author
    data['reporting_date'] = reporting_date

    data['product_name'] = product_name
    data['expiration'] = expiration

    data['recall_start_date'] = recall_start_date
    data['recall_complete_date'] = recall_complete_date
    data['total_recall_time'] = total_recall_time

    data['total_output'] = total_output
    data['shipment_quantity'] = shipment_quantity

    data['client_name_1'] = client_name_1
    data['shipment_date_1'] = shipment_date_1
    data['shipment_quantity_box_1'] = shipment_quantity_box_1
    data['shipment_quantity_kg_1'] = shipment_quantity_kg_1
    data['shipment_spot_1'] = shipment_spot_1

    data['client_name_2'] = client_name_2
    data['shipment_date_2'] = shipment_date_2
    data['shipment_quantity_box_2'] = shipment_quantity_box_2
    data['shipment_quantity_kg_2'] = shipment_quantity_kg_2
    data['shipment_spot_2'] = shipment_spot_2

    data['client_name_3'] = client_name_3
    data['shipment_date_3'] = shipment_date_3
    data['shipment_quantity_box_3'] = shipment_quantity_box_3
    data['shipment_quantity_kg_3'] = shipment_quantity_kg_3
    data['shipment_spot_3'] = shipment_spot_3

    data['recall_client_name_1'] = recall_client_name_1
    data['recall_quantity_pk_1'] = recall_quantity_pk_1
    data['none_recall_quantity_pk_1'] = none_recall_quantity_pk_1

    data['recall_client_name_2'] = recall_client_name_2
    data['recall_quantity_pk_2'] = recall_quantity_pk_2
    data['none_recall_quantity_pk_2'] = none_recall_quantity_pk_2

    data['recall_client_name_3'] = recall_client_name_3
    data['recall_quantity_pk_3'] = recall_quantity_pk_3
    data['none_recall_quantity_pk_3'] = none_recall_quantity_pk_3

    data['total_recall_quantity'] = total_recall_quantity
    data['total_none_recall_quantity'] = total_none_recall_quantity
    data['recall_performance'] = recall_performance

    data['none_recall_content'] = none_recall_content
    data['none_recall_feedback_content'] = none_recall_feedback_content


    console.log(data)

    $.ajax({
        url: `/haccp/api/file54/${file54_pk}/`,
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
