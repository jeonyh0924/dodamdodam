function file64Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    const supplier_belong = $("input[name='supplier_belong']").val();
    const supplier_spot = $("input[name='supplier_spot']").val();
    const supplier_name = $("input[name='supplier_name']").val();

    const receiver_belong = $("input[name='receiver_belong']").val();
    const receiver_spot = $("input[name='receiver_spot']").val();
    const receiver_name = $("input[name='receiver_name']").val();

    const take_over = $("textarea[name='take_over']").val();
    const take_over_content = $("textarea[name='take_over_content']").val();
    const approve_date = $("input[name='approve_date']").val();


    data['reporting_date'] = reporting_date
    data['author'] = author

    data['supplier_belong'] = supplier_belong
    data['supplier_spot'] = supplier_spot
    data['supplier_name'] = supplier_name

    data['receiver_belong'] = receiver_belong
    data['receiver_spot'] = receiver_spot
    data['receiver_name'] = receiver_name

    data['take_over'] = take_over
    data['take_over_content'] = take_over_content
    data['approve_date'] = approve_date


    console.log(data)

    $.ajax({
        url: "/haccp/api/file64/",
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
            location.href = "/haccp/file64/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file64Update(file64_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};


    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    const supplier_belong = $("input[name='supplier_belong']").val();
    const supplier_spot = $("input[name='supplier_spot']").val();
    const supplier_name = $("input[name='supplier_name']").val();

    const receiver_belong = $("input[name='receiver_belong']").val();
    const receiver_spot = $("input[name='receiver_spot']").val();
    const receiver_name = $("input[name='receiver_name']").val();

    const take_over = $("textarea[name='take_over']").val();
    const take_over_content = $("textarea[name='take_over_content']").val();
    const approve_date = $("input[name='approve_date']").val();


    data['reporting_date'] = reporting_date
    data['author'] = author

    data['supplier_belong'] = supplier_belong
    data['supplier_spot'] = supplier_spot
    data['supplier_name'] = supplier_name

    data['receiver_belong'] = receiver_belong
    data['receiver_spot'] = receiver_spot
    data['receiver_name'] = receiver_name

    data['take_over'] = take_over
    data['take_over_content'] = take_over_content
    data['approve_date'] = approve_date


    console.log(data)

    $.ajax({
        url: `/haccp/api/file64/${file64_pk}/`,
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
