$('body').on('keydown', '#id_search_word', function (key) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var index_type = $("input[name='index_type']").val(); // 공정 페이지 이동을 위해 process를 가져옴

    if (key.keyCode == 13) {
        let order_id = $('#id_search_word').val();

        if (order_id == '') return
        console.log('order_id', order_id)
        location.href = `/work/job-process/${order_id}/`
        // $.ajax({
        //     url: `/work/job-process/${order_id}/`,
        //     method: 'GET',
        //     dataType: 'json',
        //     data: {
        //         csrfmiddlewaretoken: token,
        //         order_id: order_id,
        //         index_type: index_type
        //     },
        //     success: function (data) {
        //         let result = data.result;
        //         let pk = data.pk;
        //
        //         if (index_type == 'cut') {
        //             if (result == 'NotProvision') {
        //                 // 절단지시서 상 규격 데이터 필요
        //                 $(".errorWorkOrder span.spec").text(pk);
        //                 $(".errorWorkOrder").show();
        //             } else if (result == 'NotExist') {
        //                 //$(".notExist").show();
        //                 alert('존재하지 않는 지시번호 입니다.')
        //             } else {
        //                 // 페이지 연결
        //                 location.href = '/work/cutting/work/' + pk;
        //             }
        //         } else if (index_type == 'pack') {
        //             if (result == 'NotExist') {
        //                 //$(".notExist").show();
        //                 alert('존재하지 않는 지시번호 입니다.')
        //             } else {
        //                 location.href = '/work/packing/main-work/' + pk;
        //             }
        //         } else if (index_type == 'material') {
        //             if (result == 'NotExist') {
        //                 //$(".notExist").show();
        //                 alert('존재하지 않는 지시번호 입니다.')
        //             } else if (result == 'NotReturn') {
        //                 alert('반환처리 되지 않은 Lot 입니다.')
        //             } else if (result == 'CANCEL') {
        //                 alert('취소처리번호 입니다.')
        //             } else if (result == 'COMPLT') {
        //                 alert('완료처리번호 입니다.')
        //             } else if (result == 'c') {
        //                 location.href = '/work/material/provision/' + pk;
        //             } else if (result == 'ro') {
        //                 location.href = '/work/material/rope/wrhs/' + pk;
        //             } else if (result == 'po') {
        //                 location.href = '/work/material/pack/wrhs/' + pk;
        //             } else {
        //                 location.href = '/work/material/legacy/wrhs/' + pk;
        //             }
        //
        //
        //         } else if (index_type == 'shipment') {
        //             if (result == 'NotExist') {
        //                 //$(".notExist").show();
        //                 alert('존재하지 않는 지시번호 입니다.')
        //             } else if (result == 'CANCEL') {
        //                 alert('취소 된 출하지시 번호 입니다.')
        //             } else if (result == 'NotShipment') {
        //                 alert('출하지시가 내려지지 않았습니다.')
        //             } else {
        //                 location.href = '/work/shipment/work/' + pk;
        //             }
        //         }
        //     }
        // })
    }
})