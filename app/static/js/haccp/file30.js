function file30Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];


    $("#table1 tbody tr").each(function () {
        const reporting_date = $(this).find("[name='reporting_date']").val();
        const title = $(this).find("[name='title']").val();
        const company = $(this).find("[name='company']").val();
        const quantity = $(this).find("[name='quantity']").val() || 0;

        const grade = $(this).find("[name='grade']").prop('checked')
        const foreign = $(this).find("[name='foreign']").prop('checked')
        const packing = $(this).find("[name='packing']").prop('checked')
        const cleaning = $(this).find("[name='cleaning']").prop('checked')

        if (reporting_date || title || company || quantity || grade || foreign || packing || cleaning) {
            row_data.push({
                reporting_date: reporting_date,
                title: title,
                company: company,
                quantity: quantity,

                grade: grade,
                foreign: foreign,
                packing: packing,
                cleaning: cleaning
            })
        }
    });

    $('#table2 tbody tr').each(function () {
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (content || feedback_content || manager || approver) {
            memos.push({
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })

    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file30/",
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
            location.href = "/haccp/file30/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file30Update(file30_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const row_data = [];
    const memos = [];


    $("#table1 tbody tr").each(function () {
        const reporting_date = $(this).find("[name='reporting_date']").val();
        const title = $(this).find("[name='title']").val();
        const company = $(this).find("[name='company']").val();
        const quantity = $(this).find("[name='quantity']").val() || 0;

        const grade = $(this).find("[name='grade']").prop('checked')
        const foreign = $(this).find("[name='foreign']").prop('checked')
        const packing = $(this).find("[name='packing']").prop('checked')
        const cleaning = $(this).find("[name='cleaning']").prop('checked')

        if (reporting_date || title || company || quantity || grade || foreign || packing || cleaning) {
            row_data.push({
                reporting_date: reporting_date,
                title: title,
                company: company,
                quantity: quantity,

                grade: grade,
                foreign: foreign,
                packing: packing,
                cleaning: cleaning
            })
        }
    });

    $('#table2 tbody tr').each(function () {
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();

        if (content || feedback_content || manager || approver) {
            memos.push({
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })

    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file30/${file30_pk}/`,
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
