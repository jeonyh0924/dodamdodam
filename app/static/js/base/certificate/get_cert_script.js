$(document).ready(function(){

    /* 인증서 갱신 날짜 계산 */
    var today = moment().format("YYYY-MM-DD"); // 오늘 날짜
    var afterYear = moment().add(1,'years').format("YYYY-MM-DD"); // 오늘 날짜 기준 + 1년
    var afterMonth = moment().add(6,'month').format("YYYY-MM-DD"); // 오늘 날짜 기준 + 6개월
    var year = moment(afterYear,"YYYY-MM-DD").diff(today,'days'); // 오늘 날짜 기준 1년 일 수 : 365
    var month = moment(afterMonth,"YYYY-MM-DD").diff(today,'days'); // 오늘 날짜 기준 6개월 일 수 : 184

    var exp_date = $(".table tbody tr:nth-child(5) td").text(); // 갱신/만료일
    var diff_exp = moment(exp_date,"YYYY-MM-DD").diff(today,'days'); // 오늘 날짜 기준 갱신/만료일 수

    if(diff_exp < month) {
        $(".table tbody tr:nth-child(5) td").css("background","#ff9e9e");
    }
    else if(diff_exp < year) {
        $(".table tbody tr:nth-child(5) td").css("background","#f5ff9f");
    }
    
    var fileExt = $("#fileExt").val(); // 인증서 파일 # 1
    var fileExtSlice = fileExt.slice(fileExt.lastIndexOf(".") + 1).toLowerCase();

    var fileExt2 = $("#fileExt2").val(); // 인증서 파일 # 2
    var fileExtSlice2 = fileExt2.slice(fileExt2.lastIndexOf(".") + 1).toLowerCase();
    
    if(fileExtSlice == 'jpg' || fileExtSlice == 'jpeg' || fileExtSlice == 'png') {
        $("#pdfDiv").hide();
    }
    else if(fileExtSlice == 'pdf') {
        $("#img").hide();
        PDFObject.embed('/base/media/' + fileExt, "#pdfDiv");
    }

    if(fileExtSlice2 == 'jpg' || fileExtSlice2 == 'jpeg' || fileExtSlice2 == 'png') {
        $("#pdfDiv2").hide();
    }
    else if(fileExtSlice2 == 'pdf') {
        $("#img2").hide();
        PDFObject.embed('/base/media/' + fileExt2, "#pdfDiv2");
    }
});

function exportTables() {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var pk = $("input[name='cert_id']").val();

    $.ajax({
        url: "/base/cert/export-cert/",
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
                a.href = '/base/media/cert/' + id.toString() + "/" + name.toString() + ".xlsx";
                a.download = name.toString() + ".xlsx";
                a.click();
            }
        }
    });
}