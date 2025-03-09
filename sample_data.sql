-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2025 at 05:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adminpanel`
--

-- --------------------------------------------------------

--
-- Table structure for table `sample_data`
--

CREATE TABLE `sample_data` (
  `Name` varchar(22) DEFAULT NULL,
  `University` varchar(42) DEFAULT NULL,
  `Category` varchar(11) DEFAULT NULL,
  `Total Runs` varchar(10) DEFAULT NULL,
  `Balls Faced` varchar(11) DEFAULT NULL,
  `Innings Played` varchar(14) DEFAULT NULL,
  `Wickets` varchar(7) DEFAULT NULL,
  `Overs Bowled` varchar(12) DEFAULT NULL,
  `Runs Conceded` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `sample_data`
--

INSERT INTO `sample_data` (`Name`, `University`, `Category`, `Total Runs`, `Balls Faced`, `Innings Played`, `Wickets`, `Overs Bowled`, `Runs Conceded`) VALUES
('Chamika Chandimal', 'University of the Visual & Performing Arts', 'Batsman', '530', '588', '10', '0', '3', '21'),
('Dimuth Dhananjaya', 'University of the Visual & Performing Arts', 'All-Rounder', '250', '208', '10', '8', '40', '240'),
('Avishka Mendis', 'Eastern University', 'All-Rounder', '210', '175', '7', '7', '35', '210'),
('Danushka Kumara', 'University of the Visual & Performing Arts', 'Batsman', '780', '866', '15', '0', '5', '35'),
('Praveen Vandersay', 'Eastern University', 'Batsman', '329', '365', '7', '0', '3', '24'),
('Niroshan Mathews', 'University of the Visual & Performing Arts', 'Batsman', '275', '305', '5', '0', '2', '18'),
('Chaturanga Gunathilaka', 'University of Moratuwa', 'Bowler', '132', '264', '11', '29', '88', '528'),
('Lahiru Rathnayake', 'University of Ruhuna', 'Batsman', '742', '824', '14', '0', '1', '8'),
('Jeewan Thirimanne', 'University of Jaffna', 'Batsman', '780', '866', '15', '0', '3', '24'),
('Kalana Samarawickrama', 'Eastern University', 'Batsman', '728', '808', '14', '0', '4', '32'),
('Lakshan Vandersay', 'University of the Visual & Performing Arts', 'All-Rounder', '405', '337', '15', '15', '75', '450'),
('Roshen Samarawickrama', 'University of Kelaniya', 'Bowler', '140', '280', '14', '46', '140', '560'),
('Sammu Sandakan', 'University of Ruhuna', 'Bowler', '120', '240', '10', '26', '80', '320'),
('Kalana Jayawardene', 'University of Jaffna', 'Bowler', '120', '240', '10', '33', '100', '400'),
('Binura Samarawickrama', 'University of the Visual & Performing Arts', 'Bowler', '77', '154', '7', '21', '63', '252'),
('Dasun Thirimanne', 'Eastern University', 'Bowler', '121', '242', '11', '29', '88', '440'),
('Angelo Samarawickrama', 'University of Kelaniya', 'Batsman', '424', '471', '8', '0', '1', '7'),
('Nuwan Jayawickrama', 'University of Ruhuna', 'Batsman', '300', '333', '6', '0', '3', '27'),
('Kusal Dhananjaya', 'South Eastern University', 'Batsman', '480', '533', '10', '0', '2', '16'),
('Chamika Bandara', 'Eastern University', 'Batsman', '270', '300', '5', '0', '5', '45'),
('Dilruwan Shanaka', 'University of Peradeniya', 'Batsman', '384', '426', '8', '0', '5', '45'),
('Danushka Jayawickrama', 'University of Peradeniya', 'All-Rounder', '350', '291', '14', '14', '70', '350'),
('Charith Shanaka', 'University of Colombo', 'Batsman', '477', '530', '9', '0', '3', '27'),
('Asela Nissanka', 'University of Sri Jayewardenepura', 'Batsman', '765', '850', '15', '0', '0', '1'),
('Wanindu Hasaranga', 'University of Colombo', 'Bowler', '120', '240', '10', '30', '90', '540'),
('Asela Vandersay', 'University of the Visual & Performing Arts', 'Bowler', '154', '308', '14', '37', '112', '448'),
('Pathum Fernando', 'University of Peradeniya', 'Batsman', '450', '500', '10', '0', '2', '18'),
('Angelo Kumara', 'Eastern University', 'Batsman', '330', '366', '6', '0', '1', '8'),
('Danushka Rajapaksa', 'University of Peradeniya', 'Batsman', '441', '490', '9', '0', '5', '35'),
('Suranga Shanaka', 'South Eastern University', 'Bowler', '55', '110', '5', '13', '40', '160'),
('Pathum Dhananjaya', 'Eastern University', 'Batsman', '360', '400', '8', '0', '1', '9'),
('Asela Asalanka', 'South Eastern University', 'Batsman', '550', '611', '11', '0', '0', '1'),
('Minod Rathnayake', 'University of Kelaniya', 'Bowler', '154', '308', '14', '37', '112', '448'),
('Binura Lakmal', 'University of Kelaniya', 'Batsman', '540', '600', '12', '0', '2', '16'),
('Praveen Asalanka', 'Eastern University', 'Batsman', '477', '530', '9', '0', '1', '7'),
('Angelo Jayawardene', 'University of Jaffna', 'Batsman', '468', '520', '9', '0', '3', '21'),
('Kamindu Asalanka', 'University of Moratuwa', 'Bowler', '135', '270', '15', '45', '135', '810'),
('Sadeera Rajapaksa', 'University of Jaffna', 'All-Rounder', '275', '229', '11', '8', '44', '264'),
('Sandakan Hasaranga', 'University of Kelaniya', 'Batsman', '795', '883', '15', '0', '1', '7'),
('Bhanuka Rajapaksa', 'University of Moratuwa', 'All-Rounder', '364', '303', '14', '11', '56', '336'),
('Chamika Rajapaksa', 'University of Ruhuna', 'Batsman', '450', '500', '9', '0', '1', '7'),
('Kamindu Lakmal', 'University of the Visual & Performing Arts', 'Batsman', '780', '866', '15', '0', '5', '35'),
('Lakshan Gunathilaka', 'University of Peradeniya', 'Bowler', '84', '168', '7', '21', '63', '315'),
('Tharindu Thirimanne', 'South Eastern University', 'Batsman', '611', '678', '13', '0', '2', '18'),
('Dinesh Samarawickrama', 'University of Jaffna', 'Batsman', '400', '444', '8', '0', '3', '27'),
('Suranga Sandakan', 'University of Moratuwa', 'Batsman', '235', '261', '5', '0', '4', '36'),
('Sandakan Dickwella', 'University of Jaffna', 'Batsman', '368', '408', '8', '0', '3', '27'),
('Sammu Rajapaksa', 'University of Ruhuna', 'Batsman', '240', '266', '5', '0', '2', '16'),
('Suranga Bandara', 'University of Moratuwa', 'Bowler', '154', '308', '14', '46', '140', '840'),
('Tharindu Embuldeniya', 'University of the Visual & Performing Arts', 'All-Rounder', '264', '220', '12', '12', '60', '360');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
