interface ClienteData {
  name: string;
  phone: string;
  description: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export const cadastrarClienteService = async (
  data: ClienteData,
): Promise<void> => {
  // Em um projeto real, você faria uma chamada para a sua API aqui.
  console.log("Chamando o serviço cadastrarClienteService com os dados:", data);

  // Simulating an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulating success
  return;

  // Em caso de erro na API:
  // throw new Error("Erro ao cadastrar cliente.");
};
