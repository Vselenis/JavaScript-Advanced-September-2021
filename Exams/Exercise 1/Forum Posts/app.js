window.addEventListener("load", solve);

function solve() {
    const titleField = document.getElementById("post-title")
    const categoryField = document.getElementById("post-category")
    const contentField = document.getElementById("post-content")

    const reviewList = document.getElementById("review-list")
    const publishList = document.getElementById("published-list")

    const buttonClear = document.getElementById("clear-btn")
    buttonClear.addEventListener("click", ClearAll)

    const buttonPublish = document.getElementById("publish-btn")
    buttonPublish.addEventListener('click', addNewPost);



    function addNewPost(e){
        e.preventDefault();


        if (titleField.value === "Enter title here" || categoryField.value === "Enter category here" || contentField.value === "Add content..." || titleField.value === "" || categoryField.value === "" || contentField.value === ""){
            return
        }
        const li = document.createElement('li');
        li.classList.add('rpost');
        li.innerHTML = `<article>
        
                            <h4>${titleField.value}</h4>
                            <p>Category: ${categoryField.value}</p>
                            <p>Content: ${contentField.value}</p>
                        </article>
                        <button class="action-btn edit">Edit</button>
                        <button class="action-btn approve">Approve</button>`



        reviewList.appendChild(li);

        let saveInfo = [titleField.value,
        categoryField.value,
        contentField.value]

        const buttonsAction = li.querySelectorAll("button")
        buttonsAction[0].addEventListener("click", buttonEdit)
        buttonsAction[1].addEventListener("click", buttonApprove)

        function buttonEdit(e){
            titleField.value = saveInfo[0];
            categoryField.value = saveInfo[1];
            contentField.value = saveInfo[2];

            const currentArticle = e.target.parentElement
            currentArticle.remove()
        }
        function buttonApprove(e) {
            let currentArticle = e.target.parentElement
            let newArticle = currentArticle.firstChild
            let liElement = document.createElement('li');
            liElement.classList.add('rpost');
            liElement.appendChild(newArticle)
            publishList.appendChild(liElement);

            currentArticle.remove()



        }

        titleField.value = '';
        categoryField.value = '';
        contentField.value = '';
    }

    function ClearAll(e) {
        let myDiv = document.getElementById("published-list");
        myDiv.innerHTML = ""
    }



}
