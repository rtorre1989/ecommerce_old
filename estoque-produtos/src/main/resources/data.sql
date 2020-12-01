DROP TABLE IF EXISTS TB_ESTOQUE_PRODUTOS;

CREATE TABLE TB_ESTOQUE_PRODUTOS (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  descricao VARCHAR(250) NOT NULL,
  estoque INT NOT NULL,
  valor DECIMAL(10, 2)  DEFAULT NULL
);

INSERT INTO TB_ESTOQUE_PRODUTOS (descricao, estoque, valor) VALUES 
('Produto 1', 2, 100),
  ('Produto 2', 2, 250.99),
  ('Produto 3', 2, 1999.99),
  ('Produto 4', 2, 849.50);