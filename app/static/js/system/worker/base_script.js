$(function() {
    $("#id_type li label").each(function() {
        /* 첫 로드 시 적용 */
        if($(this).find('input').prop('checked')) {
                $(this).addClass('act');
        }
        else {
            $(this).removeClass('act');
        }

        $(this).click(function() {
            if($(this).find('input').prop('checked')) {
                $(this).addClass('act');
            }
            else {
                $(this).removeClass('act');
            }
        });
    });
});