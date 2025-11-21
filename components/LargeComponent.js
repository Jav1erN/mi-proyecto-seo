export default function LargeComponent() {
  return (
    <div style={{ marginTop: "20px", padding: "20px", background: "#f0f0f0" }}>
      <h2>Componente cargado con Lazy Loading</h2>
      <p>Este componente solo se carga cuando es necesario.</p>
    </div>
  );
}
