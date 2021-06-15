function file65Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let dic = {};
    let memos = [];


    var reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    const field1 = $("input[name='field1']").prop('checked');
    var field1_date1 = $("input[name='field1_date1']").val();
    var field1_date2 = $("input[name='field1_date2']").val();
    const field1_quantity = $("input[name='field1_quantity']").val() || 0;

    const field2 = $("input[name='field2']").prop('checked');
    var field2_date1 = $("input[name='field2_date1']").val();
    var field2_date2 = $("input[name='field2_date2']").val();

    const field3 = $("input[name='field3']").prop('checked');
    var field3_date = $("input[name='field3_date']").val();

    const field4 = $("input[name='field4']").prop('checked');
    var field4_date = $("input[name='field4_date']").val();

    const field5 = $("input[name='field5']").prop('checked');
    var field5_date1 = $("input[name='field5_date1']").val();
    var field5_date2 = $("input[name='field5_date2']").val();
    const field5_quantity = $("input[name='field5_quantity']").val() || 0;

    const field6 = $("input[name='field6']").prop('checked');
    var field6_date = $("input[name='field6_date']").val();

    const field7 = $("input[name='field7']").prop('checked');
    var field7_date = $("input[name='field7_date']").val();

    const field8 = $("input[name='field8']").prop('checked');
    var field8_date = $("input[name='field8_date']").val();

    const content = $("input[name='content']").val();
    const feedback_content = $("input[name='feedback_content']").val();
    const manager = $("input[name='manager']").val();
    const approver = $("input[name='approver']").val();


    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (field1_date1 == '') {
        field1_date1 = '0001-01-01'
    }
    if (field1_date2 == '') {
        field1_date2 = '0001-01-01'
    }
    if (field2_date1 == '') {
        field2_date1 = '0001-01-01'
    }
    if (field2_date2 == '') {
        field2_date2 = '0001-01-01'
    }
    if (field3_date == '') {
        field3_date = '0001-01-01T00:00'
    }
    if (field4_date == '') {
        field4_date = '0001-01-01T00:00'
    }
    if (field5_date1 == '') {
        field5_date1 = '0001-01-01'
    }
    if (field5_date2 == '') {
        field5_date2 = '0001-01-01'
    }
    if (field6_date == '') {
        field6_date = '0001-01-01'
    }
    if (field7_date == '') {
        field7_date = '0001-01-01T00:00'
    }
    if (field8_date == '') {
        field8_date = '0001-01-01T00:00'
    }
    data['reporting_date'] = reporting_date
    data['author'] = author

    data['field1'] = field1
    data['field1_date1'] = field1_date1
    data['field1_date2'] = field1_date2
    data['field1_quantity'] = field1_quantity

    data['field2'] = field2
    data['field2_date1'] = field2_date1
    data['field2_date2'] = field2_date2

    data['field3'] = field3
    data['field3_date'] = field3_date

    data['field4'] = field4
    data['field4_date'] = field4_date

    data['field5'] = field5
    data['field5_date1'] = field5_date1
    data['field5_date2'] = field5_date2
    data['field5_quantity'] = field5_quantity

    data['field6'] = field6
    data['field6_date'] = field6_date

    data['field7'] = field7
    data['field7_date'] = field7_date

    data['field8'] = field8
    data['field8_date'] = field8_date

    dic['content'] = content
    dic['feedback_content'] = feedback_content
    dic['manager'] = manager
    dic['approver'] = approver

    data['memos'] = [dic]

    console.log(data)

    $.ajax({
        url: "/haccp/api/file65/",
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
            location.href = "/haccp/file65/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}

function file65Update(file65_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    let dic = {};
    let memos = [];


    var reporting_date = $("input[name='reporting_date']").val();
    const author = $("input[name='author']").val();

    const field1 = $("input[name='field1']").prop('checked');
    var field1_date1 = $("input[name='field1_date1']").val();
    var field1_date2 = $("input[name='field1_date2']").val();
    const field1_quantity = $("input[name='field1_quantity']").val() || 0;

    const field2 = $("input[name='field2']").prop('checked');
    var field2_date1 = $("input[name='field2_date1']").val();
    var field2_date2 = $("input[name='field2_date2']").val();

    const field3 = $("input[name='field3']").prop('checked');
    var field3_date = $("input[name='field3_date']").val();

    const field4 = $("input[name='field4']").prop('checked');
    var field4_date = $("input[name='field4_date']").val();

    const field5 = $("input[name='field5']").prop('checked');
    var field5_date1 = $("input[name='field5_date1']").val();
    var field5_date2 = $("input[name='field5_date2']").val();
    const field5_quantity = $("input[name='field5_quantity']").val() || 0;

    const field6 = $("input[name='field6']").prop('checked');
    var field6_date = $("input[name='field6_date']").val();

    const field7 = $("input[name='field7']").prop('checked');
    var field7_date = $("input[name='field7_date']").val();

    const field8 = $("input[name='field8']").prop('checked');
    var field8_date = $("input[name='field8_date']").val();

    const content = $("input[name='content']").val();
    const feedback_content = $("input[name='feedback_content']").val();
    const manager = $("input[name='manager']").val();
    const approver = $("input[name='approver']").val();


    if (reporting_date == '') {
        reporting_date = '0001-01-01'
    }
    if (field1_date1 == '') {
        field1_date1 = '0001-01-01'
    }
    if (field1_date2 == '') {
        field1_date2 = '0001-01-01'
    }
    if (field2_date1 == '') {
        field2_date1 = '0001-01-01'
    }
    if (field2_date2 == '') {
        field2_date2 = '0001-01-01'
    }
    if (field3_date == '') {
        field3_date = '0001-01-01T00:00'
    }
    if (field4_date == '') {
        field4_date = '0001-01-01T00:00'
    }
    if (field5_date1 == '') {
        field5_date1 = '0001-01-01'
    }
    if (field5_date2 == '') {
        field5_date2 = '0001-01-01'
    }
    if (field6_date == '') {
        field6_date = '0001-01-01'
    }
    if (field7_date == '') {
        field7_date = '0001-01-01T00:00'
    }
    if (field8_date == '') {
        field8_date = '0001-01-01T00:00'
    }
    data['reporting_date'] = reporting_date
    data['author'] = author

    data['field1'] = field1
    data['field1_date1'] = field1_date1
    data['field1_date2'] = field1_date2
    data['field1_quantity'] = field1_quantity

    data['field2'] = field2
    data['field2_date1'] = field2_date1
    data['field2_date2'] = field2_date2

    data['field3'] = field3
    data['field3_date'] = field3_date

    data['field4'] = field4
    data['field4_date'] = field4_date

    data['field5'] = field5
    data['field5_date1'] = field5_date1
    data['field5_date2'] = field5_date2
    data['field5_quantity'] = field5_quantity

    data['field6'] = field6
    data['field6_date'] = field6_date

    data['field7'] = field7
    data['field7_date'] = field7_date

    data['field8'] = field8
    data['field8_date'] = field8_date

    dic['content'] = content
    dic['feedback_content'] = feedback_content
    dic['manager'] = manager
    dic['approver'] = approver

    data['memos'] = [dic]

    console.log(data)

    $.ajax({
        url: `/haccp/api/file65/${file65_pk}/`,
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
            location.reload()
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}