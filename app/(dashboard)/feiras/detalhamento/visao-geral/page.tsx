"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Users,
  Package,
  Store,
  ChevronRight,
  Loader2,
} from "lucide-react";

interface Item {
  id: string;
  nome: string;
  descricao?: string;
  categoria?: string;
  preco?: number;
}

interface Comerciante {
  id: string;
  nome: string;
  cnpj?: string;
  categoria?: string;
  email?: string;
}

interface Cliente {
  id: string;
  nome: string;
  email?: string;
  telefone?: string;
}

interface FeiraSummary {
  feiraId: string;
  dataFeira: string;
  localidade: string;
  items: Item[];
  comerciantes: Comerciante[];
  clientes: Cliente[];
}

export default function FeirDetalhamentoVisaoGeral() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [feiraSummary, setFeiraSummary] = useState<FeiraSummary | null>(null);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockData: FeiraSummary = {
      feiraId: "f-1",
      dataFeira: "25/04/2025",
      localidade: "Garanhuns - PE",
      items: [
        {
          id: "i-1",
          nome: "Alface Crespa",
          descricao: "Sem pesticidas",
          categoria: "Vegetais",
          preco: 3.5,
        },
        {
          id: "i-2",
          nome: "Tomate Caqui",
          descricao: "Colhido há 2 dias",
          categoria: "Frutas",
          preco: 8.5,
        },
        {
          id: "i-3",
          nome: "Cenoura Orgânica",
          descricao: "De primeira qualidade",
          categoria: "Vegetais",
          preco: 6.33,
        },
      ],
      comerciantes: [
        {
          id: "com-1",
          nome: "Sítio Primavera",
          categoria: "Produtor Local",
          email: "sitio@email.com",
        },
        {
          id: "com-2",
          nome: "Fazenda Monte Verde",
          categoria: "Produtor Local",
          email: "fazenda@email.com",
        },
      ],
      clientes: [
        {
          id: "c-1",
          nome: "João Silva",
          email: "joao@email.com",
          telefone: "(87) 98765-4321",
        },
        {
          id: "c-2",
          nome: "Maria Santos",
          email: "maria@email.com",
          telefone: "(87) 99876-5432",
        },
      ],
    };

    // Simulate loading delay
    setTimeout(() => {
      setFeiraSummary(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const handleDetailClick = (
    type: "item" | "comerciante" | "cliente",
    id: string,
  ) => {
    const routes: Record<string, string> = {
      item: `/dashboard/feiras/detalhamento/item/${id}`,
      comerciante: `/dashboard/feiras/detalhamento/comerciante/${id}`,
      cliente: `/dashboard/feiras/detalhamento/cliente-item/${id}`,
    };
    router.push(routes[type]);
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(160deg, #f6faf4 0%, #edf5eb 100%)",
        }}
      >
        <Loader2 className="w-8 h-8 animate-spin text-[#5bc48b]" />
      </div>
    );
  }

  if (!feiraSummary) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(160deg, #f6faf4 0%, #edf5eb 100%)",
        }}
      >
        <p className="text-[#9db89f]">Erro ao carregar dados</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(160deg, #f6faf4 0%, #edf5eb 100%)",
      }}
    >
      {/* Corpo */}
      <main className="flex-1 px-4 md:px-6 py-8 max-w-6xl w-full mx-auto flex flex-col gap-8">
        {/* Título e informações da feira */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 shrink-0"
            style={{
              background: "white",
              boxShadow: "0 2px 10px rgba(0,61,4,0.12)",
              border: "1px solid rgba(0,61,4,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#f0faf3";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "white";
            }}
          >
            <ArrowLeft size={17} style={{ color: "#003d04" }} />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#1a3d1f] mb-1">
              Visão Geral
            </h1>
            <p className="text-sm text-[#9db89f]">
              Detalhes da feira realizada em {feiraSummary.dataFeira} -{" "}
              {feiraSummary.localidade}
            </p>
          </div>
        </div>

        {/* Tabela de Itens */}
        <ItemsTable
          items={feiraSummary.items}
          onDetailClick={handleDetailClick}
        />

        {/* Tabela de Comerciantes */}
        <ComerciantesTable
          comerciantes={feiraSummary.comerciantes}
          onDetailClick={handleDetailClick}
        />

        {/* Tabela de Clientes */}
        <ClientesTable
          clientes={feiraSummary.clientes}
          onDetailClick={handleDetailClick}
        />
      </main>
    </div>
  );
}

