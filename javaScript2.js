let row=document.querySelectorAll('section')
let links=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    row.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            links.forEach(link=>{
                link.classList.remove('active')
            });
            console.log(id)
            document.querySelector(`header nav a[href='#${id}']`).classList.add('active')
            console.log(id)
        };
    });
};