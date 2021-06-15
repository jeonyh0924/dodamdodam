function file56Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    var reporting_date = $("input[name='reporting_date']").val();
    const product_name = $("input[name='product_name']").val();
    var expiration = $("input[name='expiration']").val();
    const office = $("input[name='office']").val();
    const problem_reason = $("input[name='problem_reason']").val();
    const problem_quantity = $("input[name='problem_quantity']").val() || 0;
    const production_quantity = $("input[name='production_quantity']").val() || 0;
    const production_stock = $("input[name='production_stock']").val() || 0;
    const recall_plan = $("input[name='recall_plan']").val() || 0;
    const sales_office = $("input[name='sales_office']").val();
    const sales_quantity = $("input[name='sales_quantity']").val() || 0;
    const sales_office_circulate_quantity = $("input[name='sales_office_circulate_quantity']").val() || 0;
    const recall_reason = $("input[name='recall_reason']").val();
    var recall_date = $("input[name='recall_date']").val();
    const recall_manager = $("input[name='recall_manager']").val();
    const reporter = $("input[name='reporter']").val();

    if (expiration == '') {
        expiration = '0001-01-01'
    }

    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (recall_date == '') {
        recall_date = '0001-01-01'
    }


    data['reporting_date'] = reporting_date
    data['product_name'] = product_name
    data['expiration'] = expiration
    data['office'] = office
    data['problem_reason'] = problem_reason
    data['problem_quantity'] = problem_quantity
    data['production_quantity'] = production_quantity
    data['production_quantity'] = production_quantity
    data['production_stock'] = production_stock
    data['recall_plan'] = recall_plan
    data['sales_office'] = sales_office
    data['sales_quantity'] = sales_quantity
    data['sales_office_circulate_quantity'] = sales_office_circulate_quantity
    data['recall_reason'] = recall_reason
    data['recall_date'] = recall_date
    data['reporter'] = reporter
    data['recall_manager'] = recall_manager

    console.log(data)

    $.ajax({
        url: "/haccp/api/file56/",
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
            location.href = "/haccp/file56/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file56Update(file56_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    var reporting_date = $("input[name='reporting_date']").val();
    const product_name = $("input[name='product_name']").val();
    var expiration = $("input[name='expiration']").val();
    const office = $("input[name='office']").val();
    const problem_reason = $("input[name='problem_reason']").val();
    const problem_quantity = $("input[name='problem_quantity']").val() || 0;
    const production_quantity = $("input[name='production_quantity']").val() || 0;
    const production_stock = $("input[name='production_stock']").val() || 0;
    const recall_plan = $("input[name='recall_plan']").val() || 0;
    const sales_office = $("input[name='sales_office']").val();
    const sales_quantity = $("input[name='sales_quantity']").val() || 0;
    const sales_office_circulate_quantity = $("input[name='sales_office_circulate_quantity']").val() || 0;
    const recall_reason = $("input[name='recall_reason']").val();
    var recall_date = $("input[name='recall_date']").val();
    const recall_manager = $("input[name='recall_manager']").val();
    const reporter = $("input[name='reporter']").val();

    if (expiration == '') {
        expiration = '0001-01-01'
    }

    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (recall_date == '') {
        recall_date = '0001-01-01'
    }


    data['reporting_date'] = reporting_date
    data['product_name'] = product_name
    data['expiration'] = expiration
    data['office'] = office
    data['problem_reason'] = problem_reason
    data['problem_quantity'] = problem_quantity
    data['production_quantity'] = production_quantity
    data['production_quantity'] = production_quantity
    data['production_stock'] = production_stock
    data['recall_plan'] = recall_plan
    data['sales_office'] = sales_office
    data['sales_quantity'] = sales_quantity
    data['sales_office_circulate_quantity'] = sales_office_circulate_quantity
    data['recall_reason'] = recall_reason
    data['recall_date'] = recall_date
    data['reporter'] = reporter
    data['recall_manager'] = recall_manager

    console.log(data)

    $.ajax({
        url: `/haccp/api/file56/${file56_pk}/`,
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