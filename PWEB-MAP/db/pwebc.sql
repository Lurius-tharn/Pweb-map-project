-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 22 mars 2021 à 12:31
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pwebc`
--

-- --------------------------------------------------------

--
-- Structure de la table `country`
--

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id_country` int NOT NULL AUTO_INCREMENT,
  `country` varchar(125) NOT NULL,
  `timeMax` time NOT NULL,
  PRIMARY KEY (`id_country`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `country`
--

INSERT INTO `country` (`id_country`, `country`, `timeMax`) VALUES
(1, 'Auvergne-Rhône-Alpes', '00:00:30'),
(2, 'Bourgogne-Franche-Comté', '00:00:15'),
(3, 'Bretagne', '00:00:15'),
(4, 'Centre-Val de Loire', '00:00:15'),
(5, 'Corse', '00:00:15'),
(6, 'Grand Est', '00:00:15'),
(7, 'Hauts-de-France', '00:00:15'),
(8, 'Île-de-France', '00:00:15'),
(9, 'Normandie', '00:00:15'),
(10, 'Nouvelle-Aquitaine', '00:00:15'),
(11, 'Occitanie', '00:00:15'),
(12, 'Pays de la Loire', '00:00:15'),
(13, 'Provence-Alpes-Côte d\'Azur', '00:00:15');

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

DROP TABLE IF EXISTS `game`;
CREATE TABLE IF NOT EXISTS `game` (
  `id_game` int NOT NULL AUTO_INCREMENT,
  `player` int NOT NULL,
  `country` int NOT NULL,
  `scoreplayer` int NOT NULL,
  `code` varchar(6) NOT NULL,
  PRIMARY KEY (`id_game`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `id_player` int NOT NULL AUTO_INCREMENT,
  `login` varchar(30) NOT NULL,
  `password` int NOT NULL,
  PRIMARY KEY (`id_player`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
