import React from 'react';

const TabelaLivros = ({livros}) => {
  return (
    <div className="livros">
      <h1>Tabela Livros</h1>
      {livros.length === 0 && <h2>Nenhum livro cadastrado</h2>}
      {livros.length > 0 && (
          <table className="tabela">
          <thead>
              <tr>
                  <th width="15%">ISBN</th>
                  <th>Titulo</th>
                  <th>Autor</th>
                  <th width="10%"></th>
                  <th width="10%"></th>
              </tr>
          </thead>
          <tbody>
            {livros.map((livro) => {
              return (
                <tr>
                  <td>{livro.isbn}</td>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>
                    <button className="botao editar">Editar</button>
                  </td>
                  <td>
                    <button className="botao remover">Remover</button>
                  </td>
                </tr>
          )
            })}
          </tbody>
        </table>
      )}
      
    </div>
  );
};

export default TabelaLivros;