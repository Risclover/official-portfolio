let blogCategory = document.querySelectorAll('.blogcategory');
let techStuffCount = document.getElementById('techstuffcount');
let techStuff = 0;

blogCategory.forEach((category) => {
    if (category.includes('Tech Stuff')) {
        techStuff++;
        techStuffCount.textContent = techStuff;
    }
});

