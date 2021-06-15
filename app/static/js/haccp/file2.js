function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file2Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;

    const memos = [];

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();

    const floor_waterspout_1_floor1 = $("input[name='floor_waterspout_1_floor1']").prop('checked');
    const floor_waterspout_1_floor2 = $("input[name='floor_waterspout_1_floor2']").prop('checked');
    const floor_waterspout_1_floor3 = $("input[name='floor_waterspout_1_floor3']").prop('checked');

    const floor_waterspout_2_floor1 = $("input[name='floor_waterspout_2_floor1']").prop('checked');
    const floor_waterspout_2_floor2 = $("input[name='floor_waterspout_2_floor2']").prop('checked');
    const floor_waterspout_2_floor3 = $("input[name='floor_waterspout_2_floor3']").prop('checked');

    const floor_waterspout_3_floor1 = $("input[name='floor_waterspout_3_floor1']").prop('checked');
    const floor_waterspout_3_floor2 = $("input[name='floor_waterspout_3_floor2']").prop('checked');
    const floor_waterspout_3_floor3 = $("input[name='floor_waterspout_3_floor3']").prop('checked');

    const floor_waterspout_4_floor1 = $("input[name='floor_waterspout_4_floor1']").prop('checked');
    const floor_waterspout_4_floor2 = $("input[name='floor_waterspout_4_floor2']").prop('checked');
    const floor_waterspout_4_floor3 = $("input[name='floor_waterspout_4_floor3']").prop('checked');

    const inside_wall_1_floor1 = $("input[name='inside_wall_1_floor1']").prop('checked');
    const inside_wall_1_floor2 = $("input[name='inside_wall_1_floor2']").prop('checked');
    const inside_wall_1_floor3 = $("input[name='inside_wall_1_floor3']").prop('checked');

    const inside_wall_2_floor1 = $("input[name='inside_wall_2_floor1']").prop('checked');
    const inside_wall_2_floor2 = $("input[name='inside_wall_2_floor2']").prop('checked');
    const inside_wall_2_floor3 = $("input[name='inside_wall_2_floor3']").prop('checked');

    const inside_wall_3_floor1 = $("input[name='inside_wall_3_floor1']").prop('checked');
    const inside_wall_3_floor2 = $("input[name='inside_wall_3_floor2']").prop('checked');
    const inside_wall_3_floor3 = $("input[name='inside_wall_3_floor3']").prop('checked');

    const ceiling_1_floor1 = $("input[name='ceiling_1_floor1']").prop('checked');
    const ceiling_1_floor2 = $("input[name='ceiling_1_floor2']").prop('checked');
    const ceiling_1_floor3 = $("input[name='ceiling_1_floor3']").prop('checked');

    const ceiling_2_floor1 = $("input[name='ceiling_2_floor1']").prop('checked');
    const ceiling_2_floor2 = $("input[name='ceiling_2_floor2']").prop('checked');
    const ceiling_2_floor3 = $("input[name='ceiling_2_floor3']").prop('checked');

    const ceiling_3_floor1 = $("input[name='ceiling_3_floor1']").prop('checked');
    const ceiling_3_floor2 = $("input[name='ceiling_3_floor2']").prop('checked');
    const ceiling_3_floor3 = $("input[name='ceiling_3_floor3']").prop('checked');

    const pipe_1_floor1 = $("input[name='pipe_1_floor1']").prop('checked');
    const pipe_1_floor2 = $("input[name='pipe_1_floor2']").prop('checked');
    const pipe_1_floor3 = $("input[name='pipe_1_floor3']").prop('checked');

    const pipe_2_floor1 = $("input[name='pipe_2_floor1']").prop('checked');
    const pipe_2_floor2 = $("input[name='pipe_2_floor2']").prop('checked');
    const pipe_2_floor3 = $("input[name='pipe_2_floor3']").prop('checked');

    const ventilation_1_floor1 = $("input[name='ventilation_1_floor1']").prop('checked');
    const ventilation_1_floor2 = $("input[name='ventilation_1_floor2']").prop('checked');
    const ventilation_1_floor3 = $("input[name='ventilation_1_floor3']").prop('checked');

    const ventilation_2_floor1 = $("input[name='ventilation_2_floor1']").prop('checked');
    const ventilation_2_floor2 = $("input[name='ventilation_2_floor2']").prop('checked');
    const ventilation_2_floor3 = $("input[name='ventilation_2_floor3']").prop('checked');

    const ventilation_3_floor1 = $("input[name='ventilation_3_floor1']").prop('checked');
    const ventilation_3_floor2 = $("input[name='ventilation_3_floor2']").prop('checked');
    const ventilation_3_floor3 = $("input[name='ventilation_3_floor3']").prop('checked');

    const moth_proof_1_floor1 = $("input[name='moth_proof_1_floor1']").prop('checked');
    const moth_proof_1_floor2 = $("input[name='moth_proof_1_floor2']").prop('checked');
    const moth_proof_1_floor3 = $("input[name='moth_proof_1_floor3']").prop('checked');

    const moth_proof_2_floor1 = $("input[name='moth_proof_2_floor1']").prop('checked');
    const moth_proof_2_floor2 = $("input[name='moth_proof_2_floor2']").prop('checked');
    const moth_proof_2_floor3 = $("input[name='moth_proof_2_floor3']").prop('checked');

    const moth_proof_3_floor1 = $("input[name='moth_proof_3_floor1']").prop('checked');
    const moth_proof_3_floor2 = $("input[name='moth_proof_3_floor2']").prop('checked');
    const moth_proof_3_floor3 = $("input[name='moth_proof_3_floor3']").prop('checked');

    const moth_proof_4_floor1 = $("input[name='moth_proof_4_floor1']").prop('checked');
    const moth_proof_4_floor2 = $("input[name='moth_proof_4_floor2']").prop('checked');
    const moth_proof_4_floor3 = $("input[name='moth_proof_4_floor3']").prop('checked');

    const moth_proof_5_floor1 = $("input[name='moth_proof_5_floor1']").prop('checked');
    const moth_proof_5_floor2 = $("input[name='moth_proof_5_floor2']").prop('checked');
    const moth_proof_5_floor3 = $("input[name='moth_proof_5_floor3']").prop('checked');

    const waste_1_floor1 = $("input[name='waste_1_floor1']").prop('checked');
    const waste_2_floor1 = $("input[name='waste_2_floor1']").prop('checked');
    const waste_3_floor1 = $("input[name='waste_3_floor1']").prop('checked');
    const waste_4_floor1 = $("input[name='waste_4_floor1']").prop('checked');

    const work_place_1_floor1 = $("input[name='work_place_1_floor1']").prop('checked');
    const work_place_2_floor1 = $("input[name='work_place_2_floor1']").prop('checked');
    const work_place_3_floor1 = $("input[name='work_place_3_floor1']").prop('checked');


    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
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
        "floor_waterspout_1_floor1": floor_waterspout_1_floor1,
        "floor_waterspout_1_floor2": floor_waterspout_1_floor2,
        "floor_waterspout_1_floor3": floor_waterspout_1_floor3,
        "floor_waterspout_2_floor1": floor_waterspout_2_floor1,
        "floor_waterspout_2_floor2": floor_waterspout_2_floor2,
        "floor_waterspout_2_floor3": floor_waterspout_2_floor3,
        "floor_waterspout_3_floor1": floor_waterspout_3_floor1,
        "floor_waterspout_3_floor2": floor_waterspout_3_floor2,
        "floor_waterspout_3_floor3": floor_waterspout_3_floor3,
        "floor_waterspout_4_floor1": floor_waterspout_4_floor1,
        "floor_waterspout_4_floor2": floor_waterspout_4_floor2,
        "floor_waterspout_4_floor3": floor_waterspout_4_floor3,

        "inside_wall_1_floor1": inside_wall_1_floor1,
        "inside_wall_1_floor2": inside_wall_1_floor2,
        "inside_wall_1_floor3": inside_wall_1_floor3,
        "inside_wall_2_floor1": inside_wall_2_floor1,
        "inside_wall_2_floor2": inside_wall_2_floor2,
        "inside_wall_2_floor3": inside_wall_2_floor3,
        "inside_wall_3_floor1": inside_wall_3_floor1,
        "inside_wall_3_floor2": inside_wall_3_floor2,
        "inside_wall_3_floor3": inside_wall_3_floor3,

        "ceiling_1_floor1": ceiling_1_floor1,
        "ceiling_1_floor2": ceiling_1_floor2,
        "ceiling_1_floor3": ceiling_1_floor3,
        "ceiling_2_floor1": ceiling_2_floor1,
        "ceiling_2_floor2": ceiling_2_floor2,
        "ceiling_2_floor3": ceiling_2_floor3,
        "ceiling_3_floor1": ceiling_3_floor1,
        "ceiling_3_floor2": ceiling_3_floor2,
        "ceiling_3_floor3": ceiling_3_floor3,

        "pipe_1_floor1": pipe_1_floor1,
        "pipe_1_floor2": pipe_1_floor2,
        "pipe_1_floor3": pipe_1_floor3,
        "pipe_2_floor1": pipe_2_floor1,
        "pipe_2_floor2": pipe_2_floor2,
        "pipe_2_floor3": pipe_2_floor3,

        "ventilation_1_floor1": ventilation_1_floor1,
        "ventilation_1_floor2": ventilation_1_floor2,
        "ventilation_1_floor3": ventilation_1_floor3,
        "ventilation_2_floor1": ventilation_2_floor1,
        "ventilation_2_floor2": ventilation_2_floor2,
        "ventilation_2_floor3": ventilation_2_floor3,
        "ventilation_3_floor1": ventilation_3_floor1,
        "ventilation_3_floor2": ventilation_3_floor2,
        "ventilation_3_floor3": ventilation_3_floor3,

        "moth_proof_1_floor1": moth_proof_1_floor1,
        "moth_proof_1_floor2": moth_proof_1_floor2,
        "moth_proof_1_floor3": moth_proof_1_floor3,
        "moth_proof_2_floor1": moth_proof_2_floor1,
        "moth_proof_2_floor2": moth_proof_2_floor2,
        "moth_proof_2_floor3": moth_proof_2_floor3,
        "moth_proof_3_floor1": moth_proof_3_floor1,
        "moth_proof_3_floor2": moth_proof_3_floor2,
        "moth_proof_3_floor3": moth_proof_3_floor3,
        "moth_proof_4_floor1": moth_proof_4_floor1,
        "moth_proof_4_floor2": moth_proof_4_floor2,
        "moth_proof_4_floor3": moth_proof_4_floor3,
        "moth_proof_5_floor1": moth_proof_5_floor1,
        "moth_proof_5_floor2": moth_proof_5_floor2,
        "moth_proof_5_floor3": moth_proof_5_floor3,

        "waste_1_floor1": waste_1_floor1,
        "waste_2_floor1": waste_2_floor1,
        "waste_3_floor1": waste_3_floor1,
        "waste_4_floor1": waste_4_floor1,

        "work_place_1_floor1": work_place_1_floor1,
        "work_place_2_floor1": work_place_2_floor1,
        "work_place_3_floor1": work_place_3_floor1,
        "memos": memos,
    }
    console.log(data)
    $.ajax({
        url: "/haccp/api/file2/",
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
            location.href = "/haccp/file2/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function file2Update(file_ins_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;

    const memos = [];

    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();

    const floor_waterspout_1_floor1 = $("input[name='floor_waterspout_1_floor1']").prop('checked');
    const floor_waterspout_1_floor2 = $("input[name='floor_waterspout_1_floor2']").prop('checked');
    const floor_waterspout_1_floor3 = $("input[name='floor_waterspout_1_floor3']").prop('checked');

    const floor_waterspout_2_floor1 = $("input[name='floor_waterspout_2_floor1']").prop('checked');
    const floor_waterspout_2_floor2 = $("input[name='floor_waterspout_2_floor2']").prop('checked');
    const floor_waterspout_2_floor3 = $("input[name='floor_waterspout_2_floor3']").prop('checked');

    const floor_waterspout_3_floor1 = $("input[name='floor_waterspout_3_floor1']").prop('checked');
    const floor_waterspout_3_floor2 = $("input[name='floor_waterspout_3_floor2']").prop('checked');
    const floor_waterspout_3_floor3 = $("input[name='floor_waterspout_3_floor3']").prop('checked');

    const floor_waterspout_4_floor1 = $("input[name='floor_waterspout_4_floor1']").prop('checked');
    const floor_waterspout_4_floor2 = $("input[name='floor_waterspout_4_floor2']").prop('checked');
    const floor_waterspout_4_floor3 = $("input[name='floor_waterspout_4_floor3']").prop('checked');

    const inside_wall_1_floor1 = $("input[name='inside_wall_1_floor1']").prop('checked');
    const inside_wall_1_floor2 = $("input[name='inside_wall_1_floor2']").prop('checked');
    const inside_wall_1_floor3 = $("input[name='inside_wall_1_floor3']").prop('checked');

    const inside_wall_2_floor1 = $("input[name='inside_wall_2_floor1']").prop('checked');
    const inside_wall_2_floor2 = $("input[name='inside_wall_2_floor2']").prop('checked');
    const inside_wall_2_floor3 = $("input[name='inside_wall_2_floor3']").prop('checked');

    const inside_wall_3_floor1 = $("input[name='inside_wall_3_floor1']").prop('checked');
    const inside_wall_3_floor2 = $("input[name='inside_wall_3_floor2']").prop('checked');
    const inside_wall_3_floor3 = $("input[name='inside_wall_3_floor3']").prop('checked');

    const ceiling_1_floor1 = $("input[name='ceiling_1_floor1']").prop('checked');
    const ceiling_1_floor2 = $("input[name='ceiling_1_floor2']").prop('checked');
    const ceiling_1_floor3 = $("input[name='ceiling_1_floor3']").prop('checked');

    const ceiling_2_floor1 = $("input[name='ceiling_2_floor1']").prop('checked');
    const ceiling_2_floor2 = $("input[name='ceiling_2_floor2']").prop('checked');
    const ceiling_2_floor3 = $("input[name='ceiling_2_floor3']").prop('checked');

    const ceiling_3_floor1 = $("input[name='ceiling_3_floor1']").prop('checked');
    const ceiling_3_floor2 = $("input[name='ceiling_3_floor2']").prop('checked');
    const ceiling_3_floor3 = $("input[name='ceiling_3_floor3']").prop('checked');

    const pipe_1_floor1 = $("input[name='pipe_1_floor1']").prop('checked');
    const pipe_1_floor2 = $("input[name='pipe_1_floor2']").prop('checked');
    const pipe_1_floor3 = $("input[name='pipe_1_floor3']").prop('checked');

    const pipe_2_floor1 = $("input[name='pipe_2_floor1']").prop('checked');
    const pipe_2_floor2 = $("input[name='pipe_2_floor2']").prop('checked');
    const pipe_2_floor3 = $("input[name='pipe_2_floor3']").prop('checked');

    const ventilation_1_floor1 = $("input[name='ventilation_1_floor1']").prop('checked');
    const ventilation_1_floor2 = $("input[name='ventilation_1_floor2']").prop('checked');
    const ventilation_1_floor3 = $("input[name='ventilation_1_floor3']").prop('checked');

    const ventilation_2_floor1 = $("input[name='ventilation_2_floor1']").prop('checked');
    const ventilation_2_floor2 = $("input[name='ventilation_2_floor2']").prop('checked');
    const ventilation_2_floor3 = $("input[name='ventilation_2_floor3']").prop('checked');

    const ventilation_3_floor1 = $("input[name='ventilation_3_floor1']").prop('checked');
    const ventilation_3_floor2 = $("input[name='ventilation_3_floor2']").prop('checked');
    const ventilation_3_floor3 = $("input[name='ventilation_3_floor3']").prop('checked');

    const moth_proof_1_floor1 = $("input[name='moth_proof_1_floor1']").prop('checked');
    const moth_proof_1_floor2 = $("input[name='moth_proof_1_floor2']").prop('checked');
    const moth_proof_1_floor3 = $("input[name='moth_proof_1_floor3']").prop('checked');

    const moth_proof_2_floor1 = $("input[name='moth_proof_2_floor1']").prop('checked');
    const moth_proof_2_floor2 = $("input[name='moth_proof_2_floor2']").prop('checked');
    const moth_proof_2_floor3 = $("input[name='moth_proof_2_floor3']").prop('checked');

    const moth_proof_3_floor1 = $("input[name='moth_proof_3_floor1']").prop('checked');
    const moth_proof_3_floor2 = $("input[name='moth_proof_3_floor2']").prop('checked');
    const moth_proof_3_floor3 = $("input[name='moth_proof_3_floor3']").prop('checked');

    const moth_proof_4_floor1 = $("input[name='moth_proof_4_floor1']").prop('checked');
    const moth_proof_4_floor2 = $("input[name='moth_proof_4_floor2']").prop('checked');
    const moth_proof_4_floor3 = $("input[name='moth_proof_4_floor3']").prop('checked');

    const moth_proof_5_floor1 = $("input[name='moth_proof_5_floor1']").prop('checked');
    const moth_proof_5_floor2 = $("input[name='moth_proof_5_floor2']").prop('checked');
    const moth_proof_5_floor3 = $("input[name='moth_proof_5_floor3']").prop('checked');

    const waste_1_floor1 = $("input[name='waste_1_floor1']").prop('checked');
    const waste_2_floor1 = $("input[name='waste_2_floor1']").prop('checked');
    const waste_3_floor1 = $("input[name='waste_3_floor1']").prop('checked');
    const waste_4_floor1 = $("input[name='waste_4_floor1']").prop('checked');

    const work_place_1_floor1 = $("input[name='work_place_1_floor1']").prop('checked');
    const work_place_2_floor1 = $("input[name='work_place_2_floor1']").prop('checked');
    const work_place_3_floor1 = $("input[name='work_place_3_floor1']").prop('checked');


    $('#table2 tbody tr').each(function () {
        const write_at = $(this).find("[name='write_at']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const manager = $(this).find("[name='manager']").val();
        const approver = $(this).find("[name='approver']").val();
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
        "reporting_date":reporting_date,
        "floor_waterspout_1_floor1": floor_waterspout_1_floor1,
        "floor_waterspout_1_floor2": floor_waterspout_1_floor2,
        "floor_waterspout_1_floor3": floor_waterspout_1_floor3,
        "floor_waterspout_2_floor1": floor_waterspout_2_floor1,
        "floor_waterspout_2_floor2": floor_waterspout_2_floor2,
        "floor_waterspout_2_floor3": floor_waterspout_2_floor3,
        "floor_waterspout_3_floor1": floor_waterspout_3_floor1,
        "floor_waterspout_3_floor2": floor_waterspout_3_floor2,
        "floor_waterspout_3_floor3": floor_waterspout_3_floor3,
        "floor_waterspout_4_floor1": floor_waterspout_4_floor1,
        "floor_waterspout_4_floor2": floor_waterspout_4_floor2,
        "floor_waterspout_4_floor3": floor_waterspout_4_floor3,

        "inside_wall_1_floor1": inside_wall_1_floor1,
        "inside_wall_1_floor2": inside_wall_1_floor2,
        "inside_wall_1_floor3": inside_wall_1_floor3,
        "inside_wall_2_floor1": inside_wall_2_floor1,
        "inside_wall_2_floor2": inside_wall_2_floor2,
        "inside_wall_2_floor3": inside_wall_2_floor3,
        "inside_wall_3_floor1": inside_wall_3_floor1,
        "inside_wall_3_floor2": inside_wall_3_floor2,
        "inside_wall_3_floor3": inside_wall_3_floor3,

        "ceiling_1_floor1": ceiling_1_floor1,
        "ceiling_1_floor2": ceiling_1_floor2,
        "ceiling_1_floor3": ceiling_1_floor3,
        "ceiling_2_floor1": ceiling_2_floor1,
        "ceiling_2_floor2": ceiling_2_floor2,
        "ceiling_2_floor3": ceiling_2_floor3,
        "ceiling_3_floor1": ceiling_3_floor1,
        "ceiling_3_floor2": ceiling_3_floor2,
        "ceiling_3_floor3": ceiling_3_floor3,

        "pipe_1_floor1": pipe_1_floor1,
        "pipe_1_floor2": pipe_1_floor2,
        "pipe_1_floor3": pipe_1_floor3,
        "pipe_2_floor1": pipe_2_floor1,
        "pipe_2_floor2": pipe_2_floor2,
        "pipe_2_floor3": pipe_2_floor3,

        "ventilation_1_floor1": ventilation_1_floor1,
        "ventilation_1_floor2": ventilation_1_floor2,
        "ventilation_1_floor3": ventilation_1_floor3,
        "ventilation_2_floor1": ventilation_2_floor1,
        "ventilation_2_floor2": ventilation_2_floor2,
        "ventilation_2_floor3": ventilation_2_floor3,
        "ventilation_3_floor1": ventilation_3_floor1,
        "ventilation_3_floor2": ventilation_3_floor2,
        "ventilation_3_floor3": ventilation_3_floor3,

        "moth_proof_1_floor1": moth_proof_1_floor1,
        "moth_proof_1_floor2": moth_proof_1_floor2,
        "moth_proof_1_floor3": moth_proof_1_floor3,
        "moth_proof_2_floor1": moth_proof_2_floor1,
        "moth_proof_2_floor2": moth_proof_2_floor2,
        "moth_proof_2_floor3": moth_proof_2_floor3,
        "moth_proof_3_floor1": moth_proof_3_floor1,
        "moth_proof_3_floor2": moth_proof_3_floor2,
        "moth_proof_3_floor3": moth_proof_3_floor3,
        "moth_proof_4_floor1": moth_proof_4_floor1,
        "moth_proof_4_floor2": moth_proof_4_floor2,
        "moth_proof_4_floor3": moth_proof_4_floor3,
        "moth_proof_5_floor1": moth_proof_5_floor1,
        "moth_proof_5_floor2": moth_proof_5_floor2,
        "moth_proof_5_floor3": moth_proof_5_floor3,

        "waste_1_floor1": waste_1_floor1,
        "waste_2_floor1": waste_2_floor1,
        "waste_3_floor1": waste_3_floor1,
        "waste_4_floor1": waste_4_floor1,

        "work_place_1_floor1": work_place_1_floor1,
        "work_place_2_floor1": work_place_2_floor1,
        "work_place_3_floor1": work_place_3_floor1,
        "memos": memos,
    }
    console.log(data)
    $.ajax({
        url: `/haccp/api/file2/${file_ins_pk}/`,
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
            // location.href = `/haccp/file1/${file_ins_pk}/`;
            location.reload();
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function exportTables2(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file2',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            $(".load_bg").addClass('load_display');
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file2.xlsx";
                a.download = '작업장환경 위생점검표' + ".xlsx";
                a.click();
            }
        }
    });
}
