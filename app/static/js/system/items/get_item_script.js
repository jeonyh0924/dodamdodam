function delModalShow() {
    console.log($("input:checkbox[name=breadCheck]:checked").length)
    if ($("input:checkbox[name=breadCheck]:checked").length == 0) return
    $("#delModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}

function createChoices() {
    console.log('function createChoices()')
    var token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let row_data = [];
    $(".is_chk").each(function () {
        const id = $(this).find("[name='breadID']").val();
        console.log('id', id)
        row_data.push({
            id: id,
        })
    });

    data['row_data'] = row_data
    console.log(data)
    $.ajax(
        {
            url: "/items/choice/",
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
                location.href = "/items/";
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        }
    );
}

$(document).ready(function () {
    /* 전체선택 & 각 행 선택 제어 */
    let resultSumData = 0;
    let checkList = new Array();
    // table 각 row 클릭 시
    $(document).on("click", ".includeCheckBox", function () {
        const self = $(this).closest("div");
        const $chk = $(self).find(".hidden_chk");
        const $price = $(self).find(".breadPrice");
        $(self).addClass("is_chk");
        var breadInsId = $($chk).attr('value');
        var price_var = parseInt($($price).attr('value'));
        console.log('value', breadInsId)
        console.log('price', price_var)
        resultSumData += price_var;
        checkList.push(breadInsId);
        console.log(checkList)
        document.getElementById('resultSumData').value = resultSumData;
        if (resultSumData > 10000) {
            var btn_status = document.getElementById('submitBtn');
            btn_status.disabled = true;
        }

    });
});

