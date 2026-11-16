# Mural de Recados Interativo

Aplicação web desenvolvida como AC1 para praticar conceitos fundamentais do Angular. O mural permite publicar recados, selecionar um item e interagir com ele marcando-o como lido ou não lido e registrando curtidas.

## Funcionalidades

- Exibe recados iniciais de exemplo.
- Publica novos recados; o botão fica desativado quando o campo está vazio e `Enter` também publica.
- Mostra os detalhes do recado selecionado.
- Permite alternar o estado de leitura e adicionar curtidas.
- Aplica estilos diferentes aos estados lido e não lido.

> **Importante:** os dados são mantidos apenas na memória do navegador. Ao atualizar ou fechar a página, os recados adicionados e as interações são reiniciados. O projeto não possui API ou banco de dados.

## Tecnologias

- Angular 22
- TypeScript
- HTML e CSS
- Angular Forms (`ngModel`) e Angular Router
- Vitest para testes unitários

## Como executar

### Pré-requisitos

- Node.js e npm instalados.

### Instalação e execução

```bash
npm install
npm start
```

Abra [http://localhost:4200/mural-recados](http://localhost:4200/mural-recados) no navegador. O servidor de desenvolvimento recarrega a aplicação quando os arquivos são alterados.

## Comandos disponíveis

```bash
npm start   # inicia o servidor de desenvolvimento
npm run build # gera a versão de produção em dist/
npm test    # executa os testes unitários
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── mural-recados/       # componente, template, estilos e teste do mural
│   ├── app.config.ts        # configuração da aplicação e do roteador
│   ├── app.routes.ts        # rota /mural-recados
│   └── app.*                # componente raiz
├── index.html               # documento HTML principal
├── main.ts                  # inicialização da aplicação Angular
└── styles.css               # estilos globais
public/                      # recursos estáticos, como o favicon
```

## Testes

Execute `npm test` para iniciar a suíte de testes unitários com Vitest. O projeto não tem um comando ou framework de testes end-to-end configurado no momento.
