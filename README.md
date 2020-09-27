# Recuperação de senha

**RF**

-O usuario deve poder recuperar senha informando o seu email

-O usuario deve receber email com instruções de recuperaçao de senha

-o usuario deve poder restar sua senha;

**RNF**

-Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;

-Utilizar o amazon Ses para envios em produção;

- o envio de emails deve funcionar em segundo plano;



**RN**
- O link enviado por email para resetar senha, deve expirar em 2H;

- O usuario precisa confirmar a nova senha ao resetar sua senha;


# Atualização do perfil
**RF**

- o usuario deve poder atualizar seu perfil;


**RN**

-o usuario nao pode alterar seu email para outro email ja existente;

-Para atualizar a sua senha o usuario deve informar a senha antiga;

-para atualziar a senha deve confirmar a sua nova senha;
# Painel do prestador
**RF**

- o usuario deve poder listar seus agendamento s de um dia especifico;

- o prestador deve receber uma notificaçao sempre que houver um novo agendamento;

- o prestador deve poder visualizar as notificações nao lidas;
- as notificaçoes do prestador devem ser armazenadas no mongoDb;
- as notificações do prstador devem ser enviadar em tempo real por socket.io;



**RNF**

- os agendamentos do prestador no dia devem ser atualizados em tela;



**RN**

- a notificaçao deve ter um status de lida ou nao lida para que o prestador possa controlar

# Agendamento de serviços
**RF**

- o usuario deve poder listar todos prestadores de serviços

- o usuario deve poder listar os dias de um mes com os horarios disponiveis;

- o usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;

-o  usuario deve poder realizar um novo agendamento com um prestador

**RNF**
-a listagem de prestadores deve ser armazenada em cache;



**RN**
- Cada agendamento deve durar 1 hora exatamente;

-Os agendamentos devem estar disponiveis entre as 8 as 18 (primeiro as 8 ultimo as 17)

-o usuario nao pode agendar em um horario ja ocupado;
-o usuario nao pode agendar para um horario que ja passou;
-o usuario nao pode agendar serviços consigo mesmo
