function file46Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    const content = $("textarea[name='content']").val();
    const feedback_content = $("textarea[name='feedback_content']").val();
    const approval_date = $("input[name='approval_date']").val();
    const counter_measure = $("textarea[name='counter_measure']").val();
    const manager = $("textarea[name='manager']").val();
    const etc = $("textarea[name='etc']").val();

    data['author'] = author
    data['reporting_date'] = reporting_date
    data['content'] = content
    data['feedback_content'] = feedback_content
    data['approval_date'] = approval_date
    data['counter_measure'] = counter_measure
    data['manager'] = manager
    data['etc'] = etc

    console.log(data)

    $.ajax({
        url: "/haccp/api/file46/",
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
            location.href = "/haccp/file46/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseText);
        }
    })
}

function file46Update(file46_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    const content = $("textarea[name='content']").val();
    const feedback_content = $("textarea[name='feedback_content']").val();
    const counter_measure = $("textarea[name='counter_measure']").val();
    const approval_date = $("input[name='approval_date']").val();
    const manager = $("textarea[name='manager']").val();
    const etc = $("textarea[name='etc']").val();

    data['author'] = author
    data['reporting_date'] = reporting_date
    data['content'] = content
    data['feedback_content'] = feedback_content
    data['counter_measure'] = counter_measure
    data['approval_date'] = approval_date
    data['manager'] = manager
    data['etc'] = etc

    console.log(data)

    $.ajax({
        url: `/haccp/api/file46/${file46_pk}/`,
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
        }
    })
}
