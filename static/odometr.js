const odometrRangeInput = document.querySelectorAll("#OdometrRange-input input"),
odometrInput = document.querySelectorAll("#odometr-input input"),
odometrRange = document.querySelector("#odometr-progress .progress");
let odometrGap = 1000;

odometrInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minOdom = parseInt(odometrInput[0].value),
        maxOdom = parseInt(odometrInput[1].value);
        console.log(minOdom, maxOdom)
        
        if((maxOdom - minOdom >= odometrGap) && maxOdom <= odometrRangeInput[1].max){
            if(e.target.className === "input-min"){
                odometrRangeInput[0].value = minOdom;
                odometrRange.style.left = ((minOdom / odometrRangeInput[0].max) * 100) + "%";
            }else{
                odometrRangeInput[1].value = maxOdom;
                odometrRange.style.right = 100 - (maxOdom / odometrRangeInput[1].max) * 100 + "%";
            }
        }
    });
});

odometrRangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minValOdom = parseInt(odometrRangeInput[0].value),
        maxValOdom = parseInt(odometrRangeInput[1].value);

        if((maxValOdom - minValOdom) < odometrGap){
            if(e.target.className === "range-min"){
                odometrRangeInput[0].value = maxValOdom - odometrGap
            }else{
                odometrRangeInput[1].value = minValOdom + odometrGap;
            }
        }else{
            odometrInput[0].value = minValOdom;
            odometrInput[1].value = maxValOdom;
            odometrRange.style.left = ((minValOdom / odometrRangeInput[0].max) * 100) + "%";
            odometrRange.style.right = 100 - (maxValOdom / odometrRangeInput[1].max) * 100 + "%";
        }
    });
});