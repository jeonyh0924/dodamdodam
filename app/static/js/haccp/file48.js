function file48Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    const education_manager = $("input[name='education_manager']").val();
    const education_author = $("input[name='education_author']").val();
    const education_date = $("input[name='education_date']").val();
    const education_time = $("input[name='education_time']").val();

    const duty = $("input[name='duty']").prop('checked');
    const hygiene = $("input[name='hygiene']").prop('checked');
    const haccp = $("input[name='haccp']").prop('checked');
    const outside = $("input[name='outside']").prop('checked');
    const log = $("input[name='log']").prop('checked');

    const title = $("input[name='title']").val();
    const content = $("textarea[name='content']").val();
    const etc = $("textarea[name='etc']").val();


    data['reporting_date'] = reporting_date;
    data['author'] = author;

    data['education_manager'] = education_manager;
    data['education_author'] = education_author;
    data['education_date'] = education_date;
    data['education_time'] = education_time;

    data['duty'] = duty;
    data['hygiene'] = hygiene;
    data['haccp'] = haccp;
    data['outside'] = outside;
    data['log'] = log;

    data['title'] = title;
    data['content'] = content;
    data['etc'] = etc;

    $.ajax({
        url: "/haccp/api/file48/",
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
            location.href = "/haccp/file48/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file48Update(file48_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};

    const reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    const education_manager = $("input[name='education_manager']").val();
    const education_author = $("input[name='education_author']").val();
    const education_date = $("input[name='education_date']").val();
    const education_time = $("input[name='education_time']").val();

    const duty = $("input[name='duty']").prop('checked');
    const hygiene = $("input[name='hygiene']").prop('checked');
    const haccp = $("input[name='haccp']").prop('checked');
    const outside = $("input[name='outside']").prop('checked');
    const log = $("input[name='log']").prop('checked');

    const title = $("input[name='title']").val();
    const content = $("textarea[name='content']").val();
    const etc = $("textarea[name='etc']").val();


    data['reporting_date'] = reporting_date;
    data['author'] = author;

    data['education_manager'] = education_manager;
    data['education_author'] = education_author;
    data['education_date'] = education_date;
    data['education_time'] = education_time;

    data['duty'] = duty;
    data['hygiene'] = hygiene;
    data['haccp'] = haccp;
    data['outside'] = outside;
    data['log'] = log;

    data['title'] = title;
    data['content'] = content;
    data['etc'] = etc;
    console.log(file48_pk)
    $.ajax({
        url: `/haccp/api/file48/${file48_pk}/`,
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
