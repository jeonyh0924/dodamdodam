function file63Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var memos = [];

    const row_data = [];
    const products = [];

    $("#table1 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var check_time = $(this).find("[name='check_time']").val();
        const fe_check = $(this).find("[name='fe_check']").prop('checked');

        const sus_check = $(this).find("[name='sus_check']").prop('checked');
        const product_check = $(this).find("[name='product_check']").prop('checked');

        const fe_plus_check = $(this).find("[name='fe_plus_check']").prop('checked');
        const sus_plus_check = $(this).find("[name='sus_plus_check']").prop('checked');

        const judgment = $(this).find("[name='judgment']").prop('checked');

        if (check_time == '') {
            check_time = '00:00'
        }
        row_data.push({
            product_name: product_name,
            check_time: check_time,
            fe_check: fe_check,
            sus_check: sus_check,
            product_check: product_check,
            fe_plus_check: fe_plus_check,
            sus_plus_check: sus_plus_check,
            judgment: judgment,

        })
    });
    $("#table2 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var expiration = $(this).find("[name='expiration']").val();
        const detection_quantity = $(this).find("[name='detection_quantity']").val() || 0;
        const etc = $(this).find("[name='etc']").val();

        if (expiration == '') {
            expiration = '0001-01-01'
        }
        products.push({
            product_name: product_name,
            expiration: expiration,
            detection_quantity: detection_quantity,
            etc: etc,
        })
    });


    const author = $("input[name='author']").val();
    var reporting_date = $("input[name='reporting_date']").val();
    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }


    const content = $("input[name='content']").val();
    const feedback_content = $("input[name='feedback_content']").val();
    const manager = $("input[name='manager']").val();
    const approver = $("input[name='approver']").val();
    memos = [
        {
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver
        }
    ]

    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data'] = row_data
    data['products'] = products
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file63/",
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
            location.href = "/haccp/file63/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file63Update(file63_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var memos = [];

    const row_data = [];
    const products = [];

    $("#table1 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var check_time = $(this).find("[name='check_time']").val();
        const fe_check = $(this).find("[name='fe_check']").prop('checked');

        const sus_check = $(this).find("[name='sus_check']").prop('checked');
        const product_check = $(this).find("[name='product_check']").prop('checked');

        const fe_plus_check = $(this).find("[name='fe_plus_check']").prop('checked');
        const sus_plus_check = $(this).find("[name='sus_plus_check']").prop('checked');

        const judgment = $(this).find("[name='judgment']").prop('checked');

        if (check_time == '') {
            check_time = '00:00'
        }
        row_data.push({
            product_name: product_name,
            check_time: check_time,
            fe_check: fe_check,
            sus_check: sus_check,
            product_check: product_check,
            fe_plus_check: fe_plus_check,
            sus_plus_check: sus_plus_check,
            judgment: judgment,

        })
    });
    $("#table2 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var expiration = $(this).find("[name='expiration']").val();
        const detection_quantity = $(this).find("[name='detection_quantity']").val() || 0;
        const etc = $(this).find("[name='etc']").val();

        if (expiration == '') {
            expiration = '0001-01-01'
        }
        products.push({
            product_name: product_name,
            expiration: expiration,
            detection_quantity: detection_quantity,
            etc: etc,
        })
    });


    const author = $("input[name='author']").val();
    var reporting_date = $("input[name='reporting_date']").val();
    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }


    const content = $("input[name='content']").val();
    const feedback_content = $("input[name='feedback_content']").val();
    const manager = $("input[name='manager']").val();
    const approver = $("input[name='approver']").val();
    memos = [
        {
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver
        }
    ]

    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data'] = row_data
    data['products'] = products
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file63/${file63_pk}/`,
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