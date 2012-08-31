// Device-specific code for the Android and iPhone
function device_initialize( )
{
    initialize_iScroll();   // Allows vertical middle to scroll up & down
}

function device_get_json( url )
{    
    $.getScript( url )
	.done(function(data, textStatus, jqxhr) {
		insert_city_events( );
	    })
	.fail(function(jqxhr, settings, exception) {
		alert( jqxhr.status + ": " + exception );
	    });
}

function device_add_event_to_calendar( data )
{
    $.ajax( {
	    url: "/app/Settings/add_event", 
		data: data, 
		async: false, 
		type: "POST",
		success: function(xdata) {
	    }
	});
}

function device_open_url(newUrl)
{
    $.ajax( {
	    url: "/app/Settings/open_url?url=" + newUrl, data: newUrl, async: false, type: "GET",
		success: function(xdata) { }
	});
}

function device_call_phone_number( number )
{
    alert('On the iPhone or Android, I call ' + number );
}

function device_send_email(emailAddress, subject, body)
{
    alert('On the iPhone or Android, I send to ' + emailAddress + ', ' + subject + ', ' + body);
}
