class Story{
    constructor(title, creator){
        this.title = title
        this.creator = creator
        this._likes = []
        this._comments = []
    }



    get likes(){
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length-1} others like this story!`
    }

    like(username){
        if(this.likes.includes(username)){
            throw new Error("You can't like the same story twice!")
        }if (this.creator === username){
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username){
        if(!this._likes.includes(username)){
            throw new Error(`You can't dislike this story!`)
        }
        const indexUser = this._likes.indexOf(username)
        this._likes.splice(indexUser, 1)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id){
        const checkId = this._comments.some(c => c.id === id)
        if(!checkId){
            const nextId = this._comments.length + 1
            this._comments.push({id : nextId, username, content, replies : []})
            return `${username} commented on ${this.title}`
        }else {
            let findId = this._comments.find(c => c.id === id)
            const nextReply = findId.replies.length + 1
            findId.replies.push({id : Number(`${id}.${nextReply}`), username, content})
            return "You replied successfully"
        }
    }
    toString(sortingType){
        const sortingCriteria = {
            asc: (a,b) => a.id - b.id,
            desc: (a,b) => b.id - a.id,
            username: (a,b) => a.username.localeCompare(b.username)
        }
        let comments = this._comments.sort(sortingCriteria[sortingType])
        comments.forEach(c => c.replies.sort(sortingCriteria[sortingType]))

        let commentStrArr = []
        for (const comment of comments){
            let commentStr = `-- ${comment.id}. ${comment.username}: ${comment.content}`
            let repliesStr = comment.replies
                .map(r => `--- ${r.id}. ${r.username}: ${r.content}`)
                .join('\n')
            let combinedString = `${commentStr}\n${repliesStr}`
            commentStrArr.push(combinedString)
        }

        let fullComments = commentStrArr.join('')

        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n${fullComments}`
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()

console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

