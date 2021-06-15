function file68Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var row_data = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    let file_data6 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            } else {
                file_data1[name] = '0001-01-01'
            }
        } else {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col2").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            }else{
                file_data2[name] = '0001-01-01'
            }
        } else {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            } else {
                file_data3[name] = '0001-01-01'
            }
        } else {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            }else{
                file_data4[name] = '0001-01-01'
            }
        } else {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            }else{
                file_data5[name] = '0001-01-01'
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });
    $(".col6").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data6[name] = name_data
            }else{
                file_data6[name] = '0001-01-01'
            }
        } else {
            file_data6[name] = $(this).prop('checked');
        }
    });


    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5, file_data6]


    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data'] = row_data

    console.log(data)

    $.ajax({
        url: "/haccp/api/file68/",
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
            location.href = "/haccp/file68/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file68Update(file68_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var row_data = [];

    let file_data1 = {};
    let file_data2 = {};
    let file_data3 = {};
    let file_data4 = {};
    let file_data5 = {};
    let file_data6 = {};

    $(".col1").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data1[name] = name_data
            } else {
                file_data1[name] = '0001-01-01'
            }
        } else {
            file_data1[name] = $(this).prop('checked');
        }
    });

    $(".col2").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data2[name] = name_data
            }else{
                file_data2[name] = '0001-01-01'
            }
        } else {
            file_data2[name] = $(this).prop('checked');
        }
    });

    $(".col3").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data3[name] = name_data
            } else {
                file_data3[name] = '0001-01-01'
            }
        } else {
            file_data3[name] = $(this).prop('checked');
        }
    });

    $(".col4").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data4[name] = name_data
            }else{
                file_data4[name] = '0001-01-01'
            }
        } else {
            file_data4[name] = $(this).prop('checked');
        }
    });

    $(".col5").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data5[name] = name_data
            }else{
                file_data5[name] = '0001-01-01'
            }
        } else {
            file_data5[name] = $(this).prop('checked');
        }
    });
    $(".col6").each(function () {
        const name = $(this).attr("name");
        var name_data;
        if (name == 'reporting_date') {
            name_data = $(this).val();
            if (name_data != "") {
                file_data6[name] = name_data
            }else{
                file_data6[name] = '0001-01-01'
            }
        } else {
            file_data6[name] = $(this).prop('checked');
        }
    });


    row_data = [file_data1, file_data2, file_data3, file_data4, file_data5, file_data6]


    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data'] = row_data

    console.log(data)

    $.ajax({
        url: `/haccp/api/file68/${file68_pk}/`,
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
