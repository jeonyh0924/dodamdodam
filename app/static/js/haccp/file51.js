function file51Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var generate_date = $(this).find("[name='generate_date']").val();

        const og_material = $(this).find("[name='og_material']").prop('checked');
        const sub_material = $(this).find("[name='sub_material']").prop('checked');
        const sub_material2 = $(this).find("[name='sub_material2']").prop('checked');
        const process = $(this).find("[name='process']").prop('checked');

        const product_name = $(this).find("[name='product_name']").val();
        const generate_quantity = $(this).find("[name='generate_quantity']").val() || 0;
        const non_conforming_content = $(this).find("[name='non_conforming_content']").val();
        const non_conforming_reason = $(this).find("[name='non_conforming_reason']").val();
        var processing_date = $(this).find("[name='processing_date']").val();

        const processing_content = $(this).find("[name='processing_content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const author = $(this).find("[name='author']").val();

        if (processing_date == '') {
            processing_date = '0001-01-01'
        }
        if (generate_date == '') {
            generate_date = '0001-01-01'
        }
        row_data.push({
            generate_date: generate_date,
            og_material: og_material,
            sub_material: sub_material,
            sub_material2: sub_material2,
            process: process,

            product_name: product_name,
            generate_quantity: generate_quantity,
            non_conforming_content: non_conforming_content,
            non_conforming_reason: non_conforming_reason,
            processing_date: processing_date,

            processing_content: processing_content,
            feedback_content: feedback_content,
            author: author,
        })
    });
    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: "/haccp/api/file51/",
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
            location.href = "/haccp/file51/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file51Update(file51_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const row_data = [];

    $("#table1 tbody tr").each(function () {
        var generate_date = $(this).find("[name='generate_date']").val();

        const og_material = $(this).find("[name='og_material']").prop('checked');
        const sub_material = $(this).find("[name='sub_material']").prop('checked');
        const sub_material2 = $(this).find("[name='sub_material2']").prop('checked');
        const process = $(this).find("[name='process']").prop('checked');

        const product_name = $(this).find("[name='product_name']").val();
        const generate_quantity = $(this).find("[name='generate_quantity']").val() || 0;
        const non_conforming_content = $(this).find("[name='non_conforming_content']").val();
        const non_conforming_reason = $(this).find("[name='non_conforming_reason']").val();
        var processing_date = $(this).find("[name='processing_date']").val();

        const processing_content = $(this).find("[name='processing_content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const author = $(this).find("[name='author']").val();

        if (processing_date == '') {
            processing_date = '0001-01-01'
        }
        if (generate_date == '') {
            generate_date = '0001-01-01'
        }
        row_data.push({
            generate_date: generate_date,
            og_material: og_material,
            sub_material: sub_material,
            sub_material2: sub_material2,
            process: process,

            product_name: product_name,
            generate_quantity: generate_quantity,
            non_conforming_content: non_conforming_content,
            non_conforming_reason: non_conforming_reason,
            processing_date: processing_date,

            processing_content: processing_content,
            feedback_content: feedback_content,
            author: author,
        })
    });
    const author = $("input[name='author']").val();
    data['author'] = author
    data['row_data'] = row_data
    console.log(data)

    $.ajax({
        url: `/haccp/api/file51/${file51_pk}/`,
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
