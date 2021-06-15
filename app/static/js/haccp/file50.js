function file50Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const department = $("input[name='department']").val();
    const author = $("input[name='author']").val();

    var reporting_date = $("input[name='reporting_date']").val();

    const product_name = $("input[name='product_name']").val();
    const client_name = $("input[name='client_name']").val();
    const generate_date = $("input[name='generate_date']").val();
    var expiration = $("input[name='expiration']").val();
    const claim_reason = $("input[name='claim_reason']").val();
    const generate_reason = $("textarea[name='generate_reason']").val();
    const counter_measure = $("textarea[name='counter_measure']").val();

    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (expiration == '') {
        expiration = '0001-01-01'
    }

    data['department'] = department
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['product_name'] = product_name
    data['client_name'] = client_name
    data['generate_date'] = generate_date
    data['expiration'] = expiration
    data['claim_reason'] = claim_reason
    data['generate_reason'] = generate_reason
    data['counter_measure'] = counter_measure

    console.log(data)

    $.ajax({
        url: "/haccp/api/file50/",
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
            location.href = "/haccp/file50/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file50Update(file50_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const department = $("input[name='department']").val();
    const author = $("input[name='author']").val();

    var reporting_date = $("input[name='reporting_date']").val();

    const product_name = $("input[name='product_name']").val();
    const client_name = $("input[name='client_name']").val();
    const generate_date = $("input[name='generate_date']").val();
    var expiration = $("input[name='expiration']").val();
    const claim_reason = $("input[name='claim_reason']").val();
    const generate_reason = $("textarea[name='generate_reason']").val();
    const counter_measure = $("textarea[name='counter_measure']").val();

    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (expiration == '') {
        expiration = '0001-01-01'
    }

    data['department'] = department
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['product_name'] = product_name
    data['client_name'] = client_name
    data['generate_date'] = generate_date
    data['expiration'] = expiration
    data['claim_reason'] = claim_reason
    data['generate_reason'] = generate_reason
    data['counter_measure'] = counter_measure

    console.log(data)

    $.ajax({
        url: `/haccp/api/file50/${file50_pk}/`,
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
