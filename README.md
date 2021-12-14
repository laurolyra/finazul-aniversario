## Campanha de aniversário Finazul

Página criada por Lauro Lyra Aguiar.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notas para o dev que irá acoplar essa página ao sistema

Aqui é interessante apontar que, por eu não ter acesso à documentação da aplicação, tampouco às APIs, o componente `Calc` está pré-pronto. Nele, deve-se atentar para as linhas 30 e 100. Ambas estão no aguardod as funções adequadas para enviar uma requisição para o back e para se comportar à sua resposta, respectivamente.

Nesse mesmo componente, há um link na linha 65 onde deve-se guiar o cliente para o aplicativo do FGTS ou para obter o seu extrato. 

Encontrei uma solução muito boa para isso disponível em `https://tosto.re/`. Este site é um gerador de links automático onde ele aponta para a página adequada a depender do dispositivo do cliente - ou seja, se ele está num dispositivo android, abrir-se-á o link para a android store. Se for iOS, para a play store e, por fim, se for por navegador, ele pode ir para a página da caixa econômica federal.

Todavia, esse serviço depende de uma vinculação de conta a um e-mail válido. Como não pertenço ao quadro da empresa, acredito que é de bom tom que a administração forneça um e-mail para ter aacesso a esse serviço

## Como rodar esse projeto

clone este repositório e, em seguida, execute:

### `yarn start`

Críticas, comentários e sugestões são sempre bem vindos. Caso tenha qualquyer dúvida, favor contatar pelos meus contatos no meu perfil do giuthub.