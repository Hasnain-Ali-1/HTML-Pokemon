-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2023 at 05:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemon`
--

-- --------------------------------------------------------

--
-- Table structure for table `moves`
--

CREATE TABLE `moves` (
  `Num` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Type` varchar(35) NOT NULL,
  `Category` varchar(35) NOT NULL,
  `Power` int(11) NOT NULL,
  `Accuracy` int(11) NOT NULL,
  `Effect` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `moves`
--

INSERT INTO `moves` (`Num`, `Name`, `Type`, `Category`, `Power`, `Accuracy`, `Effect`) VALUES
(2, 'Karate Chop', 'Fighting', 'Physical', 50, 100, 'Has a high critical hit ratio.'),
(5, 'Mega Punch', 'Normal', 'Physical', 80, 85, 'Deals damage with no additional effect.'),
(8, 'Ice Punch', 'Ice', 'Physical', 75, 100, 'Has a 10% chance to freeze the target.'),
(9, 'Thunder Punch', 'Electric', 'Physical', 75, 100, 'Has a 10% chance to paralyze the target.'),
(10, 'Scratch', 'Normal', 'Physical', 40, 100, 'Deals damage with no additional effect.'),
(16, 'Gust', 'Flying', 'Special', 40, 100, 'Deals damage with no additional effect.'),
(17, 'Wing Attack', 'Flying', 'Physical', 60, 100, 'Deals damage with no additional effect.'),
(19, 'Fly', 'Flying', 'Physical', 90, 95, 'On the first turn the user flies into the air becoming uncontrollable and evades most attacks. On the second turn the user attacks.'),
(22, 'Vine Whip', 'Grass', 'Physical', 45, 100, 'Deals damage with no additional effect.'),
(24, 'Double Kick', 'Fighting', 'Physical', 30, 100, 'Strikes twice;'),
(25, 'Mega Kick', 'Normal', 'Physical', 120, 75, 'Deals damage with no additional effect.'),
(33, 'Tackle', 'Normal', 'Physical', 40, 100, 'Deals damage with no additional effect.'),
(34, 'Body Slam', 'Normal', 'Physical', 85, 100, 'Has a 30% chance to paralyze the target.'),
(36, 'Take Down', 'Normal', 'Physical', 90, 85, 'The user receives 1/4 recoil damage.'),
(38, 'Double-Edge', 'Normal', 'Physical', 120, 100, 'The user receives 1/3 recoil damage.'),
(40, 'Poison Sting', 'Poison', 'Physical', 15, 100, 'Has a 30% chance to poison the target.'),
(41, 'Twineedle', 'Bug', 'Physical', 25, 100, 'Strikes twice. Has a 20% chance to poison the target .'),
(42, 'Pin Missile', 'Bug', 'Physical', 25, 95, 'Attacks 2-5 times in one turn.'),
(44, 'Bite', 'Dark', 'Physical', 60, 100, 'Has a 30% chance to make the target flinch.'),
(51, 'Acid', 'Poison', 'Special', 40, 100, 'Has a 10% chance to lower the targets Special Defense by 1 stage.'),
(52, 'Ember', 'Fire', 'Special', 40, 100, 'Has a 10% chance to burn the target.'),
(53, 'Flamethrower', 'Fire', 'Special', 90, 100, 'Has a 10% chance to burn the target.'),
(55, 'Water Gun', 'Water', 'Special', 40, 100, 'Deals damage with no additional effect.'),
(56, 'Hydro Pump', 'Water', 'Special', 110, 80, 'Deals damage with no additional effect.'),
(57, 'Surf', 'Water', 'Special', 90, 100, 'Deals damage with no additional effect.'),
(58, 'Ice Beam', 'Ice', 'Special', 90, 100, 'Has a 10% chance to freeze the target.'),
(59, 'Blizzard', 'Ice', 'Special', 110, 70, 'Has a 10% chance to freeze the target.'),
(60, 'Psybeam', 'Psychic', 'Special', 65, 100, 'Has a 10% chance to confuse the target.'),
(61, 'Bubble Beam', 'Water', 'Special', 65, 100, 'Has a 10% chance to lower the targets Speed by 1 stage.'),
(62, 'Aurora Beam', 'Ice', 'Special', 65, 100, 'Has a 10% chance to lower the targets Attack by 1 stage.'),
(63, 'Hyper Beam', 'Normal', 'Special', 150, 90, 'The user recharges during its next turn; as a result until the end of the next turn the user becomes uncontrollable.'),
(64, 'Peck', 'Flying', 'Physical', 35, 100, 'Deals damage with no additional effect.'),
(65, 'Drill Peck', 'Flying', 'Physical', 80, 100, 'Deals damage with no additional effect.'),
(66, 'Submission', 'Fighting', 'Physical', 80, 80, 'The user receives 1/4 recoil damage.'),
(70, 'Strength', 'Normal', 'Physical', 80, 100, 'Deals damage with no additional effect.'),
(71, 'Absorb', 'Grass', 'Special', 20, 100, 'Restores the users HP by 1/2 of the damage inflicted on the target.'),
(72, 'Mega Drain', 'Grass', 'Special', 40, 100, 'Restores the users HP by 1/2 of the damage inflicted on the target.'),
(75, 'Razor Leaf', 'Grass', 'Physical', 55, 95, 'Has a high critical hit ratio.'),
(76, 'Solar Beam', 'Grass', 'Special', 120, 100, 'The user prepares on turn one becoming uncontrollable and then attacks on turn two.'),
(82, 'Dragon Rage', 'Dragon', 'special', 0, 100, 'Always deals 40 points of damage.'),
(83, 'Fire Spin', 'Fire', 'Special', 35, 85, 'Traps the target for 5-6 turns causing damage equal to 1/16 of its max HP each turn.'),
(84, 'Thunder Shock', 'Electric', 'Special', 40, 100, 'Has a 10% chance to paralyze the target.'),
(85, 'Thunderbolt', 'Electric', 'Special', 90, 100, 'Has a 10% chance to paralyze the target.'),
(87, 'Thunder', 'Electric', 'Special', 110, 70, 'Has a 30% chance to paralyze the target.'),
(88, 'Rock Throw', 'Rock', 'Physical', 50, 90, 'Deals damage with no additional effect.'),
(89, 'Earthquake', 'Ground', 'Physical', 100, 100, 'Deals damage with no additional effect.'),
(91, 'Dig', 'Ground', 'Physical', 80, 100, 'On the first turn the user digs underground becoming uncontrollable and evades all attacks. On the second turn the user attacks.'),
(93, 'Confusion', 'Psychic', 'Special', 50, 100, 'Has a 10% chance to confuse the target.'),
(94, 'Psychic', 'Psychic', 'Special', 90, 100, 'Has a 10% chance to lower the targets Special Defense by 1 stage.'),
(98, 'Quick Attack', 'Normal', 'Physical', 40, 100, 'Usually goes first.'),
(101, 'Night Shade', 'Ghost', 'Special', 0, 100, 'Does damage equal to users level.'),
(122, 'Lick', 'Ghost', 'Physical', 30, 100, 'Has a 30% chance to paralyze the target.'),
(124, 'Sludge', 'Poison', 'Special', 65, 100, 'Has a 30% chance to poison the target.'),
(126, 'Fire Blast', 'Fire', 'Special', 110, 85, 'Has a 10% chance to burn the target.'),
(127, 'Waterfall', 'Water', 'Physical', 80, 100, 'Has a 20% chance to make the target flinch'),
(129, 'Swift', 'Normal', 'Special', 60, 101, 'Ignores Evasion and Accuracy modifiers and never misses.'),
(136, 'High Jump Kick', 'Fighting', 'Physical', 130, 90, 'If this attack misses the target the user half of its max health in recoil damage.'),
(138, 'Dream Eater', 'Psychic', 'Special', 100, 100, 'Restores the users HP by 1/2 of the damage inflicted on the target but only works on a sleeping target.'),
(141, 'Leech Life', 'Bug', 'Physical', 80, 100, 'Restores the users HP by 1/2 of the damage inflicted on the target.'),
(143, 'Sky Attack', 'Flying', 'Physical', 140, 90, 'The user prepares on turn one becoming uncontrollable and then attacks on turn two. Also has a 30% chance to make the target flinch.'),
(149, 'Psywave', 'Psychic', 'Special', 0, 100, 'Randomly inflicts set damage equal to 1.0x 1.1x 1.2x 1.3x 1.4x or 1.5x the users level.'),
(154, 'Fury Swipes', 'Normal', 'Physical', 18, 80, 'Attacks 2-5 times in one turn'),
(157, 'Rock Slide', 'Rock', 'Physical', 75, 90, 'Has a 30% chance to make the target flinch.'),
(163, 'Slash', 'Normal', 'Physical', 70, 100, 'Has a high critical hit ratio.'),
(188, 'Sludge Bomb', 'Poison', 'Special', 90, 100, 'Has a 30% chance to poison the target.'),
(247, 'Shadow Ball', 'Ghost', 'Special', 80, 100, 'Has a 20% chance to lower the targets Special Defense by 1 stage.'),
(28, 'Sand Attack', 'Ground', 'Status', 0, 100, 'Lowers the targets Accuracy by 1 stage.'),
(39, 'Tail Whip', 'Normal', 'Status', 0, 100, 'Lowers the targets Defense by 1 stage.'),
(43, 'Leer', 'Normal', 'Status', 0, 100, 'Lowers the targets Defense by 1 stage.'),
(45, 'Growl', 'Normal', 'Status', 0, 100, 'Lowers the targets Attack by 1 stage.'),
(46, 'Roar', 'Normal', 'Status', 0, 101, 'Escapes from wild battles.'),
(73, 'Leech Seed', 'Grass', 'Status', 0, 90, 'The user steals 1/8 of the targets max HP until the target is switched out'),
(78, 'Stun Spore', 'Grass', 'Status', 0, 75, 'Paralyzes the target.'),
(86, 'Thunder Wave', 'Electric', 'Status', 0, 90, 'Paralyzes the target.'),
(92, 'Toxic', 'Poison', 'Status', 0, 90, 'The target is badly poisoned with the damage caused by poison doubling after each turn.'),
(95, 'Hypnosis', 'Psychic', 'Status', 0, 60, 'Puts the target to sleep.'),
(97, 'Agility', 'Psychic', 'Status', 0, 101, 'Raises the users Speed by 2 stages.'),
(100, 'Teleport', 'Psychic', 'Status', 0, 101, 'Escapes from wild battles'),
(103, 'Screech', 'Normal', 'Status', 0, 85, 'Lowers the targets Defense by 2 stages.'),
(104, 'Double Team', 'Normal', 'Status', 0, 101, 'Raises the users Evasion by 1 stage.'),
(106, 'Harden', 'Normal', 'Status', 0, 101, 'Raises the users Defense by 1 stage.'),
(108, 'Smokescreen', 'Normal', 'Status', 0, 100, 'Lowers the targets Accuracy by 1 stage.'),
(109, 'Confuse Ray', 'Ghost', 'Status', 0, 100, 'Confuses the target.'),
(110, 'Withdraw', 'Water', 'Status', 0, 101, 'Raises the users Defense by 1 stage.'),
(111, 'Defense Curl', 'Normal', 'Status', 0, 101, 'Raises the users Defense by 1 stage'),
(112, 'Barrier', 'Psychic', 'Status', 0, 101, 'Raises the users Defense by 2 stages.'),
(114, 'Haze', 'Ice', 'Status', 0, 101, 'Eliminates any stat modifiers from all active Pokemon.'),
(115, 'Reflect', 'Psychic', 'Status', 0, 101, 'All Pokemon in the users party receive 1/2 damage from Physical attacks for 5 turns.'),
(116, 'Focus Energy', 'Normal', 'Status', 0, 101, 'Raises the users chance for a Critical Hit by two domains.');

