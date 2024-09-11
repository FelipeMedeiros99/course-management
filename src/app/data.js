const listaCursos = [
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
    {
        imagem: "https://www.google.com/imgres?q=curso%20gestao&imgurl=https%3A%2F%2Fsobresp.edu.br%2Fwp-content%2Fuploads%2F304_GESTAODERH_BANNERSITEMOBILE_EAD.png&imgrefurl=https%3A%2F%2Fsobresp.edu.br%2Fgraduacao-ead%2Fgestao-de-rh%2F&docid=mpk0rfrGSOodGM&tbnid=TejnQC37YmLkMM&vet=12ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjC8fSGhLyIAxXeJbkGHVZzAKAQM3oECFwQAA",
        nome: "Curso de gestão",
        preco: 8567.50,
        cargaHoraria: "120h",
        precoComDesconto: 8000,
        conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5"
    },
];

export default listaCursos;