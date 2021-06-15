$(document).ready(function () {
    var message = $("#message").val();
    var pk = $("#pk").val();
    if (message != '') {
        alert(message);
        location.href = "/bom/detail/" + pk;
    }
    $(".switching-button.tree").hide();
    $(".version-2").hide();
    $(".switching-button.view").css('display', 'inline-block');
    $(".version").css("display", "flex");
});

$(function () {


    let levels = [];
    let max_level;
    let html = '';

    html += `<div class='detail-view'>`;
    html += `   <div class='toggle-box'>`;
    html += `       <div class='toggle plus'><p><img src='/static/css/img/both_arrow.png'>펼치기</p></div>`;
    html += `       <div class='toggle minus'><p><img src='/static/css/img/both_arrow.png'>접기</p></div>`;
    html += `   </div>`;
    html += `   <table>`;
    html += `      <colgroup>`;
    html += `          <col width="10%">`;
    html += `          <col width="35%">`;
    html += `          <col width="30%">`;
    html += `          <col width="25%">`;
    html += `      </colgroup>`;
    html += `      <thead>`;
    html += `          <tr>`;
    html += `              <th>수량</th>`;
    html += `              <th>도면번호</th>`;
    html += `              <th>품명</th>`;
    html += `              <th>스펙</th>`;
    html += `          </tr>`;
    html += `      </thead>`;
    html += `      <tbody>`;
    html += `      </tbody>`;
    html += `   </table>`;
    html += `</div>`;

    $("table.hidden tbody tr").each(function () {
        const $tr = $(this);
        const level = $tr.data('level');

        levels.push(level);
    });

    max_level = Math.max.apply('null', levels);

    for (let i = 0; i <= max_level; i++) {
        $(".detail-wrap").append(html);
    }

    let empty = '';

    empty += `<tr>`;
    empty += `  <td colspan='4' class='empty'>empty</td>`;
    empty += `</tr>`;

    var check = false;
    var levelCheck;

    let count = 0;


    $("table.hidden tbody tr").each(function () {
        var drawing_number = $("#id_drawing_number").val();
        const $tr = $(this);
        const $tr_clone = $tr.clone();                                      // 기존 값이 사라지므로 clone 을 통해 상태 유지
        const level = $tr.data('level');                                    // 해당 도면번호 깊이(단계)
        const $temp = $(".version-2 .detail-wrap .detail-view").eq(level);  // 깊이에 대한 테이블 위치
        var dn = $tr.children().eq(1).text()

        if (dn == drawing_number) {
            check = true
        }
        if (check) {
            $temp.find('tbody').append($tr_clone[0]);

            if ($tr.prev().data('level') < level && $tr.next().data('level') <= level) {
                // 현재 노드 = 이전 노드의 첫번째 자식
                count++;

                // 첫 행에서만 처리하도록 설계
                if (count == 1) {
                    for (let i = max_level; i > level; i--) {
                        $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
                    }
                } else {
                    if ($tr.next().data('level') <= level) {
                        for (let i = max_level; i > level; i--) {
                            $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
                        }
                    }
                }
            }
            if ($tr.prev().data('level') == level && $tr.next().data('level') <= level) {
                // 이전 노드와 부모가 같으면서 자식이 없는 경우
                $temp.closest('.detail-wrap').find('.detail-view').not(`:eq(${level})`).find('tbody').append(empty);
            } else if ($tr.prev().data('level') == level && $tr.next().data('level') > level) {
                // 이전 노드와 부모가 같으면서 자식이 있는 경우
                for (let i = 0; i < level; i++) {
                    $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
                }
            } else if ($tr.prev().data('level') > level && $tr.next().data('level') > level) {
                // 이전 노드와 깊이가 달라지면서 자식이 있는 경우
                for (let i = 0; i < level; i++) {
                    $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
                }
            } else if ($tr.prev().data('level') > level && $tr.next().data('level') <= level) {
                // 이전 노드와 깊이가 달라지면서 자식이 없는 경우
                $temp.closest('.detail-wrap').find('.detail-view').not(`:eq(${level})`).find('tbody').append(empty);
            } else if ($tr.prev().data('level') == level) {
                // 마지막 자식 처리를 위함
                $temp.closest('.detail-wrap').find('.detail-view').not(`:eq(${level})`).find('tbody').append(empty);
            }
        } else {
            levelCheck = level
        }
    });
    if (check) {
        for (var i = levelCheck; i >= 0; i--) {
            $(".version-2 .detail-wrap .detail-view").eq(i).remove();
        }
    }

    /* 상단 스크롤 바 가로 길이 정의 */
    const len_table = $(".detail-wrap .detail-view").length;
    let all_table_width = len_table * 500;
    let table_margin = (len_table - 1) * 10;

    $(".row-scroll.top .scroll").width(all_table_width + table_margin + "px");

    // 스크롤바 제어
    $(".row-scroll.top").scroll(function () {
        $(".row-scroll.bot").scrollLeft($(".row-scroll.top").scrollLeft());
    });

    $(".row-scroll.bot").scroll(function () {
        $(".row-scroll.top").scrollLeft($(".row-scroll.bot").scrollLeft());
    });

    // 접기 / 펼치기
    $(".toggle-box .minus").click(function () {
        $(this).hide();
        $(this).closest('.toggle-box').children('.plus').css('display', 'inline-block');
        const idx = $(this).parent().parent().index();

        for (let i = (idx + 1); i < len_table; i++) {
            $('.detail-wrap').find('.detail-view').eq(i).css('visibility', 'hidden');
            $('.detail-wrap').find('.detail-view .plus').eq(i).css('display', 'none');
            $('.detail-wrap').find('.detail-view .minus').eq(i).css('display', 'inline-block');
        }
    });

    $(".toggle-box .plus").click(function () {
        $(this).hide();
        $(this).closest('.toggle-box').children('.minus').css('display', 'inline-block');
        const idx = $(this).parent().parent().index();

        for (let i = (idx + 1); i < len_table; i++) {
            $('.detail-wrap').find('.detail-view').eq(i).css('visibility', 'visible');
        }
    });

});


