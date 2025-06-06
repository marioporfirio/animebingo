# 🎲 Anime Bingo

Bem-vindo ao **Anime Bingo**! Esta é uma aplicação web interativa e divertida, projetada para ajudar grupos de amigos a sortear e indicar animes para assistir. Chega de indecisão! Com vários modos de jogo, o Anime Bingo garante que todos tenham algo novo e emocionante para descobrir.

A aplicação é construída com HTML, CSS (TailwindCSS) e JavaScript puro, sem a necessidade de frameworks complexos, e utiliza a API pública do **AniList** para buscar informações detalhadas sobre os animes.


*(Sugestão: Substitua a imagem acima por uma captura de tela mais atualizada da sua aplicação)*

## ✨ Funcionalidades Principais

-   **Gerenciamento de Múltiplos Bingos:** Crie e salve vários jogos de bingo simultaneamente. Perfeito para diferentes grupos de amigos ou eventos.
-   **Quatro Modos de Jogo:**
    1.  **Infinito:** Um modo dinâmico onde, após assistir a um anime sorteado, o participante recebe um novo gênero imediatamente, mantendo o jogo sempre em movimento.
    2.  **Tradicional:** Cada participante recebe um gênero e deve assistir a um anime indicado para aquele gênero para "marcar" seu ponto.
    3.  **Clube (Gênero Sorteado):** Um único gênero é sorteado para todo o grupo. Todos os participantes indicam animes desse gênero e um deles é sorteado para o clube assistir.
    4.  **Clube (Gênero Escolhido):** O grupo escolhe um gênero específico, e o resto segue as regras do modo clube.
-   **Integração com AniList:**
    *   Busca de animes com filtros avançados (mostrando apenas animes já finalizados).
    *   **Verificação de Lista de Usuários:** Ao cadastrar o nome de usuário do AniList de um participante, a aplicação mostra tags visuais nos resultados da busca, informando se aquele anime já está na lista da pessoa (ex: "Completo", "Assistindo", "Planejado").
    *   **Edição Flexível:** Permite adicionar ou alterar o nome de usuário do AniList de um participante a qualquer momento do jogo.
-   **Sorteios Interativos:** Modais animados revelam os gêneros e animes sorteados, tornando o processo mais divertido e envolvente.
-   **Exportação de Resultados:** Gere imagens de alta qualidade para compartilhar facilmente:
    *   A lista de animes que cada um deve assistir.
    *   O histórico completo de indicações.
    *   O resultado final de um bingo no modo clube.
-   **Backup e Restauração:** Exporte todos os seus dados de bingos para um arquivo JSON e importe-os a qualquer momento. Nunca perca o progresso de um jogo!
-   **Interface Responsiva:** Funciona bem em desktops, tablets e celulares.

## 🚀 Como Usar

A aplicação foi projetada para ser simples e auto-hospedada.

1.  **Download:** Baixe os três arquivos do repositório:
    *   `index.html`
    *   `style.css`
    *   `script.js`
2.  **Organização:** Coloque os três arquivos na mesma pasta no seu computador.
3.  **Execução:** Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).

A aplicação está pronta para usar!

### Guia Rápido de Jogo

1.  **Gerenciar Bingos:** Na tela inicial, crie um novo bingo, dando um nome e escolhendo um modo de jogo.
2.  **Cadastro de Participantes:** Adicione os participantes. Você pode opcionalmente incluir o nome de usuário do AniList de cada um para ativar a funcionalidade de verificação de listas.
3.  **Sorteio de Gêneros:** Avance para a próxima fase. Nos modos "Infinito" e "Tradicional", sorteie um gênero para cada participante. No modo "Clube", sorteie ou escolha um gênero para todo o grupo.
4.  **Fase de Indicações:** Cada participante indica um anime para os outros (ou para o clube, dependendo do modo de jogo).
5.  **Sorteio de Animes:** Com as indicações feitas, avance para sortear qual anime cada pessoa (ou o clube) irá assistir.
6.  **Acompanhamento:** Marque os animes como "vistos" para progredir no jogo. No modo infinito, um novo ciclo se inicia automaticamente!

## 🛠️ Desenvolvido Com

*   **HTML5:** Para a estrutura da página.
*   **CSS3 & [TailwindCSS](https://tailwindcss.com/):** Para estilização moderna e responsiva.
*   **JavaScript (ES6+):** Para toda a lógica da aplicação, sem dependências de frameworks.
*   **[AniList API (GraphQL)](https://anilist.gitbook.io/anilist-apiv2-docs/):** Para buscar informações de animes.
*   **[html2canvas](https://html2canvas.hertzen.com/):** Para gerar as imagens de exportação.

## 🤝 Como Contribuir

Este é um projeto de código aberto e contribuições são muito bem-vindas! Se você tem uma ideia para uma nova funcionalidade, uma melhoria na interface ou encontrou um bug, sinta-se à vontade para:

1.  **Criar uma Issue:** Descreva sua sugestão ou o problema encontrado.
2.  **Fazer um Fork do Repositório:** Crie sua própria versão do projeto.
3.  **Criar uma Branch:** (`git checkout -b feature/minha-nova-feature`)
4.  **Fazer suas Modificações:** Implemente sua nova funcionalidade ou correção.
5.  **Enviar um Pull Request:** Abra um PR para que possamos revisar e incorporar suas mudanças.

---

Espero que você e seus amigos se divirtam com o Anime Bingo!
