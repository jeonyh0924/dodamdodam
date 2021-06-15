function searchToData(target, product_name_lst) {
    const product = product_name_lst;
    $(`input#product`).autocomplete({
        search: function (event, ui) { // 검색 대상 색 강조
            setTimeout(() => {
                let w = $(this).autocomplete("widget").find("div"),
                    re = new RegExp("(" + this.value + ")", "i");
                w.html((i, html) =>
                    html.replace(re, "<span style='color:#fe1a1a'>$1</span>")
                );
            }, 0);
        },
        source: product, // 자동완성 대상
        select: function (event, ui) {
            // item 선택 시 이벤트
            // console.log(ui.item);
        },
        focus: function (event, ui) {
            // 포커스 시 이벤트
            return false;
        },
        minLength: 1, // 최소 글자 수
        autoFocus: false, // true로 설정 시 첫 번째 항목이 자동으로 초점이 맞춰짐
        delay: 100, // 입력 후 이벤트 발생까지의 지연시간
        close: function (event) {
            // 자동완성 창 닫아질 때의 이벤트
            // console.log(event);
        }
    });
}

function boxInfoCreate() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;

    const product = $("input[name='product']").val();
    const quantity = $("input[name='quantity']").val() || 0;
    const memo = $("input[name='memo']").val();
    const worker = $("input[name='worker']").val();
    console.log(worker)

    data = {
        "production_name": product,
        "quantity": quantity,
        "memo": memo,
        'worker':worker
    }

    $.ajax({
        url: "/work/api/box-info/",
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
            location.reload();
        },
        error: function (response) {
            console.log(response.responseText);
            alert(response.status);
        }
    })
}