interface ItemsTableProps {
  items: Item[];
  onDetailClick: (type: "item", id: string) => void;
}

function ItemsTable({ items, onDetailClick }: ItemsTableProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 2px 16px rgba(0,61,4,0.08), 0 0 0 1px rgba(0,61,4,0.06)",
      }}
    >
      {/* Cabeçalho Desktop */}
      <div
        className="hidden md:grid px-5 py-3"
        style={{
          gridTemplateColumns: "1fr",
          gap: "0 1rem",
          background: "linear-gradient(135deg, #003d04 0%, #1b6112 100%)",
        }}
      >
        <div className="flex items-center gap-2">
          <Package size={13} className="text-white/60 shrink-0" />
          <span className="text-white/90 uppercase text-[0.7rem] font-bold tracking-widest">
            Item
          </span>
        </div>
      </div>

      {/* Cabeçalho Mobile */}
      <div
        className="md:hidden px-4 py-3"
        style={{
          background: "linear-gradient(135deg, #003d04 0%, #1b6112 100%)",
        }}
      >
        <span className="text-white/90 uppercase text-[0.7rem] font-bold tracking-widest">
          Item ({items.length})
        </span>
      </div>

      {/* Linhas */}
      <div style={{ background: "white" }}>
        {items.length === 0 ? (
          <div className="px-4 md:px-5 py-8 text-center">
            <p className="text-[#9db89f]">Nenhum item disponível</p>
          </div>
        ) : (
          items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.id}
                className="px-4 md:px-5 py-3 transition-colors duration-150"
                style={{
                  background: isEven ? "white" : "#fafcf9",
                  borderBottom:
                    i < items.length - 1 ? "1px solid #eef5ee" : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(91,196,139,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = isEven
                    ? "white"
                    : "#fafcf9";
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(91,196,139,0.12)" }}
                    >
                      <Package size={13} style={{ color: "#5bc48b" }} />
                    </div>
                    <p className="text-[#1a3d1f] font-medium text-[0.9rem]">
                      {item.nome}
                    </p>
                  </div>
                  <button
                    onClick={() => onDetailClick("item", item.id)}
                    className="px-3 py-1.5 bg-[#5bc48b] text-white rounded-lg font-semibold text-[0.75rem] hover:bg-[#3da96f] transition-colors flex items-center gap-1"
                  >
                    <span>Detalhar</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

interface ComerciantesTableProps {
  comerciantes: Comerciante[];
  onDetailClick: (type: "comerciante", id: string) => void;
}

function ComerciantesTable({
  comerciantes,
  onDetailClick,
}: ComerciantesTableProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 2px 16px rgba(0,61,4,0.08), 0 0 0 1px rgba(0,61,4,0.06)",
      }}
    >
      {/* Cabeçalho Desktop */}
      <div
        className="hidden md:grid px-5 py-3"
        style={{
          gridTemplateColumns: "1fr",
          gap: "0 1rem",
          background: "linear-gradient(135deg, #003d04 0%, #1b6112 100%)",
        }}
      >
        <div className="flex items-center gap-2">
          <Store size={13} className="text-white/60 shrink-0" />
          <span className="text-white/90 uppercase text-[0.7rem] font-bold tracking-widest">
            Comerciante
          </span>
        </div>
      </div>

      {/* Cabeçalho Mobile */}
      <div
        className="md:hidden px-4 py-3"
        style={{
          background: "linear-gradient(135deg, #003d04 0%, #1b6112 100%)",
        }}
      >
        <span className="text-white/90 uppercase text-[0.7rem] font-bold tracking-widest">
          Comerciante ({comerciantes.length})
        </span>
      </div>

      {/* Linhas */}
      <div style={{ background: "white" }}>
        {comerciantes.length === 0 ? (
          <div className="px-4 md:px-5 py-8 text-center">
            <p className="text-[#9db89f]">Nenhum comerciante disponível</p>
          </div>
        ) : (
          comerciantes.map((comerciante, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={comerciante.id}
                className="px-4 md:px-5 py-3 transition-colors duration-150"
                style={{
                  background: isEven ? "white" : "#fafcf9",
                  borderBottom:
                    i < comerciantes.length - 1 ? "1px solid #eef5ee" : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(91,196,139,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = isEven
                    ? "white"
                    : "#fafcf9";
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(91,196,139,0.12)" }}
                    >
                      <Store size={13} style={{ color: "#5bc48b" }} />
                    </div>
                    <p className="text-[#1a3d1f] font-medium text-[0.9rem]">
                      {comerciante.nome}
                    </p>
                  </div>
                  <button
                    onClick={() => onDetailClick("comerciante", comerciante.id)}
                    className="px-3 py-1.5 bg-[#5bc48b] text-white rounded-lg font-semibold text-[0.75rem] hover:bg-[#3da96f] transition-colors flex items-center gap-1"
                  >
                    <span>Detalhar</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

interface ClientesTableProps {
  clientes: Cliente[];
  onDetailClick: (type: "cliente", id: string) => void;
}

function ClientesTable({ clientes, onDetailClick }: ClientesTableProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 2px 16px rgba(0,61,4,0.08), 0 0 0 1px rgba(0,61,4,0.06)",
      }}
    >
      {/* Cabeçalho Desktop */}
      <div
        className="hidden md:grid px-5 py-3"
        style={{
          gridTemplateColumns: "1fr",
          gap: "0 1rem",
          background: "linear-gradient(135deg, #003d04 0%, #1b6112 100%)",
        }}
      >
        <div className="flex items-center gap-2">
          <Users size={13} className="text-white/60 shrink-0" />
          <span className="text-white/90 uppercase text-[0.7rem] font-bold tracking-widest">
            Cliente
          </span>
        </div>
      </div>

      {/* Cabeçalho Mobile */}
      <div
        className="md:hidden px-4 py-3"
        style={{
          background: "linear-gradient(135deg, #003d04 0%, #1b6112 100%)",
        }}
      >
        <span className="text-white/90 uppercase text-[0.7rem] font-bold tracking-widest">
          Cliente ({clientes.length})
        </span>
      </div>

      {/* Linhas */}
      <div style={{ background: "white" }}>
        {clientes.length === 0 ? (
          <div className="px-4 md:px-5 py-8 text-center">
            <p className="text-[#9db89f]">Nenhum cliente disponível</p>
          </div>
        ) : (
          clientes.map((cliente, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={cliente.id}
                className="px-4 md:px-5 py-3 transition-colors duration-150"
                style={{
                  background: isEven ? "white" : "#fafcf9",
                  borderBottom:
                    i < clientes.length - 1 ? "1px solid #eef5ee" : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(91,196,139,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = isEven
                    ? "white"
                    : "#fafcf9";
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(91,196,139,0.12)" }}
                    >
                      <Users size={13} style={{ color: "#5bc48b" }} />
                    </div>
                    <p className="text-[#1a3d1f] font-medium text-[0.9rem]">
                      {cliente.nome}
                    </p>
                  </div>
                  <button
                    onClick={() => onDetailClick("cliente", cliente.id)}
                    className="px-3 py-1.5 bg-[#5bc48b] text-white rounded-lg font-semibold text-[0.75rem] hover:bg-[#3da96f] transition-colors flex items-center gap-1"
                  >
                    <span>Detalhar</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
