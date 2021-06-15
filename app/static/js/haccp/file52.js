function file52Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];

    $("#table1 tbody tr").each(function () {
        const division = $(this).find("[name='division']").val();

        const partners_company_name = $(this).find("[name='partners_company_name']").val();
        const haccp = $(this).find("[name='haccp']").prop('checked');
        const manager = $(this).find("[name='manager']").val();
        const trade_item = $(this).find("[name='trade_item']").val();
        const location = $(this).find("[name='location']").val();
        const tel = $(this).find("[name='tel']").val();
        const fax_email = $(this).find("[name='fax_email']").val();

        row_data.push({
            division: division,
            partners_company_name: partners_company_name,
            haccp: haccp,
            manager: manager,
            trade_item: trade_item,
            location: location,
            tel: tel,
            fax_email: fax_email,
        })
    });
    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: "/haccp/api/file52/",
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
            location.href = "/haccp/file52/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file52Update(file52_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];

    $("#table1 tbody tr").each(function () {
        const division = $(this).find("[name='division']").val();

        const partners_company_name = $(this).find("[name='partners_company_name']").val();
        const haccp = $(this).find("[name='haccp']").prop('checked');
        const manager = $(this).find("[name='manager']").val();
        const trade_item = $(this).find("[name='trade_item']").val();
        const location = $(this).find("[name='location']").val();
        const tel = $(this).find("[name='tel']").val();
        const fax_email = $(this).find("[name='fax_email']").val();

        row_data.push({
            division: division,
            partners_company_name: partners_company_name,
            haccp: haccp,
            manager: manager,
            trade_item: trade_item,
            location: location,
            tel: tel,
            fax_email: fax_email,
        })
    });
    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: `/haccp/api/file52/${file52_pk}/`,
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
