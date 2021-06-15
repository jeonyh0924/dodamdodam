function file15Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();

    let row_data = [];

    const equipment_name = $("input[name='equipment_name']").val();
    const usage = $("input[name='usage']").val();
    const equipment_no = $("input[name='equipment_no']").val();
    const a_s_manager = $("input[name='a_s_manager']").val();
    const image = $('input[name="image"]')[0].files[0];

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
    formData.append("equipment_name", equipment_name);
    formData.append("usage", usage);
    formData.append("equipment_no", equipment_no);
    formData.append("a_s_manager", a_s_manager);
    formData.append("image", image);
    formData.append("row_text", JSON.stringify(row_data));


    for (let value of formData.values()) {
        console.log(value);
    }


    $.ajax({
        url: "/haccp/api/file15/",
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
            location.href = "/haccp/file15/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file15Update(file15_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();

    let row_data = [];

    const equipment_name = $("input[name='equipment_name']").val();
    const usage = $("input[name='usage']").val();
    const equipment_no = $("input[name='equipment_no']").val();
    const a_s_manager = $("input[name='a_s_manager']").val();
    const image = $('input[name="image"]')[0].files[0];

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
    formData.append("equipment_name", equipment_name);
    formData.append("usage", usage);
    formData.append("equipment_no", equipment_no);
    formData.append("a_s_manager", a_s_manager);
    if (image) {
        formData.append("image", image);
    }
    formData.append("row_text", JSON.stringify(row_data));


    for (let value of formData.values()) {
        console.log(value);
    }


    $.ajax({
        url: `/haccp/api/file15/${file15_pk}/`,
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
