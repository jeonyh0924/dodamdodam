$(document).ready(function () {
    var fileTarget = $('#id_excel_file');
    fileTarget.on('change', function () {
        var cur = $("#id_excel_file").val();
        $("#file_name1").val(cur);
    });
    var message = $("#message").val();
    var pageName = $("#pageName").val();
    if (message != '') {
        alert(message);
        if (pageName == '미입고') {
            location.href = '/data';
        } else if (pageName == '도면') {
            location.href = '/bom';
        } else if (pageName == '포장데이터') {
            location.href = '/data/packing/upload/list';
        }
    }
});

function formSubmit() {
    $(".load_bg").addClass('load_display');
    $('form').submit();
}