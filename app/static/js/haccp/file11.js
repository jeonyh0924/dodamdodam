function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file11Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    let row_data = [];

    const author = $("input[name='author']").val();

    $('.row_data').each(function () {
        const bravo_receive = $(this).find("[name='bravo_receive']").val() || 0;
        const bravo_used = $(this).find("[name='bravo_used']").val() || 0;
        const bravo_stock = $(this).find("[name='bravo_stock']").val() || 0;

        const refresh_receive = $(this).find("[name='refresh_receive']").val() || 0;
        const refresh_used = $(this).find("[name='refresh_used']").val() || 0;
        const refresh_stock = $(this).find("[name='refresh_stock']").val() || 0;

        const bio_receive = $(this).find("[name='bio_receive']").val() || 0;
        const bio_used = $(this).find("[name='bio_used']").val() || 0;
        const bio_stock = $(this).find("[name='bio_stock']").val() || 0;

        const regular_receive = $(this).find("[name='regular_receive']").val() || 0;
        const regular_used = $(this).find("[name='regular_used']").val() || 0;
        const regular_stock = $(this).find("[name='regular_stock']").val() || 0;

        var report_date = $(this).find("[name='report_date']").val();
        const content = $(this).find("[name='content']").val();
        const approver = $(this).find("[name='approver']").val();
        let memos = {'content': content, 'approver': approver};

        if (report_date == '') {
            report_date = '0001-01-01'
        }

        row_data.push({
            bravo_receive: bravo_receive,
            bravo_used: bravo_used,
            bravo_stock: bravo_stock,

            refresh_receive: refresh_receive,
            refresh_used: refresh_used,
            refresh_stock: refresh_stock,

            bio_receive: bio_receive,
            bio_used: bio_used,
            bio_stock: bio_stock,

            regular_receive: regular_receive,
            regular_used: regular_used,
            regular_stock: regular_stock,

            report_date: report_date,
            memo: memos
        })
    })


    data['author'] = author
    data['row_data'] = row_data


    console.log(data)

    $.ajax({
        url: "/haccp/api/file11/",
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
            location.href = "/haccp/file11/";
        },
        error: function (response, args2) {
            console.log(response.responseText);
            alert(args2);
        }
    })
}

function file11Update(file11_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    let row_data = [];

    const author = $("input[name='author']").val();

    $('.row_data').each(function () {
        const bravo_receive = $(this).find("[name='bravo_receive']").val() || 0;
        const bravo_used = $(this).find("[name='bravo_used']").val() || 0;
        const bravo_stock = $(this).find("[name='bravo_stock']").val() || 0;

        const refresh_receive = $(this).find("[name='refresh_receive']").val() || 0;
        const refresh_used = $(this).find("[name='refresh_used']").val() || 0;
        const refresh_stock = $(this).find("[name='refresh_stock']").val() || 0;

        const bio_receive = $(this).find("[name='bio_receive']").val() || 0;
        const bio_used = $(this).find("[name='bio_used']").val() || 0;
        const bio_stock = $(this).find("[name='bio_stock']").val() || 0;

        const regular_receive = $(this).find("[name='regular_receive']").val() || 0;
        const regular_used = $(this).find("[name='regular_used']").val() || 0;
        const regular_stock = $(this).find("[name='regular_stock']").val() || 0;

        var report_date = $(this).find("[name='report_date']").val();
        const content = $(this).find("[name='content']").val();
        const approver = $(this).find("[name='approver']").val();
        let memos = {'content': content, 'approver': approver};

        if (report_date == '') {
            report_date = '0001-01-01'
        }

        row_data.push({
            bravo_receive: bravo_receive,
            bravo_used: bravo_used,
            bravo_stock: bravo_stock,

            refresh_receive: refresh_receive,
            refresh_used: refresh_used,
            refresh_stock: refresh_stock,

            bio_receive: bio_receive,
            bio_used: bio_used,
            bio_stock: bio_stock,

            regular_receive: regular_receive,
            regular_used: regular_used,
            regular_stock: regular_stock,

            report_date: report_date,
            memo: memos
        })
    })


    data['author'] = author
    data['row_data'] = row_data


    console.log(data)

    $.ajax({
        url: `/haccp/api/file11/${file11_pk}/`,
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
        error: function (response, args2) {
            console.log(response.responseText);
            alert(args2);
        }
    })
}

function exportTables11(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file11',
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
                a.href = '/media/' + "file11.xlsx";
                a.download = ' 세척 ‧ 소독제 관리대장' + ".xlsx";
                a.click();
            }
        }
    });
}
