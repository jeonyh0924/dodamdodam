function file32Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var reporting_date = $(this).find("[name='reporting_date']").val();

        const waste_quantity = $(this).find("[name='waste_quantity']").val() || 0;
        const reporter = $(this).find("[name='reporter']").val();
        const approval = $(this).find("[name='approval']").val();

        if (reporting_date == '') {
            reporting_date = '0001-01-01'
        }
        row_data.push({
            reporting_date: reporting_date,
            waste_quantity: waste_quantity,
            reporter: reporter,
            approval: approval,
        })
    });


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: "/haccp/api/file32/",
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
            location.href = "/haccp/file32/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file32Update(file32_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var reporting_date = $(this).find("[name='reporting_date']").val();

        const waste_quantity = $(this).find("[name='waste_quantity']").val() || 0;
        const reporter = $(this).find("[name='reporter']").val();
        const approval = $(this).find("[name='approval']").val();

        if (reporting_date == '') {
            reporting_date = '0001-01-01'
        }
        row_data.push({
            reporting_date: reporting_date,
            waste_quantity: waste_quantity,
            reporter: reporter,
            approval: approval,
        })
    });


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: `/haccp/api/file32/${file32_pk}/`,
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
