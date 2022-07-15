window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById("model")
    const yearField = document.getElementById("year")
    const descriptionField = document.getElementById("description")
    const priceField = document.getElementById("price")

    const addBtn = document.getElementById("add")
    addBtn.addEventListener('click', addFurn);

    const furnList = document.getElementById("furniture-list")
    const total = document.getElementsByClassName("total-price")



    function addFurn(e){
        e.preventDefault();

        const yearValue = Number(yearField.value)
        const priceValue = Number(priceField.value)
        if (modelField.value === "" || descriptionField.value === '' || yearValue < 0 || priceValue < 0){
            return;
        }
        const tr = document.createElement('tr');
        tr.classList.add('info');
        tr.innerHTML = `<td>${modelField.value}</td>
                        <td>${priceValue.toFixed(2)}</td>
                        <td><button class="moreBtn">More Info</button>
                            <button class="buyBtn">Buy it</button>
                        </td>`


        const hideTr = document.createElement("tr");
        hideTr.classList.add("hide");
        hideTr.innerHTML = `<td>Year: ${yearValue.value}</td>
                        <td colspan="3" >Description: ${descriptionField.value}</td>`

        furnList.appendChild(tr);
        furnList.appendChild(hideTr)

        const buttons = tr.querySelectorAll("button")
        buttons[0].addEventListener("click", showMore)
        buttons[1].addEventListener("click", buyFrn)





        modelField.value = '';
        descriptionField.value = '';
        yearField.value = '';
        priceField.value = '';
    }


    function showMore(e){
        const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling
        if(e.target.textContent === "More Info"){
            e.target.textContent = "Less Info";
            moreInfoTr.style.display = "contents"
        } else {
            e.target.textContent = "More Info"
            moreInfoTr.style.display = "none"
        }
    }
    function buyFrn(e){
        const tr = e.target.parentElement.parentElement
        const hideTr = tr.nextElementSibling
        hideTr.parentElement.removeChild(hideTr)

        const price = Number(tr.querySelectorAll('td')[1].textContent);

        total.textContent = (Number(total.textContent) + price).toFixed(2)

        tr.parentElement.removeChild(tr)
    }
}



