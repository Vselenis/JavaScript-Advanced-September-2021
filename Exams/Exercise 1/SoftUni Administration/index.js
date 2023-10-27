function solve(){
    let buttonElement = document.querySelector(".admin-view form button")
    const modulesList = document.querySelector(".modules")

    let modules = {};

    buttonElement.addEventListener("click", (e) => {
        e.preventDefault()

        let lectureName = document.querySelector("input[name='lecture-name']")
        let lectureDate = document.querySelector("input[name='lecture-date']")
        let lectureModule = document.querySelector("select[name='lecture-module']")

        if (!lectureName.value || !lectureDate.value || lectureModule.value == "Select module"){
            return
        }

        if(!modules[lectureModule.value]){
            modules[lectureModule.value] = []
        }

        let currentLecture = {name: lectureName.value , date: formatDate(lectureDate.value)}
        modules[lectureModule.value].push

        function createTrainings(modules){
            for (const moduleName in modules) {
                let lectures = modules[moduleName]

                lectures.sort((a,b) => a.date.localeCompare(b.date.localeCompare))

            }
        }


        const div = document.createElement('div');
        div.classList.add('module');
        div.innerHTML = `<h3>${lectureName.value}</h3>
                    <ul>
                      <li class="flex">
                        <h4>${lectureName.value} - ${formatDate(lectureDate.value)}</h4>
                        <button class="red">Del</button>
                      </li>
                    </ul>`


        modulesList.appendChild(div);

        const buttonDel = div.querySelector("button")
        buttonDel.addEventListener("click", DeleteEl)

    })

    function formatDate(dateInput){
        let [date, time] = dateInput.split("T")
        let [year, month, day] = date.split("-")
        return `${year}/${month}/${day} - ${time}`
    }

}
