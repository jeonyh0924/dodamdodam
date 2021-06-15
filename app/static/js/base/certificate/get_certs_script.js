$(document).ready(function () {
    /* 인증서 갱신 날짜 계산 */
    var today = moment().format("YYYY-MM-DD"); // 오늘 날짜
    var afterYear = moment().add(1, 'years').format("YYYY-MM-DD"); // 오늘 날짜 기준 + 1년
    var afterMonth = moment().add(6, 'month').format("YYYY-MM-DD"); // 오늘 날짜 기준 + 6개월
    var year = moment(afterYear, "YYYY-MM-DD").diff(today, 'days'); // 오늘 날짜 기준 1년 일 수 : 365
    var month = moment(afterMonth, "YYYY-MM-DD").diff(today, 'days'); // 오늘 날짜 기준 6개월 일 수 : 184

    $(".listView table tbody td:nth-child(6)").each(function () {

        var exp_date = $(this).text(); // 갱신/만료일
        var diff_exp = moment(exp_date, "YYYY-MM-DD").diff(today, 'days'); // 오늘 날짜 기준 갱신/만료일 수

        if (diff_exp < month) {
            $(this).css("background", "#ff9e9e");
        } else if (diff_exp < year) {
            $(this).css("background", "#f5ff9f");
        }

    });

    setTimeout(() => {
        $("#myTable tr").eq(1).children("td[data-column='5']").remove();
        $("#myTable tr").eq(0).children('th').eq(5).attr('rowspan', '2');

        $("#myTable-sticky tr").eq(1).children("td[data-column='5']").remove();
        $("#myTable-sticky tr").eq(0).children('th').eq(5).attr('rowspan', '2');
    }, 0);

});

function delModalShow() {
    if ($("input:checkbox[name=certCheck]:checked").length == 0) return
    $("#delModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}

function exportTables() {
    new Table2Excel('#myTable', {
        widthRatio: .1,
        plugins: [
            Table2Excel.plugins.alignmentPlugin,
            Table2Excel.plugins.autoWidthPlugin,
            Table2Excel.plugins.fontPlugin,
            Table2Excel.plugins.fillPlugin,
            {
                workcellCreated({workbook, tables, worksheet, table, workcell, cell, cellStyle, rowRange, colRange}) {
                    worksheet.getRow(2).hidden = true
                    worksheet.getColumn(6).hidden = true

                    workcell.border = {
                        top: {
                            style: 'thin'
                        },
                        left: {
                            style: 'thin'
                        },
                        bottom: {
                            style: 'thin'
                        },
                        right: {
                            style: 'thin'
                        }
                    };

                    worksheet.eachRow(function (row, rowNumber) {
                        row.height = 26;
                    });
                }
            }
        ]
    }).export('인증서목록', 'xlsx')
}