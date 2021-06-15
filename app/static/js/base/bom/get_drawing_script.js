$(function() {

    /* tab transform */
    $(".drawing-file .info-tab ul li").each(function(i) {
        $(this).click(function() {
            $(".drawing-file .info-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".drawing-file .info-inner .info-box").hide().eq(i).show();
        });
    }).eq(0).trigger('click');

    $(".drawing-info .info-tab ul li").each(function(i) {
        $(this).click(function() {
            $(".drawing-info .info-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".drawing-info .info-inner .info-box").hide().eq(i).show();
        });
    }).eq(0).trigger('click');

    // 도면정보 토글기능
    $(".switching-button.view").click(function() {
        $(this).hide();
        $(".version").hide();
        $(".switching-button.tree").css('display','inline-block');
        $(".version-2").show();
    });

    $(".switching-button.tree").click(function() {
        $(this).hide();
        $(".version-2").hide();
        $(".switching-button.view").css('display','inline-block');
        $(".version").css("display","flex");
    });

    // 전개도 - 각 파일 탭
    $(".drawing-file .file-tab ul li").each(function(i) {
        $(this).click(function() {
            
            $(".drawing-file .file-tab ul li").removeClass('act');
            $(this).addClass('act');
            $(".drawing-file .file").removeClass('display-file').eq(i).addClass('display-file');

            // 업로드 파일이 있는 경우에만 [다운, 수정] 버튼 활성화
            const upload_file = $(".drawing-file .file").eq(i).find('.upload_file').attr('class');
            
            if(upload_file) {
                $(".file-tab .btn-box").show();
            } else {
                $(".file-tab .btn-box").hide();
            }
        });
    }).eq(0).trigger('click');

    // 전개도 - 각 파일 다운로드 기능
    $(".btn.btn-down").click(function() {
        const link = $(".display-file").children('img').attr("src");
        let link_split;
        let file_name;

        if(link) {
            link_split = link.split("/");
            file_name = link_split[link_split.length - 1];
        }

        let a = $("<a>").attr("href", link).attr("download",file_name).appendTo("body");
        a[0].click();
        a.remove();
    });

    // 전개도 - 파일별 제목 매칭
    $(".searchModal .filebox input[type='file']").change(function() {
        const file_name = $(this).val();
        const $label = $(this).closest('.filebox').find('.upload-name');

        if(file_name) {
            $label.val(file_name);
        } else {
            $label.val('등록된 파일이 없습니다.');
        }
    });

    // 전개도 - 파일 수정
    $(".btn-mod").click(function() {
        $(".info-box .file").each(function() {
            if($(this).hasClass("display-file")) {
                const number = $(this).data("number");

                openPictureFileModal(number);
            }
        });
    });

    // 파일명만 출력
    $(".table tbody tr .upload-name").each(function() {
        let file_path = $(this).val();

        if(file_path) {
            file_path = file_path.split("/");
            $(this).val(file_path[file_path.length - 1]);
        } else {
            $(this).val("등록된 파일이 없습니다.");
            $(this).closest(".filebox").find(".updateFileClear").remove();
        }
    });

    $(".file-view .file_link").each(function() {
        let file_path = $(this).text();

        if(file_path) {
            file_path = file_path.split("/");
            $(this).text(file_path[file_path.length - 1]);
        }
    });
});

function closeModal() {
    $('.searchModal').hide();
};

// 전개도 파일 모달창
function openPictureFileModal(number){
    $(".addPictureFile .table tr").each(function() {
        if($(this).data('number') == number) {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });

    $(".addPictureFile").show();
}

function submitPictureFile(type, root) { 
    const token = $("input[name='csrfmiddlewaretoken']").val();
    const pk = $("input[name='drawing_number']").val();
    let formData = new FormData();

    formData.append("csrfmiddlewaretoken", token);
    formData.append("type", type);  // 전개도, CAD, 작업 파일 구분

    $("."+root).find("table tr").each(function() {
        if(!$(this).hasClass("hidden")) {
            const num = $(this).data("number"); // 각 파일 1,2 구분
            const file = $(this).find(".picture_file")[0].files[0];
            const name = $(this).find(".upload-name").val();
            
            if(file) {
                formData.append("num", num);
                formData.append("files", file);
            }  

            if(name == '등록된 파일이 없습니다.') {
                formData.append("delete", num);
            }
        }
    });

    $.ajax({
        url: '/base/bom/upload-etc/' + pk,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success:function(data){
            alert('파일 등록이 완료되었습니다.');
            location.reload();
        },
        error:function(request, status, error) {
            alert("code : " + request.status + "\n" + "message : " + request.responseText + "\n" + "error : " + error);
        }
    });
}

function openCADFileModal(){
    $(".addCADFile").show();
}

function openWorkFileModal(){
    $(".addWorkFile").show();
}

function fileClear(target) {
    const $file_box = $(target).closest(".filebox");
    
    $file_box.find(".upload-name").val('등록된 파일이 없습니다.');
    $file_box.find(".picture_file").val('');
    
    $(target).remove();
}