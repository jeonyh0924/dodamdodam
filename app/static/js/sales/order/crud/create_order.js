function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$(document).ready(function () {
    var count = $("#plan_num_count").val();
    $(".form-group-box .add").click(function () {
        var plan_clone = $(".plan_clone").html();
        plan_clone = plan_clone.replace(/currentBox/g, 'currentBox' + count);
        plan_clone = plan_clone.replace(/plan_num/g, 'plan_num' + count);
        plan_clone = plan_clone.replace(/rowDelete\(/g, 'rowDelete(' + count);
        $(".form-group-wrap").append(plan_clone);
        count++;
        $("#plan_num_count").val(count);
    });
});

function rowDelete(obj) {
    $("#currentBox" + obj).remove();
}

function OrderCreate() {
    var token = $("input[name='csrfmiddlewaretoken']").val();

    var id = $('input[name="id"]').val();
    var name = $('input[name="name"]').val();
    var due_date = $('input[name="due_date"]').val();
    var receptionist = $('input[name="author"]').val();
    var company = $('select[name="company"]').val();
    var delivery = $('input[name="delivery"]').val();
    var memo = $('textarea[name="memo"]').val();
    var emergency = $('input[name="emergency"]').is(':checked')

    let products = [];

    let data = {};

    $(".td_flex").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        const product_quantity = $(this).find("[name='product_quantity']").val() || 0;
        const product_type = $(this).find("[name='product_type']").val();

        if (product_name != '') {
            products.push(
                {
                    name: product_name,
                    unit: product_type,
                    quantity: product_quantity
                }
            )
        }
    })

    data['id'] = id
    data['name'] = name
    data['due_date'] = due_date
    data['receptionist'] = receptionist
    data['company'] = company
    data['delivery'] = delivery
    data['memo'] = memo
    data['emergency'] = emergency
    data['products'] = products
    console.log(data)

    $.ajax(
        {
            url: "/sales/api/order/",
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
                location.href = "/sales/order/";
            },
            error: function (response) {
                alert(response.status);
                console.log(response.responseText);
                dic_var = response.responseText
                console.log(dic_var['products'])
            }
        }
    );
}

function OrderUpdate() {
    var token = $("input[name='csrfmiddlewaretoken']").val();

    var id = $('input[name="id"]').val();
    var name = $('input[name="name"]').val();
    var due_date = $('input[name="due_date"]').val();
    var company = $('input[name="company"]').val();
    var delivery = $('input[name="delivery"]').val();
    var memo = $('textarea[name="memo"]').val();
    var emergency = $('input[name="emergency"]').is(':checked')
    var image = $('input[name="image"]')[0].files[0];
    console.log('image', image)

    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", token);
    formData.append("name", name);
    formData.append("due_date", due_date);
    formData.append("company", company);
    formData.append("delivery", delivery);
    formData.append("memo", memo);
    formData.append("emergency", emergency);
    if (image != undefined) {
        formData.append("image", image);
    }

    for (let value of formData.values()) {
        console.log(value);
    }
    $.ajax({
        url: `/sales/api/order/${id}/`,
        type: "PATCH",
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
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

function addCompanyFileUpload() {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    var order_id = $("#order_id").val();
    var file = $('#id_worksheet_file')[0].files[0];
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", token);
    formData.append("file", file);
    $.ajax(
        {
            url: "/base/company/endpoint/purchase/",
            method: 'POST',
            enctype: "multipart/form-data",
            data: formData,
            success: function (data) {
                location.href = "/base/company/list/"
            },
        }
    );
}