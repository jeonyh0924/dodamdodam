function file31Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var reporting_date = $(this).find("[name='reporting_date']").val();

        const waste_oil = $(this).find("[name='waste_oil']").prop('checked');
        const waste = $(this).find("[name='waste']").prop('checked');
        const waste_oil_quantity = $(this).find("[name='waste_oil_quantity']").val() || 0;

        const waste_quantity = $(this).find("[name='waste_quantity']").val() || 0;
        const reporter = $(this).find("[name='reporter']").val();
        const approval = $(this).find("[name='approval']").val();

        if (reporting_date == '') {
            reporting_date = '0001-01-01'
        }
        row_data.push({
            reporting_date: reporting_date,
            waste_oil: waste_oil,
            waste: waste,
            waste_oil_quantity: waste_oil_quantity,
            waste_quantity: waste_quantity,
            reporter: reporter,
            approval: approval,
        })
    });


    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data


    $.ajax({
        url: "/haccp/api/file31/",
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
            location.href = "/haccp/file31/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file31Update(file31_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var reporting_date = $(this).find("[name='reporting_date']").val();

        const waste_oil = $(this).find("[name='waste_oil']").prop('checked');
        const waste = $(this).find("[name='waste']").prop('checked');
        const waste_oil_quantity = $(this).find("[name='waste_oil_quantity']").val() || 0;

        const waste_quantity = $(this).find("[name='waste_quantity']").val() || 0;
        const reporter = $(this).find("[name='reporter']").val();
        const approval = $(this).find("[name='approval']").val();

        if (reporting_date == '') {
            reporting_date = '0001-01-01'
        }
        row_data.push({
            reporting_date: reporting_date,
            waste_oil: waste_oil,
            waste: waste,
            waste_oil_quantity: waste_oil_quantity,
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
        url: `/haccp/api/file31/${file31_pk}/`,
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


function exportTables31(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file31',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file31.xlsx";
                a.download = '폐기물관리기록부 / 2층' + ".xlsx";
                a.click();
            }
        }
    });
}
