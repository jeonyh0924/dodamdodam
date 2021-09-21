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

$(document).ready(function () {
    /* 전체선택 & 각 행 선택 제어 */
    const delBtn = $(".delBtn");
    const cancelBtn = $(".cancelBtn");
    const completeBtn = $(".completeBtn");

    let resultSumData = 0;
    let checkList = new Array();
    // table 각 row 클릭 시
    $(document).on("click", ".includeCheckBox", function () {
        const self = $(this).closest("div");
        const $chk = $(self).find(".hidden_chk");
        const $price = $(self).find(".breadPrice");
        var breadInsId = $($chk).attr('value');
        var price_var = parseInt($($price).attr('value'));
        console.log('value', breadInsId)
        console.log('price', price_var)
        resultSumData += price_var;
        checkList.push(breadInsId);
        console.log(checkList)
        document.getElementById('resultSumData').value =resultSumData;
        // const table_idx = $(self).closest(".table:not('.containsStickyHeaders')").index(".table:not('.containsStickyHeaders')");
        // console.log('table_idx', table_idx)
        // console.log('$chk.length', $chk.length)
        // if ($chk.length > 0) {
        //     if ($chk.prop("checked")) {
        //         $chk.prop("checked", false).trigger('change');
        //         $(self).removeClass("is_chk");
        //         is_chk_count[table_idx]--;
        //     } else {
        //         $chk.prop("checked", true).attr("checked", "checked").trigger('change');
        //         $(self).addClass("is_chk");
        //         is_chk_count[table_idx]++;
        //     }
        // }
        //
        // if (is_chk_count[table_idx] > 0) {
        //     $(delBtn[table_idx]).removeAttr("disabled");
        //     $(cancelBtn[table_idx]).removeAttr("disabled");
        //     $(completeBtn[table_idx]).removeAttr("disabled");
        // } else {
        //     $(delBtn[table_idx]).attr("disabled", "disabled");
        //     $(cancelBtn[table_idx]).attr("disabled", "disabled");
        //     $(completeBtn[table_idx]).attr("disabled", "disabled");
        // }
        if (resultSumData > 10000){
            var btn_status = document.getElementById('submitBtn');
            btn_status.disabled = true;
        }

    });
});
