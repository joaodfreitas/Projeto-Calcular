import Post from './Post';

export default function MainContent() {
  return (
    <div className="content">
      <Post
        title="Para ser muito bom amanhã é preciso começar a praticar hoje"
        author="Prof. Cleiton - 24 Fev 25 - 16:40"
      >
        <p>
          São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática,
          inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança
          tenha nessa fase se refletirá por toda a sua vida escolar :(
        </p>
        <p>
          Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nos primeiros anos escolares
          e buscarão aperfeiçoar seu conhecimento nas operações básicas.
        </p>
      </Post>

      <Post
        title="Matemática: O Alicerce para o Sucesso Escolar!"
        author="Prof. Cleiton - 24 Fev 25 - 16:40"
      >
        <p>
          Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e aprendem as quatro
          operações essenciais: adição, subtração, multiplicação e divisão.
          Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada!
          Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a dominar as operações básicas
          e desenvolver confiança na matemática. 💡
        </p>
      </Post>
    </div>
  );
}