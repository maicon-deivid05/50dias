// to get when text is added to text area

//make the text into an array

//every element of array in to a span

const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textarea.addEventListener('keyup', (event)=>{
    createTags(event.target.value);

    if(event.key === 'Enter'){
        setTimeout(() =>{
            event.target.value = '';
        }, 10);
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag =>tag.trim());
    console.log(tags);

    tagsEl.innerHTML='';

    tags.forEach(tag => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText = tag;
        tagsEl.appendChild(t);
    })
}

function randomSelect(){
    const times = 30;
    const int = 100;

    const interval = setInterval(() => {
        // randomly select a tag
        const randomTag = pickRandomTag()

        //highlight
        highlight(randomTag);

        //unhighlight
        setTimeout(() => {
            unhighlight(randomTag)
        }, int);
    }, int);
    
    
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            // randomly select a tag
            const randomTag = pickRandomTag();
            //highlight
            highlight(randomTag);

        }, int);

    },int * times);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.remove('unhighlight')
}

// know when enter is pressed
// randomly pick a tag for sometime
//pick for final iteration