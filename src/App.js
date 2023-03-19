import "./App.css";

function App() {
  const color = "purpure";
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p>Кормиш Роман</p>
          <p>Backend</p>
          <div className="myComponent">
          {/*use experimental do expression*/}
            {do {
              if (color === "blue") {
                "PHP developer"
              } else if (color === "white") {
                "Go developer"
              } else if (color === "purpure") {
                "C# developer"
              }
            }}
          </div>
          <p>Azure 204 Certified Developer</p>
        <p style={{width: "600px"}}>
            Ця програма сертифікації від Microsoft надає повний огляд послуг та
            інструментів Azire для розробників. Він охоплює такі теми, як Azure
            Portal, CosmosDb  та контейнирезації, які актуальні
            для back-end розробників.
          </p>
          <a
            className="App-link"
            href="https://github.com/tc39/proposal-do-expressions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посилання на do-expressions proposal
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
