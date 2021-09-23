function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sX-REYn40/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults)
}
function gotResults(error,results)
{
    if (error)
    {
        console.log('error')
    } else {
        console.log(results);
        document.getElementById("labelresult").innerHTML="𝓘 𝓬𝓪𝓷 𝓱𝓮𝓪𝓻-"+results[0].label;
        document.getElementById("labelaccuracy").innerHTML="𝔸𝕔𝕔𝕦𝕣𝕒𝕔𝕪--"+results[0].confidence*100+"%";
        img1=document.getElementById("alien1")
        img2=document.getElementById("alien2")
        img3=document.getElementById("alien3")
        img4=document.getElementById("alien4")
        if (results[0].label=="clap") 
        {
         img1.src="aliens-01.gif";
         img2.src="aliens-02.png"
         img3.src="aliens-03.png"
         img4.src="aliens-04.png"
        }
        else if(results[0].label=="bell")
        {
         img1.src="aliens-01.png";
         img2.src="aliens-02.gif"
         img3.src="aliens-03.png"
         img4.src="aliens-04.png"
        }
        else if(results[0].label=="snap")
        {
         img1.src="aliens-01.png";
         img2.src="aliens-02.png"
         img3.src="aliens-03.gif"
         img4.src="aliens-04.png"
        }
    
    }
}