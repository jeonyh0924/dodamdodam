function file55Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    const reporting_date = $("input[name='reporting_date']").val();
    const product_name = $("input[name='product_name']").val();
    var expiration = $("input[name='expiration']").val();
    const sales_office = $("input[name='sales_office']").val();
    const reason = $("input[name='reason']").val();
    const recall_manager = $("input[name='recall_manager']").val();

    if (expiration == '') {
        expiration = '0001-01-01'
    }


    data['reporting_date'] = reporting_date
    data['product_name'] = product_name
    data['expiration'] = expiration
    data['sales_office'] = sales_office
    data['reason'] = reason
    data['recall_manager'] = recall_manager

    console.log(data)

    $.ajax({
        url: "/haccp/api/file55/",
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
            location.href = "/haccp/file55/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file55Update(file55_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    const reporting_date = $("input[name='reporting_date']").val();
    const product_name = $("input[name='product_name']").val();
    var expiration = $("input[name='expiration']").val();
    const sales_office = $("input[name='sales_office']").val();
    const reason = $("input[name='reason']").val();
    const recall_manager = $("input[name='recall_manager']").val();

    if (expiration == '') {
        expiration = '0001-01-01'
    }


    data['reporting_date'] = reporting_date
    data['product_name'] = product_name
    data['expiration'] = expiration
    data['sales_office'] = sales_office
    data['reason'] = reason
    data['recall_manager'] = recall_manager

    console.log(data)

    $.ajax({
        url: `/haccp/api/file55/${file55_pk}/`,
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
