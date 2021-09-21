// 완제품 재고 및 출하지시 페이지와 변수 공유를 위해 전역 스코프 선언
let is_chk_count = [0, 0, 0, 0, 0]

$(document).ready(function () {
    /* 전체선택 & 각 행 선택 제어 */
    const delBtn = $(".delBtn");
    const cancelBtn = $(".cancelBtn");
    const completeBtn = $(".completeBtn");

    // table 각 row 클릭 시
    $(document).on("click", ".includeCheckBox .table tbody tr", function () {
        console.log('test')
        const self = $(this).closest("tr");
        const $chk = $(self).find(".hidden_chk");
        const table_idx = $(self).closest(".table:not('.containsStickyHeaders')").index(".table:not('.containsStickyHeaders')");

        if ($chk.length > 0) {
            if ($chk.prop("checked")) {
                $chk.prop("checked", false).trigger('change');
                $(self).removeClass("is_chk");
                is_chk_count[table_idx]--;
            } else {
                $chk.prop("checked", true).attr("checked", "checked").trigger('change');
                $(self).addClass("is_chk");
                is_chk_count[table_idx]++;
            }
        }

        if (is_chk_count[table_idx] > 0) {
            $(delBtn[table_idx]).removeAttr("disabled");
            $(cancelBtn[table_idx]).removeAttr("disabled");
            $(completeBtn[table_idx]).removeAttr("disabled");
        } else {
            $(delBtn[table_idx]).attr("disabled", "disabled");
            $(cancelBtn[table_idx]).attr("disabled", "disabled");
            $(completeBtn[table_idx]).attr("disabled", "disabled");
        }
    });

    // 전체 선택
    $(".checkAll").click(function () {
        const table_idx = $(this).closest(".listTopBtn").next(".table").index(".table:not('.containsStickyHeaders')");
        const $chk = $(this).closest(".listTopBtn").next(".table").find("tbody tr:not('.child_row') .hidden_chk");
        const row_count = $chk.length;

        if (is_chk_count[table_idx] == row_count) {
            $chk.closest("tr:not(.hidden)").click();
        } else {
            $chk.each(function () {
                if (!$(this).prop("checked")) {
                    $(this).closest("tr:not(.hidden)").click();
                }
            });
        }
    });
    // 이벤트 버블링 막기
    $(".tdBtn.detail, .tdBtn.part, .tdInput, .downBtn, .modalBtn").click(function (e) {
        e.stopPropagation();
    });

    setTimeout(() => {
        if ($("#id_start").length != 0) {
            var date = $("#id_start").val();
            if (date != '') {
                $('#id_end').data("DateTimePicker").minDate(date);
            }
        }
        if ($("#id_worker_start").length != 0) {
            var date = $("#id_worker_start").val();
            if (date != '') {
                var oldDate = new Date(Date.parse(date) + 30 * 1000 * 60 * 60 * 24);
                $('#id_worker_end').data("DateTimePicker").minDate(date);
                $('#id_worker_end').data("DateTimePicker").maxDate(oldDate);
            }
        }
        $("#id_worker_start").on('dp.change', function () {
            var date = $("#id_worker_start").val();
            var oldDate = new Date(Date.parse(date) + 30 * 1000 * 60 * 60 * 24);
            $('#id_worker_end').data("DateTimePicker").minDate(date);
            $('#id_worker_end').data("DateTimePicker").maxDate(oldDate);
        });
        $("#id_start").on('dp.change', function () {
            var date = $("#id_start").val();
            $('#id_end').data("DateTimePicker").minDate(date);
        });
    }, 0);

    var nav_ht = $("nav").outerHeight();
    $("#modal > div").css({
        marginTop: nav_ht + 50
    });

    /* Toggle Check */
    $(".switch").each(function () {
        if ($(this).children('input').val() == "True") {
            $(this).children('input').prop('checked', true);
            $(".switch").css("background", "linear-gradient(to left, #6bb9fb, #1e80e6)");
            $(".switch .handle").css("left", "45px");
        } else {
            $(this).children('input').prop('checked', false);
            $(".switch").css("background", "linear-gradient(to right, #828282, #313131)");
            $(".switch .handle").css("left", "5px");
        }
        $(this).children('input').change(function () {
            if ($(this).prop('checked')) {
                $(this).val('True');
                $(".switch").css("background", "linear-gradient(to left, #6bb9fb, #1e80e6)");
                $(".switch .handle").animate({
                    left: "45px"
                }, 200);
            } else {
                $(this).val('False');
                $(".switch").css("background", "linear-gradient(to right, #828282, #313131)");
                $(".switch .handle").animate({
                    left: "5px"
                }, 200);
            }
        });
    });

    /* input[type='number'] 음수 방지 */
    $("input[type='number']").keydown(function (e) {
        if (!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 8 || e.keyCode == 9)) {
            return false;
        }
    });

    // Modal 외부 클릭 시 close 처리
    window.onclick = function (e) {
        for (let i = 0; i < $(".searchModal").length; i++) {
            if (e.target == $(".searchModal")[i]) {
                $('.searchModal').hide();
            }
        }
    };

    // 패드 화면 -> 안드로이드 환경
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.match('android') != null) {
        $("body").addClass('pad');
        $("body.pad").css("display", "block");
    } else {
        $("body").css("display", "block");
    }

    // $(".datetimepicker").datetimepicker({
    //     format: 'YYYY-MM-DD',
    //     locale: 'ko',
    //     showClear: true,
    //     showTodayButton: true,
    //     showClose: true,
    //     date: moment().format("YYYY-MM-DD")
    // });
    //
    // $(".datetimepicker_update").datetimepicker({
    //     format: 'YYYY-MM-DD',
    //     locale: 'ko',
    //     showClear: true,
    //     showTodayButton: true,
    //     showClose: true
    // });
    //
    //
    // $(document).on("click", ".input-group-addon", function () {
    //     $(this).prev(".datetimepicker").focus();
    //     $(this).prev(".datetimepicker_update").focus();
    // });

});
$(window).resize(function () {
    var nav_ht = $("nav").outerHeight();
    $("#modal > div").css({
        marginTop: nav_ht + 50
    });
});

