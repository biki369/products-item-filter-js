

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        list[i].classList.add("active");

        let dataFilter = list[i].getAttribute("data-filter");

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");

            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                itemBox[k].classList.remove("hide");
                itemBox[k].classList.add("active");
            }
        }
    })

}


// using forEach
/* list.forEach((elm,index)=>{
    elm.addEventListener('click', ()=>{
        list.forEach((elm)=>{
            elm.classList.remove("active")
        })
        elm.classList.add("active");
           
        let dataFilter = list[i].getAttribute("data-filter");
        itemBox.forEach((elm)=>{
            elm.classList.remove("active");
            elm.classList.add("hide");

            if(elm.getAttribute('data-item')== dataFilter || dataFilter == 'all'){
                elm.classList.remove("hide");
                elm.classList.add("active");
            }

        })

    })
}) */