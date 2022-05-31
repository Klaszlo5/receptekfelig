$(function(){
   beolvas
});
const receptekTomb[];

function beolvas(eleresiut, callback, receptekTomb){
    fetch(eleresiut)
    .then((res) => res.json());
    .then((data) => {
        console.log(data.recept);
        callback(data.recept);
        });
}
    
function megjelenit(tomb){
    let txt="<table>";
    tomb.forEach(function(recept,index){
        txt+="<tr id="+index+" >";
        for (const key in recept){
            txt+="<td>";
            txt+=recept[key];
            txt+="</td>";
        }
        txt+="</tr>";
    });
    txt += "</table>";
    $('.tartalom').append(txt);
    $('.tartalom table tr').on("click", function(){
        console.log($(this).attr("id"))
        console.log(aktId);
        $(this).toggleClass("kiemel");
        
    })
}

function aktReceptmegj(tomb,aktId){
    $(".kivalasztott").empty();
    let aktRecept=receptekTomb[aktId];
    tomb.kep;
    for (const key in aktRecept){
        if(key === "eleresiut"){
            $(".kivalasztott").append('img src="${aktRecept[key]}"alt="kaja')
        }else{
            $(".kivalasztott").append('<p>${aktRecept[key]}</p>')
        }
    }
}