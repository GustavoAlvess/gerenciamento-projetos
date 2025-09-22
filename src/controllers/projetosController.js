import dados from "../models/dados.js";
const { projetos } = dados;

const getAllProjetos = (req, res) => {
  const { nome, status, orcamento, gerente, prazo } = req.query;
  let resultado = projetos;
  
  if (status) {
    resultado = projetos.filter((b) =>
      b.status.toLowerCase() === status.toLowerCase())
    }
 
   if (gerente) {
     resultado = resultado.filter(
       (g) => g.gerente.toLowerCase() === gerente.toLowerCase()
     );
   }
  //  if (prazo - new Date() === 30) {
  //    resultado = resultado.filter(
  //      (p) => p.prazo.toLowerCase() === prazo.toLowerCase()
  //    );
  //  }

  //  if (orcamento) {
  //    resultado = resultado.filter((o) => o.orcamento == orcamento);
  //  }

   if (nome) {
     resultado = resultado.filter((n) =>
       n.nome.toLowerCase().includes(nome.toLowerCase())
     );
 }




  res.status(200).json({
    total: resultado.length,
    data: resultado
  });
};
 const getProjetosById = (req, res) => {
 let id = req.params.id;
  id = parseInt(id);
  const projeto = projetos.find((b) => b.id === id);


console.log(id);
console.log(projeto);



  if (projeto) {
    res.status(200).json(projeto);
  } else {
    res.status(404).json({
      message: "Nenhum personagem com esse ID",
    });
 };
 }

const createProjeto = (req, res) => {
    const { nome, status, orcamento, gerente, prazo} =
    req.body;

  // Validação de campos obrigatórios
  if (!nome || !gerente || prazo ) {
    return res.status(400).json({
      success: false,
      message: "Nome, gerente e prazo são obrigatórios para um novo projeto!",
    });
  }

  
  const novoProjeto = {
      id: projetos.length + 1,
      nome, 
      status,
      orcamento,
      gerente,
      prazo, 
    };
    
    
    projetos.push(novoProjeto);
    
    res.status(201).json({
        success: true,
        message: "Novo projeto cadastrado!",
        data: novoProjeto,
    });
}

const deleteProjeto = (req, res) => {
    let id = req.params.id;
  id = parseInt(id);
  let resultado = projetos

  if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "ID deve ser um número válido!"
        });
    }

    const idParaApagar = parseInt(id);
    
  
    const projetoParaRemover = projetos.find(b => b.id === idParaApagar);
    if (!projetoParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Projeto com ID ${id} não encontrado para remoção!`
        });
    }

  
    const projetosFiltrados = projetos.filter(bruxo => bruxo.id !== idParaApagar);
    
    // Atualizar array global
    projetos.splice(0, projetos.length, ...projetosFiltrados);

    res.status(200).json({
        success: true,
        message: `Projeto ${projetoParaRemover.nome} (ID: ${id}) foi removido dos registros.`,
        projetoRemovido: projetoParaRemover
    });
}

const updateProjeto = (req, res) => {
  const { id } = req.params;
  const { nome, status, orcamento, gerente, prazo } = req.body;

  // Validar ID
  if (isNaN(id)) {
      return res.status(400).json({
          success: false,
          message: "ID deve ser um número válido!"
      });
  }

  if (orcamento <= 0){
     return res.status(400).json({
          success: false,
          message: "Orçamento deve ser maior que 0!"
      });
  }
  const idParaEditar = parseInt(id);
  
  
  const projetoExiste = projetos.find(b => b.id === idParaEditar);
  if (!projetoExiste) {
      return res.status(404).json({
          success: false,
          message: `Projeto com ID ${id} não encontrada para atualização!`
      });
  }

  // Atualizar barbie usando map
  const projetosAtualizados = projetos.map(projeto => 
      projeto.id === idParaEditar 
          ? { 
              ...projeto, 
              ...(nome && { nome }),
              ...(status && { status }),
              ...(gerente && { gerente }),
              ...(prazo && { prazo }),
              ...(orcamento && { orcamento: parseInt(orcamento) }),
            
                }
          : projeto
  );

  // Atualizar array global
  projetos.splice(0, projetos.length, ...projetosAtualizados);

  
  const projetoAtualizado = projetos.find(b => b.id === idParaEditar);

  res.status(200).json({
      success: true,
      message: `Dados do Projeto ID ${id} atualizados com sucesso!`,
      projeto: projetoAtualizado
  });
};


export { getAllProjetos,  getProjetosById ,createProjeto, deleteProjeto, updateProjeto };