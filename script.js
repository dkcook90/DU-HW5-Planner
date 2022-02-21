var currentTime = moment().format('LLLL')


$('#currentDay').text(currentTime)


$('.time-block').each(function(){

    console.log(parseInt($(this).attr('id')))

    if (moment().hour() < parseInt($(this).attr('id'))) {
        $(this).addClass('future')
    } else if (moment().hour() === parseInt($(this).attr('id'))) {
        $(this).addClass('present')
    } else {
        $(this).addClass('past')
    }

})
 


$('#9 .description').text(localStorage.getItem('9'))
$('#10 .description').text(localStorage.getItem('10'))
$('#11 .description').text(localStorage.getItem('11'))
$('#12 .description').text(localStorage.getItem('12'))
$('#13 .description').text(localStorage.getItem('13'))
$('#14 .description').text(localStorage.getItem('14'))
$('#15 .description').text(localStorage.getItem('15'))
$('#16 .description').text(localStorage.getItem('16'))
$('#17 .description').text(localStorage.getItem('17'))



$('.saveBtn').on('click', function(event) {
    event.preventDefault()

    var box = $(this).parent().attr('id')
    var input = $(this).siblings('.description').val()

    console.log(box)
    console.log(input)
    
    localStorage.setItem(box, input)
})


