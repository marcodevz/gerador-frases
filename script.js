const frases = [
    "Acredite em você, sempre!",
    "Passo a passo, você chega lá.",
    "O segredo do sucesso é começar.",
    "Você é mais forte do que imagina.",
    "Não pare até se orgulhar.",
    "Grandes coisas levam tempo.",
    "A disciplina te leva onde a motivação não consegue.",
    "Seu futuro começa hoje, não amanhã.",
    "Faça o seu melhor, mesmo que ninguém esteja vendo!",
    "Você consegue, continue!"
];

function gerarFrase() {
    const aleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").innerText = frases[aleatorio];
}

