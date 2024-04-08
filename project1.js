const logo1=document.querySelector('.logo.border');
let icon = document.getElementById('icons');
let signin=document.getElementById('sign');
const arrow = document.querySelector('.fa-solid.fa-arrow-right');
const image = document.querySelector('.nav-body');
const cartbuttons = document.querySelectorAll('.cartop');
const msgdisplays = document.querySelectorAll('.msg');
let maine = document.createElement('div');
let upper = document.createElement('div');
let button = document.createElement('button');
let lower = document.createElement('div');
let low = document.createElement('div');
let below=document.createElement('div');
let ab=true;

let arr = [
    { 'name': 'Power Generators' },
    { 'name': 'Games And Controllers' },
    { 'name': 'Fans And Cutlery' },
    { 'name': 'Motor Vehicles' }
];

logo1.addEventListener('click',()=>{
    location.reload();
});

icon.addEventListener('click', async () => {
    let value = document.querySelector('#searchbar').value;
    arr.forEach(async (e, index) => {
        if (value.toLowerCase() === e.name.toLowerCase()) {
            // Find the corresponding box based on the value
            let box = document.querySelector(`.box${index + 1}`);
            if (box) {
                box.style.border = '2px solid red'; // Add a red border to the box
                const timer = setTimeout(() => {
                    box.style.border = ''; // Remove the red border after 1 second
                }, 2000);
            }
        }
    });
});

cartbuttons.forEach((cartButton, index) => {
    cartButton.addEventListener('click', () => {
        msgdisplays[index].innerHTML = 'Added ';
        setTimeout(() => {
            msgdisplays[index].innerHTML = ""; 
        }, 3000);
    });
});

arrow.addEventListener('click', () => {
    image.innerHTML = '<img src="HERO_BXGY_PC_2X._CB561202170_.jpg" style="height: 350px; background-size: cover; width: 1016px;"></img>';
});

func = ()=>{
        // creation
       
        
        
        // initilising classes
        maine.className = 'maine';
        upper.className = 'upper';
        lower.className = 'lower';
        button.className = 'button';
        low.className='low';
        below.className='below';
    
        // structuring
        maine.appendChild(upper);
        maine.appendChild(below);
        upper.appendChild(button);
        below.appendChild(lower);
        below.appendChild(low);
    
        // styling
        below.style.display='flex';
        below.style.justifyContent='space-between';
    
    
    low.innerHTML = '<h3>Your Account</h3>';
    let ula = document.createElement('ul');
    let menuItems = [
        'Your Account',
        'Your Orders',
        'Your Wish List',
        'Your Recommendations',
        'Your Prime Membership',
        'Your Prime Video',
        'Your Subscribe & Save Items',
        'Memberships & Subscriptions',
        'Your Seller Account',
        'Manage Your Content and Devices',
        'Your Free Amazon Business Account'
    ];
    
    menuItems.forEach(itemText => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = '#'; 
        a.textContent = itemText;
        li.appendChild(a);
        ula.appendChild(li);
    });
    low.appendChild(ula);
    
        upper.style.textAlign='center';
        upper.style.marginTop='15px';
    
        button.style.width='220px';
        button.style.height='50px';
        button.style.border='none';
        button.style.borderRadius='8px';
        button.textContent = 'Sign In'; 
        button.style.backgroundColor = '#FFD814'; 
        button.style.cursor='pointer';
    
        lower.style.color='black';
        lower.innerHTML='';
        lower.innerHTML = '<h3>Your Lists </h3>'; 
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');
    let a4 = document.createElement('a');
    let a5 = document.createElement('a');
    
    a1.href = "#";
    a1.textContent = "Create a Wish List";
    a2.href = "#";
    a2.textContent = "Wish from Any Website";
    a3.href = "#";
    a3.textContent = "Baby Wishlist";
    a4.href = "#";
    a4.textContent = "Discover Your Style";
    a5.href = "#";
    a5.textContent = "Explore Showroom";
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
    li5.appendChild(a5);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.style.listStyle='none';
    nav.appendChild(ul);
    lower.appendChild(nav);
    lower.style.marginLeft='20px';
    
        maine.style.height='450px';
        maine.style.backgroundColor='white';
        maine.style.width='35%';
        maine.style.position = 'absolute';
        maine.style.top = '58px'; 
        maine.style.left = '900px';
        maine.style.right ='1000px';
        maine.style.borderRadius='1%';
    
        signin.parentNode.insertBefore(maine, signin.nextSibling);
};

signin.addEventListener('mouseover', () => {
    func();
});

maine.addEventListener('mouseleave',()=>{
    maine.style.display='none';
});

signin.addEventListener('mouseover', () => {
    maine.style.display='block';
    func();
});
