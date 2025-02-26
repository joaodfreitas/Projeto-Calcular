import calcularLogo from '../img/calcularLogo.jpg';

export default function Header() {
  return (
    <div className="header">
      <img src={calcularLogo} alt="Logo Calcular" />
      <div className="title">Ferramenta de aprendizagem de cálculo</div>
      <span>07/06/2022</span>
    </div>
  );
}