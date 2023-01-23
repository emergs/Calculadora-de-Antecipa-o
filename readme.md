&nbsp;

1. Após realizar o clone do projeto, abra o diretório onde este foi salvo e rode o comando ```yarn install``` para instalar as dependências necessárias

&nbsp;

2. Na sequência, rode o comando ```yarn dev``` para inicializar o app

&nbsp;

3. Em seguida insira o endereço a seguir na browser de sua preferencia ```http://localhost:5173/```

&nbsp;

4. Com a aplicação aberta voce deverá preencher os campos obrigatorios:
 - Valor da venda,
 - Quantidade de parcelas,
 - Percentual de MDR,

    &nbsp;
  
   E caso queira o campo opcional:
 - Período(separando os dias com virgula)
  
&nbsp;

5. Para testar as parte criticas da operação, clique no icone de engrenagem na parte superior direita do formulário.

&nbsp;
   
6. O botão simular ficará oculto, e irá aparecer três botões em seu lugar:
   
    - _Botão Timeout_ : Simula uma requisição cujo tempo de timeout se esgota, retornando uma mensagem para o usuário tentar novamente mais tarde.
  
    - _Botão Internal Server Error_: Simula uma requisição onde ocorre uma falha no servidor, retornando uma mensagem para o usuário tentar novamente mais tarde.
  
    - _Botão Delay_ : Simula um requisição com delay(atraso) exibindo uma mensagem "caregando..." para o usuário assim que a resposta chega a mensagem some.

&nbsp;

7. Para retornar ao formulário principal, clique novamente na engrenagem.