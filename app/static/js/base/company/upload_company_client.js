function fileText2(obj) {
    var fileId = obj.id
    var file_value = obj.value;

    file_value_slice = file_value.slice(file_value.lastIndexOf(".") + 1).toLowerCase();

    if(file_value_slice == "xlsx") {
        $("#"+fileId+"_name").val(file_value);
    }
    else {
        alert('올바르지 않은 파일 형식입니다.\n지원하는 형식 : xlsx');
        file_value = '';
        $("#"+fileId+"_name").val('등록된 파일이 없습니다.');
    }
}

function addCompanyFileUpload(){
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var order_id = $("#order_id").val();
    var file = $('#id_worksheet_file')[0].files[0];
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken",token);
    formData.append("file",file);
    $.ajax(
        {
            url: "/base/upload-agency-exec/",
            method: 'POST',
            enctype: "multipart/form-data",
            data:formData,
            processData: false,
            contentType: false,
            success:function(data){
                location.href ="/base/company/list/"
            },
        }
    );
}