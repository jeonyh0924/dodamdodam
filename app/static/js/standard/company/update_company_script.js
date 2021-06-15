$(document).ready(function(){
    var manager_number = $("#id_manager_number").val().split(',');
    for(var i=0; i<manager_number.length-1;i++){
        var manger=manager_number[i].split('/');
        if(manger[1].length==11) {
            manger[1] = manger[1].slice(0, 3) + '-' + manger[1].slice(3, 7) + '-' + manger[1].slice(7);
        }
        if(i==0){
            $("#manager1").val(manger[0]);
            $("#manager1_phone_number").val(manger[1]);
        }else{
            if(manger[0]!=''|| manger[1]!=''){
                var managerCount = $("#managerCount").val();
                var manager_clone = $(".manager_clone").html();
                manager_clone = manager_clone.replace(/currentBox/g,'currentBox'+managerCount);
                manager_clone = manager_clone.replace(/manager/g,'manager'+managerCount);
                manager_clone = manager_clone.replace(/rowDelete\(/g,'rowDelete('+managerCount);
                $(".form-group-wrap").append(manager_clone);
                $("#managerCount").val(managerCount);
                $("#manager"+managerCount).val(manger[0]);
                $("#manager"+managerCount+"_phone_number").val(manger[1]);
                managerCount++
                $("#managerCount").val(managerCount);
            }
        }
    }


});
