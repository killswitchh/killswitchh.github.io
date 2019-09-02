$(function()
	{
		var count=0;
		var text=["Programmer","Video/Photo Editor","UI UX Designer","Student"];
		var elem = document.getElementById("Tag");
		var isnt=setInterval (funname , 2000);
		function funname()
		{		
				
				$(elem).fadeOut(500 , function()
					{
						
						if 	(count >= text.length)
							{
								count=0;
							}
						elem.innerHTML = text[count];
						$(elem).fadeIn(500);
						count++;

					});
				

				

		}


	})