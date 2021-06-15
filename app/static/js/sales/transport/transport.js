function transportCreate() {
    const token = $("input[name='csrfmiddlewaretoken']").val();

    let data = {};

    const transport_type = $("[name='transport_type']").val();
    console.log(transport_type)

    data['transport_type'] = transport_type
    $.ajax({
        url: "/sales/api/transport/",
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
            location.href = "/sales/transport/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseText);
        }
    })
}

function delModalShow() {
    if ($("input:checkbox[name=transportCheck]:checked").length == 0) return
    $("#delModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}