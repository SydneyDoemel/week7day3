// console.log('hello')
// const poke_form  = document.querySelector('#get_poke')
// poke_form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const p_name =  e.path[0][0].value
//     return p_name
// })

const getPokes = async (name)=> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    const character = data.forms[0].name
    const front_shiny = data.sprites.front_shiny
    const ability_1 = data.abilities[0].ability.name
    const ability_2 = data.abilities[1].ability.name
    const poke_lst = [character, front_shiny, ability_1, ability_2]
    addToPage(poke_lst)
    console.log(poke_lst)
    return poke_lst

    
    // for (let name of data.students){
    //     const p = document.createElement('p')
    //     p.innerText = name
    //     document.querySelector('section').insertAdjacentElement('beforeend', p)
    };

const poke_form  = document.querySelector('#get_poke')
poke_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const p_name =  e.path[0][0].value
    const poke_info = getPokes(p_name)
    
    return 
});

const addToPage = (lst) =>{
    const p = document.createElement('p')
    p.innerHTML = `<div class="card m-auto" style="width: 18rem;">
    <img class="card-img-top w-75 mx-auto" src="${lst[1]}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title text-center" style="text-transform: capitalize;">${lst[0]}</h5>
    <p class="card-text" style="text-transform: capitalize;">Abilities: <br> ${lst[2]}, ${lst[3]}</p>
    </div>
    </div>`
    document.querySelector('#poke_cards').append(p)
};




const clearBtn = document.getElementById('clear');
const clearPokes = () =>{
    document.querySelector('.clear-div').innerHTML=""
};
clearBtn.addEventListener('click', clearPokes);