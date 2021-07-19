

                var playersList = window.localStorage.getItem('player-list');
                playersList = playersList === null || playersList === '' ? [] : playersList;
                playersList = playersList.length > 0 ? JSON.parse(playersList) : [];
            
                console.log(playersList);

                $(document).ready(() => {
                    var data = window.location.search;
                    console.log(data);
                    data = data.split("=");
                    var keyId = Number(data[1]);
                    console.log(keyId);
                    $.each(playersList, (ele) => {
                        if(playersList[ele].id === keyId) {
                            $("#pname").text(playersList[ele].playerName);
                            $("#tname").text(playersList[ele].from);
                            $("#price").text(playersList[ele].price);
                            $("#ptype").text(playersList[ele].description);

                            if(playersList[ele].isPlaying == true) {
                                $("#pstatus").text("Playing");
                            }else{
                                $("#pstatus").text("On-Bench");
                            }

                            $("#player-pic-section img").attr("src", playersList[ele].playerPic);

                        }
                        

                    });

                });

            