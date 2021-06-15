$(document).ready(function(){
    var type = document.getElementById("id_type");
    type_choice(type);

    var process = $("input[name='process']").val();

    if(process == 'A') {
        $("#id_process").val('A');
    }
    else if(process == 'B') {
        $("#id_process").val('B');
    }
    else if(process == 'C') {
        $("#id_process").val('C');
    }
    else if(process == 'D') {
        $("#id_process").val('D');
    }
    else if(process == 'E') {
        $("#id_process").val('E');
    }
    else if(process == 'F') {
        $("#id_process").val('F');
    }
    else if(process == 'G') {
        $("#id_process").val('G');
    }
});

function type_choice(e) {
    var target = document.getElementById("id_process");
    var chocies = {
        'A': '내부 가공',
        'B': '가공(외주)',
        'C': '스테이터',
        'D': '아마츄어',
        'E': '생산',
        'F': 'A/S',
        'N/A': '구매'
    };

    if(e.value == "ORDER_LINE") {
        target.options.length = 0;

        for(var n in chocies){
            var opt = document.createElement("option");
            opt.value = n
            opt.innerHTML = chocies[n];
            target.appendChild(opt);
        }
    } else {
        var opt = document.createElement("option");
        opt.value = "N/A";
        opt.innerHTML = "해당 없음";

        target.options.length = 0;
        target.appendChild(opt);
    }
}