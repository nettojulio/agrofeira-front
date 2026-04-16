"use client";

import { useState } from "react";
import { cadastrarClienteService } from "@/services/cadastrar-clientes.service";

const BackIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13L5 8L10 3"
      stroke="#003D04"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PersonalDataIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.92"
      y="8.75"
      width="8.17"
      height="3.50"
      rx="0.58"
      stroke="#5BC48B"
      strokeWidth="1.17"
      fill="none"
    />
    <circle
      cx="7"
      cy="3.5"
      r="2.33"
      stroke="#5BC48B"
      strokeWidth="1.17"
      fill="none"
    />
  </svg>
);

const AddressIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.33"
      y="1.17"
      width="9.33"
      height="11.67"
      rx="0.58"
      stroke="#5BC48B"
      strokeWidth="1.17"
      fill="none"
    />
    <circle
      cx="7"
      cy="4.08"
      r="1.75"
      stroke="#5BC48B"
      strokeWidth="1.17"
      fill="none"
    />
  </svg>
);

const CancelIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L4 12"
      stroke="#2D7A1F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4L12 12"
      stroke="#2D7A1F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConfirmIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 4L6 11.3333L2.66667 8"
      stroke="white"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CadastrarClientePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () =>
    setFormData({
      name: "",
      phone: "",
      description: "",
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Nome e Telefone são obrigatórios!");
      return;
    }
    try {
      await cadastrarClienteService(formData);
      alert("Cliente cadastrado com sucesso!");
      handleCancel();
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o cliente.");
    }
  };

  return (
    <div className="flex size-full flex-grow flex-col items-center p-4 sm:p-6 md:p-8">
      {/* Page Header */}
      <div className="flex justify-start items-start gap-4 pb-6 w-full max-w-4xl">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <BackIcon />
        </button>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-gray-900">Cadastrar Cliente</h1>
          <p className="text-sm text-gray-600 mt-1">
            Preencha as informações pessoais e de endereço do cliente
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais Section */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-200 mb-6">
              <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-green-600/10 to-green-400/20">
                <PersonalDataIcon />
              </div>
              <h2 className="font-bold text-base text-gray-900">
                Dados Pessoais
              </h2>
            </div>

            <div className="space-y-4">
              {/* Nome e Telefone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Maria Oliveira"
                      required
                      className="w-full px-3 py-2.5 pl-9 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <svg
                      className="absolute left-3 top-3 w-3.5 h-3.5 text-gray-400"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2.92"
                        y="8.75"
                        width="8.17"
                        height="3.50"
                        rx="0.58"
                        stroke="currentColor"
                        strokeWidth="1.17"
                        fill="none"
                      />
                      <circle
                        cx="7"
                        cy="3.5"
                        r="2.33"
                        stroke="currentColor"
                        strokeWidth="1.17"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      required
                      className="w-full px-3 py-2.5 pl-9 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <svg
                      className="absolute left-3 top-3 w-3.5 h-3.5 text-gray-400"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.17"
                        y="1.17"
                        width="11.67"
                        height="11.67"
                        rx="1.17"
                        stroke="currentColor"
                        strokeWidth="1.17"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                  Descrição / Observações
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Preferências de compra, observações sobre entregas..."
                  className="w-full px-3 py-2.5 pl-9 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-20 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Endereço Section */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-200 mb-6">
              <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-green-600/10 to-green-400/20">
                <AddressIcon />
              </div>
              <h2 className="font-bold text-base text-gray-900">Endereço</h2>
            </div>

            <div className="space-y-4">
              {/* CEP */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                  CEP
                </label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  placeholder="00000-000"
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Rua/Avenida, Número, Complemento */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Rua / Avenida
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="Ex: Av. Paulista"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Número
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    placeholder="S/N"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Complemento */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complement"
                  value={formData.complement}
                  onChange={handleInputChange}
                  placeholder="Apto, Bloco..."
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Bairro, Cidade, Estado */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Bairro
                  </label>
                  <input
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    placeholder="Centro"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Cidade
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="São Paulo"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-green-600">
                    Estado
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">UF</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t-2 border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
            >
              <CancelIcon />
              <span>Cancelar</span>
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-900 hover:bg-green-950 text-white font-bold transition-colors shadow-md"
            >
              <ConfirmIcon />
              <span>Confirmar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
