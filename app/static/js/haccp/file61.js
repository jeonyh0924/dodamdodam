function file61Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const row_data = [];
    const input = [];
    const memos = [];

    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();
    var oil_change_date = $("input[name='oil_change_date']").val();
    const product_before_oil_change = $("input[name='product_before_oil_change']").val() || 0;

    if (oil_change_date == '') {
        oil_change_date = '0001-01-01'
    }


    $('#table1 tbody tr').each(function () {
        var reporting_time = $(this).find("[name='reporting_time']").val();
        const product_name = $(this).find("[name='product_name']").val();
        const front_temp = $(this).find("[name='front_temp']").val() || 0;
        const back_temp = $(this).find("[name='back_temp']").val() || 0;
        const heating_temp = $(this).find("[name='heating_temp']").val() || 0;
        const heating_time = $(this).find("[name='heating_time']").val() || 0;
        const temp = $(this).find("[name='temp']").val() || 0;
        const acid_value = $(this).find("[name='acid_value']").val() || 0;

        if (reporting_time == '') {
            reporting_time = '00:00'
        }

        row_data.push({
            reporting_time: reporting_time,
            product_name: product_name,
            front_temp: front_temp,
            back_temp: back_temp,
            heating_temp: heating_temp,
            heating_time: heating_time,
            temp: temp,
            acid_value: acid_value,
        })
        console.log(row_data)

    })

    $('#table2 tbody tr').each(function () {
        var input_time = $(this).find("[name='input_time']").val();
        const is_input = $(this).find("[name='is_input']").prop('checked');

        if (input_time == '') {
            input_time = '00:00'
        }

        input.push({
            input_time: input_time,
            is_input: is_input,
        })
    })

    $('#table3 tbody tr').each(function () {
        const type = $(this).find("[name='type']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        memos.push({
            type: type,
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver,
        })

    })

    data = {
        "reporting_date": reporting_date,
        "author": author,
        "oil_change_date": oil_change_date,
        "product_before_oil_change": product_before_oil_change,

        "row_data": row_data,
        "input": input,
        "memos": memos,
    }

    console.log(data)
    $.ajax({
        url: "/haccp/api/file61/",
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
            location.href = "/haccp/file61/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}


function file61Update(file61_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;
    const row_data = [];
    const input = [];
    const memos = [];

    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();
    var oil_change_date = $("input[name='oil_change_date']").val();
    const product_before_oil_change = removeComma($("input[name='product_before_oil_change']").val()) || 0;

    if (oil_change_date == '') {
        oil_change_date = '0001-01-01'
    }


    $('#table1 tbody tr').each(function () {
        var reporting_time = $(this).find("[name='reporting_time']").val();
        const product_name = $(this).find("[name='product_name']").val();
        const front_temp = removeComma($(this).find("[name='front_temp']").val()) || 0;
        const back_temp = removeComma($(this).find("[name='back_temp']").val()) || 0;
        const heating_temp = removeComma($(this).find("[name='heating_temp']").val()) || 0;
        const heating_time = removeComma($(this).find("[name='heating_time']").val()) || 0;
        const temp = removeComma($(this).find("[name='temp']").val()) || 0;
        const acid_value = removeComma($(this).find("[name='acid_value']").val()) || 0;

        if (reporting_time == '') {
            reporting_time = '00:00'
        }

        row_data.push({
            reporting_time: reporting_time,
            product_name: product_name,
            front_temp: front_temp,
            back_temp: back_temp,
            heating_temp: heating_temp,
            heating_time: heating_time,
            temp: temp,
            acid_value: acid_value,
        })
        console.log(row_data)

    })

    $('#table2 tbody tr').each(function () {
        var input_time = $(this).find("[name='input_time']").val();
        const is_input = $(this).find("[name='is_input']").prop('checked');

        if (input_time == '') {
            input_time = '00:00'
        }

        input.push({
            input_time: input_time,
            is_input: is_input,
        })
    })

    $('#table3 tbody tr').each(function () {
        const type = $(this).find("[name='type']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        memos.push({
            type: type,
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver,
        })

    })

    data = {
        "reporting_date": reporting_date,
        "author": author,
        "oil_change_date": oil_change_date,
        "product_before_oil_change": product_before_oil_change,

        "row_data": row_data,
        "input": input,
        "memos": memos,
    }

    console.log(data)
    $.ajax({
        url: `/haccp/api/file61/${file61_pk}/`,
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
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

