$(function() {

    /* 담당자 출력 */
    if($("#id_manager_number").val()) {
        var manager_number = $("#id_manager_number").val().split('`');
    
        for(var i=0; i<manager_number.length;i++){
            var m_num = manager_number[i].split('/');
            if(m_num[1].length == 11) {
                m_num[1] = m_num[1].slice(0,3) + "-" + m_num[1].slice(3,7) + "-" + m_num[1].slice(7);
            }
            if(i==0){
                $("#m_num1").text('H.P : ' + m_num[1]);
                $("#m_name1").text('이름 : ' + m_num[0]);
                // $("#m_kakao1").text('수신여부 : ' + m_num[2]);
            }else{
                var manage_count = $("#manager_count").val();
                var manage_clone = $(".manager_clone").html();
                manage_clone = manage_clone.replace(/manager_name/g,'manager_name' + manage_count);
                manage_clone = manage_clone.replace(/m_num/g,'m_num' + manage_count);
                manage_clone = manage_clone.replace(/m_name/g,'m_name' + manage_count);
                // manage_clone = manage_clone.replace(/m_kakao/g,'m_kakao' + manage_count);
                $(".manager_table").append(manage_clone);
                $("#manager_count").val(manage_count);
                $("#manager_name" + manage_count).text("담당자 정보 # " + manage_count);
                $("#m_num" + manage_count).text('H.P : ' + m_num[1]);
                $("#m_name" + manage_count).text('이름 : ' + m_num[0]);
                // $("#m_kakao" + manage_count).text('수신여부 : ' + m_num[2]);
                manage_count++
                $("#manager_count").val(manage_count);
            }
        }
    }

    var fileExt = $("#fileExt").val(); // 인증서 파일 # 1
    var fileExtSlice = fileExt.slice(fileExt.lastIndexOf(".") + 1).toLowerCase();

    if(fileExtSlice == 'jpg' || fileExtSlice == 'jpeg' || fileExtSlice == 'png') {
        $("#pdfDiv").hide();
    }
    else if(fileExtSlice == 'pdf') {
        $("#img").hide();
        PDFObject.embed('/base/media/' + fileExt, "#pdfDiv");
    }

});

function exportTables() {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = $("input[name='company_id']").val();

    $.ajax({
        url: "/base/company/export-company/",
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
                a.href = '/base/media/company/' + id.toString() + "/" + name.toString() + ".xlsx";
                a.download = name.toString() + ".xlsx";
                a.click();
            }
        }
    });
}