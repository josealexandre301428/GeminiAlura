let section = document.getElementById("resultados-pesquisa");

const search = () => {
  // Obtém os dados dos filmes a partir de um array chamado "dados"
  // e mapeia cada item para criar uma string HTML representando um resultado de pesquisa.
  let resultados = dados.map((item) => {
    // Cria um elemento HTML <div> para cada resultado, 
    // preenchendo os campos com as informações do filme.
    return `
      <div class="item-resultado">
        <h2>${item.titulo}</h2>  <h4>${item.diretor}</h4> <p>${item.ano}</p>    <p>${item.genero}</p>   <p class="descricao-meta">${item.sinopse}</p> <a href="${item.link}" target="_blank">Ver mais</a> </div>
    `;
  });

  // Atribui a string HTML gerada ao conteúdo interno do elemento section, 
  // substituindo o conteúdo anterior.
  section.innerHTML = resultados;
};


 