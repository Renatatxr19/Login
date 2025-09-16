## Atividade "Tela de login"

### Descrição
Estes projetos consistem na criação de dois sites de login. O primeiro, que é a atividade inicial, possui um login simples, utilizando apenas o e-mail e a senha. Já o segundo, que é a atividade avaliativa, apresenta um login mais elaborado, que requer matrícula, senha e cargo para acesso.

# Projetos de Login

## Atividade Inicial

### Funcionalidades

#### Tela de Login
- Campos para inserir **e-mail** e **senha**.
- Botão para enviar os dados e realizar a autenticação.

#### Validação dos Campos
- Verificar se o campo e-mail está preenchido e se o formato é válido.
- Verificar se o campo senha não está vazio.

#### Autenticação
- Conferir se o e-mail e a senha correspondem a um usuário registrado (pode ser um banco de dados simples ou um arquivo).
- Se as credenciais forem corretas, redirecionar o usuário para a página principal (dashboard).
- Se as credenciais forem inválidas, mostrar mensagem de erro.

#### Feedback ao Usuário
- Exibir mensagens claras em caso de erro (ex: “E-mail ou senha incorretos”).
- Indicar carregamento ou processo em andamento após o envio do formulário.

---

## Atividade Avaliativa

### Funcionalidades

#### Tela de Login
- Campos para inserir **matrícula**, **senha** e **cargo**.
- Botão para enviar os dados e realizar a autenticação.

#### Validação dos Campos
- Verificar se a matrícula está preenchida e no formato correto (ex: apenas números).
- Verificar se a senha não está vazia.
- Validar o campo cargo, que pode ser um dropdown com opções predefinidas (ex: Administrador, Funcionário, Estagiário).

#### Autenticação Avançada
- Conferir se a matrícula, senha e cargo correspondem a um usuário registrado.
- Permitir o acesso somente se todos os dados estiverem corretos.
- Implementar níveis de acesso conforme o cargo, redirecionando para diferentes áreas do sistema (ex: Administrador para painel de controle, Funcionário para área comum).

#### Segurança
- Armazenar senhas de forma segura (ex: hash).
- Implementar limites de tentativas de login para evitar ataques de força bruta.

#### Feedback ao Usuário
- Exibir mensagens específicas para erros (ex: “Cargo inválido para esta matrícula”, “Senha incorreta”).
- Indicar sucesso ou falha no login de forma clara.


##Tecnologias Utilizadas
-HTML
-CSS
-JavaScript 
