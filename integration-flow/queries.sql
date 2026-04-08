SELECT 
    p.id AS pedido_id,
    p.cliente_id,
    c.nome AS cliente_nome,
    c.email,
    p.status,
    p.total,
    p.data_entrega,
    ip.produto_id,
    pr.nome AS produto_nome,
    ip.quantidade,
    ip.preco_unitario
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id
JOIN itens_pedido ip ON ip.pedido_id = p.id
JOIN produtos pr ON ip.produto_id = pr.id
WHERE p.status = 'confirmado';