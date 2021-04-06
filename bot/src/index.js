const Telegraf = require('telegraf')
const fetch = require('node-fetch');
const axios = require('axios')
const bot = new Telegraf('<token>')


const moment = require('moment'); // require
moment().format(); 


    // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }


    
    let passwd = 0
    let lancheStatus = 0
    let pegaChat = 0

    let menu = 
    `Escolha qual lanche deseja comer ?
    \n 1️⃣ HAMBÚRGUER ----- R$ 8
    \n 📝 pão, bife, milho e batata

    \n 2️⃣ X-BURGUER ----- R$ 10
    \n 📝 pão, bife, queijo, alface, tomate, milho e batata palha

    \n 3️⃣ X-PRESUNTO ----- R$ 11
    \n 📝 pão, bife, queijo, presunto, alface, tomate, milho e batata palha

    \n 4️⃣ X-EGG ----- R$ 11
    \n 📝 pão, bife, queijo, ovo, alface, tomate, milho e batata palha

    \n 5️⃣ X-BACON ----- R$ 14
    \n 📝 pão, bife, queijo, bacon, alface, tomate, milho e batata palha

    \n 6️⃣ X-EGG PRESUNTO ----- R$ 13,50 
    \n 📝 pão, bife, queijo, ovo, presunto, alface, tomate, milho e batata palha

    \n 7️⃣ X-EGG BACON ----- R$ 14 
    \n 📝 pão, bife, queijo, ovo, bacon, alface, tomate, milho e batata palha

    \n 8️⃣ X-TUDO ----- R$ 15 
    \n 📝 pão, bife, queijo, ovo, bacon, presunto, banana da terra, alface, tomate, milho e batata palha

    \n 9️⃣ EXPLOSÃO DE SABORES ----- R$ 17 
    \n 📝 pão, bife, queijo, ovo, bacon, calabresa, cheddar, cebola caramelizada, alface, tomate, milho e batata palha`


    let Coberturaold = 'Digite * para finalizar ou digite add adicionar um novo lanche no pedido'



bot.start((ctx) => ctx.reply(`${time}, ${ ctx.from.first_name } sou a assistente virtual da Açai House, irei apresentar o carpádio e ajudar com o status do seu pedido. Para fazer o pedido basta enviar o códgio *1️⃣ - Iniciar Pedido* e siga as etapas, para verificar o status basta enviar a palavra pedido + código (ex: Pedido 0001)` + 
                                                                `\n\n /Pedido \n /Status`))


