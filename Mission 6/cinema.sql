-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 21 Octobre 2024 à 21:24
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cinema`
--
CREATE DATABASE IF NOT EXISTS `cinema` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cinema`;

-- --------------------------------------------------------

--
-- Structure de la table `acteur`
--

CREATE TABLE IF NOT EXISTS `acteur` (
  `Ident_Acteur` int(11) NOT NULL,
  `Nom` varchar(10) NOT NULL,
  `Prenom` varchar(10) NOT NULL,
  `Date_Naissance` date NOT NULL,
  `NB_Film` int(11) NOT NULL,
  PRIMARY KEY (`Ident_Acteur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `acteur`
--

INSERT INTO `acteur` (`Ident_Acteur`, `Nom`, `Prenom`, `Date_Naissance`, `NB_Film`) VALUES
(1, 'DURIS', 'ROMAIN', '1974-05-20', 60),
(2, 'EXARCHOPOU', 'ADELE', '1993-11-22', 23),
(3, 'BOURHINGER', 'RICHARD', '1942-06-16', 132),
(4, 'GALABRU', 'MICHEL', '1922-10-27', 277),
(5, 'PARILLAUD', 'ANNE', '1960-05-06', 35),
(6, 'FORD', 'HARRISON', '1942-06-13', 64),
(7, 'FISHER', 'CARRIE', '1956-10-21', 74),
(8, 'SALDANA', 'ZOE', '1978-06-19', 31),
(9, 'WEAVER', 'SIGOURNEY', '1949-10-08', 66),
(10, 'RENO', 'JEAN', '1948-06-30', 75);

-- --------------------------------------------------------

--
-- Structure de la table `casting`
--

CREATE TABLE IF NOT EXISTS `casting` (
  `Ident_Film` int(11) NOT NULL,
  `Ident_Acteur` int(11) NOT NULL,
  `Role` varchar(15) NOT NULL,
  `NB_Jour_Tournage` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `casting`
--

INSERT INTO `casting` (`Ident_Film`, `Ident_Acteur`, `Role`, `NB_Jour_Tournage`) VALUES
(1, 1, 'FRANCOISE', 100),
(1, 2, 'JULIA', 100),
(2, 5, 'NIKITA', 68),
(2, 10, 'VICTOR LE NETTO', 9),
(3, 6, 'HAN SOLO', 201),
(3, 7, 'PRINCESSE LEILA', 203),
(4, 8, 'NEYTIRI', 50),
(4, 9, 'Dr. GRACE AUGUS', 45);

-- --------------------------------------------------------

--
-- Structure de la table `distributeur`
--

CREATE TABLE IF NOT EXISTS `distributeur` (
  `Id_Distributeur` int(11) NOT NULL,
  `Libelle` varchar(25) NOT NULL,
  PRIMARY KEY (`Id_Distributeur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `distributeur`
--

INSERT INTO `distributeur` (`Id_Distributeur`, `Libelle`) VALUES
(1, 'GAUMONT'),
(2, '20th CENTURY FOX');

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `Ident_Film` int(11) NOT NULL,
  `Titre` varchar(10) NOT NULL,
  `Genre1` varchar(10) NOT NULL,
  `Genre2` varchar(10) DEFAULT NULL,
  `Date_Sortie` date NOT NULL,
  `Pays` int(11) NOT NULL,
  `Ident_Realisateur` int(11) NOT NULL,
  `Id_Distributeur` int(11) NOT NULL,
  `Duree` int(111) NOT NULL,
  PRIMARY KEY (`Ident_Film`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`Ident_Film`, `Titre`, `Genre1`, `Genre2`, `Date_Sortie`, `Pays`, `Ident_Realisateur`, `Id_Distributeur`, `Duree`) VALUES
(1, 'SUBWAY', 'POLICIER', 'DRAME', '1985-04-10', 1, 1, 1, 104),
(2, 'NIKITA', 'DRAME', 'ROMANTIQUE', '1990-02-21', 1, 2, 2, 118),
(3, 'STAR WARS ', 'ACTION', 'SF', '1983-10-19', 2, 2, 2, 133),
(4, 'AVATAR', 'ACTION ', 'SF', '2009-10-16', 2, 3, 2, 170);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `Ident_Pays` int(11) NOT NULL,
  `Libelle` varchar(20) NOT NULL,
  PRIMARY KEY (`Ident_Pays`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`Ident_Pays`, `Libelle`) VALUES
(1, 'FRANCE'),
(2, 'ETATS-UNIS');

-- --------------------------------------------------------

--
-- Structure de la table `realisateur`
--

CREATE TABLE IF NOT EXISTS `realisateur` (
  `Ident_Realisateur` int(11) NOT NULL,
  `Nom` varchar(10) NOT NULL,
  `Prenom` varchar(10) NOT NULL,
  `Date_Naissance` date NOT NULL,
  `NB_Film_Ecrit` int(11) NOT NULL,
  `NB_Film_Produit` int(11) NOT NULL,
  PRIMARY KEY (`Ident_Realisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `realisateur`
--

INSERT INTO `realisateur` (`Ident_Realisateur`, `Nom`, `Prenom`, `Date_Naissance`, `NB_Film_Ecrit`, `NB_Film_Produit`) VALUES
(1, 'BESSON', 'LUC', '1959-03-18', 40, 99),
(2, 'LUCAS', 'GEORGES', '1944-05-14', 79, 64),
(3, 'CAMERON', 'JALES', '1954-08-16', 22, 23);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