$(function () {

    /* tab transform */
    $(".drawing-file .info-tab ul li").each(function (i) {
        $(this).click(function () {
            $(".drawing-file .info-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".drawing-file .info-inner .info-box").hide().eq(i).show();
        });
    }).eq(0).trigger('click');

    $(".drawing-info .info-tab ul li").each(function (i) {
        $(this).click(function () {
            $(".drawing-info .info-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".drawing-info .info-inner .info-box").hide().eq(i).show();
        });
    }).eq(0).trigger('click');

    // 도면정보 토글기능
    $(".switching-button.view").click(function () {
        $(this).hide();
        $(".version").hide();
        $(".switching-button.tree").css('display', 'inline-block');
        $(".version-2").show();
    });

    $(".switching-button.tree").click(function () {
        $(this).hide();
        $(".version-2").hide();
        $(".switching-button.view").css('display', 'inline-block');
        $(".version").css("display", "flex");
    });

    // 각 파일 탭
    $(".drawing-file .file-tab ul li").each(function (i) {
        $(this).click(function () {
            $(".drawing-file .file-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".drawing-file .file").removeClass('display-file').eq(i).addClass('display-file');

            // 업로드 파일이 있는 경우에만 [다운, 수정] 버튼 활성화
            const upload_file = $(".drawing-file .file").eq(i).find('.upload_file').attr('class');
            if (upload_file) {
                if (i == 0) {
                    $(".file-tab #box0").show();
                    $(".file-tab #box1").hide();
                } else {
                    $(".file-tab #box1").show();
                    $(".file-tab #box0").hide();
                }
            } else {
                $(".file-tab #box0").hide();
                $(".file-tab #box1").hide();

            }
        });
    }).eq(0).trigger('click');

    // 각 파일 다운로드 기능
    $(".btn.btn-down").click(function () {
        const link = $(".display-file").children('img').attr("src");
        let a = $("<a>").attr("href", link).attr("download", "download").appendTo("body");
        a[0].click();
        a.remove();
    });

    // 파일별 제목 매칭
    $(".searchModal .filebox input[type='file']").change(function () {
        const file_name = $(this).val();
        const $label = $(this).closest('.filebox').find('.upload-name');

        if (file_name) {
            $label.val(file_name);
        } else {
            $label.val('등록된 파일이 없습니다.');
        }
    });

});

function closeModal() {
    $('.searchModal').hide();
    $(".addPictureFile .table tr").each(function () {
        $(this).addClass('hidden');
    });
    $(".addWorkFile .table tr").each(function () {
        $(this).addClass('hidden');
    });
};

function openPictureFileModal(number) {
    // 2020-10-28 :: 추후 함수 재정의 필요
    $(".addPictureFile .table tr").each(function () {
        if ($(this).data('number') == number) {
            $(this).removeClass('hidden');
        }
    });
    $("#imageNumber").val(number);
    $(".addPictureFile").show();
}

function openWorkFileModal(number) {
    $(".addWorkFile .table tr").each(function () {
        if ($(this).data('number') == number) {
            $(this).removeClass('hidden');
        }
    });
    $("#imageNumber").val(number);
    $(".addWorkFile").show();
}

function submitPictureFile() {
    let fd = new FormData();
    const imageNumber = $("#imageNumber").val();
    const token = $("input[name='csrfmiddlewaretoken']").val();
    if (imageNumber == '1') {
        var image_file = $("input[name='image_file']")[0].files[0];
    } else {
        var image_file = $("input[name='image_file2']")[0].files[0];
    }
    const pk = $("#pk").val();
    fd.append("csrfmiddlewaretoken", token);
    fd.append("image_file", image_file);
    fd.append("pk", pk);
    fd.append("imageNumber", imageNumber);
    $.ajax({
        url: '/bom/image/file/upload',
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (data) {
            alert('전개도 등록이 완료되었습니다.');
            location.reload();
        },
        error: function (request, status, error) {
            alert("code : " + request.status + "\n" + "message : " + request.responseText + "\n" + "error : " + error);
        }
    });
}

function submitDownloadFile() {
    let fd = new FormData();
    const token = $("input[name='csrfmiddlewaretoken']").val();
    const fileNumber = $("#imageNumber").val();
    if (fileNumber == '1') {
        var download_file = $("input[name='download_file']")[0].files[0];
    } else {
        var download_file = $("input[name='download_file2']")[0].files[0];
    }
    const pk = $("#pk").val();
    fd.append("csrfmiddlewaretoken", token);
    fd.append("download_file", download_file);
    fd.append("pk", pk);
    fd.append("fileNumber", fileNumber);
    $.ajax({
        url: '/bom/download/file/upload',
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (data) {
            alert('파일 등록이 완료되었습니다.');
            location.reload();
        },
    });
}

function submitBomStock() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    const pk = $(".bomStock input[name='object_id']").val();
    const after_count = $("input[name='after_count']").val();
    const memo = $("input[name='memo']").val();
    $.ajax({
        url: '/bom/bomStock/update',
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            pk: pk,
            after_count: after_count,
            memo: memo

        },
        success: function (data) {
            alert('현재고 변경되었습니다.');
            location.reload();
        },
    });
}

function openCADFileModal() {
    $(".addCADFile").show();
}

function openStockModal(obj) {
    $(".bomStock").show();
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var url = '/bom/bomstock/'
    $.ajax({
        url: url,
        method: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            obj: obj,
        },
        success: function (data) {
            $("#bomStock_factory").text(data['now_factory']);
            $("#bomStock_count").text(data['now_count']);
            $("#bomStock_process").text(data['now_process']);
            $(".bomStock input[name='object_id']").val(obj);
        }
    });
}


function modalShow(obj) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var url = '/bom/bomstock/'
    $.ajax({
        url: url,
        method: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            obj: obj,
        },
        success: function (data) {
            $("#now_factory").text(data['now_factory']);
            $("input[name='factory']").val(data['factory']);
            $("#now_count").text(data['now_count']);
            $("#now_process").val(data['now_process']);
            var chocies = data['factory_list'];
            var target = document.getElementById("id_after_process");
            target.options.length = 0;
            for (var i = 0; i < chocies.length; i++) {
                var opt = document.createElement("option");
                opt.value = chocies[i].factory;
                opt.innerHTML = chocies[i].factory;
                target.appendChild(opt);
            }
        }

    });
    $("#transfer_modal").show();
}