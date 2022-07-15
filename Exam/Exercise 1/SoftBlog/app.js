function solve(){
    const creatorField = document.getElementById("creator")
    const titleField = document.getElementById("title")
    const categoryField = document.getElementById("category")
    const contentField = document.getElementById("content")

    const contentSite = document.getElementsByClassName("site-content")

    const createBtn = document.querySelector(".site-content aside button.btn.create")
    createBtn.addEventListener("click", createPost)

    function createPost(e){
        e.preventDefault()

        const article = document.createElement('article');
        article.innerHTML = `<h1>${titleField.value}</h1>
                        <p>Category:
                            <strong>${categoryField.value}</strong>
                        </p>
                        <p>Creator:
                            <strong>${creatorField.value}</strong>
                        </p>
                        <p>${contentField.value}</p>
                        <div  class="buttons">
                            <button class="btn delete">Delete</button>
                            <button class="btn archive">Archive</button>
                        </div>`

        const posts = document.querySelector(".site-content main section")
        posts.appendChild(article);

        // const buttonDel = document.querySelector(".site-content article button.btn.delete")
        // buttonDel.addEventListener("click", delPost)
        //
        // const buttonArch = document.querySelector(".site-content article button.btn.archive")
        // buttonArch.addEventListener("click", archPost)


        const buttons = article.querySelectorAll("button")
        buttons[0].addEventListener("click", delPost)
        buttons[1].addEventListener("click", archPost)


        creatorField.value = '';
        titleField.value = '';
        categoryField.value = '';
        contentField.value = '';
    }


    function archPost(e){
        const currentArticle = e.target.parentElement.parentElement
        const getTitle = currentArticle.querySelector('h1').textContent
        const archiveItems = document.querySelector(".site-content ol")
        const li = document.createElement('li')
        li.textContent = getTitle
        archiveItems.appendChild(li)

        Array.from(archiveItems.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => archiveItems.appendChild(li));

        currentArticle.remove()
    }
    function delPost(e){
        const currentArticle = e.target.parentElement.parentElement
        currentArticle.remove()
    }
}
