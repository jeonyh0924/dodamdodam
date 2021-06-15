function search2(target, product_name_lst) {
    const obj = product_name_lst;
    console.log(obj)
    $(`input#product_name`).autocomplete({
        search: function (event, ui) { // 검색 대상 색 강조
            setTimeout(() => {
                let w = $(this).autocomplete("widget").find("div"),
                    re = new RegExp("(" + this.value + ")", "i");
                w.html((i, html) =>
                    html.replace(re, "<span style='color:#fe1a1a'>$1</span>")
                );
            }, 0);
        },
        source: obj, // 자동완성 대상
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

function searchTransport(target, transport_lst) {
    const obj = transport_lst;
    console.log(obj)
    $(`input#delivery`).autocomplete({
        search: function (event, ui) { // 검색 대상 색 강조
            setTimeout(() => {
                let w = $(this).autocomplete("widget").find("div"),
                    re = new RegExp("(" + this.value + ")", "i");
                w.html((i, html) =>
                    html.replace(re, "<span style='color:#fe1a1a'>$1</span>")
                );
            }, 0);
        },
        source: obj, // 자동완성 대상
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

function searchCompany(target, company_lst) {
    const obj = company_lst;
    console.log(obj)
    $(`input#company`).autocomplete({
        search: function (event, ui) { // 검색 대상 색 강조
            setTimeout(() => {
                let w = $(this).autocomplete("widget").find("div"),
                    re = new RegExp("(" + this.value + ")", "i");
                w.html((i, html) =>
                    html.replace(re, "<span style='color:#fe1a1a'>$1</span>")
                );
            }, 0);
        },
        source: obj, // 자동완성 대상
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
