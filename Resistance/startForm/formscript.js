$("#playerForm").on("submit", function(e){
    // Prevents form from sending before testing input
    e.preventDefault();
    // Control variable to test input
    var validate = true
    // Empty array which will later contain all 5 players
    var playerList = []
    // Adds value from form to playerList
    var formInput = $("#playerForm").children("input");
    for (var i = 0; i < formInput.length-1; i++) {
        playerList.push($(formInput[i]).val())
    };
    // Testing
    console.log(playerList)

    // Test input (add in later iterations?)
    if(validate == false){
    	// Do stuff to tell user input was incorrect
    }else{
    	// Input accepted, remove to next step.
	    $("#newsletter")[0].submit();
        return playerList
	}
});