function dateSearch() {
    var startDate = $('#id_start').val();
    var endDate = $('#id_end').val();
    if (startDate == "" || endDate == '') {
        alert('기준날짜를 설정해주세요');
        return
    }
    if (startDate > endDate) {
        alert('검색할 날짜를 재설정해주세요.');
        return;
    } else {
        $("#dateForm").submit();
    }
}

function PatternInspection(obj) {
    var pattern_eng = /[a-zA-Z]/g;	// 영어
    var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g; //한글
    var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/g; // 특수문자


    obj = obj.replace(pattern_kor, '');
    obj = obj.replace(pattern_eng, '');
    obj = obj.replace(pattern_spc, '');
    obj = obj.replace(/-/g, '');

    return obj

}

function pieChartCreate(ctx, pieLabels, pieData, unit) { //파이차트 만들기 ctx : 차트 만들 영역 pieLabels : 라벨들 pieData: data들 unit: 앞에 들어갈 기호 나누기
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pieLabels,
            datasets: [{
                data: pieData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            }],
        },
        options: {
            legend: {
                position: 'bottom',
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    }
                }]
            },
            plugins: {
                datalabels: {
                    color: '#111',
                    align: 'top',
                    anchor: 'top',
                    font: {
                        lineHeight: 1.6
                    },
                    formatter: function (value, ctx) {
                        if (unit == "time") {
                            return value + "분";
                        }
                        if (unit == "count") {
                            return value + "건";
                        }
                        if (unit == "money") {
                            if (value == 0) {
                                return '';
                            } else {
                                return '₩' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }

                    }
                }
            }
        }
    });
    myPieChart.update();
}

function lineChartCreate(ctx, label, date, count, unit) {
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: label,
                data: count,
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false, // line의 아래쪽을 색칠할 것인가?
                borderColor: 'rgb(255, 99, 132)',
            }],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            if (unit == "money") {
                                return '₩' + value;
                            } else {
                                return value;
                            }
                        }
                    }
                }]
            },
            plugins: {
                datalabels: {
                    color: '#111',
                    align: 'right',
                    anchor: 'top',
                    font: {
                        lineHeight: 1.6
                    },
                    formatter: function (value, ctx) {
                        if (unit == "count") {
                            if (value != 0) {
                                return value + "건";
                            } else {
                                return '';
                            }
                        }
                        if (unit == "money") {
                            if (value == 0) {
                                return '';
                            } else {
                                return '₩' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        }
                        if (unit == "time") {
                            if (value != 0) {
                                return value + "분";
                            } else {
                                return '';
                            }
                        }
                        if (unit == "login") {
                            if (value != 0) {
                                return value + "회";
                            } else {
                                return '';
                            }
                        }
                    }
                }
            }
        }
    });

    myLineChart.update();
}

function reportCheck() {
    var startDate = $('#id_worker_start').val();
    var endDate = $('#id_worker_end').val();
    if (startDate == "" || endDate == '') {
        alert('기준날짜를 설정해주세요');
        return
    }
    if (startDate > endDate) {
        alert('검색할 날짜를 재설정해주세요.');
        return;
    } else {
        $("#reportForm").submit();
    }
}

/* 기본 폼 전송 */
function formSubmit() {
    $("form").submit();
}

