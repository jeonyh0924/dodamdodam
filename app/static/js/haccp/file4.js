function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function file4Create() {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];

    const author = $("input[name='author']").val();

    const better_white_board_past = $("input[name='better_white_board_past']").val() || 0;
    const better_white_board_receiving = $("input[name='better_white_board_receiving']").val() || 0;
    const better_white_board_present = $("input[name='better_white_board_present']").val() || 0;
    const better_white_board_broken = $("input[name='better_white_board_broken']").prop('checked');
    const better_white_board_memo = $("input[name='better_white_board_memo']").val();

    const better_board_marker_past = $("input[name='better_board_marker_past']").val() || 0;
    const better_board_marker_receiving = $("input[name='better_board_marker_receiving']").val() || 0;
    const better_board_marker_present = $("input[name='better_board_marker_present']").val() || 0;
    const better_board_marker_broken = $("input[name='better_board_marker_broken']").prop('checked');
    const better_board_marker_memo = $("input[name='better_board_marker_memo']").val();

    const better_magnet_past = $("input[name='better_magnet_past']").val() || 0;
    const better_magnet_receiving = $("input[name='better_magnet_receiving']").val() || 0;
    const better_magnet_present = $("input[name='better_magnet_present']").val() || 0;
    const better_magnet_broken = $("input[name='better_magnet_broken']").prop('checked');
    const better_magnet_memo = $("input[name='better_magnet_memo']").val();

    const better_clippers_past = $("input[name='better_clippers_past']").val() || 0;
    const better_clippers_receiving = $("input[name='better_clippers_receiving']").val() || 0;
    const better_clippers_present = $("input[name='better_clippers_present']").val() || 0;
    const better_clippers_broken = $("input[name='better_clippers_broken']").prop('checked');
    const better_clippers_memo = $("input[name='better_clippers_memo']").val();

    const shredder_white_board_past = $("input[name='shredder_white_board_past']").val() || 0;
    const shredder_white_board_receiving = $("input[name='shredder_white_board_receiving']").val() || 0;
    const shredder_white_board_present = $("input[name='shredder_white_board_present']").val() || 0;
    const shredder_white_board_broken = $("input[name='shredder_white_board_broken']").prop('checked');
    const shredder_white_board_memo = $("input[name='shredder_white_board_memo']").val();

    const shredder_board_marker_past = $("input[name='shredder_board_marker_past']").val() || 0;
    const shredder_board_marker_receiving = $("input[name='shredder_board_marker_receiving']").val() || 0;
    const shredder_board_marker_present = $("input[name='shredder_board_marker_present']").val() || 0;
    const shredder_board_marker_broken = $("input[name='shredder_board_marker_broken']").prop('checked');
    const shredder_board_marker_memo = $("input[name='shredder_board_marker_memo']").val();

    const shredder_magnet_past = $("input[name='shredder_magnet_past']").val() || 0;
    const shredder_magnet_receiving = $("input[name='shredder_magnet_receiving']").val() || 0;
    const shredder_magnet_present = $("input[name='shredder_magnet_present']").val() || 0;
    const shredder_magnet_broken = $("input[name='shredder_magnet_broken']").prop('checked');
    const shredder_magnet_memo = $("input[name='shredder_magnet_memo']").val();

    const shredder_plastic_tray_past = $("input[name='shredder_plastic_tray_past']").val() || 0;
    const shredder_plastic_tray_receiving = $("input[name='shredder_plastic_tray_receiving']").val() || 0;
    const shredder_plastic_tray_present = $("input[name='shredder_plastic_tray_present']").val() || 0;
    const shredder_plastic_tray_broken = $("input[name='shredder_plastic_tray_broken']").prop('checked');
    const shredder_plastic_tray_memo = $("input[name='shredder_plastic_tray_memo']").val();

    const shredder_plastic_box_past = $("input[name='shredder_plastic_box_past']").val() || 0;
    const shredder_plastic_box_receiving = $("input[name='shredder_plastic_box_receiving']").val() || 0;
    const shredder_plastic_box_present = $("input[name='shredder_plastic_box_present']").val() || 0;
    const shredder_plastic_box_broken = $("input[name='shredder_plastic_box_broken']").prop('checked');
    const shredder_plastic_box_memo = $("input[name='shredder_plastic_box_memo']").val();

    const processing_clippers_past = $("input[name='processing_clippers_past']").val() || 0;
    const processing_clippers_receiving = $("input[name='processing_clippers_receiving']").val() || 0;
    const processing_clippers_present = $("input[name='processing_clippers_present']").val() || 0;
    const processing_clippers_broken = $("input[name='processing_clippers_broken']").prop('checked');
    const processing_clippers_memo = $("input[name='processing_clippers_memo']").val();

    const processing_gourd_past = $("input[name='processing_gourd_past']").val() || 0;
    const processing_gourd_receiving = $("input[name='processing_gourd_receiving']").val() || 0;
    const processing_gourd_present = $("input[name='processing_gourd_present']").val() || 0;
    const processing_gourd_broken = $("input[name='processing_gourd_broken']").prop('checked');
    const processing_gourd_memo = $("input[name='processing_gourd_memo']").val();

    const processing_trash_can_past = $("input[name='processing_trash_can_past']").val() || 0;
    const processing_trash_can_receiving = $("input[name='processing_trash_can_receiving']").val() || 0;
    const processing_trash_can_present = $("input[name='processing_trash_can_present']").val() || 0;
    const processing_trash_can_broken = $("input[name='processing_trash_can_broken']").prop('checked');
    const processing_trash_can_memo = $("input[name='processing_trash_can_memo']").val();

    const processing_plastic_box_past = $("input[name='processing_plastic_box_past']").val() || 0;
    const processing_plastic_box_receiving = $("input[name='processing_plastic_box_receiving']").val() || 0;
    const processing_plastic_box_present = $("input[name='processing_plastic_box_present']").val() || 0;
    const processing_plastic_box_broken = $("input[name='processing_plastic_box_broken']").prop('checked');
    const processing_plastic_box_memo = $("input[name='processing_plastic_box_memo']").val();

    const heating_clippers_past = $("input[name='heating_clippers_past']").val() || 0;
    const heating_clippers_receiving = $("input[name='heating_clippers_receiving']").val() || 0;
    const heating_clippers_present = $("input[name='heating_clippers_present']").val() || 0;
    const heating_clippers_broken = $("input[name='heating_clippers_broken']").prop('checked');
    const heating_clippers_memo = $("input[name='heating_clippers_memo']").val();


    const heating_magnet_past = $("input[name='heating_magnet_past']").val() || 0;
    const heating_magnet_receiving = $("input[name='heating_magnet_receiving']").val() || 0;
    const heating_magnet_present = $("input[name='heating_magnet_present']").val() || 0;
    const heating_magnet_broken = $("input[name='heating_magnet_broken']").prop('checked');
    const heating_magnet_memo = $("input[name='heating_magnet_memo']").val();

    const heating_plastic_tray_past = $("input[name='heating_plastic_tray_past']").val() || 0;
    const heating_plastic_tray_receiving = $("input[name='heating_plastic_tray_receiving']").val() || 0;
    const heating_plastic_tray_present = $("input[name='heating_plastic_tray_present']").val() || 0;
    const heating_plastic_tray_broken = $("input[name='heating_plastic_tray_broken']").prop('checked');
    const heating_plastic_tray_memo = $("input[name='heating_plastic_tray_memo']").val();

    const heating_plastic_box_past = $("input[name='heating_plastic_box_past']").val() || 0;
    const heating_plastic_box_receiving = $("input[name='heating_plastic_box_receiving']").val() || 0;
    const heating_plastic_box_present = $("input[name='heating_plastic_box_present']").val() || 0;
    const heating_plastic_box_broken = $("input[name='heating_plastic_box_broken']").prop('checked');
    const heating_plastic_box_memo = $("input[name='heating_plastic_box_memo']").val();

    const inner_packing_white_board_past = $("input[name='inner_packing_white_board_past']").val() || 0;
    const inner_packing_white_board_receiving = $("input[name='inner_packing_white_board_receiving']").val() || 0;
    const inner_packing_white_board_present = $("input[name='inner_packing_white_board_present']").val() || 0;
    const inner_packing_white_board_broken = $("input[name='inner_packing_white_board_broken']").prop('checked');
    const inner_packing_white_board_memo = $("input[name='inner_packing_white_board_memo']").val();

    const inner_packing_board_marker_past = $("input[name='inner_packing_board_marker_past']").val() || 0;
    const inner_packing_board_marker_receiving = $("input[name='inner_packing_board_marker_receiving']").val() || 0;
    const inner_packing_board_marker_present = $("input[name='inner_packing_board_marker_present']").val() || 0;
    const inner_packing_board_marker_broken = $("input[name='inner_packing_board_marker_broken']").prop('checked');
    const inner_packing_board_marker_memo = $("input[name='inner_packing_board_marker_memo']").val();

    const inner_packing_magnet_past = $("input[name='inner_packing_magnet_past']").val() || 0;
    const inner_packing_magnet_receiving = $("input[name='inner_packing_magnet_receiving']").val() || 0;
    const inner_packing_magnet_present = $("input[name='inner_packing_magnet_present']").val() || 0;
    const inner_packing_magnet_broken = $("input[name='inner_packing_magnet_broken']").prop('checked');
    const inner_packing_magnet_memo = $("input[name='inner_packing_magnet_memo']").val();

    const inner_packing_clippers_past = $("input[name='inner_packing_clippers_past']").val() || 0;
    const inner_packing_clippers_receiving = $("input[name='inner_packing_clippers_receiving']").val() || 0;
    const inner_packing_clippers_present = $("input[name='inner_packing_clippers_present']").val() || 0;
    const inner_packing_clippers_broken = $("input[name='inner_packing_clippers_broken']").prop('checked');
    const inner_packing_clippers_memo = $("input[name='inner_packing_clippers_memo']").val();

    const inner_packing_storage_past = $("input[name='inner_packing_storage_past']").val() || 0;
    const inner_packing_storage_receiving = $("input[name='inner_packing_storage_receiving']").val() || 0;
    const inner_packing_storage_present = $("input[name='inner_packing_storage_present']").val() || 0;
    const inner_packing_storage_broken = $("input[name='inner_packing_storage_broken']").prop('checked');
    const inner_packing_storage_memo = $("input[name='inner_packing_storage_memo']").val();

    const inner_packing_plastic_box_past = $("input[name='inner_packing_plastic_box_past']").val() || 0;
    const inner_packing_plastic_box_receiving = $("input[name='inner_packing_plastic_box_receiving']").val() || 0;
    const inner_packing_plastic_box_present = $("input[name='inner_packing_plastic_box_present']").val() || 0;
    const inner_packing_plastic_box_broken = $("input[name='inner_packing_plastic_box_broken']").prop('checked');
    const inner_packing_plastic_box_memo = $("input[name='inner_packing_plastic_box_memo']").val();

    const outer_packing_white_board_past = $("input[name='outer_packing_white_board_past']").val() || 0;
    const outer_packing_white_board_receiving = $("input[name='outer_packing_white_board_receiving']").val() || 0;
    const outer_packing_white_board_present = $("input[name='outer_packing_white_board_present']").val() || 0;
    const outer_packing_white_board_broken = $("input[name='outer_packing_white_board_broken']").prop('checked');
    const outer_packing_white_board_memo = $("input[name='outer_packing_white_board_memo']").val();

    const outer_packing_board_marker_past = $("input[name='outer_packing_board_marker_past']").val() || 0;
    const outer_packing_board_marker_receiving = $("input[name='outer_packing_board_marker_receiving']").val() || 0;
    const outer_packing_board_marker_present = $("input[name='outer_packing_board_marker_present']").val() || 0;
    const outer_packing_board_marker_broken = $("input[name='outer_packing_board_marker_broken']").prop('checked');
    const outer_packing_board_marker_memo = $("input[name='outer_packing_board_marker_memo']").val();

    const outer_packing_magnet_past = $("input[name='outer_packing_magnet_past']").val() || 0;
    const outer_packing_magnet_receiving = $("input[name='outer_packing_magnet_receiving']").val() || 0;
    const outer_packing_magnet_present = $("input[name='outer_packing_magnet_present']").val() || 0;
    const outer_packing_magnet_broken = $("input[name='outer_packing_magnet_broken']").prop('checked');
    const outer_packing_magnet_memo = $("input[name='outer_packing_magnet_memo']").val();

    const outer_packing_clippers_past = $("input[name='outer_packing_clippers_past']").val() || 0;
    const outer_packing_clippers_receiving = $("input[name='outer_packing_clippers_receiving']").val() || 0;
    const outer_packing_clippers_present = $("input[name='outer_packing_clippers_present']").val() || 0;
    const outer_packing_clippers_broken = $("input[name='outer_packing_clippers_broken']").prop('checked');
    const outer_packing_clippers_memo = $("input[name='outer_packing_clippers_memo']").val();

    const outer_packing_broom_past = $("input[name='outer_packing_broom_past']").val() || 0;
    const outer_packing_broom_receiving = $("input[name='outer_packing_broom_receiving']").val() || 0;
    const outer_packing_broom_present = $("input[name='outer_packing_broom_present']").val() || 0;
    const outer_packing_broom_broken = $("input[name='outer_packing_broom_broken']").prop('checked');
    const outer_packing_broom_memo = $("input[name='outer_packing_broom_memo']").val();

    const outer_packing_dustpan_past = $("input[name='outer_packing_dustpan_past']").val() || 0;
    const outer_packing_dustpan_receiving = $("input[name='outer_packing_dustpan_receiving']").val() || 0;
    const outer_packing_dustpan_present = $("input[name='outer_packing_dustpan_present']").val() || 0;
    const outer_packing_dustpan_broken = $("input[name='outer_packing_dustpan_broken']").prop('checked');
    const outer_packing_dustpan_memo = $("input[name='outer_packing_dustpan_memo']").val();

    const outer_packing_trash_can_past = $("input[name='outer_packing_trash_can_past']").val() || 0;
    const outer_packing_trash_can_receiving = $("input[name='outer_packing_trash_can_receiving']").val() || 0;
    const outer_packing_trash_can_present = $("input[name='outer_packing_trash_can_present']").val() || 0;
    const outer_packing_trash_can_broken = $("input[name='outer_packing_trash_can_broken']").prop('checked');
    const outer_packing_trash_can_memo = $("input[name='outer_packing_trash_can_memo']").val();

    const outer_packing_plastic_box_past = $("input[name='outer_packing_plastic_box_past']").val() || 0;
    const outer_packing_plastic_box_receiving = $("input[name='outer_packing_plastic_box_receiving']").val() || 0;
    const outer_packing_plastic_box_present = $("input[name='outer_packing_plastic_box_present']").val() || 0;
    const outer_packing_plastic_box_broken = $("input[name='outer_packing_plastic_box_broken']").prop('checked');
    const outer_packing_plastic_box_memo = $("input[name='outer_packing_plastic_box_memo']").val();

    const outer_packing_vinyl_rap_past = $("input[name='outer_packing_vinyl_rap_past']").val() || 0;
    const outer_packing_vinyl_rap_receiving = $("input[name='outer_packing_vinyl_rap_receiving']").val() || 0;
    const outer_packing_vinyl_rap_present = $("input[name='outer_packing_vinyl_rap_present']").val() || 0;
    const outer_packing_vinyl_rap_broken = $("input[name='outer_packing_vinyl_rap_broken']").prop('checked');
    const outer_packing_vinyl_rap_memo = $("input[name='outer_packing_vinyl_rap_memo']").val();

    const equipment_broom_past = $("input[name='equipment_broom_past']").val() || 0;
    const equipment_broom_receiving = $("input[name='equipment_broom_receiving']").val() || 0;
    const equipment_broom_present = $("input[name='equipment_broom_present']").val() || 0;
    const equipment_broom_broken = $("input[name='equipment_broom_broken']").prop('checked');
    const equipment_broom_memo = $("input[name='equipment_broom_memo']").val();

    const equipment_dustpan_past = $("input[name='equipment_dustpan_past']").val() || 0;
    const equipment_dustpan_receiving = $("input[name='equipment_dustpan_receiving']").val() || 0;
    const equipment_dustpan_present = $("input[name='equipment_dustpan_present']").val() || 0;
    const equipment_dustpan_broken = $("input[name='equipment_dustpan_broken']").prop('checked');
    const equipment_dustpan_memo = $("input[name='equipment_dustpan_memo']").val();

    const equipment_bottom_broom_past = $("input[name='equipment_bottom_broom_past']").val() || 0;
    const equipment_bottom_broom_receiving = $("input[name='equipment_bottom_broom_receiving']").val() || 0;
    const equipment_bottom_broom_present = $("input[name='equipment_bottom_broom_present']").val() || 0;
    const equipment_bottom_broom_broken = $("input[name='equipment_bottom_broom_broken']").prop('checked');
    const equipment_bottom_broom_memo = $("input[name='equipment_bottom_broom_memo']").val();

    const equipment_cleaning_broom_past = $("input[name='equipment_cleaning_broom_past']").val() || 0;
    const equipment_cleaning_broom_receiving = $("input[name='equipment_cleaning_broom_receiving']").val() || 0;
    const equipment_cleaning_broom_present = $("input[name='equipment_cleaning_broom_present']").val() || 0;
    const equipment_cleaning_broom_broken = $("input[name='equipment_cleaning_broom_broken']").prop('checked');
    const equipment_cleaning_broom_memo = $("input[name='equipment_cleaning_broom_memo']").val();

    const equipment_squeegee_past = $("input[name='equipment_squeegee_past']").val() || 0;
    const equipment_squeegee_receiving = $("input[name='equipment_squeegee_receiving']").val() || 0;
    const equipment_squeegee_present = $("input[name='equipment_squeegee_present']").val() || 0;
    const equipment_squeegee_broken = $("input[name='equipment_squeegee_broken']").prop('checked');
    const equipment_squeegee_memo = $("input[name='equipment_squeegee_memo']").val();

    const equipment_holder_past = $("input[name='equipment_holder_past']").val() || 0;
    const equipment_holder_receiving = $("input[name='equipment_holder_receiving']").val() || 0;
    const equipment_holder_present = $("input[name='equipment_holder_present']").val() || 0;
    const equipment_holder_broken = $("input[name='equipment_holder_broken']").prop('checked');
    const equipment_holder_memo = $("input[name='equipment_holder_memo']").val();

    const equipment_white_board_past = $("input[name='equipment_white_board_past']").val() || 0;
    const equipment_white_board_receiving = $("input[name='equipment_white_board_receiving']").val() || 0;
    const equipment_white_board_present = $("input[name='equipment_white_board_present']").val() || 0;
    const equipment_white_board_broken = $("input[name='equipment_white_board_broken']").prop('checked');
    const equipment_white_board_memo = $("input[name='equipment_white_board_memo']").val();

    $('#table2 tbody tr').each(function () {
        const generator = $(this).find("[name='generator']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const approver = $(this).find("[name='approver']").val();

        if (generator || feedback_content || content || approver) {
            memos.push({
                generator: generator,
                content: content,
                feedback_content: feedback_content,
                approver: approver,
            })
        }
    })


    data = {
        "author": author,
        'better_white_board_past': better_white_board_past,
        'better_white_board_receiving': better_white_board_receiving,
        'better_white_board_present': better_white_board_present,
        'better_white_board_broken': better_white_board_broken,
        'better_white_board_memo': better_white_board_memo,

        'better_board_marker_past': better_board_marker_past,
        'better_board_marker_receiving': better_board_marker_receiving,
        'better_board_marker_present': better_board_marker_present,
        'better_board_marker_broken': better_board_marker_broken,
        'better_board_marker_memo': better_board_marker_memo,

        'better_magnet_past': better_magnet_past,
        'better_magnet_receiving': better_magnet_receiving,
        'better_magnet_present': better_magnet_present,
        'better_magnet_broken': better_magnet_broken,
        'better_magnet_memo': better_magnet_memo,

        'better_clippers_past': better_clippers_past,
        'better_clippers_receiving': better_clippers_receiving,
        'better_clippers_present': better_clippers_present,
        'better_clippers_broken': better_clippers_broken,
        'better_clippers_memo': better_clippers_memo,

        'shredder_white_board_past': shredder_white_board_past,
        'shredder_white_board_receiving': shredder_white_board_receiving,
        'shredder_white_board_present': shredder_white_board_present,
        'shredder_white_board_broken': shredder_white_board_broken,
        'shredder_white_board_memo': shredder_white_board_memo,

        'shredder_board_marker_past': shredder_board_marker_past,
        'shredder_board_marker_receiving': shredder_board_marker_receiving,
        'shredder_board_marker_present': shredder_board_marker_present,
        'shredder_board_marker_broken': shredder_board_marker_broken,
        'shredder_board_marker_memo': shredder_board_marker_memo,

        'shredder_magnet_past': shredder_magnet_past,
        'shredder_magnet_receiving': shredder_magnet_receiving,
        'shredder_magnet_present': shredder_magnet_present,
        'shredder_magnet_broken': shredder_magnet_broken,
        'shredder_magnet_memo': shredder_magnet_memo,

        'shredder_plastic_tray_past': shredder_plastic_tray_past,
        'shredder_plastic_tray_receiving': shredder_plastic_tray_receiving,
        'shredder_plastic_tray_present': shredder_plastic_tray_present,
        'shredder_plastic_tray_broken': shredder_plastic_tray_broken,
        'shredder_plastic_tray_memo': shredder_plastic_tray_memo,

        'shredder_plastic_box_past': shredder_plastic_box_past,
        'shredder_plastic_box_receiving': shredder_plastic_box_receiving,
        'shredder_plastic_box_present': shredder_plastic_box_present,
        'shredder_plastic_box_broken': shredder_plastic_box_broken,
        'shredder_plastic_box_memo': shredder_plastic_box_memo,

        'processing_clippers_past': processing_clippers_past,
        'processing_clippers_receiving': processing_clippers_receiving,
        'processing_clippers_present': processing_clippers_present,
        'processing_clippers_broken': processing_clippers_broken,
        'processing_clippers_memo': processing_clippers_memo,

        'processing_gourd_past': processing_gourd_past,
        'processing_gourd_receiving': processing_gourd_receiving,
        'processing_gourd_present': processing_gourd_present,
        'processing_gourd_broken': processing_gourd_broken,
        'processing_gourd_memo': processing_gourd_memo,

        'processing_trash_can_past': processing_trash_can_past,
        'processing_trash_can_receiving': processing_trash_can_receiving,
        'processing_trash_can_present': processing_trash_can_present,
        'processing_trash_can_broken': processing_trash_can_broken,
        'processing_trash_can_memo': processing_trash_can_memo,

        'processing_plastic_box_past': processing_plastic_box_past,
        'processing_plastic_box_receiving': processing_plastic_box_receiving,
        'processing_plastic_box_present': processing_plastic_box_present,
        'processing_plastic_box_broken': processing_plastic_box_broken,
        'processing_plastic_box_memo': processing_plastic_box_memo,

        'heating_clippers_past': heating_clippers_past,
        'heating_clippers_receiving': heating_clippers_receiving,
        'heating_clippers_present': heating_clippers_present,
        'heating_clippers_broken': heating_clippers_broken,
        'heating_clippers_memo': heating_clippers_memo,

        'heating_magnet_past': heating_magnet_past,
        'heating_magnet_receiving': heating_magnet_receiving,
        'heating_magnet_present': heating_magnet_present,
        'heating_magnet_broken': heating_magnet_broken,
        'heating_magnet_memo': heating_magnet_memo,

        'heating_plastic_tray_past': heating_plastic_tray_past,
        'heating_plastic_tray_receiving': heating_plastic_tray_receiving,
        'heating_plastic_tray_present': heating_plastic_tray_present,
        'heating_plastic_tray_broken': heating_plastic_tray_broken,
        'heating_plastic_tray_memo': heating_plastic_tray_memo,

        'heating_plastic_box_past': heating_plastic_box_past,
        'heating_plastic_box_receiving': heating_plastic_box_receiving,
        'heating_plastic_box_present': heating_plastic_box_present,
        'heating_plastic_box_broken': heating_plastic_box_broken,
        'heating_plastic_box_memo': heating_plastic_box_memo,

        'inner_packing_white_board_past': inner_packing_white_board_past,
        'inner_packing_white_board_receiving': inner_packing_white_board_receiving,
        'inner_packing_white_board_present': inner_packing_white_board_present,
        'inner_packing_white_board_broken': inner_packing_white_board_broken,
        'inner_packing_white_board_memo': inner_packing_white_board_memo,

        'inner_packing_board_marker_past': inner_packing_board_marker_past,
        'inner_packing_board_marker_receiving': inner_packing_board_marker_receiving,
        'inner_packing_board_marker_present': inner_packing_board_marker_present,
        'inner_packing_board_marker_broken': inner_packing_board_marker_broken,
        'inner_packing_board_marker_memo': inner_packing_board_marker_memo,

        'inner_packing_magnet_past': inner_packing_magnet_past,
        'inner_packing_magnet_receiving': inner_packing_magnet_receiving,
        'inner_packing_magnet_present': inner_packing_magnet_present,
        'inner_packing_magnet_broken': inner_packing_magnet_broken,
        'inner_packing_magnet_memo': inner_packing_magnet_memo,

        'inner_packing_clippers_past': inner_packing_clippers_past,
        'inner_packing_clippers_receiving': inner_packing_clippers_receiving,
        'inner_packing_clippers_present': inner_packing_clippers_present,
        'inner_packing_clippers_broken': inner_packing_clippers_broken,
        'inner_packing_clippers_memo': inner_packing_clippers_memo,

        'inner_packing_storage_past': inner_packing_storage_past,
        'inner_packing_storage_receiving': inner_packing_storage_receiving,
        'inner_packing_storage_present': inner_packing_storage_present,
        'inner_packing_storage_broken': inner_packing_storage_broken,
        'inner_packing_storage_memo': inner_packing_storage_memo,

        'inner_packing_plastic_box_past': inner_packing_plastic_box_past,
        'inner_packing_plastic_box_receiving': inner_packing_plastic_box_receiving,
        'inner_packing_plastic_box_present': inner_packing_plastic_box_present,
        'inner_packing_plastic_box_broken': inner_packing_plastic_box_broken,
        'inner_packing_plastic_box_memo': inner_packing_plastic_box_memo,

        'outer_packing_white_board_past': outer_packing_white_board_past,
        'outer_packing_white_board_receiving': outer_packing_white_board_receiving,
        'outer_packing_white_board_present': outer_packing_white_board_present,
        'outer_packing_white_board_broken': outer_packing_white_board_broken,
        'outer_packing_white_board_memo': outer_packing_white_board_memo,

        'outer_packing_board_marker_past': outer_packing_board_marker_past,
        'outer_packing_board_marker_receiving': outer_packing_board_marker_receiving,
        'outer_packing_board_marker_present': outer_packing_board_marker_present,
        'outer_packing_board_marker_broken': outer_packing_board_marker_broken,
        'outer_packing_board_marker_memo': outer_packing_board_marker_memo,

        'outer_packing_magnet_past': outer_packing_magnet_past,
        'outer_packing_magnet_receiving': outer_packing_magnet_receiving,
        'outer_packing_magnet_present': outer_packing_magnet_present,
        'outer_packing_magnet_broken': outer_packing_magnet_broken,
        'outer_packing_magnet_memo': outer_packing_magnet_memo,

        'outer_packing_clippers_past': outer_packing_clippers_past,
        'outer_packing_clippers_receiving': outer_packing_clippers_receiving,
        'outer_packing_clippers_present': outer_packing_clippers_present,
        'outer_packing_clippers_broken': outer_packing_clippers_broken,
        'outer_packing_clippers_memo': outer_packing_clippers_memo,

        'outer_packing_broom_past': outer_packing_broom_past,
        'outer_packing_broom_receiving': outer_packing_broom_receiving,
        'outer_packing_broom_present': outer_packing_broom_present,
        'outer_packing_broom_broken': outer_packing_broom_broken,
        'outer_packing_broom_memo': outer_packing_broom_memo,

        'outer_packing_dustpan_past': outer_packing_dustpan_past,
        'outer_packing_dustpan_receiving': outer_packing_dustpan_receiving,
        'outer_packing_dustpan_present': outer_packing_dustpan_present,
        'outer_packing_dustpan_broken': outer_packing_dustpan_broken,
        'outer_packing_dustpan_memo': outer_packing_dustpan_memo,

        'outer_packing_trash_can_past': outer_packing_trash_can_past,
        'outer_packing_trash_can_receiving': outer_packing_trash_can_receiving,
        'outer_packing_trash_can_present': outer_packing_trash_can_present,
        'outer_packing_trash_can_broken': outer_packing_trash_can_broken,
        'outer_packing_trash_can_memo': outer_packing_trash_can_memo,

        'outer_packing_plastic_box_past': outer_packing_plastic_box_past,
        'outer_packing_plastic_box_receiving': outer_packing_plastic_box_receiving,
        'outer_packing_plastic_box_present': outer_packing_plastic_box_present,
        'outer_packing_plastic_box_broken': outer_packing_plastic_box_broken,
        'outer_packing_plastic_box_memo': outer_packing_plastic_box_memo,

        'outer_packing_vinyl_rap_past': outer_packing_vinyl_rap_past,
        'outer_packing_vinyl_rap_receiving': outer_packing_vinyl_rap_receiving,
        'outer_packing_vinyl_rap_present': outer_packing_vinyl_rap_present,
        'outer_packing_vinyl_rap_broken': outer_packing_vinyl_rap_broken,
        'outer_packing_vinyl_rap_memo': outer_packing_vinyl_rap_memo,

        'equipment_broom_past': equipment_broom_past,
        'equipment_broom_receiving': equipment_broom_receiving,
        'equipment_broom_present': equipment_broom_present,
        'equipment_broom_broken': equipment_broom_broken,
        'equipment_broom_memo': equipment_broom_memo,

        'equipment_dustpan_past': equipment_dustpan_past,
        'equipment_dustpan_receiving': equipment_dustpan_receiving,
        'equipment_dustpan_present': equipment_dustpan_present,
        'equipment_dustpan_broken': equipment_dustpan_broken,
        'equipment_dustpan_memo': equipment_dustpan_memo,

        'equipment_bottom_broom_past': equipment_bottom_broom_past,
        'equipment_bottom_broom_receiving': equipment_bottom_broom_receiving,
        'equipment_bottom_broom_present': equipment_bottom_broom_present,
        'equipment_bottom_broom_broken': equipment_bottom_broom_broken,
        'equipment_bottom_broom_memo': equipment_bottom_broom_memo,

        'equipment_cleaning_broom_past': equipment_cleaning_broom_past,
        'equipment_cleaning_broom_receiving': equipment_cleaning_broom_receiving,
        'equipment_cleaning_broom_present': equipment_cleaning_broom_present,
        'equipment_cleaning_broom_broken': equipment_cleaning_broom_broken,
        'equipment_cleaning_broom_memo': equipment_cleaning_broom_memo,

        'equipment_squeegee_past': equipment_squeegee_past,
        'equipment_squeegee_receiving': equipment_squeegee_receiving,
        'equipment_squeegee_present': equipment_squeegee_present,
        'equipment_squeegee_broken': equipment_squeegee_broken,
        'equipment_squeegee_memo': equipment_squeegee_memo,

        'equipment_holder_past': equipment_holder_past,
        'equipment_holder_receiving': equipment_holder_receiving,
        'equipment_holder_present': equipment_holder_present,
        'equipment_holder_broken': equipment_holder_broken,
        'equipment_holder_memo': equipment_holder_memo,

        'equipment_white_board_past': equipment_white_board_past,
        'equipment_white_board_receiving': equipment_white_board_receiving,
        'equipment_white_board_present': equipment_white_board_present,
        'equipment_white_board_broken': equipment_white_board_broken,
        'equipment_white_board_memo': equipment_white_board_memo,
        "memos": memos,
    }

    console.log(data)
    $.ajax({
        url: "/haccp/api/file4/",
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
            location.href = "/haccp/file4/";
        },
        error: function (response) {
            alert(response.status);
            alert(response.responseJSON);
            alert(response.error);
        }
    })
}

