$(function() {
    
    let levels = [];
    let max_level;
    let html = '';
    
    html += `<div class='detail-view'>`;
    html += `   <div class='toggle-box'>`;
    html += `       <div class='toggle plus'><p><img src='/static/img/both_arrow.png'>펼치기</p></div>`;
    html += `       <div class='toggle minus'><p><img src='/static/img/both_arrow.png'>접기</p></div>`;
    html += `   </div>`;
    html += `   <table>`;
    html += `      <colgroup>`;
    html += `          <col width="10%">`;
    html += `          <col width="20%">`;
    html += `          <col width="30%">`;
    html += `          <col width="40%">`;
    html += `      </colgroup>`;
    html += `      <thead>`;
    html += `          <tr>`;
    html += `              <th>수량</th>`;
    html += `              <th>도면번호</th>`;
    html += `              <th>품명</th>`;
    html += `              <th>규격</th>`;
    html += `          </tr>`;
    html += `      </thead>`;
    html += `      <tbody>`;
    html += `      </tbody>`;
    html += `   </table>`;
    html += `</div>`;

    // max_level 구하기
    $("table.hidden tbody tr").each(function() {
        const $tr = $(this);
        const level = $tr.data('level');
        
        levels.push(level);
    });

    max_level = Math.max.apply('null', levels);

    // max_level 만큼 테이블 그리기
    for(let i=0; i<=max_level; i++) {
        $(".detail-wrap").append(html);
    }

    // 빈 값 설정
    let empty = '';

    empty += `<tr>`;
    empty += `  <td colspan='4' class='empty'>empty</td>`;
    empty += `</tr>`;

    // 각 테이블 내 데이터 뿌리기
    let count = 0;

    $("table.hidden tbody tr").each(function() {
        const $tr = $(this);
        const $tr_clone = $tr.clone();                                      // 기존 값이 사라지므로 clone 을 통해 상태 유지
        const level = $tr.data('level');                                    // 해당 도면번호 깊이(단계)
        const $temp = $(".version-2 .detail-wrap .detail-view").eq(level);  // 깊이에 대한 테이블 위치

        $temp.find('tbody').append($tr_clone[0]);

        if($tr.prev().data('level') < level && $tr.next().data('level') <= level) {
            // 현재 노드 = 이전 노드의 첫번째 자식
            count++;
            
            // 첫 행에서만 처리하도록 설계
            if(count == 1) {     
                for(let i=max_level; i>level; i--) {
                    $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
                }
            }
        }
        if($tr.prev().data('level') == level && $tr.next().data('level') <= level) {
            // 이전 노드와 부모가 같으면서 자식이 없는 경우
            $temp.closest('.detail-wrap').find('.detail-view').not(`:eq(${level})`).find('tbody').append(empty);
        } else if($tr.prev().data('level') == level && $tr.next().data('level') > level) {
            // 이전 노드와 부모가 같으면서 자식이 있는 경우
            for(let i=0; i<=max_level; i++) {
                if(i == level || i == $tr.next().data('level')) { continue; }
                $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
            }
        } else if($tr.prev().data('level') > level && $tr.next().data('level') > level) {
            // 이전 노드와 깊이가 달라지면서 자식이 있는 경우
            for(let i=0; i<=max_level; i++) {
                if(i == level || i == $tr.next().data('level')) { continue; }
                $temp.closest('.detail-wrap').find('.detail-view').eq(i).find('tbody').append(empty);
            }
        } else if($tr.prev().data('level') > level && $tr.next().data('level') <= level) {
            // 이전 노드와 깊이가 달라지면서 자식이 없는 경우
            $temp.closest('.detail-wrap').find('.detail-view').not(`:eq(${level})`).find('tbody').append(empty);
        } else if($tr.prev().data('level') == level) {
            // 마지막 자식 처리를 위함
            $temp.closest('.detail-wrap').find('.detail-view').not(`:eq(${level})`).find('tbody').append(empty);
        }
    });
    
    /* 상단 스크롤 바 가로 길이 정의 */
    const len_table = $(".detail-wrap .detail-view").length;
    let all_table_width = len_table * 500;
    let table_margin = (len_table - 1) * 10;

    $(".row-scroll.top .scroll").width(all_table_width + table_margin + "px");

    // 스크롤바 제어
    $(".row-scroll.top").scroll(function() {
        $(".row-scroll.bot").scrollLeft($(".row-scroll.top").scrollLeft());
    });

    $(".row-scroll.bot").scroll(function() {
        $(".row-scroll.top").scrollLeft($(".row-scroll.bot").scrollLeft());
    });

    // 접기 / 펼치기
    $(".toggle-box .minus").click(function() {
        $(this).hide();
        $(this).closest('.toggle-box').children('.plus').css('display','inline-block');
        const idx = $(this).parent().parent().index();

        for(let i=(idx + 1); i<len_table; i++) {
            $('.detail-wrap').find('.detail-view').eq(i).css('visibility','hidden');
            $('.detail-wrap').find('.detail-view .plus').eq(i).css('display','none');
            $('.detail-wrap').find('.detail-view .minus').eq(i).css('display','inline-block');
        }
    });

    $(".toggle-box .plus").click(function() {
        $(this).hide();
        $(this).closest('.toggle-box').children('.minus').css('display','inline-block');
        const idx = $(this).parent().parent().index();

        for(let i=(idx + 1); i<len_table; i++) {
            $('.detail-wrap').find('.detail-view').eq(i).css('visibility','visible');
        }
    });

});