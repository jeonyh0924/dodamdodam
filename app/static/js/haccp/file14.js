function file14Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    let row_data = [];

    const manufacture = $("input[name='manufacture']").prop('checked');
    const hygiene = $("input[name='hygiene']").prop('checked');
    const experiment = $("input[name='experiment']").prop('checked');

    const author = $("input[name='author']").val();

    const equipment_name = $("input[name='equipment_name']").val();
    const installation_spot = $("input[name='installation_spot']").val();
    const usage = $("input[name='usage']").val();
    const equipment_no = $("input[name='equipment_no']").val();
    var installation_date = $("input[name='installation_date']").val();
    const purchase_company = $("input[name='purchase_company']").val();
    const image = $('input[name="image"]')[0].files[0];

    if (installation_date == '') {
        installation_date = '0001-01-01'
    }

    $('.row_data tbody tr').each(function () {
        var report_date = $(this).find("[name='report_date']").val();
        const failure_log = $(this).find("[name='failure_log']").val();
        const improve_log = $(this).find("[name='improve_log']").val();

        if (report_date == '') {
            report_date = '0001-01-01'
        }

        row_data.push({
            report_date: report_date,
            failure_log: failure_log,
            improve_log: improve_log
        })
    })
    console.log(row_data)
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", token);
    formData.append("manufacture", manufacture);
    formData.append("hygiene", hygiene);
    formData.append("experiment", experiment);
    formData.append("author", author);
    formData.append("equipment_name", equipment_name);
    formData.append("installation_spot", installation_spot);
    formData.append("usage", usage);
    formData.append("equipment_no", equipment_no);
    formData.append("installation_date", installation_date);
    formData.append("purchase_company", purchase_company);
    formData.append("image", image);
    formData.append("row_text", JSON.stringify(row_data));


    for (let value of formData.values()) {
        console.log(value);
    }


    $.ajax({
        url: "/haccp/api/file14/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")
            location.href = "/haccp/file14/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}


function file14Update(instance_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let row_data = [];

    const manufacture = $("input[name='manufacture']").prop('checked');
    const hygiene = $("input[name='hygiene']").prop('checked');
    const experiment = $("input[name='experiment']").prop('checked');

    const author = $("input[name='author']").val();

    const equipment_name = $("input[name='equipment_name']").val();
    const installation_spot = $("input[name='installation_spot']").val();
    const usage = $("input[name='usage']").val();
    const equipment_no = $("input[name='equipment_no']").val();
    var installation_date = $("input[name='installation_date']").val();
    const purchase_company = $("input[name='purchase_company']").val();
    const image = $('input[name="image"]')[0].files[0];

    if (installation_date == '') {
        installation_date = '0001-01-01'
    }

    $('.row_data tbody tr').each(function () {
        var report_date = $(this).find("[name='report_date']").val();
        const failure_log = $(this).find("[name='failure_log']").val();
        const improve_log = $(this).find("[name='improve_log']").val();

        if (report_date == '') {
            report_date = '0001-01-01'
        }

        row_data.push({
            report_date: report_date,
            failure_log: failure_log,
            improve_log: improve_log
        })
    })
    console.log(row_data)
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", token);
    formData.append("manufacture", manufacture);
    formData.append("hygiene", hygiene);
    formData.append("experiment", experiment);
    formData.append("author", author);
    formData.append("equipment_name", equipment_name);
    formData.append("installation_spot", installation_spot);
    formData.append("usage", usage);
    formData.append("equipment_no", equipment_no);
    formData.append("installation_date", installation_date);
    formData.append("purchase_company", purchase_company);
    if (image) {
        formData.append("image", image);
    }
    formData.append("row_text", JSON.stringify(row_data));


    for (let value of formData.values()) {
        console.log(value);
    }


    $.ajax({
        url: `/haccp/api/file14/${instance_pk}/`,
        type: "PATCH",
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
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