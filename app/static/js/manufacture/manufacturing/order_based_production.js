function orderProduction() {
    const token = $("input[name='csrfmiddlewaretoken']").val();

    let data = {};

    const row_data = [];


    const currentDate = moment().format("YYMMDD-HHmmss");
    const due = $("input[name='due']").val();

    $("#myTable2 tbody tr").each(function () {
        const product_name = $(this).find("[name='product_name']").val();
        const quantity = $(this).find("[name='quantity']").val() || 0;
        const product_type = $(this).find("[name='product_type']").val();
        if (quantity != 0) {
            row_data.push({
                name: product_name,
                quantity: quantity,
                unit: product_type,
            })
        }
    });

    data['partial'] = row_data
    data['id'] = currentDate
    data['due'] = due
    console.log(data);


    $.ajax({
        url: "/manufacture/api/manufacturing/",
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
            location.href = "/manufacture/";
        },
        error: function (response) {
            alert(response.status);
            console.log(response.responseText);
        }
    })
}