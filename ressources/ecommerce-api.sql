-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 21 sep. 2023 à 17:00
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce-api`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `type` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `name`, `price`, `type`, `images`, `slug`, `type_id`) VALUES
(1, 'Carnet VIE - Carnet A5', 32, '', 'carnet-carnet-vie-carnet-a5-1.avif', 'carnet-vie-carnet-a5', 1),
(2, 'Notre sélection \"Automne TOMBOW\" - Feutres pinceaux', 21, '', 'feutres-notre-selection-automne-tombow-1_900x.webp,feutres-notre-selection-automne-tombow-2_900x.webp,feutres-notre-selection-automne-tombow-3_900x.webp', 'automne-tombow-feutres-pinceaux', 3),
(3, 'Notre sélection \"Eté TOMBOW\" - Feutres pinceaux', 21, '', 'feutres-notre-selection-ete-tombow-1.avif', 'notre-selection-ete-tombow-feutres-pinceaux', 3),
(4, 'Rentrée - Stickers', 4.25, '', 'sticker-rentree-1.avif,sticker-rentree-2.avif', 'sticker-rentree', 2),
(5, 'Illustrations mensuelles', 2.75, '', 'sticker-couvertures-mensuelles-la-visionnaire-1.avif,sticker-couvertures-mensuelles-la-visionnaire-2.avif', 'stickers-couvertures-mensuelles-la-visionnaire', 2),
(6, 'Fleurs bleues', 4.75, '', 'sticker-fleurs-bleues-stickers-1.avif,sticker-fleurs-bleues-stickers-2.avif', 'stickers-fleurs-bleues', 2);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230920075709', '2023-09-21 07:48:41', 10),
('DoctrineMigrations\\Version20230920080643', '2023-09-21 07:48:41', 9),
('DoctrineMigrations\\Version20230920081628', '2023-09-21 07:48:41', 71);

-- --------------------------------------------------------

--
-- Structure de la table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'carnets'),
(2, 'stickers'),
(3, 'feutres'),
(4, 'stylos'),
(5, 'enveloppes');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BFDD3168C54C8C93` (`type_id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `FK_BFDD3168C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
