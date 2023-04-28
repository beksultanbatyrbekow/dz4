const block = document.querySelector('.block')
const btn = document.querySelector('button')

const func = () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            data.map(i => {
                const box = document.createElement('div')
                box.innerHTML = `
                 <p>${i.name}</p>
                 <p>${i.age}</p>            `
                block.append(box)
            })
        })
}

btn.onclick = () => func()

