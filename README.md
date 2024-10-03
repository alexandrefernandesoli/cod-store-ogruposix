# Online Store - Cash on Delivery (COD)

Este é um projeto de uma página de vendas online para uma loja que utiliza o sistema de "Cash on Delivery" (COD). O projeto foi desenvolvido como parte de uma vaga de emprego para a empresa Grupo SIX, utilizando Next.js, TailwindCSS, HTML, CSS e JavaScript.

## Funcionalidades

- **Página inicial**: Exibe um vídeo promocional com uma **headline** (título acima do vídeo).
- **Lista de produtos**: Mostra os produtos disponíveis para compra com botões de "Comprar".
- **Formulário de compra**: Ao clicar em "Comprar", um formulário solicita as informações básicas do comprador (nome, endereço, etc.) para finalizar a compra.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e roteamento.
- **TailwindCSS**: Framework CSS utilitário para estilização rápida e responsiva.

## Variáveis de Ambiente

Para que o projeto funcione corretamente, é necessário configurar a seguinte variável de ambiente no arquivo `.env` na raiz do projeto:

```
API_USER_TOKEN=seu_token_de_usuario
```

Esta variável é utilizada para autenticação nas chamadas à API do backend, que gerencia os pedidos.

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/alexandrefernandesoli/cod-store-ogruposix.git
   cd cod-store-ogruposix
   ```

2. **Instale as dependências**:
   Certifique-se de ter o Node.js e o npm instalados. Em seguida, rode:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto com a seguinte variável:
   ```bash
   NEXT_PUBLIC_API_USER_TOKEN=seu_token_de_usuario
   ```

4. **Execute o servidor de desenvolvimento**:
   Para iniciar o ambiente de desenvolvimento local, execute:
   ```bash
   npm run dev
   ```

5. **Acesse o projeto**:
   Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000).

6. **Build para Produção (Opcional)**:
   Para criar uma versão de produção, execute:
   ```bash
   npm run build
   npm start
   ```