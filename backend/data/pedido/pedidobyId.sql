SELECT [lancheId]
    ,[lanchePedido]
    ,[lancheNome]
    ,[lancheDescricao]
    ,[lancheValor]
    ,[lancheStatus]
FROM [dbo].[PEDIDO]
WHERE [lanchePedido]=@lanchePedido