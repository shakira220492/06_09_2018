//super global variables
var current_video_id = "";
var current_video_name = "";
var current_video_description = "";
var current_video_image = "";
var current_video_content = "";
var current_video_updateDate = "";
var current_video_amount_views = "";
var current_video_amount_comments = "";
var current_video_likes = "";
var current_video_dislikes = "";

var current_specificlistId = "";
var current_videoPosition = "";

var next_video_image = "";
var previous_video_image = "";

function showVideo(
            videoId, 
            videoName, 
            videoDescription, 
            videoImage, 
            videoContent, 
            videoUpdateDate, 
            videoAmountViews, 
            videoAmountComments, 
            videoLikes, 
            videoDislikes 
        )
{
    current_video_id = videoId;
    current_video_name = videoName;
    current_video_description = videoDescription;
    current_video_image = videoImage;
    current_video_content = videoContent;
    current_video_updateDate = videoUpdateDate;
    current_video_amount_views = videoAmountViews;
    current_video_amount_comments = videoAmountComments;
    current_video_likes = videoLikes;
    current_video_dislikes = videoDislikes;
    
    var my_video = document.getElementById("my_video_environment");
    my_video.innerHTML =
        "<div id='my_video_environment'>" +
        "<video id='my_video' width='100%' autoplay='true'>" +
        "<source src='files/videos/" + videoContent + "') }}' type='video/mp4'> " +
        "</video>" +
        "</div>";
    
//    ALL INFORMATION ABOUT THE VIDEO: 
//    update the options about the respectly video
//    SongBundle: Comment section, user's information, 
//    ArtistBundle: 
    
}

//FUNCTION THAT CALL DIFFERENT METHODS WHEN USER PLAY A NEW VIDEO
//-songBundle (and its subBundles: @CommentVideo)
//-artistBundle (and its subBundles: )
//-presentationBundle (and its subBundles: )

//FUNCTION THAT CALL DIFFERENT METHODS WHEN USER LOGIN
//-profileBundle (and its subBundles: @EditProfile, @Datamining, @History, @List)

//Can play VideoBundle
//PODER REPRODUCIR EL OPTIONVIDEOBUNDLE DIRECTAMENTE



function updateVideoInformation(videoName, userName)
{
    var songIconButton = document.getElementById("songIconButton");
    var artistIconButton = document.getElementById("artistIconButton");

    songIconButton.innerHTML = videoName;
    artistIconButton.innerHTML = userName;
}

function highlightPortrait(videoId)
{
    document.getElementById(videoId).style.transitionProperty = "all";
    document.getElementById(videoId).style.transitionDuration = "0.4s";
    document.getElementById(videoId).style.opacity = 1;
}

function hidePortrait(videoId)
{
    document.getElementById(videoId).style.transitionProperty = "all";
    document.getElementById(videoId).style.transitionDuration = "0.4s";
    document.getElementById(videoId).style.opacity = 0.4;
}