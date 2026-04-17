import { LeafIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        height: "50px",
        paddingLeft: "32px",
        paddingRight: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Esquerda: Ícone + Copyright */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <LeafIcon size={16} color="#8b968c" />
        <div
          style={{
            color: "#8b968c",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "18px",
          }}
        >
          © {currentYear} EcoFeira · Associação Agroecológica
        </div>
      </div>

      {/* Direita: Direitos Reservados */}
      <div
        style={{
          color: "#8b968c",
          fontSize: "11.20px",

          fontWeight: 400,
          lineHeight: "16.80px",
        }}
      >
        Todos os direitos reservados
      </div>
    </footer>
  );
}