function file4Update(file4_pk) {
    const token = $("input[name='csrfmiddlewaretoken']").val();
    let data = {};
    const memos = [];

    const author = $("input[name='author']").val();

    const better_white_board_past = $("input[name='better_white_board_past']").val() || 0;
    const better_white_board_receiving = $("input[name='better_white_board_receiving']").val() || 0;
    const better_white_board_present = $("input[name='better_white_board_present']").val() || 0;
    const better_white_board_broken = $("input[name='better_white_board_broken']").prop('checked');
    const better_white_board_memo = $("input[name='better_white_board_memo']").val();

    const better_board_marker_past = $("input[name='better_board_marker_past']").val() || 0;
    const better_board_marker_receiving = $("input[name='better_board_marker_receiving']").val() || 0;
    const better_board_marker_present = $("input[name='better_board_marker_present']").val() || 0;
    const better_board_marker_broken = $("input[name='better_board_marker_broken']").prop('checked');
    const better_board_marker_memo = $("input[name='better_board_marker_memo']").val();

    const better_magnet_past = $("input[name='better_magnet_past']").val() || 0;
    const better_magnet_receiving = $("input[name='better_magnet_receiving']").val() || 0;
    const better_magnet_present = $("input[name='better_magnet_present']").val() || 0;
    const better_magnet_broken = $("input[name='better_magnet_broken']").prop('checked');
    const better_magnet_memo = $("input[name='better_magnet_memo']").val();

    const better_clippers_past = $("input[name='better_clippers_past']").val() || 0;
    const better_clippers_receiving = $("input[name='better_clippers_receiving']").val() || 0;
    const better_clippers_present = $("input[name='better_clippers_present']").val() || 0;
    const better_clippers_broken = $("input[name='better_clippers_broken']").prop('checked');
    const better_clippers_memo = $("input[name='better_clippers_memo']").val();

    const shredder_white_board_past = $("input[name='shredder_white_board_past']").val() || 0;
    const shredder_white_board_receiving = $("input[name='shredder_white_board_receiving']").val() || 0;
    const shredder_white_board_present = $("input[name='shredder_white_board_present']").val() || 0;
    const shredder_white_board_broken = $("input[name='shredder_white_board_broken']").prop('checked');
    const shredder_white_board_memo = $("input[name='shredder_white_board_memo']").val();

    const shredder_board_marker_past = $("input[name='shredder_board_marker_past']").val() || 0;
    const shredder_board_marker_receiving = $("input[name='shredder_board_marker_receiving']").val() || 0;
    const shredder_board_marker_present = $("input[name='shredder_board_marker_present']").val() || 0;
    const shredder_board_marker_broken = $("input[name='shredder_board_marker_broken']").prop('checked');
    const shredder_board_marker_memo = $("input[name='shredder_board_marker_memo']").val();

    const shredder_magnet_past = $("input[name='shredder_magnet_past']").val() || 0;
    const shredder_magnet_receiving = $("input[name='shredder_magnet_receiving']").val() || 0;
    const shredder_magnet_present = $("input[name='shredder_magnet_present']").val() || 0;
    const shredder_magnet_broken = $("input[name='shredder_magnet_broken']").prop('checked');
    const shredder_magnet_memo = $("input[name='shredder_magnet_memo']").val();

    const shredder_plastic_tray_past = $("input[name='shredder_plastic_tray_past']").val() || 0;
    const shredder_plastic_tray_receiving = $("input[name='shredder_plastic_tray_receiving']").val() || 0;
    const shredder_plastic_tray_present = $("input[name='shredder_plastic_tray_present']").val() || 0;
    const shredder_plastic_tray_broken = $("input[name='shredder_plastic_tray_broken']").prop('checked');
    const shredder_plastic_tray_memo = $("input[name='shredder_plastic_tray_memo']").val();

    const shredder_plastic_box_past = $("input[name='shredder_plastic_box_past']").val() || 0;
    const shredder_plastic_box_receiving = $("input[name='shredder_plastic_box_receiving']").val() || 0;
    const shredder_plastic_box_present = $("input[name='shredder_plastic_box_present']").val() || 0;
    const shredder_plastic_box_broken = $("input[name='shredder_plastic_box_broken']").prop('checked');
    const shredder_plastic_box_memo = $("input[name='shredder_plastic_box_memo']").val();

    const processing_clippers_past = $("input[name='processing_clippers_past']").val() || 0;
    const processing_clippers_receiving = $("input[name='processing_clippers_receiving']").val() || 0;
    const processing_clippers_present = $("input[name='processing_clippers_present']").val() || 0;
    const processing_clippers_broken = $("input[name='processing_clippers_broken']").prop('checked');
    const processing_clippers_memo = $("input[name='processing_clippers_memo']").val();

    const processing_gourd_past = $("input[name='processing_gourd_past']").val() || 0;
    const processing_gourd_receiving = $("input[name='processing_gourd_receiving']").val() || 0;
    const processing_gourd_present = $("input[name='processing_gourd_present']").val() || 0;
    const processing_gourd_broken = $("input[name='processing_gourd_broken']").prop('checked');
    const processing_gourd_memo = $("input[name='processing_gourd_memo']").val();

    const processing_trash_can_past = $("input[name='processing_trash_can_past']").val() || 0;
    const processing_trash_can_receiving = $("input[name='processing_trash_can_receiving']").val() || 0;
    const processing_trash_can_present = $("input[name='processing_trash_can_present']").val() || 0;
    const processing_trash_can_broken = $("input[name='processing_trash_can_broken']").prop('checked');
    const processing_trash_can_memo = $("input[name='processing_trash_can_memo']").val();

    const processing_plastic_box_past = $("input[name='processing_plastic_box_past']").val() || 0;
    const processing_plastic_box_receiving = $("input[name='processing_plastic_box_receiving']").val() || 0;
    const processing_plastic_box_present = $("input[name='processing_plastic_box_present']").val() || 0;
    const processing_plastic_box_broken = $("input[name='processing_plastic_box_broken']").prop('checked');
    const processing_plastic_box_memo = $("input[name='processing_plastic_box_memo']").val();

    const heating_clippers_past = $("input[name='heating_clippers_past']").val() || 0;
    const heating_clippers_receiving = $("input[name='heating_clippers_receiving']").val() || 0;
    const heating_clippers_present = $("input[name='heating_clippers_present']").val() || 0;
    const heating_clippers_broken = $("input[name='heating_clippers_broken']").prop('checked');
    const heating_clippers_memo = $("input[name='heating_clippers_memo']").val();


    const heating_magnet_past = $("input[name='heating_magnet_past']").val() || 0;
    const heating_magnet_receiving = $("input[name='heating_magnet_receiving']").val() || 0;
    const heating_magnet_present = $("input[name='heating_magnet_present']").val() || 0;
    const heating_magnet_broken = $("input[name='heating_magnet_broken']").prop('checked');
    const heating_magnet_memo = $("input[name='heating_magnet_memo']").val();

    const heating_plastic_tray_past = $("input[name='heating_plastic_tray_past']").val() || 0;
    const heating_plastic_tray_receiving = $("input[name='heating_plastic_tray_receiving']").val() || 0;
    const heating_plastic_tray_present = $("input[name='heating_plastic_tray_present']").val() || 0;
    const heating_plastic_tray_broken = $("input[name='heating_plastic_tray_broken']").prop('checked');
    const heating_plastic_tray_memo = $("input[name='heating_plastic_tray_memo']").val();

    const heating_plastic_box_past = $("input[name='heating_plastic_box_past']").val() || 0;
    const heating_plastic_box_receiving = $("input[name='heating_plastic_box_receiving']").val() || 0;
    const heating_plastic_box_present = $("input[name='heating_plastic_box_present']").val() || 0;
    const heating_plastic_box_broken = $("input[name='heating_plastic_box_broken']").prop('checked');
    const heating_plastic_box_memo = $("input[name='heating_plastic_box_memo']").val();

    const inner_packing_white_board_past = $("input[name='inner_packing_white_board_past']").val() || 0;
    const inner_packing_white_board_receiving = $("input[name='inner_packing_white_board_receiving']").val() || 0;
    const inner_packing_white_board_present = $("input[name='inner_packing_white_board_present']").val() || 0;
    const inner_packing_white_board_broken = $("input[name='inner_packing_white_board_broken']").prop('checked');
    const inner_packing_white_board_memo = $("input[name='inner_packing_white_board_memo']").val();

    const inner_packing_board_marker_past = $("input[name='inner_packing_board_marker_past']").val() || 0;
    const inner_packing_board_marker_receiving = $("input[name='inner_packing_board_marker_receiving']").val() || 0;
    const inner_packing_board_marker_present = $("input[name='inner_packing_board_marker_present']").val() || 0;
    const inner_packing_board_marker_broken = $("input[name='inner_packing_board_marker_broken']").prop('checked');
    const inner_packing_board_marker_memo = $("input[name='inner_packing_board_marker_memo']").val();

    const inner_packing_magnet_past = $("input[name='inner_packing_magnet_past']").val() || 0;
    const inner_packing_magnet_receiving = $("input[name='inner_packing_magnet_receiving']").val() || 0;
    const inner_packing_magnet_present = $("input[name='inner_packing_magnet_present']").val() || 0;
    const inner_packing_magnet_broken = $("input[name='inner_packing_magnet_broken']").prop('checked');
    const inner_packing_magnet_memo = $("input[name='inner_packing_magnet_memo']").val();

    const inner_packing_clippers_past = $("input[name='inner_packing_clippers_past']").val() || 0;
    const inner_packing_clippers_receiving = $("input[name='inner_packing_clippers_receiving']").val() || 0;
    const inner_packing_clippers_present = $("input[name='inner_packing_clippers_present']").val() || 0;
    const inner_packing_clippers_broken = $("input[name='inner_packing_clippers_broken']").prop('checked');
    const inner_packing_clippers_memo = $("input[name='inner_packing_clippers_memo']").val();

    const inner_packing_storage_past = $("input[name='inner_packing_storage_past']").val() || 0;
    const inner_packing_storage_receiving = $("input[name='inner_packing_storage_receiving']").val() || 0;
    const inner_packing_storage_present = $("input[name='inner_packing_storage_present']").val() || 0;
    const inner_packing_storage_broken = $("input[name='inner_packing_storage_broken']").prop('checked');
    const inner_packing_storage_memo = $("input[name='inner_packing_storage_memo']").val();

    const inner_packing_plastic_box_past = $("input[name='inner_packing_plastic_box_past']").val() || 0;
    const inner_packing_plastic_box_receiving = $("input[name='inner_packing_plastic_box_receiving']").val() || 0;
    const inner_packing_plastic_box_present = $("input[name='inner_packing_plastic_box_present']").val() || 0;
    const inner_packing_plastic_box_broken = $("input[name='inner_packing_plastic_box_broken']").prop('checked');
    const inner_packing_plastic_box_memo = $("input[name='inner_packing_plastic_box_memo']").val();

    const outer_packing_white_board_past = $("input[name='outer_packing_white_board_past']").val() || 0;
    const outer_packing_white_board_receiving = $("input[name='outer_packing_white_board_receiving']").val() || 0;
    const outer_packing_white_board_present = $("input[name='outer_packing_white_board_present']").val() || 0;
    const outer_packing_white_board_broken = $("input[name='outer_packing_white_board_broken']").prop('checked');
    const outer_packing_white_board_memo = $("input[name='outer_packing_white_board_memo']").val();

    const outer_packing_board_marker_past = $("input[name='outer_packing_board_marker_past']").val() || 0;
    const outer_packing_board_marker_receiving = $("input[name='outer_packing_board_marker_receiving']").val() || 0;
    const outer_packing_board_marker_present = $("input[name='outer_packing_board_marker_present']").val() || 0;
    const outer_packing_board_marker_broken = $("input[name='outer_packing_board_marker_broken']").prop('checked');
    const outer_packing_board_marker_memo = $("input[name='outer_packing_board_marker_memo']").val();

    const outer_packing_magnet_past = $("input[name='outer_packing_magnet_past']").val() || 0;
    const outer_packing_magnet_receiving = $("input[name='outer_packing_magnet_receiving']").val() || 0;
    const outer_packing_magnet_present = $("input[name='outer_packing_magnet_present']").val() || 0;
    const outer_packing_magnet_broken = $("input[name='outer_packing_magnet_broken']").prop('checked');
    const outer_packing_magnet_memo = $("input[name='outer_packing_magnet_memo']").val();

    const outer_packing_clippers_past = $("input[name='outer_packing_clippers_past']").val() || 0;
    const outer_packing_clippers_receiving = $("input[name='outer_packing_clippers_receiving']").val() || 0;
    const outer_packing_clippers_present = $("input[name='outer_packing_clippers_present']").val() || 0;
    const outer_packing_clippers_broken = $("input[name='outer_packing_clippers_broken']").prop('checked');
    const outer_packing_clippers_memo = $("input[name='outer_packing_clippers_memo']").val();

    const outer_packing_broom_past = $("input[name='outer_packing_broom_past']").val() || 0;
    const outer_packing_broom_receiving = $("input[name='outer_packing_broom_receiving']").val() || 0;
    const outer_packing_broom_present = $("input[name='outer_packing_broom_present']").val() || 0;
    const outer_packing_broom_broken = $("input[name='outer_packing_broom_broken']").prop('checked');
    const outer_packing_broom_memo = $("input[name='outer_packing_broom_memo']").val();

    const outer_packing_dustpan_past = $("input[name='outer_packing_dustpan_past']").val() || 0;
    const outer_packing_dustpan_receiving = $("input[name='outer_packing_dustpan_receiving']").val() || 0;
    const outer_packing_dustpan_present = $("input[name='outer_packing_dustpan_present']").val() || 0;
    const outer_packing_dustpan_broken = $("input[name='outer_packing_dustpan_broken']").prop('checked');
    const outer_packing_dustpan_memo = $("input[name='outer_packing_dustpan_memo']").val();

    const outer_packing_trash_can_past = $("input[name='outer_packing_trash_can_past']").val() || 0;
    const outer_packing_trash_can_receiving = $("input[name='outer_packing_trash_can_receiving']").val() || 0;
    const outer_packing_trash_can_present = $("input[name='outer_packing_trash_can_present']").val() || 0;
    const outer_packing_trash_can_broken = $("input[name='outer_packing_trash_can_broken']").prop('checked');
    const outer_packing_trash_can_memo = $("input[name='outer_packing_trash_can_memo']").val();

    const outer_packing_plastic_box_past = $("input[name='outer_packing_plastic_box_past']").val() || 0;
    const outer_packing_plastic_box_receiving = $("input[name='outer_packing_plastic_box_receiving']").val() || 0;
    const outer_packing_plastic_box_present = $("input[name='outer_packing_plastic_box_present']").val() || 0;
    const outer_packing_plastic_box_broken = $("input[name='outer_packing_plastic_box_broken']").prop('checked');
    const outer_packing_plastic_box_memo = $("input[name='outer_packing_plastic_box_memo']").val();

    const outer_packing_vinyl_rap_past = $("input[name='outer_packing_vinyl_rap_past']").val() || 0;
    const outer_packing_vinyl_rap_receiving = $("input[name='outer_packing_vinyl_rap_receiving']").val() || 0;
    const outer_packing_vinyl_rap_present = $("input[name='outer_packing_vinyl_rap_present']").val() || 0;
    const outer_packing_vinyl_rap_broken = $("input[name='outer_packing_vinyl_rap_broken']").prop('checked');
    const outer_packing_vinyl_rap_memo = $("input[name='outer_packing_vinyl_rap_memo']").val();

    const equipment_broom_past = $("input[name='equipment_broom_past']").val() || 0;
    const equipment_broom_receiving = $("input[name='equipment_broom_receiving']").val() || 0;
    const equipment_broom_present = $("input[name='equipment_broom_present']").val() || 0;
    const equipment_broom_broken = $("input[name='equipment_broom_broken']").prop('checked');
    const equipment_broom_memo = $("input[name='equipment_broom_memo']").val();

    const equipment_dustpan_past = $("input[name='equipment_dustpan_past']").val() || 0;
    const equipment_dustpan_receiving = $("input[name='equipment_dustpan_receiving']").val() || 0;
    const equipment_dustpan_present = $("input[name='equipment_dustpan_present']").val() || 0;
    const equipment_dustpan_broken = $("input[name='equipment_dustpan_broken']").prop('checked');
    const equipment_dustpan_memo = $("input[name='equipment_dustpan_memo']").val();

    const equipment_bottom_broom_past = $("input[name='equipment_bottom_broom_past']").val() || 0;
    const equipment_bottom_broom_receiving = $("input[name='equipment_bottom_broom_receiving']").val() || 0;
    const equipment_bottom_broom_present = $("input[name='equipment_bottom_broom_present']").val() || 0;
    const equipment_bottom_broom_broken = $("input[name='equipment_bottom_broom_broken']").prop('checked');
    const equipment_bottom_broom_memo = $("input[name='equipment_bottom_broom_memo']").val();

    const equipment_cleaning_broom_past = $("input[name='equipment_cleaning_broom_past']").val() || 0;
    const equipment_cleaning_broom_receiving = $("input[name='equipment_cleaning_broom_receiving']").val() || 0;
    const equipment_cleaning_broom_present = $("input[name='equipment_cleaning_broom_present']").val() || 0;
    const equipment_cleaning_broom_broken = $("input[name='equipment_cleaning_broom_broken']").prop('checked');
    const equipment_cleaning_broom_memo = $("input[name='equipment_cleaning_broom_memo']").val();

    const equipment_squeegee_past = $("input[name='equipment_squeegee_past']").val() || 0;
    const equipment_squeegee_receiving = $("input[name='equipment_squeegee_receiving']").val() || 0;
    const equipment_squeegee_present = $("input[name='equipment_squeegee_present']").val() || 0;
    const equipment_squeegee_broken = $("input[name='equipment_squeegee_broken']").prop('checked');
    const equipment_squeegee_memo = $("input[name='equipment_squeegee_memo']").val();

    const equipment_holder_past = $("input[name='equipment_holder_past']").val() || 0;
    const equipment_holder_receiving = $("input[name='equipment_holder_receiving']").val() || 0;
    const equipment_holder_present = $("input[name='equipment_holder_present']").val() || 0;
    const equipment_holder_broken = $("input[name='equipment_holder_broken']").prop('checked');
    const equipment_holder_memo = $("input[name='equipment_holder_memo']").val();

    const equipment_white_board_past = $("input[name='equipment_white_board_past']").val() || 0;
    const equipment_white_board_receiving = $("input[name='equipment_white_board_receiving']").val() || 0;
    const equipment_white_board_present = $("input[name='equipment_white_board_present']").val() || 0;
    const equipment_white_board_broken = $("input[name='equipment_white_board_broken']").prop('checked');
    const equipment_white_board_memo = $("input[name='equipment_white_board_memo']").val();

    $('#table2 tbody tr').each(function () {
        const generator = $(this).find("[name='generator']").val();
        const content = $(this).find("[name='content']").val();
        const feedback_content = $(this).find("[name='feedback_content']").val();
        const approver = $(this).find("[name='approver']").val();
        if (generator || feedback_content || content || approver) {
            memos.push({
                generator: generator,
                content: content,
                feedback_content: feedback_content,
                approver: approver,
            })
        }
    })


    data = {
        "author": author,
        'better_white_board_past': better_white_board_past,
        'better_white_board_receiving': better_white_board_receiving,
        'better_white_board_present': better_white_board_present,
        'better_white_board_broken': better_white_board_broken,
        'better_white_board_memo': better_white_board_memo,

        'better_board_marker_past': better_board_marker_past,
        'better_board_marker_receiving': better_board_marker_receiving,
        'better_board_marker_present': better_board_marker_present,
        'better_board_marker_broken': better_board_marker_broken,
        'better_board_marker_memo': better_board_marker_memo,

        'better_magnet_past': better_magnet_past,
        'better_magnet_receiving': better_magnet_receiving,
        'better_magnet_present': better_magnet_present,
        'better_magnet_broken': better_magnet_broken,
        'better_magnet_memo': better_magnet_memo,

        'better_clippers_past': better_clippers_past,
        'better_clippers_receiving': better_clippers_receiving,
        'better_clippers_present': better_clippers_present,
        'better_clippers_broken': better_clippers_broken,
        'better_clippers_memo': better_clippers_memo,

        'shredder_white_board_past': shredder_white_board_past,
        'shredder_white_board_receiving': shredder_white_board_receiving,
        'shredder_white_board_present': shredder_white_board_present,
        'shredder_white_board_broken': shredder_white_board_broken,
        'shredder_white_board_memo': shredder_white_board_memo,

        'shredder_board_marker_past': shredder_board_marker_past,
        'shredder_board_marker_receiving': shredder_board_marker_receiving,
        'shredder_board_marker_present': shredder_board_marker_present,
        'shredder_board_marker_broken': shredder_board_marker_broken,
        'shredder_board_marker_memo': shredder_board_marker_memo,

        'shredder_magnet_past': shredder_magnet_past,
        'shredder_magnet_receiving': shredder_magnet_receiving,
        'shredder_magnet_present': shredder_magnet_present,
        'shredder_magnet_broken': shredder_magnet_broken,
        'shredder_magnet_memo': shredder_magnet_memo,

        'shredder_plastic_tray_past': shredder_plastic_tray_past,
        'shredder_plastic_tray_receiving': shredder_plastic_tray_receiving,
        'shredder_plastic_tray_present': shredder_plastic_tray_present,
        'shredder_plastic_tray_broken': shredder_plastic_tray_broken,
        'shredder_plastic_tray_memo': shredder_plastic_tray_memo,

        'shredder_plastic_box_past': shredder_plastic_box_past,
        'shredder_plastic_box_receiving': shredder_plastic_box_receiving,
        'shredder_plastic_box_present': shredder_plastic_box_present,
        'shredder_plastic_box_broken': shredder_plastic_box_broken,
        'shredder_plastic_box_memo': shredder_plastic_box_memo,

        'processing_clippers_past': processing_clippers_past,
        'processing_clippers_receiving': processing_clippers_receiving,
        'processing_clippers_present': processing_clippers_present,
        'processing_clippers_broken': processing_clippers_broken,
        'processing_clippers_memo': processing_clippers_memo,

        'processing_gourd_past': processing_gourd_past,
        'processing_gourd_receiving': processing_gourd_receiving,
        'processing_gourd_present': processing_gourd_present,
        'processing_gourd_broken': processing_gourd_broken,
        'processing_gourd_memo': processing_gourd_memo,

        'processing_trash_can_past': processing_trash_can_past,
        'processing_trash_can_receiving': processing_trash_can_receiving,
        'processing_trash_can_present': processing_trash_can_present,
        'processing_trash_can_broken': processing_trash_can_broken,
        'processing_trash_can_memo': processing_trash_can_memo,

        'processing_plastic_box_past': processing_plastic_box_past,
        'processing_plastic_box_receiving': processing_plastic_box_receiving,
        'processing_plastic_box_present': processing_plastic_box_present,
        'processing_plastic_box_broken': processing_plastic_box_broken,
        'processing_plastic_box_memo': processing_plastic_box_memo,

        'heating_clippers_past': heating_clippers_past,
        'heating_clippers_receiving': heating_clippers_receiving,
        'heating_clippers_present': heating_clippers_present,
        'heating_clippers_broken': heating_clippers_broken,
        'heating_clippers_memo': heating_clippers_memo,

        'heating_magnet_past': heating_magnet_past,
        'heating_magnet_receiving': heating_magnet_receiving,
        'heating_magnet_present': heating_magnet_present,
        'heating_magnet_broken': heating_magnet_broken,
        'heating_magnet_memo': heating_magnet_memo,

        'heating_plastic_tray_past': heating_plastic_tray_past,
        'heating_plastic_tray_receiving': heating_plastic_tray_receiving,
        'heating_plastic_tray_present': heating_plastic_tray_present,
        'heating_plastic_tray_broken': heating_plastic_tray_broken,
        'heating_plastic_tray_memo': heating_plastic_tray_memo,

        'heating_plastic_box_past': heating_plastic_box_past,
        'heating_plastic_box_receiving': heating_plastic_box_receiving,
        'heating_plastic_box_present': heating_plastic_box_present,
        'heating_plastic_box_broken': heating_plastic_box_broken,
        'heating_plastic_box_memo': heating_plastic_box_memo,

        'inner_packing_white_board_past': inner_packing_white_board_past,
        'inner_packing_white_board_receiving': inner_packing_white_board_receiving,
        'inner_packing_white_board_present': inner_packing_white_board_present,
        'inner_packing_white_board_broken': inner_packing_white_board_broken,
        'inner_packing_white_board_memo': inner_packing_white_board_memo,

        'inner_packing_board_marker_past': inner_packing_board_marker_past,
        'inner_packing_board_marker_receiving': inner_packing_board_marker_receiving,
        'inner_packing_board_marker_present': inner_packing_board_marker_present,
        'inner_packing_board_marker_broken': inner_packing_board_marker_broken,
        'inner_packing_board_marker_memo': inner_packing_board_marker_memo,

        'inner_packing_magnet_past': inner_packing_magnet_past,
        'inner_packing_magnet_receiving': inner_packing_magnet_receiving,
        'inner_packing_magnet_present': inner_packing_magnet_present,
        'inner_packing_magnet_broken': inner_packing_magnet_broken,
        'inner_packing_magnet_memo': inner_packing_magnet_memo,

        'inner_packing_clippers_past': inner_packing_clippers_past,
        'inner_packing_clippers_receiving': inner_packing_clippers_receiving,
        'inner_packing_clippers_present': inner_packing_clippers_present,
        'inner_packing_clippers_broken': inner_packing_clippers_broken,
        'inner_packing_clippers_memo': inner_packing_clippers_memo,

        'inner_packing_storage_past': inner_packing_storage_past,
        'inner_packing_storage_receiving': inner_packing_storage_receiving,
        'inner_packing_storage_present': inner_packing_storage_present,
        'inner_packing_storage_broken': inner_packing_storage_broken,
        'inner_packing_storage_memo': inner_packing_storage_memo,

        'inner_packing_plastic_box_past': inner_packing_plastic_box_past,
        'inner_packing_plastic_box_receiving': inner_packing_plastic_box_receiving,
        'inner_packing_plastic_box_present': inner_packing_plastic_box_present,
        'inner_packing_plastic_box_broken': inner_packing_plastic_box_broken,
        'inner_packing_plastic_box_memo': inner_packing_plastic_box_memo,

        'outer_packing_white_board_past': outer_packing_white_board_past,
        'outer_packing_white_board_receiving': outer_packing_white_board_receiving,
        'outer_packing_white_board_present': outer_packing_white_board_present,
        'outer_packing_white_board_broken': outer_packing_white_board_broken,
        'outer_packing_white_board_memo': outer_packing_white_board_memo,

        'outer_packing_board_marker_past': outer_packing_board_marker_past,
        'outer_packing_board_marker_receiving': outer_packing_board_marker_receiving,
        'outer_packing_board_marker_present': outer_packing_board_marker_present,
        'outer_packing_board_marker_broken': outer_packing_board_marker_broken,
        'outer_packing_board_marker_memo': outer_packing_board_marker_memo,

        'outer_packing_magnet_past': outer_packing_magnet_past,
        'outer_packing_magnet_receiving': outer_packing_magnet_receiving,
        'outer_packing_magnet_present': outer_packing_magnet_present,
        'outer_packing_magnet_broken': outer_packing_magnet_broken,
        'outer_packing_magnet_memo': outer_packing_magnet_memo,

        'outer_packing_clippers_past': outer_packing_clippers_past,
        'outer_packing_clippers_receiving': outer_packing_clippers_receiving,
        'outer_packing_clippers_present': outer_packing_clippers_present,
        'outer_packing_clippers_broken': outer_packing_clippers_broken,
        'outer_packing_clippers_memo': outer_packing_clippers_memo,

        'outer_packing_broom_past': outer_packing_broom_past,
        'outer_packing_broom_receiving': outer_packing_broom_receiving,
        'outer_packing_broom_present': outer_packing_broom_present,
        'outer_packing_broom_broken': outer_packing_broom_broken,
        'outer_packing_broom_memo': outer_packing_broom_memo,

        'outer_packing_dustpan_past': outer_packing_dustpan_past,
        'outer_packing_dustpan_receiving': outer_packing_dustpan_receiving,
        'outer_packing_dustpan_present': outer_packing_dustpan_present,
        'outer_packing_dustpan_broken': outer_packing_dustpan_broken,
        'outer_packing_dustpan_memo': outer_packing_dustpan_memo,

        'outer_packing_trash_can_past': outer_packing_trash_can_past,
        'outer_packing_trash_can_receiving': outer_packing_trash_can_receiving,
        'outer_packing_trash_can_present': outer_packing_trash_can_present,
        'outer_packing_trash_can_broken': outer_packing_trash_can_broken,
        'outer_packing_trash_can_memo': outer_packing_trash_can_memo,

        'outer_packing_plastic_box_past': outer_packing_plastic_box_past,
        'outer_packing_plastic_box_receiving': outer_packing_plastic_box_receiving,
        'outer_packing_plastic_box_present': outer_packing_plastic_box_present,
        'outer_packing_plastic_box_broken': outer_packing_plastic_box_broken,
        'outer_packing_plastic_box_memo': outer_packing_plastic_box_memo,

        'outer_packing_vinyl_rap_past': outer_packing_vinyl_rap_past,
        'outer_packing_vinyl_rap_receiving': outer_packing_vinyl_rap_receiving,
        'outer_packing_vinyl_rap_present': outer_packing_vinyl_rap_present,
        'outer_packing_vinyl_rap_broken': outer_packing_vinyl_rap_broken,
        'outer_packing_vinyl_rap_memo': outer_packing_vinyl_rap_memo,

        'equipment_broom_past': equipment_broom_past,
        'equipment_broom_receiving': equipment_broom_receiving,
        'equipment_broom_present': equipment_broom_present,
        'equipment_broom_broken': equipment_broom_broken,
        'equipment_broom_memo': equipment_broom_memo,

        'equipment_dustpan_past': equipment_dustpan_past,
        'equipment_dustpan_receiving': equipment_dustpan_receiving,
        'equipment_dustpan_present': equipment_dustpan_present,
        'equipment_dustpan_broken': equipment_dustpan_broken,
        'equipment_dustpan_memo': equipment_dustpan_memo,

        'equipment_bottom_broom_past': equipment_bottom_broom_past,
        'equipment_bottom_broom_receiving': equipment_bottom_broom_receiving,
        'equipment_bottom_broom_present': equipment_bottom_broom_present,
        'equipment_bottom_broom_broken': equipment_bottom_broom_broken,
        'equipment_bottom_broom_memo': equipment_bottom_broom_memo,

        'equipment_cleaning_broom_past': equipment_cleaning_broom_past,
        'equipment_cleaning_broom_receiving': equipment_cleaning_broom_receiving,
        'equipment_cleaning_broom_present': equipment_cleaning_broom_present,
        'equipment_cleaning_broom_broken': equipment_cleaning_broom_broken,
        'equipment_cleaning_broom_memo': equipment_cleaning_broom_memo,

        'equipment_squeegee_past': equipment_squeegee_past,
        'equipment_squeegee_receiving': equipment_squeegee_receiving,
        'equipment_squeegee_present': equipment_squeegee_present,
        'equipment_squeegee_broken': equipment_squeegee_broken,
        'equipment_squeegee_memo': equipment_squeegee_memo,

        'equipment_holder_past': equipment_holder_past,
        'equipment_holder_receiving': equipment_holder_receiving,
        'equipment_holder_present': equipment_holder_present,
        'equipment_holder_broken': equipment_holder_broken,
        'equipment_holder_memo': equipment_holder_memo,

        'equipment_white_board_past': equipment_white_board_past,
        'equipment_white_board_receiving': equipment_white_board_receiving,
        'equipment_white_board_present': equipment_white_board_present,
        'equipment_white_board_broken': equipment_white_board_broken,
        'equipment_white_board_memo': equipment_white_board_memo,
        "memos": memos,
    }

    console.log(data)
    $.ajax({
        url: `/haccp/api/file4/${file4_pk}/`,
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

function exportTables4(instance_pk) {
    var token = $("input[name='csrfmiddlewaretoken']").val();
    $.ajax({
        url: "/haccp/download/",
        type: 'POST',
        data: {
            csrfmiddlewaretoken: token,
            type_number: 'file4',
            pk: instance_pk
        },
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", token);
                $(".load_bg").addClass('load_display');
            }
        },
        success: function (data) {
            if (data.result == 'success') {
                $(".load_bg").removeClass('load_display');
                var a = document.createElement('a');
                a.href = '/media/' + "file4.xlsx";
                a.download = '작업도구·청소도구 관리일지' + ".xlsx";
                a.click();
            }
        }
    });
}
