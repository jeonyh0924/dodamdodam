function file47Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        const content_1 = $(this).find("[name='content_1']").val();
        const content_2 = $(this).find("[name='content_2']").val();

        const m_1 = $(this).find("[name='m_1']").prop('checked')
        const m_2 = $(this).find("[name='m_2']").prop('checked')
        const m_3 = $(this).find("[name='m_3']").prop('checked')
        const m_4 = $(this).find("[name='m_4']").prop('checked')
        const m_5 = $(this).find("[name='m_5']").prop('checked')
        const m_6 = $(this).find("[name='m_6']").prop('checked')
        const m_7 = $(this).find("[name='m_7']").prop('checked')
        const m_8 = $(this).find("[name='m_8']").prop('checked')
        const m_9 = $(this).find("[name='m_9']").prop('checked')
        const m_10 = $(this).find("[name='m_10']").prop('checked')
        const m_11 = $(this).find("[name='m_11']").prop('checked')
        const m_12 = $(this).find("[name='m_12']").prop('checked')


        row_data.push({
            content_1: content_1,
            content_2: content_2,
            m_1: m_1,
            m_2: m_2,
            m_3: m_3,
            m_4: m_4,
            m_5: m_5,
            m_6: m_6,
            m_7: m_7,
            m_8: m_8,
            m_9: m_9,
            m_10: m_10,
            m_11: m_11,
            m_12: m_12
        })
    });


    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    data['reporting_date'] = reporting_date;
    data['author'] = author;
    data['row_data'] = row_data;

    console.log(data)

    $.ajax({
        url: "/haccp/api/file47/",
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
            location.href = "/haccp/file47/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseText);
        }
    })
}

function file47Update(file47_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];

    $("#table1 tbody tr").each(function () {
        const content_1 = $(this).find("[name='content_1']").val();
        const content_2 = $(this).find("[name='content_2']").val();

        const m_1 = $(this).find("[name='m_1']").prop('checked')
        const m_2 = $(this).find("[name='m_2']").prop('checked')
        const m_3 = $(this).find("[name='m_3']").prop('checked')
        const m_4 = $(this).find("[name='m_4']").prop('checked')
        const m_5 = $(this).find("[name='m_5']").prop('checked')
        const m_6 = $(this).find("[name='m_6']").prop('checked')
        const m_7 = $(this).find("[name='m_7']").prop('checked')
        const m_8 = $(this).find("[name='m_8']").prop('checked')
        const m_9 = $(this).find("[name='m_9']").prop('checked')
        const m_10 = $(this).find("[name='m_10']").prop('checked')
        const m_11 = $(this).find("[name='m_11']").prop('checked')
        const m_12 = $(this).find("[name='m_12']").prop('checked')


        row_data.push({
            content_1: content_1,
            content_2: content_2,
            m_1: m_1,
            m_2: m_2,
            m_3: m_3,
            m_4: m_4,
            m_5: m_5,
            m_6: m_6,
            m_7: m_7,
            m_8: m_8,
            m_9: m_9,
            m_10: m_10,
            m_11: m_11,
            m_12: m_12
        })
    });


    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    data['reporting_date'] = reporting_date;
    data['author'] = author;
    data['row_data'] = row_data;

    console.log(data)

    $.ajax({
        url: `/haccp/api/file47/${file47_pk}/`,
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
            alert(response.responseText);
            // console.log(response.responseText);
        }
    })
}
