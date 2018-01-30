window.path = window.location.origin;

$(function () {
    list();
    $('#proximo').click(function() {
        list($('#proximo').data('link'));
    });
    $('#anterior').click(function() {
        list($('#anterior').data('link'));                
    });
    $('#primeiro').click(function() {
        list($('#primeiro').data('link'));
    });
    $('#ultimo').click(function() {
        list($('#ultimo').data('link'));                
    });
});

function list(page) {    
    $.ajax({
        type: "get",
        url: window.path + '/services/produtos',
        data: {page: page},
        success: function( resp ) {
            var data = $.parseJSON(resp);            
            paginar(data);
            ajustarBotoes(data);         
        }
    });
}

function paginar(data) {
    $('table > tbody > tr').remove();
    var tbody = $('table > tbody');
    $(data.data).each(function(key, value){
        tbody.append(
            $('<tr>')
                .append($('<td>').append(value.id))
                .append($('<td>').append(value.sku))
                .append($('<td>').append(value.url_video ? value.url_video : '-'))
                .append($('<td>').append(value.active ? 'Ativo' : 'Inativo'))
        )
    });
    $('#numeracao').text('Página ' + data.meta.current_page + ' de ' + data.meta.last_page);
}

function ajustarBotoes(data) {    
    if(data.meta.current_page == data.meta.last_page){
        $('#proximo').prop("disabled", true);
        $('#ultimo').prop("disabled", true);
    }
    else{
        $('#proximo').prop("disabled", false);
        $('#ultimo').prop("disabled", false);
        $('#proximo').data("link", data.meta.next_page_url.split('=')[1]);
        $('#ultimo').data("link", data.meta.last_page);
    }
    
    if(data.meta.current_page == 1){
        $('#primeiro').prop("disabled", true);        
        $('#anterior').prop("disabled", true);        
    }
    else{
        $('#primeiro').prop("disabled", false);
        $('#anterior').prop("disabled", false);
        $('#primeiro').data('link', '1');
        $('#anterior').data('link', data.meta.prev_page_url.split('=')[1]);
    }
}
