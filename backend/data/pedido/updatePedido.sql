UPDATE [dbo].[PEDIDO]
SET [lanchePedido]=@lanchePedido,
    [lancheNome]=@lancheNome,
    [lancheDescricao]=@lancheDescricao,
    [lancheValor]=@lancheValor,
    [lancheStatus]=@lancheStatus
WHERE [lancheId]=@lancheId

SELECT [lancheId]
      ,[lanchePedido]
      ,[lancheNome]      
      ,[lancheDescricao]
      ,[lancheValor]
      ,[lancheStatus]
  FROM [dbo].[PEDIDO]
  WHERE [lancheId]=@lancheId