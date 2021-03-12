$(document).ready(function(){
    $('.delete-service').on('click',function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url:'/servico/' +id,
            success: function(response){
                alert('Deletando Serviço');
                window.location.href='/plans';

            },
            error: function(err){
                console.log(err);
            }
        });
    });
});