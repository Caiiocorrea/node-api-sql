INSERT INTO [dbo].[PEDIDO]
    (
        [lanchePedido],
        [lancheNome],
        [lancheDescricao],
        [lancheValor],
        [lancheStatus]
    )
VALUES 
    (
        @lanchePedido,
        @lancheNome,
        @lancheDescricao,
        @lancheValor,
        @lancheStatus
    )

SELECT SCOPE_IDENTITY() AS lancheId
