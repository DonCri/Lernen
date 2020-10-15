

window.onload = $.get('php/GetSnapshot.php', function(data) {
         // $('#AjaxDemo').html = data; 
         var coded = JSON.parse(data);
			console.log(coded);
	})



    