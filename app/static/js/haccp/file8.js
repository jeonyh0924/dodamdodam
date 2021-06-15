function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file8Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;

    const row_data = [];
    const traps = [];
    const memos = [];

    const reporting_date = $("input[name='reporting_date']").val();
    $('#table1 tbody tr').each(function () {
        const hygiene = $(this).find("[name='hygiene']").prop("checked");
        const fly = $(this).find("[name='fly']").val() || 0;
        const moth = $(this).find("[name='moth']").val() || 0;
        const mos = $(this).find("[name='mos']").val() || 0;
        const dayfly = $(this).find("[name='dayfly']").val() || 0;
        const etc = $(this).find("[name='etc']").val() || 0;

        const total = parseInt(fly) + parseInt(moth) + parseInt(mos) + parseInt(dayfly) + parseInt(etc)

        row_data.push({
            hygiene: hygiene,
            fly: fly,
            moth: moth,
            mos: mos,
            dayfly: dayfly,
            etc: etc,
            total: total
        })

    })

    $('#table3 tbody tr').each(function () {
        const cockroach = $(this).find("[name='cockroach']").val() || 0;
        const spider = $(this).find("[name='spider']").val() || 0;
        const ant = $(this).find("[name='ant']").val() || 0;
        const rat = $(this).find("[name='rat']").val() || 0;
        const etc = $(this).find("[name='etc']").val() || 0;

        const total = parseInt(cockroach) + parseInt(spider) + parseInt(ant) + parseInt(rat) + parseInt(etc)

        traps.push({
            cockroach: cockroach,
            spider: spider,
            ant: ant,
            rat: rat,
            etc: etc,
            total: total
        })
    })


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
        "reporting_date": reporting_date,
        "row_data": row_data,
        'traps': traps,
        "memos": memos
    }

    $.ajax({
        url: "/haccp/api/file8/",
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
            location.href = "/haccp/file8/";
        },
        error: function (response) {
            console.log(response.responseText);
            alert(response.status);
        }
    })
}

function file8Update(file8_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data;

    const row_data = [];
    const traps = [];
    const memos = [];

    const reporting_date = $("input[name='reporting_date']").val();
    $('#table1 tbody tr').each(function () {
        const hygiene = $(this).find("[name='hygiene']").prop("checked");
        const fly = $(this).find("[name='fly']").val() || 0;
        const moth = $(this).find("[name='moth']").val() || 0;
        const mos = $(this).find("[name='mos']").val() || 0;
        const dayfly = $(this).find("[name='dayfly']").val() || 0;
        const etc = $(this).find("[name='etc']").val() || 0;

        const total = parseInt(fly) + parseInt(moth) + parseInt(mos) + parseInt(dayfly) + parseInt(etc)

        row_data.push({
            hygiene: hygiene,
            fly: fly,
            moth: moth,
            mos: mos,
            dayfly: dayfly,
            etc: etc,
            total: total
        })

    })

    $('#table3 tbody tr').each(function () {
        const cockroach = $(this).find("[name='cockroach']").val() || 0;
        const spider = $(this).find("[name='spider']").val() || 0;
        const ant = $(this).find("[name='ant']").val() || 0;
        const rat = $(this).find("[name='rat']").val() || 0;
        const etc = $(this).find("[name='etc']").val() || 0;

        const total = parseInt(cockroach) + parseInt(spider) + parseInt(ant) + parseInt(rat) + parseInt(etc)

        traps.push({
            cockroach: cockroach,
            spider: spider,
            ant: ant,
            rat: rat,
            etc: etc,
            total: total
        })
    })


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
        "reporting_date": reporting_date,
        "row_data": row_data,
        'traps': traps,
        "memos": memos
    }
    console.log(data)
    $.ajax({
        url: `/haccp/api/file8/${file8_pk}/`,
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
            console.log(response.responseText);
            alert(response.status);
        }
    })
}
