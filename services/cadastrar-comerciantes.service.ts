interface ComercianteData {
  name: string;
  phone: string;
  description: string;
}

export const cadastrarComercianteService = async (
  data: ComercianteData,
): Promise<void> => {
  // Em um projeto real, você faria uma chamada para a sua API aqui.
  console.log(
    "Chamando o serviço cadastrarComercianteService com os dados:",
    data,
  );

  // Simulating an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulating success
  return;

  // Em caso de erro na API:
  // throw new Error("Erro ao cadastrar comerciante.");
};
