-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29/01/2025 às 18:05
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `zene`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `bandas`
--

CREATE TABLE `bandas` (
  `idBanda` int(11) NOT NULL,
  `nomeBanda` varchar(100) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `uf` varchar(50) DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `idSocial` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categorias`
--

CREATE TABLE `categorias` (
  `idCategoria` int(11) NOT NULL,
  `generoMusical` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categorias`
--

INSERT INTO `categorias` (`idCategoria`, `generoMusical`) VALUES
(1, 'Samba'),
(2, 'Sertanejo'),
(3, 'Rock');

-- --------------------------------------------------------

--
-- Estrutura para tabela `instrumentos`
--

CREATE TABLE `instrumentos` (
  `idInstrumento` int(11) NOT NULL,
  `nomeInstrumento` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `redesocial`
--

CREATE TABLE `redesocial` (
  `idSocial` int(11) NOT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `youtube` varchar(100) DEFAULT NULL,
  `tiktok` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `foto` varchar(300) DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `uf` varchar(50) DEFAULT NULL,
  `telefone` varchar(100) DEFAULT NULL,
  `idInstrumento` int(11) DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `idBanda` int(11) DEFAULT NULL,
  `idSocial` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `usuario`, `nome`, `foto`, `idade`, `descricao`, `email`, `senha`, `cidade`, `uf`, `telefone`, `idInstrumento`, `idCategoria`, `idBanda`, `idSocial`) VALUES
(1, 'pradis', 'Erick Prado', 'https://img.freepik.com/fotos-premium/retrato-de-avatar-de-desenho-animado-3d-de-artista-masculino_839035-198034.jpg?uid=P5833346&ga=GA1.1.609488637.1728646664&semt=ais_hybrid', 23, NULL, NULL, '$2y$10$v42j.20fhxlxdyMuOMZm0.hODDJXhD6dloL4tuh/aYl1/2eNhc.Ke', 'Limeira', 'São Paulo', NULL, NULL, NULL, NULL, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `bandas`
--
ALTER TABLE `bandas`
  ADD PRIMARY KEY (`idBanda`),
  ADD KEY `idCategoria` (`idCategoria`),
  ADD KEY `idSocial` (`idSocial`);

--
-- Índices de tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Índices de tabela `instrumentos`
--
ALTER TABLE `instrumentos`
  ADD PRIMARY KEY (`idInstrumento`);

--
-- Índices de tabela `redesocial`
--
ALTER TABLE `redesocial`
  ADD PRIMARY KEY (`idSocial`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `idBanda` (`idBanda`),
  ADD KEY `idCategoria` (`idCategoria`),
  ADD KEY `idInstrumento` (`idInstrumento`),
  ADD KEY `idSocial` (`idSocial`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `bandas`
--
ALTER TABLE `bandas`
  MODIFY `idBanda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `instrumentos`
--
ALTER TABLE `instrumentos`
  MODIFY `idInstrumento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `redesocial`
--
ALTER TABLE `redesocial`
  MODIFY `idSocial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `bandas`
--
ALTER TABLE `bandas`
  ADD CONSTRAINT `bandas_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`idCategoria`),
  ADD CONSTRAINT `bandas_ibfk_2` FOREIGN KEY (`idSocial`) REFERENCES `redesocial` (`idSocial`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idBanda`) REFERENCES `bandas` (`idBanda`),
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`idCategoria`),
  ADD CONSTRAINT `usuarios_ibfk_3` FOREIGN KEY (`idInstrumento`) REFERENCES `instrumentos` (`idInstrumento`),
  ADD CONSTRAINT `usuarios_ibfk_4` FOREIGN KEY (`idSocial`) REFERENCES `redesocial` (`idSocial`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
