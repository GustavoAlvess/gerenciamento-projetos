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
 

export { getAllProjetos,  getProjetosById ,createProjeto, deleteProjeto };