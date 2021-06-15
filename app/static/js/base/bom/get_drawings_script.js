$(function () {
    setTimeout(() => {
        $("#myTable tr").eq(1).children("td[data-column='9']").remove();
        $("#myTable tr").eq(0).children('th').eq(9).attr('rowspan', '2');

        $("#myTable-sticky tr").eq(1).children("td[data-column='9']").remove();
        $("#myTable-sticky tr").eq(0).children('th').eq(9).attr('rowspan', '2');
    }, 0);

    // 각 파일 갯수 출력
    $("#myTable tbody tr").each(function () {
        const $td = $(this).children();

        $td.each(function (i) {
            const $upload_file = $(this).find("[name='upload_file']");
            let count = 0;

            $upload_file.each(function () {
                if ($(this).val()) {
                    count++;
                }
            });

            // CAD 파일 갯수
            if (i == 4) {
                $(this).find(".cad_count").text(count);
            }

            // 그림 파일 갯수
            if (i == 5) {
                $(this).find(".diagram_count").text(count);
            }

            // 작업 파일 갯수
            if (i == 6) {
                $(this).find(".work_count").text(count);
            }
        });
    });
});

function delModalShow() {
    if ($("input:checkbox[name=drawingCheck]:checked").length == 0) return
    $("#delModal").css('display', 'flex').children('.delete-modal-content').animate({
        marginTop: "0"
    }, 400);
}

function closeDelModal() {
    $(".deleteModal").css('display', 'none').children('.delete-modal-content').animate({
        marginTop: "50px"
    }, 400);
}

/* BOM 일괄 다운로드 */
function DownloadZipFile(arFileArray, sZipFileName) {

    var Promise = window.Promise;

    if (!Promise) {
        Promise = JSZip.external.Promise;
    }

    function urlToPromise(url) {
        return new Promise(function (resolve, reject) {
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    if (!JSZip.support.blob) {
        showError("This demo works only with a recent browser !");
        //return;
    }

    var zip = new JSZip();

    for (var i = 0; i < arFileArray.length; i++) {
        var url = arFileArray[i];
        var filename = url.replace(/.*\//g, "");
        zip.file(filename, urlToPromise(url), {binary: true});
    }

    zip.generateAsync({type: "blob"}, function updateCallback(metadata) {
    })
        .then(function callback(blob) {
            // see FileSaver.js
            saveAs(blob, sZipFileName);
        }, function (e) {
            showError(e);
        });
}

function ExportBOM() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    const currentDate = moment().format("YYMMDD-HHmmss");
    const sZipFileName = 'BOM_' + currentDate;
    const pk = new Array();

    $(".table tbody tr").each(function () {
        const $chk = $(this).find("[type='checkbox']");

        if ($chk.prop("checked")) {
            pk.push($chk.val());
        }
    });

    if (pk.length >= 1) {
        $.ajax({
            url: '/base/bom/export-tree/',
            type: 'POST',
            data: {
                csrfmiddlewaretoken: token,
                date: currentDate,
                pk: JSON.stringify(pk)
            },
            success: function (data) {
                if (data.result == 'success') {
                    var names = data.names;
                    var files = data.files;

                    if (files.length == 1) {
                        var a = $("<a>").attr("href", files[0]).attr("download", names[0]).appendTo("body");
                        a[0].click();
                        a.remove();
                    } else if (files.length > 1) {     // 파일 갯수가 여러개 인 경우
                        DownloadZipFile(files, sZipFileName);
                    }
                }
            },
            error: function (request, status, error) {
                alert("code : " + request.status + "\n" + "message : " + request.responseText + "\n" + "error : " + error);
            }
        });
    } else {
        alert("도면번호를 선택해주세요.")
    }
}