window.onload = ()=>{ 
    let area = document.querySelector('.projeto-area')
    

    info.map((a)=>{
        let cartao = document.querySelector('.projeto-card').cloneNode(true)
        cartao.querySelector('.projeto-img img').setAttribute('src',a.img)
        cartao.querySelector('.projeto-nome').innerHTML = "Nome: "+ a.titulo
        cartao.querySelector('.projeto-descricao').innerHTML = "Descrição: "+ a.texto
        area.append(cartao) 
       
    })

    let card = document.querySelectorAll('.projeto-card')
    card.forEach((item)=>{
        item.addEventListener('mouseover',()=>{
            item.querySelector('.projeto-dado').style.display = "flex";
            item.querySelector('.projeto-img').style.display = "none";
        })
        item.addEventListener('mouseout',()=>{
            item.querySelector('.projeto-dado').style.display = "none";
            item.querySelector('.projeto-img').style.display = "flex";
        })
    });

}
