// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// Example

//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"

const near = (chapter, page) => {
    let min = Infinity;
    let chapterNumber = [];
    const chapters = Object.keys(chapter).length

    // find nearest chapter 
    for (let i = 1; i <= chapters; i++) {
        let distance = chapter["chapter " + i] - page
        if (distance < 0) {
            distance = -(distance)
        }
        if (distance < min) {
            min = distance
            
            chapterNumber=[]

        }
        if(distance==min){
            chapterNumber.push(i)
        }
    }
    
    return "Chapter "+Math.max(...chapterNumber)

}


console.log(near({
    "chapter 1": 1,
    "chapter 2": 15,
    "chapter 3": 37,
    "chapter 4": 40
}, 10))