bot.hears(['/Pedido','Pedido', 'pedido', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#', 'Sim', 'sim', 'Ok', 'ok', 'ADD', 'add', 'Adicionar', 'adicionar' ], async (ctx) => {
    
    try {


        if (ctx.match == 'pedido' || ctx.match == 'Pedido' || ctx.match == '/Pedido') {

            //Limpa vaviável para gerar novo pedido
            passwd = 0    

            //Aqui gera o código do pedido
            const randomPasswd = len => {
            do{
            passwd += Math.random().toString(10).substr(2) 
            }while(passwd.length < len)
            passwd = passwd.substr(0, len)
            return passwd       
            }
            const pegPasswd = randomPasswd(4)
            salvaPedido = pegPasswd

            //Primeira etapa do pedido
            console.log( `Pedido criado #${salvaPedido}`)
            await ctx.reply(menu)

            //Obtém o chat_ID
            pegaChat = ctx.update.update_id
            console.log(pegaChat)

        } else  if (ctx.match == 1) {
            
            salvaNome = 'HAMBÚRGUER'
            salvaDescricao = 'pão, bife, milho e batata'
            valor = 8
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 2){

            salvaNome = 'X-BURGUER'
            salvaDescricao = 'pão, bife, queijo, alface, tomate, milho e batata palha'
            valor = 10
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 3){

            salvaNome = 'X-PRESUNTO'
            salvaDescricao = 'pão, bife, queijo, presunto, alface, tomate, milho e batata palha'
            valor = 11
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 4){

            salvaNome = 'X-EGG'
            salvaDescricao = 'pão, bife, queijo, ovo, alface, tomate, milho e batata palha'
            valor = 11
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 5){
            
            salvaNome = 'X-BACON'
            salvaDescricao = "pão, bife, queijo, bacon, alface, tomate, milho e batata palha"
            valor = 14
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 6){

            salvaNome = 'X-EGG PRESUNTO'
            salvaDescricao = 'pão, bife, queijo, ovo, presunto, alface, tomate, milho e batata palha'
            valor = 13,50
            await ctx.reply(Coberturaold)


        } else if (ctx.match == 7){

            salvaNome = 'X-EGG BACON'
            salvaDescricao = 'pão, bife, queijo, ovo, bacon, alface, tomate, milho e batata palha'
            valor = 14
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 8){

            salvaNome = 'X-TUDO'
            salvaDescricao = 'pão, bife, queijo, ovo, bacon, presunto, banana da terra, alface, tomate, milho e batata palha'
            valor = 15
            await ctx.reply(Coberturaold)
        
        } else if (ctx.match == 9){

            salvaNome = 'EXPLOSÃO DE SABORES'
            salvaDescricao = 'pão, bife, queijo, ovo, bacon, calabresa, cheddar, cebola caramelizada, alface, tomate, milho e batata palha'
            valor = 17
            await ctx.reply(Coberturaold)

        } else if (ctx.match == 'ADD' || ctx.match == 'add' || ctx.match == 'adicionar' || ctx.match == 'Adicionar'){
            console.log( `Pedido continua o mesmo número #${salvaPedido}`)
            await ctx.reply(menu)

        } else if (ctx.match == '*'){
            await ctx.reply( `Estamos finalizando o seu pedido, ok ?`)


        }  else if (ctx.match == 'Sim' || ctx.match == 'sim' || ctx.match == 'Ok' || ctx.match == 'ok' ) {

            //Chama função do banco  de dados
            salvaBanco()            


           //Imprime no Telegram
           await ctx.reply(` 
                    \n Pedido #${salvaPedido} 
                    \n Lanche: ${salvaNome}
                    \n Descrição: ${salvaDescricao}
                    \n Total: R$ ${valor}`)

           await ctx.reply( `Digite /Status para verificar a situação do pedido`)
  

 
         } else {
             await ctx.reply('Comando inválido')
         }

    } catch(error) {
        console.error(error)
    }

})


const salvaBanco = async () => {
    try {


            //Salva no banco de dados
            const body =
               {
                 "lanchePedido": `${salvaPedido}`,
                 "lancheNome": `${salvaNome}`,
                 "lancheDescricao": `${salvaDescricao}`,
                 "lancheValor": `${valor}`,
                 "lancheStatus": `${lancheStatus}`
               };
            
            const response = await fetch('http://localhost:8080/api/v1/pedido', {
                 method: 'post',
                 body: JSON.stringify(body),
                 headers: {'Content-Type': 'application/json'}
            });

            const data = await response.json();
            //const pegaId = data
            //console.log(pegaId);

        console.log(`Pedido #${passwd} salvo com sucesso no banco de dados`)

    } catch(error) {
        console.error(error)
    }
}


bot.hears(['/Status', 'Status', '/status', 'status' ], async (ctx) => {
    
    try {
 
        const response = await axios.get(`http://localhost:8080/api/v1/pedido/${passwd}`, { setTimeout: 3000 })
        var dados = response.data
        console.log(dados)

       let pegaStatus = dados[0].lancheStatus;
       console.log(pegaStatus);

       switch (pegaStatus){
           case 0:
            console.log('Pedido aguardando aprovação');
            await ctx.reply('Pedido aguardando aprovação')
            break;
           case 1:
             console.log('Pedido em produção');
             await ctx.reply('Pedido em produção')
             break;
           case 2:
             console.log('Saiu para entrega');
             await ctx.reply('Saiu para entrega')
             break;
           default: 
             console.log('Nenhuma movimentação no pedido')
             await ctx.reply('Nenhuma movimentação no pedido')
       }



    } catch(error) {
        console.error(error)
    }

})



const startBot = async () => {
    try {
        await bot.launch()
        console.log('SigmaBot iniciado com successo')
    } catch(error) {
        console.error(error)
    }
}


startBot()
