var menu_list_array = [
        document.getElementById("Guests1").value,
        document.getElementById("Guests2").value,
        document.getElementById("Guests3").value,
        document.getElementById("Guests4").value,
        document.getElementById("Guests5").value,
        document.getElementById("Guests6").value,
        document.getElementById("Guests7").value,
        document.getElementById("Guests8").value];

function getmenu()
{
var htmldata;
menu_list_array = [
document.getElementById("Guests1").value,
document.getElementById("Guests2").value,
document.getElementById("Guests3").value,
document.getElementById("Guests4").value,
document.getElementById("Guests5").value,
document.getElementById("Guests6").value,
document.getElementById("Guests7").value,
document.getElementById("Guests8").value];
menu_list_array.sort()
var first_menu_list_array =menu_list_array[0]
var second_menu_list_array =menu_list_array[1]
var third_menu_list_array =menu_list_array[2]
var fourth_menu_list_array =menu_list_array[3]
var fifth_menu_list_array =menu_list_array[4]
var sixth_menu_list_array =menu_list_array[5]
var seventh_menu_list_array =menu_list_array[6]
var eigth_menu_list_array =menu_list_array[7]
menu_list_array.sort()      
document.getElementById("All_the_guests1").innerHTML= first_menu_list_array;
document.getElementById("All_the_guests2").innerHTML= second_menu_list_array;
document.getElementById("All_the_guests3").innerHTML= third_menu_list_array;
document.getElementById("All_the_guests4").innerHTML= fourth_menu_list_array;
document.getElementById("All_the_guests5").innerHTML= fifth_menu_list_array;
document.getElementById("All_the_guests6").innerHTML= sixth_menu_list_array;
document.getElementById("All_the_guests7").innerHTML= seventh_menu_list_array;
document.getElementById("All_the_guests8").innerHTML= eigth_menu_list_array;
}


function sorting()
{
    menu_list_array.sort()
    var first_menu_list_array =menu_list_array[0]
var second_menu_list_array =menu_list_array[1]
var third_menu_list_array =menu_list_array[2]
var fourth_menu_list_array =menu_list_array[3]
var fifth_menu_list_array =menu_list_array[4]
var sixth_menu_list_array =menu_list_array[5]
var seventh_menu_list_array =menu_list_array[6]
var eigth_menu_list_array =menu_list_array[7]
menu_list_array = [
        document.getElementById("All_the_guests1").value,
        document.getElementById("All_the_guests2").value,
        document.getElementById("All_the_guests3").value,
        document.getElementById("All_the_guests4").value,
        document.getElementById("All_the_guests5").value,
        document.getElementById("All_the_guests6").value,
        document.getElementById("All_the_guests7").value,
        document.getElementById("All_the_guests8").value];
}

function Search(){
        var search_input = document.getElementById("search_a_guest").value;
        var times_found =0;
        var j;
        for(j=0; j<menu_list_array.length; j++)
        {
                if (search_input==menu_list_array[j]) {
                        times_found = times_found+1          
                }
                
        }
        document.getElementById("amount_of_times").innerHTML= times_found
}

