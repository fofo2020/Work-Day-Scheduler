
//     moment() api and format today date
//      Add to the `currentDay` element
let elcurrentDay = $('#currentDay')
var currentDay = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);


//************************************************************************ 

timeblocks = $('.timeblock')
timeblocks.each(function () {

    // Get the current Hour
    var thisHour = parseInt(moment().format("h"))

    // get the hour from the schedule task
    var hour = parseInt($(this).attr('data-hour')) 
    
    
    // Gets elements from Local Storage and populates textarea
    $(this).find("textarea").val(localStorage.getItem(hour)|| '')
    
       // hour = 8 thisHour = 19
        if (hour < thisHour) {
            $(this).css('background-color', "grey")
        } else if (hour == thisHour) {
            $(this).css('background-color', "red")
        } else {
            $(this).css('background-color', "green")
        }        
        })
        
        //************************************************************************ 
        setTimeout(function() { $(".loading").hide();}, 2000)
    
        let saveBtn = $('.savebtn')

        //hover effect on the save button
    $(".savebtn").hover(function(){
        $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", 'transparent');
    });
       
        saveBtn.click(function() {
            
           let  elKey = $(this).parent().attr('data-hour');

           let  elTask = $(this).siblings("textarea").val();
            localStorage.setItem(elKey,elTask);
                $(".loading").show();
                setTimeout(function() { $(".loading").hide();}, 2000)
        })

       
           

               






