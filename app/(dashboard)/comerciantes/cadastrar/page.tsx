"use client";

import { useState } from "react";
import { cadastrarComercianteService } from "@/services/cadastrar-comerciantes.service";

// (Mantenha os componentes de ícone aqui: BackIcon, PersonalDataIcon, NameIcon, PhoneIcon, CancelIcon, ConfirmIcon)
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
    <path
      d="M12.8333 12.25H1.16667V9.91667C1.16667 9.27233 1.689 8.75 2.33333 8.75H11.6667C12.311 8.75 12.8333 9.27233 12.8333 9.91667V12.25Z"
      stroke="#5BC48B"
      strokeWidth="1.17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.16667 12.25V12.25"
      stroke="#5BC48B"
      strokeWidth="1.17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8333 12.25V12.25"
      stroke="#5BC48B"
      strokeWidth="1.17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="7"
      cy="4.08333"
      r="2.33333"
      stroke="#5BC48B"
      strokeWidth="1.17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const NameIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 14H3.33333V11.3333C3.33333 10.5969 3.93029 10 4.66667 10H11.3333C12.0697 10 12.6667 10.5969 12.6667 11.3333V14Z"
      stroke="#9DB89F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33333 14V14"
      stroke="#9DB89F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 14V14"
      stroke="#9DB89F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="8"
      cy="4.66667"
      r="2.66667"
      stroke="#9DB89F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.33333"
      y="1.33333"
      width="13.3333"
      height="13.3333"
      rx="1.33"
      stroke="#9DB89F"
      strokeWidth="1.33"
    />
    <path
      d="M1.33333 4.66667L8 9.33333L14.6667 4.66667"
      stroke="#9DB89F"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="12" r="1.33333" stroke="#9DB89F" strokeWidth="1.33" />
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

export default function CadastrarComerciantePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () =>
    setFormData({ name: "", phone: "", description: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone)
      return alert("Nome e Telefone são obrigatórios!");
    try {
      await cadastrarComercianteService(formData);
      alert("Comerciante cadastrado com sucesso!");
      handleCancel();
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o comerciante.");
    }
  };

  return (
    <div className="flex size-full flex-grow flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="flex justify-start items-start gap-4 pb-6 w-full max-w-2xl">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <BackIcon />
        </button>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-gray-900">
            Cadastrar Comerciante
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Preencha as informações para adicionar um novo comerciante
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-lg">
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Form Section Header */}
          <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-200">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-400">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.17"
                  y="8.75"
                  width="8.17"
                  height="3.50"
                  rx="0.58"
                  stroke="#d6e8de"
                  strokeWidth="1.17"
                  fill="none"
                />
                <circle
                  cx="5.25"
                  cy="3.5"
                  r="2.33"
                  stroke="#c1e0cf"
                  strokeWidth="1.17"
                  fill="none"
                />
              </svg>
            </div>
            <h2 className="font-bold text-lg text-gray-900">Dados Pessoais</h2>
          </div>

          {/* Input Row: Nome e Telefone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-wide text-green-600"
              >
                Nome <span className="text-red-500">*</span>
              </label>
              <div className="relative flex flex-col">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: João da Silva"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute left-3 top-3 size-4">
                  <NameIcon />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-wide text-green-600"
              >
                Telefone <span className="text-red-500">*</span>
              </label>
              <div className="relative flex flex-col">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute left-3 top-3 size-4">
                  <PhoneIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Description Textarea */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-xs font-bold uppercase tracking-wide text-green-600"
            >
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Detalhes sobre os produtos, localização..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-24 resize-none"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t-2 border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 px-6 py-2.5 transition-colors"
            >
              <CancelIcon />
              <span className="font-bold text-sm text-gray-700">Cancelar</span>
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-green-700 hover:bg-green-800 px-6 py-2.5 text-white transition-colors shadow-md"
            >
              <ConfirmIcon />
              <span className="font-bold text-sm">Confirmar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
