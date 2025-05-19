function calcularDiferencaDias(data1, data2) {
    return new Promise((resolve) => {

      const date1 = new Date(data1);
      const date2 = new Date(data2);
      
      const diffEmMs = Math.abs(date2 - date1);
      
      const diffEmDias = diffEmMs / (1000 * 60 * 60 * 24);
      
      resolve(diffEmDias);
    });
  }
  
  async function exibirDiferenca() {
    const data1 = "2025-05-12";
    const data2 = "2025-05-20";
    
    const diferenca = await calcularDiferencaDias(data1, data2);
    console.log(`A diferença entre ${data1} e ${data2} é de ${diferenca} dias.`);
  }
  
  exibirDiferenca();