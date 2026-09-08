import './inicio.css';
import CardCurso from "../components/CardCurso";
import '../components/cardCurso.css';

function Inicio() {
  return (
    <main>
      <section className='hero'>
        <h1><span>IFRN </span>Campus Pau dos Ferros</h1>
        <h3>Educação, Ciência e Tecnologia</h3>
      </section>

      <section className="sobre">
        <h2>Sobre o Campus</h2>
        <p>
          O <strong>Instituto Federal do Rio Grande do Norte</strong> (IFRN) é uma instituição
          pública de ensino que oferece formação técnica e tecnológica de
          qualidade. O Campus Pau dos Ferros atende estudantes de toda a região
          do Alto Oeste Potiguar, promovendo ensino, pesquisa e extensão.
        </p>

        <p>
          Entre os cursos técnicos oferecidos pelo campus estão <strong>Informática,
          Alimentos e Apicultura</strong>, formando profissionais preparados para os
          desafios do mercado de trabalho.
        </p>
      </section>

      <section className="cursos">
        <h2>Cursos Técnicos</h2>

        <div className="cards">
          <CardCurso
            titulo="Informática"
            descricao="Desenvolvimento de sistemas, programação e tecnologia."
          />

          <CardCurso
            titulo="Alimentos"
            descricao="Produção, qualidade e conservação de alimentos."
          />

          <CardCurso
            titulo="Apicultura"
            descricao="Manejo de abelhas e produção de produtos apícolas."
          />
        </div>
      </section>

    </main>
  );
}

export default Inicio