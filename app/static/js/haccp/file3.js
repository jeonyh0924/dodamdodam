function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file3Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    const floor_1_1 = $("input[name='floor_1_1']").val() || 0;
    const floor_1_2 = $("input[name='floor_1_2']").val() || 0;
    const floor_1_3 = $("input[name='floor_1_3']").val() || 0;
    const floor_1_4 = $("input[name='floor_1_4']").val() || 0;
    const floor_1_5 = $("input[name='floor_1_5']").val() || 0;
    const floor_2_6 = $("input[name='floor_2_6']").val() || 0;
    const floor_2_7 = $("input[name='floor_2_7']").val() || 0;
    const floor_2_8 = $("input[name='floor_2_8']").val() || 0;
    const floor_2_9 = $("input[name='floor_2_9']").val() || 0;
    const floor_2_10 = $("input[name='floor_2_10']").val() || 0;
    const floor_2_11 = $("input[name='floor_2_11']").val() || 0;
    const floor_2_12 = $("input[name='floor_2_12']").val() || 0;
    const floor_2_13 = $("input[name='floor_2_13']").val() || 0;
    const floor_2_14 = $("input[name='floor_2_14']").val() || 0;
    const floor_2_15 = $("input[name='floor_2_15']").val() || 0;
    const floor_2_16 = $("input[name='floor_2_16']").val() || 0;
    const floor_2_17 = $("input[name='floor_2_17']").val() || 0;
    const floor_2_18 = $("input[name='floor_2_18']").val() || 0;
    const floor_2_19 = $("input[name='floor_2_19']").val() || 0;
    const floor_2_20 = $("input[name='floor_2_20']").val() || 0;
    const floor_3_21 = $("input[name='floor_3_21']").val() || 0;
    const floor_3_22 = $("input[name='floor_3_22']").val() || 0;
    const floor_3_23 = $("input[name='floor_3_23']").val() || 0;
    const floor_3_24 = $("input[name='floor_3_24']").val() || 0;
    const floor_3_25 = $("input[name='floor_3_25']").val() || 0;
    const floor_3_26 = $("input[name='floor_3_26']").val() || 0;
    const floor_3_27 = $("input[name='floor_3_27']").val() || 0;
    const floor_3_28 = $("input[name='floor_3_28']").val() || 0;
    const floor_3_29 = $("input[name='floor_3_29']").val() || 0;
    const floor_3_30 = $("input[name='floor_3_30']").val() || 0;
    const floor_3_31 = $("input[name='floor_3_31']").val() || 0;
    const floor_3_32 = $("input[name='floor_3_32']").val() || 0;
    const floor_3_33 = $("input[name='floor_3_33']").val() || 0;
    const floor_3_34 = $("input[name='floor_3_34']").val() || 0;


    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        console.log(write_at, content, feedback_content, manager, approver)
        if (content || feedback_content || manager || approver) {
            memos.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })


    data = {
        "author": author,
        "reporting_date": reporting_date,

        "floor_1_1": floor_1_1,
        "floor_1_2": floor_1_2,
        "floor_1_3": floor_1_3,
        "floor_1_4": floor_1_4,
        "floor_1_5": floor_1_5,
        "floor_2_6": floor_2_6,
        "floor_2_7": floor_2_7,
        "floor_2_8": floor_2_8,
        "floor_2_9": floor_2_9,
        "floor_2_10": floor_2_10,
        "floor_2_11": floor_2_11,
        "floor_2_12": floor_2_12,
        "floor_2_13": floor_2_13,
        "floor_2_14": floor_2_14,
        "floor_2_15": floor_2_15,
        "floor_2_16": floor_2_16,
        "floor_2_17": floor_2_17,
        "floor_2_18": floor_2_18,
        "floor_2_19": floor_2_19,
        "floor_2_20": floor_2_20,
        "floor_3_21": floor_3_21,
        "floor_3_22": floor_3_22,
        "floor_3_23": floor_3_23,
        "floor_3_24": floor_3_24,
        "floor_3_25": floor_3_25,
        "floor_3_26": floor_3_26,
        "floor_3_27": floor_3_27,
        "floor_3_28": floor_3_28,
        "floor_3_29": floor_3_29,
        "floor_3_30": floor_3_30,
        "floor_3_31": floor_3_31,
        "floor_3_32": floor_3_32,
        "floor_3_33": floor_3_33,
        "floor_3_34": floor_3_34,

        "memos": memos,
    }

    console.log(data)
    $.ajax({
        url: "/haccp/api/file3/",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(data),
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")
            location.href = "/haccp/file3/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function file3Update(file_ins_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();
    const floor_1_1 = $("input[name='floor_1_1']").val() || 0;
    const floor_1_2 = $("input[name='floor_1_2']").val() || 0;
    const floor_1_3 = $("input[name='floor_1_3']").val() || 0;
    const floor_1_4 = $("input[name='floor_1_4']").val() || 0;
    const floor_1_5 = $("input[name='floor_1_5']").val() || 0;
    const floor_2_6 = $("input[name='floor_2_6']").val() || 0;
    const floor_2_7 = $("input[name='floor_2_7']").val() || 0;
    const floor_2_8 = $("input[name='floor_2_8']").val() || 0;
    const floor_2_9 = $("input[name='floor_2_9']").val() || 0;
    const floor_2_10 = $("input[name='floor_2_10']").val() || 0;
    const floor_2_11 = $("input[name='floor_2_11']").val() || 0;
    const floor_2_12 = $("input[name='floor_2_12']").val() || 0;
    const floor_2_13 = $("input[name='floor_2_13']").val() || 0;
    const floor_2_14 = $("input[name='floor_2_14']").val() || 0;
    const floor_2_15 = $("input[name='floor_2_15']").val() || 0;
    const floor_2_16 = $("input[name='floor_2_16']").val() || 0;
    const floor_2_17 = $("input[name='floor_2_17']").val() || 0;
    const floor_2_18 = $("input[name='floor_2_18']").val() || 0;
    const floor_2_19 = $("input[name='floor_2_19']").val() || 0;
    const floor_2_20 = $("input[name='floor_2_20']").val() || 0;
    const floor_3_21 = $("input[name='floor_3_21']").val() || 0;
    const floor_3_22 = $("input[name='floor_3_22']").val() || 0;
    const floor_3_23 = $("input[name='floor_3_23']").val() || 0;
    const floor_3_24 = $("input[name='floor_3_24']").val() || 0;
    const floor_3_25 = $("input[name='floor_3_25']").val() || 0;
    const floor_3_26 = $("input[name='floor_3_26']").val() || 0;
    const floor_3_27 = $("input[name='floor_3_27']").val() || 0;
    const floor_3_28 = $("input[name='floor_3_28']").val() || 0;
    const floor_3_29 = $("input[name='floor_3_29']").val() || 0;
    const floor_3_30 = $("input[name='floor_3_30']").val() || 0;
    const floor_3_31 = $("input[name='floor_3_31']").val() || 0;
    const floor_3_32 = $("input[name='floor_3_32']").val() || 0;
    const floor_3_33 = $("input[name='floor_3_33']").val() || 0;
    const floor_3_34 = $("input[name='floor_3_34']").val() || 0;


    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
        console.log(write_at, content, feedback_content, manager, approver)
        if (content || feedback_content || manager || approver) {
            memos.push({
                write_at: write_at,
                content: content,
                feedback_content: feedback_content,
                manager: manager,
                approver: approver,
            })
        }
    })


    data = {
        "author": author,
        "reporting_date": reporting_date,

        "floor_1_1": floor_1_1,
        "floor_1_2": floor_1_2,
        "floor_1_3": floor_1_3,
        "floor_1_4": floor_1_4,
        "floor_1_5": floor_1_5,
        "floor_2_6": floor_2_6,
        "floor_2_7": floor_2_7,
        "floor_2_8": floor_2_8,
        "floor_2_9": floor_2_9,
        "floor_2_10": floor_2_10,
        "floor_2_11": floor_2_11,
        "floor_2_12": floor_2_12,
        "floor_2_13": floor_2_13,
        "floor_2_14": floor_2_14,
        "floor_2_15": floor_2_15,
        "floor_2_16": floor_2_16,
        "floor_2_17": floor_2_17,
        "floor_2_18": floor_2_18,
        "floor_2_19": floor_2_19,
        "floor_2_20": floor_2_20,
        "floor_3_21": floor_3_21,
        "floor_3_22": floor_3_22,
        "floor_3_23": floor_3_23,
        "floor_3_24": floor_3_24,
        "floor_3_25": floor_3_25,
        "floor_3_26": floor_3_26,
        "floor_3_27": floor_3_27,
        "floor_3_28": floor_3_28,
        "floor_3_29": floor_3_29,
        "floor_3_30": floor_3_30,
        "floor_3_31": floor_3_31,
        "floor_3_32": floor_3_32,
        "floor_3_33": floor_3_33,
        "floor_3_34": floor_3_34,

        "memos": memos,
    }

    console.log(data)
    $.ajax({
        url: `/haccp/api/file3/${file_ins_pk}/`,
        type: "PATCH",
        contentType: 'application/json',
        data: JSON.stringify(data),
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (response) {
            alert("요청이 수락되었습니다.")
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function exportTables3(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file3',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            $(".load_bg").addClass('load_display');
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file3.xlsx";
                a.download = '작업장 조도점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
