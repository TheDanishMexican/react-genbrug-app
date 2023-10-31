export default function MainContent() {
  return (
    <>
      <main className="main">
        <header className="main-header">
          <img
            className="main-header-img"
            src="https://www.rodekors.dk/sites/rodekors.dk/files/styles/1920x720/public/2018-05/20160413_123634_001-1.jpg?h=a15e1688&itok=yyeI95YA"
            alt=""
          />
        </header>
        <section className="main-header-description">
          <h1>Velkommen i administrationen</h1>
          <div className="main-header-description-p">
            <p>
              Her på siden kan du tilføje en ny frivillig, samt den nødvendige
              information deromkring.
            </p>
            <p>
              Du har også mulighed for at administrere alle butikkens produkter
              under fanen administration af genbrug.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
