"use client"
import axios from "axios"

export default async function adicionarAoCarrinho(idCurso){
    try{
        const link = process.env.NEXT_PUBLIC_LINK_SERVER
        const dadosUsuario = JSON.parse(localStorage.getItem("usuario"))
        const data = {
            "usuario_id": Number(dadosUsuario.id),
            "curso_id": Number(idCurso)
        }
        const response = await axios.post(link+"/carrinho", data)
     
        if(response.status===202){
            alert("Adicionado ao carrinho")
        }

    }catch(e){
        console.log("erro ao adicionar ao carrinho: ", e)
    }
}