/* 3자리 단위마다 콤마 생성 */
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* 콤마 제거 */
function removeComma(str) {
    n = parseInt(str.toString().replace(/,/g, ""));
    return n;
}

function infoDel(obj, target) {
    if ($("input:checkbox[name=" + obj + "Check]:checked").length == 0) return
    var checkList = new Array();
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var type = $(target).closest(".deleteModal").find("[name='type']").val();
    if (type == 'all') {
        for (var i = 2; i < $('#myTable tr').length; i++) {
            var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
            if (chk == true) {
                var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
                var check = {id: id};
                checkList.push(check);
            }
        }
    } else if (type == 'client') {
        for (var i = 2; i < $('#myTable2 tr').length; i++) {
            var chk = $('#myTable2 tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
            if (chk == true) {
                var id = $('#myTable2 tr').eq(i).children().find('input[type="checkbox"]').val();
                var check = {id: id};
                checkList.push(check);
            }
        }
    } else if (type == 'order') {
        for (var i = 2; i < $('#myTable3 tr').length; i++) {
            var chk = $('#myTable3 tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
            if (chk == true) {
                var id = $('#myTable3 tr').eq(i).children().find('input[type="checkbox"]').val();
                var check = {id: id};
                checkList.push(check);
            }
        }
    } else {
        for (var i = 2; i < $('#myTable tr').length; i++) {
            var chk = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
            if (chk == true) {
                var id = $('#myTable tr').eq(i).children().find('input[type="checkbox"]').val();
                var check = {id: id};
                checkList.push(check);
            }
        }
    }

    console.log('checkList', checkList)

    $.ajax(
        {
            url: "/del/",
            method: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                tableIndex: obj,
                checkList: JSON.stringify(checkList)
            },
            success: function (data) {
                if (data.result == 'success') {
                    alert('삭제가 완료되었습니다.')
                    location.reload();
                }
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
            }
        }
    );
}

/* 테이블 셀 자동 병합 */
function fn_autoHtmlTrRowspanClass(selector, tdIdxSep, idxInExYn, trChkYn, tdIdxChkSep) {

    var selectorStr = "." + selector;
    fn_autoHtmlTrRowspan(selectorStr, tdIdxSep, idxInExYn, trChkYn, tdIdxChkSep);
}

function fn_autoHtmlTrRowspanId(selector, tdIdxSep, idxInExYn, trChkYn, tdIdxChkSep) {

    var selectorStr = "#" + selector;
    fn_autoHtmlTrRowspan(selectorStr, tdIdxSep, idxInExYn, trChkYn, tdIdxChkSep);
}


function fn_autoHtmlTrRowspan(selector, tdIdxSep, idxInExYn, trChkYn, tdIdxChkSep) {

    var trObj;							// TBODY TR object
    var trIdx;							// TR index
    var tdObj;							// TBODY TD object
    var tdIdx;							// TD index
    var tdTxt;							// TD text
    var nextRwTdObj;				// next row TD Object
    var nextRwTdTxt;				// next row TD text
    var rwspNum;						// RowSpan number
    var tempTdObj;					// set RowSpan target TD object

    var chkBoolean = true;	// check use Flag
    var compChildTdObj;	    // compare TR children TD Object Array
    var compCurrTdObjTxt;		// compare TR children Current Row TD text(Array Index)
    var compNextTdObjTxt;		// compare TR children Next Row TD text(Array Index)
    var flagCnt = 0;				// Not RowSpan count

    var idxArr;
    var idxBoolean = true;			// default(true) : idxArr only rowspan, false : idxArr not rowspan

    var idxNonChkArr;						// choice compare TR children TD Array

    // parameter check
    if (tdIdxSep != undefined) {
        idxArr = tdIdxSep.split(",", -1);
    }

    // parameter check
    if (idxInExYn != undefined) {
        idxBoolean = eval(idxInExYn);
    }

    // parameter check
    if (trChkYn != undefined) {
        chkBoolean = eval(trChkYn);
    }

    // parameter check
    if (tdIdxChkSep != undefined) {
        idxNonChkArr = tdIdxChkSep.split(",", -1);
    }

    $(selector).find("tr").each(function (i) {

        trObj = $(this);
        trIdx = $(trObj).index();

        $(trObj).find("td").each(function (j) {

            tdObj = $(this);
            tdIdx = $(tdObj).index();
            tdTxt = $.trim($(tdObj).text());
            nextRwTdObj = $(trObj).next().find("td:eq(" + tdIdx + ")");
            nextRwTdTxt = $.trim($(nextRwTdObj).text());

            if ($(tdObj).css("visibility") == "hidden") {

                // current prevAll only visibility TD Array
                tempTdObj = $(trObj).prevAll("tr").find("td:eq(" + tdIdx + ")").filter(":visible");
                tempTdObj = $(tempTdObj)[$(tempTdObj).size() - 1];	// array last is closest
                rwspNum = $(tempTdObj).prop("rowspan") + 1;

                /* rowspan and display:none */
                $(tempTdObj).prop("rowspan", rwspNum);
                $(tdObj).hide();
            }

            flagCnt = 0;	// initialization

            if (chkBoolean && tdIdx != 0) {
                compChildTdObj = new Array();

                var tempIdx;
                var ifStr = "";
                var idxStr = "";

                // tr in td All or td choice
                if (idxNonChkArr != undefined) {
                    // make tr in td array for check
                    $.each(idxNonChkArr, function (x) {     // choice td
                        tempIdx = Number(idxNonChkArr[x]);
                        compChildTdObj[x] = $(trObj).find("td:eq(" + tempIdx + ")");
                        //console.log($(compChildTdObj[x]).prop("outerHTML"));
                    });

                    ifStr = "tempIdx < tdIdx";
                    idxStr = "tempIdx";
                } else {
                    // make tr in td array for check
                    compChildTdObj = $(trObj).children("td");  // all td

                    ifStr = "m < tdIdx";
                    idxStr = "m";
                }

                // this TR children TD check(low index TD RowSpan possible) : 앞쪽 td의 rowspan을 초과 못함
                $.each(compChildTdObj, function (m) {

                    tempIdx = $(compChildTdObj[m]).index();

                    if (eval(ifStr)) {

                        compCurrTdObjTxt = $(trObj).find("td:eq(" + eval(idxStr) + ")").text();
                        compNextTdObjTxt = $(trObj).next().find("td:eq(" + eval(idxStr) + ")").text();

                        // not RowSpan
                        if (compCurrTdObjTxt != compNextTdObjTxt) {
                            flagCnt++;
                        }
                    }
                });	// TD check each end
            }

            if (tdTxt == nextRwTdTxt && flagCnt == 0) {
                $(nextRwTdObj).css("visibility", "hidden");	// not equal display:none
            }

            if (idxArr != undefined) {
                if (idxBoolean) {
                    // idxArr only rowspan
                    if (idxArr.indexOf(tdIdx.toString()) == -1) {
                        $(nextRwTdObj).css("visibility", "");	// remove style visibility, not RowSpan
                    }
                } else {
                    // idxArr not rowspan
                    if (idxArr.indexOf(tdIdx.toString()) > -1) {
                        $(nextRwTdObj).css("visibility", "");	// remove style visibility, not RowSpan
                    }
                }
            }
        });	// TD each end
    });	// TR each end
}

// 셀렉터 검색 기능
function ApplyChoices(select_box, json_idx, obj) {
    for (let i = 0; i < select_box.length; i++) {
        const element = document.querySelector(`.js-choice-${select_box[i]}`);
        const choices = new Choices(element, {
            searchResultLimit: 1000,
            searchFields: ['label', 'value'],
            shouldSort: false,
            callbackOnCreateTemplates: function (template) {
                return {
                    item: (classNames, data) => {
                        return template(`
                            <div class="${classNames.item} ${
                            data.highlighted
                                ? classNames.highlightedState
                                : classNames.itemSelectable
                        } ${
                            data.placeholder ? classNames.placeholder : ''
                        }" data-item data-id="${data.id}" data-value="${data.value}" ${
                            data.active ? 'aria-selected="true"' : ''
                        } ${data.disabled ? 'aria-disabled="true"' : ''} data-cls='${json_idx}' data-price='${obj}'>
                                ${data.label}
                            </div>
                        `);
                    }
                };
            }
        });

        const $dropdown_list = $(`.js-choice-${select_box[i]}`).parent().next();

        $dropdown_list.find(".choices__input").keyup(function () {
            const inputValue = $(this).val().toUpperCase();

            $dropdown_list.find(".choices__item--choice").each(function () {
                const searchValue = $(this).text().toUpperCase();

                if (searchValue.indexOf(inputValue) < 0) {
                    $(this).remove();
                }
            });

            if ($.trim($dropdown_list.find(".choices__list").html()) === '') {
                $dropdown_list.find(".choices__list").html("<div class='choices__item choices__item--choice has-no-results'>No results found</div>");
            }
        });
    }
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function searchToData(target, author_name_lst) {
    const author = author_name_lst;
    $(`input#author`).autocomplete({
        search: function (event, ui) { // 검색 대상 색 강조
            setTimeout(() => {
                let w = $(this).autocomplete("widget").find("div"),
                    re = new RegExp("(" + this.value + ")", "i");
                w.html((i, html) =>
                    html.replace(re, "<span style='color:#fe1a1a'>$1</span>")
                );
            }, 0);
        },
        source: author, // 자동완성 대상
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

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}
