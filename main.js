
console.log('it works')

$(document).ready(function(){
    $('.submit').click(function(event){
        //event.preventDefault()
        console.log('clicked')

        var name=$('.name').val()
        var email=$('.email').val()
        var subject=$('.subject').val()
        var message=$('.message').val()
        var statusElm=$('.status')
        statusElm.empty()

       

    })

})