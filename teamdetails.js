var playersList = window.localStorage.getItem('player-list');
    playersList = playersList === null || playersList === '' ? [] : playersList;
    playersList = playersList.length > 0 ? JSON.parse(playersList) : [];

    console.log(playersList);
    
var teamList = window.localStorage.getItem('team-list');
    teamList = teamList === null || teamList === '' ? [] : teamList;
    teamList = teamList.length > 0 ? JSON.parse(teamList) : [];

    console.log(teamList);

$(document).ready( () => {
   
    // id : 1,
    // fullName: "Mumbai Indians",
    // key: "MI",
    // championshipsWon: 3,
    // topbatsman: "Rohit Sharma",
    // topbowler: "Kiron Polard",
    // teamIcon: "./assets/milogo.jpg"

    // <div id="team-info">
    //                 <h2>Team Name: Mumbai Indians</h2>
    //                 <h3>Team Key Name: MI</h3>
    //                 <h3>Number of Championship Won: 3</h3>
    //                 <h3>Top Batsman : Rohit Sharma<i class="marg fas fa-star"></i></h3>
    //                 <h3>Top Bowler : Kiron Polard<i class="marg fas fa-star"></i></h3>
    //             </div>

    var data = window.location.search;
    data = data.split("=");

    var teamKeyId = Number(data[1]);
    console.log(teamKeyId);
    let teamKeyName = "";

    $.each(teamList, (ele) => {
        if(teamKeyId === teamList[ele].id ) {
            teamKeyName = (teamList[ele].key).toLowerCase();
            var headTwo = $("<h2>").text("Team Name: "+ teamList[ele].fullName);
            var headThree = $("<h3>").text("Team Key Name: "+ teamList[ele].key);
            var headFour = $("<h3>").text("Number of Championship Won: "+ teamList[ele].championshipsWon);
            var headFive = $("<h3>").html("Top Batsman: "+ teamList[ele].topbatsman);
            var headSix = $("<h3>").html("Top Bowler: "+ teamList[ele].topbowler);
            headFive.append($("<i>").addClass("marg").addClass("fas fa-star"));
            headSix.append($("<i>").addClass("marg").addClass("fas fa-star"))

            $("#team-icon img").attr("src", teamList[ele].teamIcon);
            $("#team-info").append(headTwo, headThree, headFour, headFive, headSix);

        }
            });

    // <div class="player-card">
    //                 <img src="./assets/playerAvatar.jpg" alt="player-pic">
    //                 <h4>Player Name : AB Diviliers  </h4>
    //                 <h4>Team From : RCB</h4>
    //                 <h4>Price : 1.34 Cr</h4>
    //                 <h4>Player Status : Playing</h4>
    //                 <h4>Player Type : Batsman</h4>

    //             </div>

     // <!-- "id": 31,
    //         "playerName": "AB Diviliers",
    //         "from": "RCB",
    //         "price": "1.34 Cr",
    //         "isPlaying": true,
    //         "description": "Batsman",
    //         "playerPic": "./assets/playerAvatar.jpg" -->

    $.each(playersList, (ele) => {
        if(teamKeyName === (playersList[ele].from).toLowerCase()) {
            var playerImg = $("<img>").attr("src", playersList[ele].playerPic);
            var hOne = $("<h4>").html("Player Name : "+ playersList[ele].playerName);
            var hTwo = $("<h4>").html("Team From : "+ playersList[ele].from);
            var hThree =  $("<h4>").html("Price : "+ playersList[ele].price);
            if(Boolean(playersList[ele].isPlaying) === true) {
                var hFour =  $("<h4>").html("Player Status : Playing");

            }else{
                var hFour =  $("<h4>").html("Player Status : On-Bench");
            }
            
            var hFive =  $("<h4>").html("Team From : "+ playersList[ele].description);
             var linkPlayerDetails = $("<a>").attr("href", '/playerdetail.html?p='+playersList[ele].id)
             .addClass("link-handle")
             .append($("<div>").addClass("player-card").append(playerImg, hOne, hTwo, hThree, hFour, hFive));
            
            $("#players-wrapper").append(linkPlayerDetails);


        }

        
    });

});