-- --------------------------------------------------------

--
-- Table structure for table `moveset`
--

CREATE TABLE `moveset` (
  `Type` varchar(35) NOT NULL,
  `Stage` int(11) NOT NULL,
  `Move1` varchar(35) NOT NULL,
  `Move2` varchar(35) NOT NULL,
  `Move3` varchar(35) NOT NULL,
  `Bonus` varchar(35) NOT NULL,
  `Assist` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `moveset`
--

INSERT INTO `moveset` (`Type`, `Stage`, `Move1`, `Move2`, `Move3`, `Bonus`, `Assist`) VALUES
('bug', 1, 'tackle', 'fury swipes', '', '', 'harden'),
('bug', 2, 'pin missile', 'twineedle', '', 'scratch', 'harden'),
('bug', 3, 'leech life', 'mega drain', 'twinneedle', 'double-edge', 'harden'),
('dragon', 1, 'scratch', 'ember', '', '', 'leer'),
('dragon', 2, 'slash', 'dragon rage', '', 'flamethrower', 'leer'),
('dragon', 3, 'hyper beam', 'dragon rage', 'fire blast', 'thunderbolt', 'leer'),
('electric', 1, 'tackle', 'thunder shock', '', '', 'growl'),
('electric', 2, 'thunderbolt', 'swift', '', 'double-edge', 'thunder wave'),
('electric', 3, 'thunder', 'thunder punch', 'swift', 'body slam', 'thunder wave'),
('fighting', 1, 'tackle', 'karate chop', '', '', 'leer'),
('fighting', 2, 'double kick', 'submission', '', 'mega punch', 'focus energy'),
('fighting', 3, 'high jump kick', 'strength', 'mega kick', 'mega punch', 'focus energy'),
('fire', 1, 'ember', 'scratch', '', '', 'leer'),
('fire', 2, 'flamethrower', 'fire spin', '', 'bite', 'smokescreen'),
('fire', 3, 'fire blast', 'flamethrower', 'take down', 'double edge', 'smokescreen'),
('flying', 1, 'gust ', 'quick attack', '', '', 'growl'),
('flying', 2, 'wing attack', 'peck', '', 'bite', 'double team'),
('flying', 3, 'sky attack', 'fly', 'drill peck', 'take down', 'double team'),
('ghost', 1, 'lick', 'night shade', '', '', 'confuse ray'),
('ghost', 2, 'night shade', 'dream eater', '', 'psywave', 'hypnosis'),
('ghost', 3, 'shadow ball', 'dream eater', 'psychic', 'psywave', 'hypnosis'),
('grass', 1, 'absorb', 'vine whip', '', '', 'growl'),
('grass', 2, 'razor leaf', 'mega drain', '', 'body slam', 'leech seed'),
('grass', 3, 'solar beam', 'razor leaf', 'take down', 'sludge bomb', 'stun spore'),
('ground', 1, 'scratch', 'dig', '', '', 'growl'),
('ground', 2, 'dig', 'earthquakle', '', 'slash', 'sand attack'),
('ground', 3, 'earthquake', 'dig', 'rock slide', 'strength', 'sand attack'),
('ice', 1, 'tackle', 'bite', '', '', 'leer'),
('ice', 2, 'ice punch', 'aurora beam', '', 'body slam', 'haze'),
('ice', 3, 'ice beam', 'blizzard', 'take down', 'double edge', 'haze'),
('normal', 1, 'tackle', 'quick attack', '', '', 'tail whip'),
('normal', 2, 'body slam', 'double kick', '', 'mega punch', 'leer'),
('normal', 3, 'hyper beam', 'double edge', 'take down', 'strength', 'leer'),
('poison', 1, 'tackle', 'poison sting', '', '', 'leer'),
('poison', 2, 'sludge', 'acid', '', 'body slam', 'screech'),
('poison', 3, 'sludge bomb', 'acid', 'mega drain', 'bite', 'toxic'),
('psychic', 1, 'confusion', 'psywave', '', '', 'teleport'),
('psychic', 2, 'psybeam', 'psychic', '', 'shadow ball', 'barrier'),
('psychic', 3, 'psychic', 'psywave', 'dream eater', 'shadow ball', 'reflect'),
('rock', 1, 'tackle', 'rock throw', '', '', 'harden'),
('rock', 2, 'rock throw', 'rock slide', '', 'mega punch', 'defense curl'),
('rock', 3, 'rock slide', 'earthquake', 'take down', 'strength', 'harden'),
('water', 1, 'water gun', 'tackle', '', '', 'tail whip'),
('water', 2, 'bubblebeam', 'waterfall', '', 'bite', 'withdraw'),
('water', 3, 'hydro pump', 'surf', 'body slam', 'ice beam', 'withdraw');

-- --------------------------------------------------------

--
-- Table structure for table `pokemon`
--

CREATE TABLE `pokemon` (
  `Num` int(11) NOT NULL,
  `Name` varchar(35) NOT NULL,
  `Type1` varchar(35) NOT NULL,
  `Type2` varchar(35) NOT NULL,
  `Total` int(11) NOT NULL,
  `HP` int(11) NOT NULL,
  `Attack` int(11) NOT NULL,
  `Defense` int(11) NOT NULL,
  `Sp_Attack` int(11) NOT NULL,
  `Sp_Defense` int(11) NOT NULL,
  `Speed` int(11) NOT NULL,
  `Legendary` varchar(5) NOT NULL,
  `Stage` int(11) NOT NULL,
  `Max_Stage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pokemon`
--

INSERT INTO `pokemon` (`Num`, `Name`, `Type1`, `Type2`, `Total`, `HP`, `Attack`, `Defense`, `Sp_Attack`, `Sp_Defense`, `Speed`, `Legendary`, `Stage`, `Max_Stage`) VALUES
(1, 'Bulbasaur', 'Grass', 'Poison', 318, 45, 49, 49, 65, 65, 45, '1', 1, 3),
(2, 'Ivysaur', 'Grass', 'Poison', 405, 60, 62, 63, 80, 80, 60, '1', 2, 3),
(3, 'Venusaur', 'Grass', 'Poison', 525, 80, 82, 83, 100, 100, 80, '1', 3, 3),
(4, 'Charmander', 'Fire', '', 309, 39, 52, 43, 60, 50, 65, '1', 1, 3),
(5, 'Charmeleon', 'Fire', '', 405, 58, 64, 58, 80, 65, 80, '1', 2, 3),
(6, 'Charizard', 'Fire', 'Flying', 534, 78, 84, 78, 109, 85, 100, '1', 3, 3),
(7, 'Squirtle', 'Water', '', 314, 44, 48, 65, 50, 64, 43, '1', 1, 3),
(8, 'Wartortle', 'Water', '', 405, 59, 63, 80, 65, 80, 58, '1', 2, 3),
(9, 'Blastoise', 'Water', '', 530, 79, 83, 100, 85, 105, 78, '1', 3, 3),
(10, 'Caterpie', 'Bug', '', 195, 45, 30, 35, 20, 20, 45, '1', 1, 3),
(11, 'Metapod', 'Bug', '', 205, 50, 20, 55, 25, 25, 30, '1', 2, 3),
(12, 'Butterfree', 'Bug', 'Flying', 395, 60, 45, 50, 90, 80, 70, '1', 3, 3),
(13, 'Weedle', 'Bug', 'Poison', 195, 40, 35, 30, 20, 20, 50, '1', 1, 3),
(14, 'Kakuna', 'Bug', 'Poison', 205, 45, 25, 50, 25, 25, 35, '1', 2, 3),
(15, 'Beedrill', 'Bug', 'Poison', 395, 65, 90, 40, 45, 80, 75, '1', 3, 3),
(16, 'Pidgey', 'Normal', 'Flying', 251, 40, 45, 40, 35, 35, 56, '1', 1, 3),
(17, 'Pidgeotto', 'Normal', 'Flying', 349, 63, 60, 55, 50, 50, 71, '1', 2, 3),
(18, 'Pidgeot', 'Normal', 'Flying', 479, 83, 80, 75, 70, 70, 101, '1', 3, 3),
(19, 'Rattata', 'Normal', '', 253, 30, 56, 35, 25, 35, 72, '1', 1, 1),
(21, 'Spearow', 'Normal', 'Flying', 262, 40, 60, 30, 31, 31, 70, '1', 1, 2),
(22, 'Fearow', 'Normal', 'Flying', 442, 65, 90, 65, 61, 61, 100, '1', 2, 2),
(23, 'Ekans', 'Poison', '', 288, 35, 60, 44, 40, 54, 55, '1', 1, 2),
(24, 'Arbok', 'Poison', '', 438, 60, 85, 69, 65, 79, 80, '1', 2, 2),
(25, 'Pikachu', 'Electric', '', 320, 35, 55, 40, 50, 50, 90, '1', 1, 2),
(26, 'Raichu', 'Electric', '', 485, 60, 90, 55, 90, 80, 110, '1', 2, 2),
(27, 'Sandshrew', 'Ground', '', 300, 50, 75, 85, 20, 30, 40, '1', 1, 2),
(28, 'Sandslash', 'Ground', '', 450, 75, 100, 110, 45, 55, 65, '1', 2, 2),
(29, 'Nidorana', 'Poison', '', 275, 55, 47, 52, 40, 40, 41, '1', 1, 3),
(30, 'Nidorina', 'Poison', '', 365, 70, 62, 67, 55, 55, 56, '1', 2, 3),
(31, 'Nidoqueen', 'Poison', 'Ground', 505, 90, 92, 87, 75, 85, 76, '1', 3, 3),
(32, 'Nidorano‚', 'Poison', '', 273, 46, 57, 40, 40, 40, 50, '1', 1, 3),
(33, 'Nidorino', 'Poison', '', 365, 61, 72, 57, 55, 55, 65, '1', 2, 3),
(34, 'Nidoking', 'Poison', 'Ground', 505, 81, 102, 77, 85, 75, 85, '1', 3, 3),
(35, 'Clefairy', 'Fairy', '', 323, 70, 45, 48, 60, 65, 35, '1', 1, 2),
(36, 'Clefable', 'Fairy', '', 483, 95, 70, 73, 95, 90, 60, '1', 2, 2),
(37, 'Vulpix', 'Fire', '', 299, 38, 41, 40, 50, 65, 65, '1', 1, 2),
(38, 'Ninetales', 'Fire', '', 505, 73, 76, 75, 81, 100, 100, '1', 2, 2),
(39, 'Jigglypuff', 'Normal', 'Fairy', 270, 115, 45, 20, 45, 25, 20, '1', 1, 2),
(40, 'Wigglytuff', 'Normal', 'Fairy', 435, 140, 70, 45, 85, 50, 45, '1', 2, 2),
(41, 'Zubat', 'Poison', 'Flying', 245, 40, 45, 35, 30, 40, 55, '1', 1, 2),
(42, 'Golbat', 'Poison', 'Flying', 455, 75, 80, 70, 65, 75, 90, '1', 2, 2),
(43, 'Oddish', 'Grass', 'Poison', 320, 45, 50, 55, 75, 65, 30, '1', 1, 3),
(44, 'Gloom', 'Grass', 'Poison', 395, 60, 65, 70, 85, 75, 40, '1', 2, 3),
(45, 'Vileplume', 'Grass', 'Poison', 490, 75, 80, 85, 110, 90, 50, '1', 3, 3),
(46, 'Paras', 'Bug', 'Grass', 285, 35, 70, 55, 45, 55, 25, '1', 1, 2),
(47, 'Parasect', 'Bug', 'Grass', 405, 60, 95, 80, 60, 80, 30, '1', 2, 2),
(48, 'Venonat', 'Bug', 'Poison', 305, 60, 55, 50, 40, 55, 45, '1', 1, 2),
(49, 'Venomoth', 'Bug', 'Poison', 450, 70, 65, 60, 90, 75, 90, '1', 2, 2),
(50, 'Diglett', 'Ground', '', 265, 10, 55, 25, 35, 45, 95, '1', 1, 2),
(51, 'Dugtrio', 'Ground', '', 405, 35, 80, 50, 50, 70, 120, '1', 2, 2),
(52, 'Meowth', 'Normal', '', 290, 40, 45, 35, 40, 40, 90, '1', 1, 2),
(53, 'Persian', 'Normal', '', 440, 65, 70, 60, 65, 65, 115, '1', 2, 2),
(54, 'Psyduck', 'Water', '', 320, 50, 52, 48, 65, 50, 55, '1', 1, 2),
(55, 'Golduck', 'Water', '', 500, 80, 82, 78, 95, 80, 85, '1', 1, 2),
(56, 'Mankey', 'Fighting', '', 305, 40, 80, 35, 35, 45, 70, '1', 1, 2),
(57, 'Primeape', 'Fighting', '', 455, 65, 105, 60, 60, 70, 95, '1', 2, 2),
(58, 'Growlithe', 'Fire', '', 350, 55, 70, 45, 70, 50, 60, '1', 1, 2),
(59, 'Arcanine', 'Fire', '', 555, 90, 110, 80, 100, 80, 95, '1', 2, 2),
(60, 'Poliwag', 'Water', '', 300, 40, 50, 40, 40, 40, 90, '1', 1, 3),
(61, 'Poliwhirl', 'Water', '', 385, 65, 65, 65, 50, 50, 90, '1', 2, 3),
(62, 'Poliwrath', 'Water', 'Fighting', 510, 90, 95, 95, 70, 90, 70, '1', 3, 3),
(63, 'Abra', 'Psychic', '', 310, 25, 20, 15, 105, 55, 90, '1', 1, 3),
(64, 'Kadabra', 'Psychic', '', 400, 40, 35, 30, 120, 70, 105, '1', 2, 3),
(65, 'Alakazam', 'Psychic', '', 500, 55, 50, 45, 135, 95, 120, '1', 3, 3),
(66, 'Machop', 'Fighting', '', 305, 70, 80, 50, 35, 35, 35, '1', 1, 3),
(67, 'Machoke', 'Fighting', '', 405, 80, 100, 70, 50, 60, 45, '1', 2, 3),
(68, 'Machamp', 'Fighting', '', 505, 90, 130, 80, 65, 85, 55, '1', 3, 3),
(69, 'Bellsprout', 'Grass', 'Poison', 300, 50, 75, 35, 70, 30, 40, '1', 1, 3),
(70, 'Weepinbell', 'Grass', 'Poison', 390, 65, 90, 50, 85, 45, 55, '1', 2, 3),
(71, 'Victreebel', 'Grass', 'Poison', 490, 80, 105, 65, 100, 70, 70, '1', 3, 3),
(72, 'Tentacool', 'Water', 'Poison', 335, 40, 40, 35, 50, 100, 70, '1', 1, 2),
(73, 'Tentacruel', 'Water', 'Poison', 515, 80, 70, 65, 80, 120, 100, '1', 2, 2),
(74, 'Geodude', 'Rock', 'Ground', 300, 40, 80, 100, 30, 30, 20, '1', 1, 3),
(75, 'Graveler', 'Rock', 'Ground', 390, 55, 95, 115, 45, 45, 35, '1', 2, 3),
(76, 'Golem', 'Rock', 'Ground', 495, 80, 120, 130, 55, 65, 45, '1', 3, 3),
(77, 'Ponyta', 'Fire', '', 410, 50, 85, 55, 65, 65, 90, '1', 1, 2),
(78, 'Rapidash', 'Fire', '', 500, 65, 100, 70, 80, 80, 105, '1', 2, 2),
(79, 'Slowpoke', 'Water', 'Psychic', 315, 90, 65, 65, 40, 40, 15, '1', 1, 2),
(80, 'Slowbro', 'Water', 'Psychic', 490, 95, 75, 110, 100, 80, 30, '1', 2, 2),
(81, 'Magnemite', 'Electric', 'Steel', 325, 25, 35, 70, 95, 55, 45, '1', 1, 2),
(82, 'Magneton', 'Electric', 'Steel', 465, 50, 60, 95, 120, 70, 70, '1', 2, 2),
(83, 'Farfetchd', 'Normal', 'Flying', 352, 52, 65, 55, 58, 62, 60, '1', 1, 1),
(84, 'Doduo', 'Normal', 'Flying', 310, 35, 85, 45, 35, 35, 75, '1', 1, 2),
(85, 'Dodrio', 'Normal', 'Flying', 460, 60, 110, 70, 60, 60, 100, '1', 2, 2),
(86, 'Seel', 'Water', '', 325, 65, 45, 55, 45, 70, 45, '1', 1, 2),
(87, 'Dewgong', 'Water', 'Ice', 475, 90, 70, 80, 70, 95, 70, '1', 2, 2),
(88, 'Grimer', 'Poison', '', 325, 80, 80, 50, 40, 50, 25, '1', 1, 2),
(89, 'Muk', 'Poison', '', 500, 105, 105, 75, 65, 100, 50, '1', 2, 2),
(90, 'Shellder', 'Water', '', 305, 30, 65, 100, 45, 25, 40, '1', 1, 2),
(91, 'Cloyster', 'Water', 'Ice', 525, 50, 95, 180, 85, 45, 70, '1', 2, 2),
(92, 'Gastly', 'Ghost', 'Poison', 310, 30, 35, 30, 100, 35, 80, '1', 1, 3),
(93, 'Haunter', 'Ghost', 'Poison', 405, 45, 50, 45, 115, 55, 95, '1', 2, 3),
(94, 'Gengar', 'Ghost', 'Poison', 500, 60, 65, 60, 130, 75, 110, '1', 3, 3),
(95, 'Onix', 'Rock', 'Ground', 385, 35, 45, 160, 30, 45, 70, '1', 1, 1),
(96, 'Drowzee', 'Psychic', '', 328, 60, 48, 45, 43, 90, 42, '1', 1, 2),
(97, 'Hypno', 'Psychic', '', 483, 85, 73, 70, 73, 115, 67, '1', 2, 2),
(98, 'Krabby', 'Water', '', 325, 30, 105, 90, 25, 25, 50, '1', 1, 2),
(99, 'Kingler', 'Water', '', 475, 55, 130, 115, 50, 50, 75, '1', 2, 2),
(100, 'Voltorb', 'Electric', '', 330, 40, 30, 50, 55, 55, 100, '1', 1, 2),
(101, 'Electrode', 'Electric', '', 480, 60, 50, 70, 80, 80, 140, '1', 2, 2),
(102, 'Exeggcute', 'Grass', 'Psychic', 325, 60, 40, 80, 60, 45, 40, '1', 1, 2),
(103, 'Exeggutor', 'Grass', 'Psychic', 520, 95, 95, 85, 125, 65, 55, '1', 2, 2),
(104, 'Cubone', 'Ground', '', 320, 50, 50, 95, 40, 50, 35, '1', 1, 2),
(105, 'Marowak', 'Ground', '', 425, 60, 80, 110, 50, 80, 45, '1', 2, 2),
(106, 'Hitmonlee', 'Fighting', '', 455, 50, 120, 53, 35, 110, 87, '1', 2, 2),
(107, 'Hitmonchan', 'Fighting', '', 455, 50, 105, 79, 35, 110, 76, '1', 2, 2),
(108, 'Lickitung', 'Normal', '', 385, 90, 55, 75, 60, 75, 30, '1', 2, 2),
(109, 'Koffing', 'Poison', '', 340, 40, 65, 95, 60, 45, 35, '1', 1, 2),
(110, 'Weezing', 'Poison', '', 490, 65, 90, 120, 85, 70, 60, '1', 2, 2),
(111, 'Rhyhorn', 'Ground', 'Rock', 345, 80, 85, 95, 30, 30, 25, '1', 1, 2),
(112, 'Rhydon', 'Ground', 'Rock', 485, 105, 130, 120, 45, 45, 40, '1', 2, 2),
(113, 'Chansey', 'Normal', '', 450, 250, 5, 5, 35, 105, 50, '1', 2, 2),
(114, 'Tangela', 'Grass', '', 435, 65, 55, 115, 100, 40, 60, '1', 1, 1),
(115, 'Kangaskhan', 'Normal', '', 490, 105, 95, 80, 40, 80, 90, '1', 2, 2),
(116, 'Horsea', 'Water', '', 295, 30, 40, 70, 70, 25, 60, '1', 1, 2),
(117, 'Seadra', 'Water', '', 440, 55, 65, 95, 95, 45, 85, '1', 2, 2),
(118, 'Goldeen', 'Water', '', 320, 45, 67, 60, 35, 50, 63, '1', 1, 2),
(119, 'Seaking', 'Water', '', 450, 80, 92, 65, 65, 80, 68, '1', 2, 2),
(120, 'Staryu', 'Water', '', 340, 30, 45, 55, 70, 55, 85, '1', 1, 2),
(121, 'Starmie', 'Water', 'Psychic', 520, 60, 75, 85, 100, 85, 115, '1', 2, 2),
(122, 'MrMime', 'Psychic', 'Fairy', 460, 40, 45, 65, 100, 120, 90, '1', 1, 1),
(123, 'Scyther', 'Bug', 'Flying', 500, 70, 110, 80, 55, 80, 105, '1', 1, 1),
(124, 'Jynx', 'Ice', 'Psychic', 455, 65, 50, 35, 115, 95, 95, '1', 1, 1),
(125, 'Electabuzz', 'Electric', '', 490, 65, 83, 57, 95, 85, 105, '1', 2, 2),
(126, 'Magmar', 'Fire', '', 495, 65, 95, 57, 100, 85, 93, '1', 2, 2),
(127, 'Pinsir', 'Bug', '', 500, 65, 125, 100, 55, 70, 85, '1', 2, 2),
(128, 'Tauros', 'Normal', '', 490, 75, 100, 95, 40, 70, 110, '1', 2, 2),
(129, 'Magikarp', 'Water', '', 200, 20, 10, 55, 15, 20, 80, '1', 1, 2),
(130, 'Gyarados', 'Water', 'Flying', 540, 95, 125, 79, 60, 100, 81, '1', 2, 2),
(131, 'Lapras', 'Water', 'Ice', 535, 130, 85, 80, 85, 95, 60, '1', 3, 3),
(132, 'Ditto', 'Normal', '', 288, 48, 48, 48, 48, 48, 48, '1', 2, 2),
(133, 'Eevee', 'Normal', '', 325, 55, 55, 50, 45, 65, 55, '1', 1, 2),
(134, 'Vaporeon', 'Water', '', 525, 130, 65, 60, 110, 95, 65, '1', 2, 2),
(135, 'Jolteon', 'Electric', '', 525, 65, 65, 60, 110, 95, 130, '1', 2, 2),
(136, 'Flareon', 'Fire', '', 525, 65, 130, 60, 95, 110, 65, '1', 2, 2),
(137, 'Porygon', 'Normal', '', 395, 65, 60, 70, 85, 75, 40, '1', 1, 1),
(138, 'Omanyte', 'Rock', 'Water', 355, 35, 40, 100, 90, 55, 35, '1', 1, 2),
(139, 'Omastar', 'Rock', 'Water', 495, 70, 60, 125, 115, 70, 55, '1', 2, 2),
(140, 'Kabuto', 'Rock', 'Water', 355, 30, 80, 90, 55, 45, 55, '1', 1, 2),
(141, 'Kabutops', 'Rock', 'Water', 495, 60, 115, 105, 65, 70, 80, '1', 2, 2),
(142, 'Aerodactyl', 'Rock', 'Flying', 515, 80, 105, 65, 60, 75, 130, '1', 3, 3),
(143, 'Snorlax', 'Normal', '', 540, 160, 110, 65, 65, 110, 30, '1', 3, 3),
(144, 'Articuno', 'Ice', 'Flying', 580, 90, 85, 100, 95, 125, 85, '1', 3, 3),
(145, 'Zapdos', 'Electric', 'Flying', 580, 90, 90, 85, 125, 90, 100, '1', 3, 3),
(146, 'Moltres', 'Fire', 'Flying', 580, 90, 100, 90, 125, 85, 90, '1', 3, 3),
(147, 'Dratini', 'Dragon', '', 300, 41, 64, 45, 50, 50, 50, '1', 1, 3),
(148, 'Dragonair', 'Dragon', '', 420, 61, 84, 65, 70, 70, 70, '1', 2, 3),
(149, 'Dragonite', 'Dragon', 'Flying', 600, 91, 134, 95, 100, 100, 80, '1', 3, 3),
(150, 'Mewtwo', 'Psychic', '', 680, 106, 110, 90, 154, 90, 130, '1', 3, 3),
(151, 'Mew', 'Psychic', '', 600, 100, 100, 100, 100, 100, 100, '1', 3, 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
