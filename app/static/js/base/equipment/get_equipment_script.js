$(function() {
    /* 파일명만 출력되도록 처리 */
    $(".table tbody tr .file-name").each(function() {
        let file_path = $(this).text();

        if(file_path) {
            file_path = file_path.split("/");
            $(this).text(file_path[file_path.length - 1]);
        }
    });

    /* 평가항목 출력 */
    let items;
    let html = '';
    const evaluation_items = $("#id_evaluation_item").val();

    if(evaluation_items) {
        items = evaluation_items.split(",");
    
        for(let i=0; i<items.length; i++) {
            let item;
            item = items[i].split("/");

            html += `<tr>`;
            html += `   <th class="alignLeft" colspan="3">평가항목 # ${i+1}</th>`;
            html += `</tr>`;
            html += `<tr>`;
            html += `    <td colspan="2" class="alignLeft">${item[0]}</td>`;
            html += `    <td class="alignRight">${addCommas(item[1])} 점</td>`;
            html += `</tr>`;
        }

        $(".append").after(html);
    }

});

function exportTables() {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = $("input[name='equipment_id']").val();

    $.ajax({
        url: "/base/equipment/export-equipment/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            pk: pk,
        },
        success:function(data) {
            if(data.result =='success'){
                var id = data.id;
                var name = data.name;

                var a = document.createElement('a');
                a.href = '/base/media/equipment/' + id.toString() + "/" + name.toString() + ".xlsx";
                a.download = name.toString() + ".xlsx";
                a.click();
            }
        }
    });
}