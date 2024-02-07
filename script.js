const endDate="Tue Apr 30 2024 23:59:00"
const inputs= document.querySelectorAll("input");
document.getElementById("end-date").innerText=endDate;
 



function clock() {
    const end= new Date(endDate);
    // console.log(end);
        const now= new Date();
        // console.log(now);
        const diff=(end - now)/1000;

        if (diff<0)return;
        // console.log("agga"+diff);
        const days = Math.floor(diff /3600 /24);
        inputs[0].value=days;
        const Hour = Math.floor((diff /3600)) %24;
        inputs[1].value=Hour;
        const Minute = Math.floor(diff /60) %60;
        inputs[2].value=Minute;
        const Sec = Math.floor(diff)%60;
        inputs[3].value=Sec;
        // console.log(Math.floor(diff /3600 /24));
             

}
clock();
setInterval(
    (e)=>{
       clock();    
    },
    1000
);
