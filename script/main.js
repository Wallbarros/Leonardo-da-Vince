const biografia = [
    "Quem foi?:Leonardo di Ser Piero da Vinci, ou simplesmente Leonardo da Vinci, foi um polímata nascido na atual Itália, uma das figuras mais importantes, que se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico",
    "Nascimento: Nascido em 15 de abril de 1452 em Vinci, na Itália.",
    "Morte: Faleceu em 2 de maio de 1519 em Amboise, França.",
    "Pinturas: Famoso por suas pinturas, incluindo a Mona Lisa, A Última Ceia, A Virgem dos Rochedos, São João Batista",
    "Profissões: Também era escultor, arquiteto, matemático, engenheiro, inventor, anatomista, músico e escritor.",
    "Invenções: Criou inúmeras invenções e esboços de máquinas, muitas das quais foram muito à frente de seu tempo, como por exemplo Tanque Blindado, Sistema de Irrigação, Máquina de Movimento Perpétuo, Máquina Voadora ",
  ];

  function pesquisar() {
    const termo = document.querySelector('.search-input').value.toLowerCase();
    const resultados = biografia.filter(info => info.toLowerCase().includes(termo));

    const resultadosPesquisa = document.getElementById('search-results');
    resultadosPesquisa.style.display = 'block';
    resultadosPesquisa.innerHTML = '';

    resultados.forEach(resultado => {
      const itemResultado = document.createElement('p');
      itemResultado.textContent = resultado;
      resultadosPesquisa.appendChild(itemResultado);
    });
  }