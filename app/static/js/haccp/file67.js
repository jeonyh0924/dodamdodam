function file67Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var memos = [];

    const row_data_top = [];
    const row_data_bottom = [];

    $("#table1 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var start_time = $(this).find("[name='start_time']").val();
        const throughput = $(this).find("[name='throughput']").val() || 0;

        const dry_temp = $(this).find("[name='dry_temp']").val() || 0;
        const dry_time = $(this).find("[name='dry_time']").val() || 0;

        const cooking_temp1 = $(this).find("[name='cooking_temp1']").val() || 0;
        const cooking_time1 = $(this).find("[name='cooking_time1']").val() || 0;

        const cooking_temp2 = $(this).find("[name='cooking_temp2']").val() || 0;
        const cooking_time2 = $(this).find("[name='cooking_time2']").val() || 0;

        const cooking_temp3 = $(this).find("[name='cooking_temp3']").val() || 0;
        const cooking_time3 = $(this).find("[name='cooking_time3']").val() || 0;

        const cooking_temp4 = $(this).find("[name='cooking_temp4']").val() || 0;
        const cooking_time4 = $(this).find("[name='cooking_time4']").val() || 0;

        const dry_temp2 = $(this).find("[name='dry_temp2']").val() || 0;
        const dry_time2 = $(this).find("[name='dry_time2']").val() || 0;


        const total_heater_time = $(this).find("[name='total_heater_time']").val() || 0;
        const inner_heat_temp = $(this).find("[name='inner_heat_temp']").val() || 0;

        if (start_time == '') {
            start_time = '00:00'
        }
        row_data_top.push({
            product_name: product_name,
            start_time: start_time,
            throughput: throughput,
            dry_temp: dry_temp,
            dry_time: dry_time,
            cooking_temp1: cooking_temp1,
            cooking_time1: cooking_time1,
            cooking_temp2: cooking_temp2,
            cooking_time2: cooking_time2,
            cooking_temp3: cooking_temp3,
            cooking_time3: cooking_time3,
            cooking_temp4: cooking_temp4,
            cooking_time4: cooking_time4,
            dry_temp2: dry_temp2,
            dry_time2: dry_time2,
            total_heater_time: total_heater_time,
            inner_heat_temp: inner_heat_temp,
        })
    });
    $("#table2 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var start_time = $(this).find("[name='start_time']").val();
        const throughput = $(this).find("[name='throughput']").val() || 0;

        const dry_temp = $(this).find("[name='dry_temp']").val() || 0;
        const dry_time = $(this).find("[name='dry_time']").val() || 0;

        const cooking_temp1 = $(this).find("[name='cooking_temp1']").val() || 0;
        const cooking_time1 = $(this).find("[name='cooking_time1']").val() || 0;

        const cooking_temp2 = $(this).find("[name='cooking_temp2']").val() || 0;
        const cooking_time2 = $(this).find("[name='cooking_time2']").val() || 0;

        const cooking_temp3 = $(this).find("[name='cooking_temp3']").val() || 0;
        const cooking_time3 = $(this).find("[name='cooking_time3']").val() || 0;

        const cooking_temp4 = $(this).find("[name='cooking_temp4']").val() || 0;
        const cooking_time4 = $(this).find("[name='cooking_time4']").val() || 0;

        const dry_temp2 = $(this).find("[name='dry_temp2']").val() || 0;
        const dry_time2 = $(this).find("[name='dry_time2']").val() || 0;


        const total_heater_time = $(this).find("[name='total_heater_time']").val() || 0;
        const inner_heat_temp = $(this).find("[name='inner_heat_temp']").val() || 0;

        if (start_time == '') {
            start_time = '00:00'
        }
        row_data_bottom.push({
            product_name: product_name,
            start_time: start_time,
            throughput: throughput,
            dry_temp: dry_temp,
            dry_time: dry_time,
            cooking_temp1: cooking_temp1,
            cooking_time1: cooking_time1,
            cooking_temp2: cooking_temp2,
            cooking_time2: cooking_time2,
            cooking_temp3: cooking_temp3,
            cooking_time3: cooking_time3,
            cooking_temp4: cooking_temp4,
            cooking_time4: cooking_time4,
            dry_temp2: dry_temp2,
            dry_time2: dry_time2,
            total_heater_time: total_heater_time,
            inner_heat_temp: inner_heat_temp,
        })
    });


    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();


    const type = $("input[name='type']").val();
    const content = $("input[name='content']").val();
    const feedback_content = $("input[name='feedback_content']").val();
    const manager = $("input[name='manager']").val();
    const approver = $("input[name='approver']").val();
    memos = [
        {
            type: type,
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver
        }
    ]

    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data_top'] = row_data_top
    data['row_data_bottom'] = row_data_bottom
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: "/haccp/api/file67/",
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
            location.href = "/haccp/file67/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file67Update(file67_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    var memos = [];

    const row_data_top = [];
    const row_data_bottom = [];

    $("#table1 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var start_time = $(this).find("[name='start_time']").val();
        const throughput = $(this).find("[name='throughput']").val() || 0;

        const dry_temp = $(this).find("[name='dry_temp']").val() || 0;
        const dry_time = $(this).find("[name='dry_time']").val() || 0;

        const cooking_temp1 = $(this).find("[name='cooking_temp1']").val() || 0;
        const cooking_time1 = $(this).find("[name='cooking_time1']").val() || 0;

        const cooking_temp2 = $(this).find("[name='cooking_temp2']").val() || 0;
        const cooking_time2 = $(this).find("[name='cooking_time2']").val() || 0;

        const cooking_temp3 = $(this).find("[name='cooking_temp3']").val() || 0;
        const cooking_time3 = $(this).find("[name='cooking_time3']").val() || 0;

        const cooking_temp4 = $(this).find("[name='cooking_temp4']").val() || 0;
        const cooking_time4 = $(this).find("[name='cooking_time4']").val() || 0;

        const dry_temp2 = $(this).find("[name='dry_temp2']").val() || 0;
        const dry_time2 = $(this).find("[name='dry_time2']").val() || 0;


        const total_heater_time = $(this).find("[name='total_heater_time']").val() || 0;
        const inner_heat_temp = $(this).find("[name='inner_heat_temp']").val() || 0;

        if (start_time == '') {
            start_time = '00:00'
        }
        row_data_top.push({
            product_name: product_name,
            start_time: start_time,
            throughput: throughput,
            dry_temp: dry_temp,
            dry_time: dry_time,
            cooking_temp1: cooking_temp1,
            cooking_time1: cooking_time1,
            cooking_temp2: cooking_temp2,
            cooking_time2: cooking_time2,
            cooking_temp3: cooking_temp3,
            cooking_time3: cooking_time3,
            cooking_temp4: cooking_temp4,
            cooking_time4: cooking_time4,
            dry_temp2: dry_temp2,
            dry_time2: dry_time2,
            total_heater_time: total_heater_time,
            inner_heat_temp: inner_heat_temp,
        })
    });
    $("#table2 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        var start_time = $(this).find("[name='start_time']").val();
        const throughput = $(this).find("[name='throughput']").val() || 0;

        const dry_temp = $(this).find("[name='dry_temp']").val() || 0;
        const dry_time = $(this).find("[name='dry_time']").val() || 0;

        const cooking_temp1 = $(this).find("[name='cooking_temp1']").val() || 0;
        const cooking_time1 = $(this).find("[name='cooking_time1']").val() || 0;

        const cooking_temp2 = $(this).find("[name='cooking_temp2']").val() || 0;
        const cooking_time2 = $(this).find("[name='cooking_time2']").val() || 0;

        const cooking_temp3 = $(this).find("[name='cooking_temp3']").val() || 0;
        const cooking_time3 = $(this).find("[name='cooking_time3']").val() || 0;

        const cooking_temp4 = $(this).find("[name='cooking_temp4']").val() || 0;
        const cooking_time4 = $(this).find("[name='cooking_time4']").val() || 0;

        const dry_temp2 = $(this).find("[name='dry_temp2']").val() || 0;
        const dry_time2 = $(this).find("[name='dry_time2']").val() || 0;


        const total_heater_time = $(this).find("[name='total_heater_time']").val() || 0;
        const inner_heat_temp = $(this).find("[name='inner_heat_temp']").val() || 0;

        if (start_time == '') {
            start_time = '00:00'
        }
        row_data_bottom.push({
            product_name: product_name,
            start_time: start_time,
            throughput: throughput,
            dry_temp: dry_temp,
            dry_time: dry_time,
            cooking_temp1: cooking_temp1,
            cooking_time1: cooking_time1,
            cooking_temp2: cooking_temp2,
            cooking_time2: cooking_time2,
            cooking_temp3: cooking_temp3,
            cooking_time3: cooking_time3,
            cooking_temp4: cooking_temp4,
            cooking_time4: cooking_time4,
            dry_temp2: dry_temp2,
            dry_time2: dry_time2,
            total_heater_time: total_heater_time,
            inner_heat_temp: inner_heat_temp,
        })
    });


    const author = $("input[name='author']").val();
    const reporting_date = $("input[name='reporting_date']").val();


    const type = $("input[name='type']").val();
    const content = $("input[name='content']").val();
    const feedback_content = $("input[name='feedback_content']").val();
    const manager = $("input[name='manager']").val();
    const approver = $("input[name='approver']").val();
    memos = [
        {
            type: type,
            content: content,
            feedback_content: feedback_content,
            manager: manager,
            approver: approver
        }
    ]

    data['author'] = author
    data['reporting_date'] = reporting_date
    data['row_data_top'] = row_data_top
    data['row_data_bottom'] = row_data_bottom
    data['memos'] = memos

    console.log(data)

    $.ajax({
        url: `/haccp/api/file67/${file67_pk}/`,
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
            console.log(response.responseText);
        }
    })
}
