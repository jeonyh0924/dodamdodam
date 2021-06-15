let company_chk_count = [0, 0, 0];

$(document).ready(function(){
    /* 첫번째 담당자 출력 */
    $(".table tbody tr").each(function() {
        var m_number = $(this).find('.manager_number').text();

        if(m_number != '') {
            m_number = m_number.split('`');

            var m_number_split = m_number[0].split('/');
            
            if(m_number_split[1].length == 11) {
                m_number_split[1] = m_number_split[1].slice(0,3) + "-" + m_number_split[1].slice(3,7) + "-" + m_number_split[1].slice(7);
            }
    
            $(this).find('.manager_number').text(m_number_split[1] + "(" + m_number_split[0] + ")");
        }
    });

    setTimeout(() => {
        $("#myTable tr").eq(1).children("td[data-column='6']").remove();
        $("#myTable tr").eq(0).children('th').eq(6).attr('rowspan','2');

        $("#myTable-sticky tr").eq(1).children("td[data-column='6']").remove();
        $("#myTable-sticky tr").eq(0).children('th').eq(6).attr('rowspan','2');
    },0);

    // 상단 토글
    $(".info-tab ul li").each(function(i) {
        $(this).click(function() {
            $(".info-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".container-box").hide().eq(i).show();
        });
    }).eq(0).trigger('click');

});

function delModalShow(num){
    if($("input:checkbox[name=companyCheck]:checked").length==0) return
    $("#delModal").css('display','flex').children('.delete-modal-content').animate({
        marginTop : "0"
    },400);
    $("input[name='type']").val(num);
}

function closeDelModal(){
    $(".deleteModal").css('display','none').children('.delete-modal-content').animate({
        marginTop : "50px"
    },400);
}

function exportTables(type) {
    let table;
    let file_name;

    if(type == 'all') {
        table = '#myTable'
        file_name = '업체 목록'
    } else if(type == 'client') {
        table = '#myTable2'
        file_name = '수주처 목록'
    } else if(type == 'order'){
        table = '#myTable3'
        file_name = '발주처 목록'
    }

    new Table2Excel(table, {
        widthRatio : .1,
        plugins: [
            Table2Excel.plugins.alignmentPlugin,
            Table2Excel.plugins.autoWidthPlugin,
            Table2Excel.plugins.fontPlugin,
            Table2Excel.plugins.fillPlugin,
            {
                workcellCreated({ workbook, tables, worksheet, table, workcell, cell, cellStyle, rowRange, colRange }) {
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

                    worksheet.eachRow(function(row, rowNumber) {
                        row.height = 26;
                    });
                }
            }
        ]
    }).export(file_name,'xlsx')
}

