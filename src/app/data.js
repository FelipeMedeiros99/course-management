const listaCursos = [
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão com um nome muiro muito grande",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: `descricao do curso`,
        id: 1,

    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 2
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 3
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 4
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 5
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 6
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 7
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 8
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 9
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 10
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 11
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
        id: 12
    },
];

export default listaCursos;