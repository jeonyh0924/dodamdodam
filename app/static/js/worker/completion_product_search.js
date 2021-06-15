$('body').on('keydown', '#id_search_word', function (key) {
    var token = $("input[name='csrfmiddlewaretoken']").val();

    if (key.keyCode == 13) {
        let box_id = $('#id_search_word').val();

        if (box_id == '') return
        console.log('box_id', box_id)
        $(".searchModal").show();

    }
})

function createCompleteProduction() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const quantity = $("input[name='quantity']").val() || 0;
    let box_id = $('#id_search_word').val();
    if (box_id == '') return
    console.log('box_id', box_id)
    data['quantity'] = quantity
    data['box_id'] = box_id
    $.ajax({
        url: `/work/api/completion-product/`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data,),
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