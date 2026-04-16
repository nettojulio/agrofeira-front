import { LeafIcon } from "lucide-react";

const CertificateIcon = () => (
  <div
    style={{
      width: "13px",
      height: "13px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Ícone superior */}
    <div
      style={{
        width: "9.22px",
        height: "9.75px",
        left: "2.16px",
        top: "1.08px",
        position: "absolute",
        outline: "1.08px #5BC48B solid",
        outlineOffset: "-0.54px",
      }}
    />
    {/* Ícone inferior */}
    <div
      style={{
        width: "5.96px",
        height: "4.88px",
        left: "1.08px",
        top: "6.50px",
        position: "absolute",
        outline: "1.08px #5BC48B solid",
        outlineOffset: "-0.54px",
      }}
    />
  </div>
);

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
        <LeafIcon />
        <div
          style={{
            color: "#9DB89F",
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
          color: "#B8CEBA",
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
