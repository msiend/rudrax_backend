-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2025 at 08:46 AM
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
-- Database: `jagya_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch_auth`
--

CREATE TABLE `branch_auth` (
  `br_a_id` int(11) NOT NULL,
  `br_r_id` int(11) NOT NULL,
  `br_email` varchar(255) NOT NULL,
  `br_password` varchar(255) NOT NULL,
  `br_token` varchar(255) DEFAULT NULL,
  `br_isactive` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branch_auth`
--

INSERT INTO `branch_auth` (`br_a_id`, `br_r_id`, `br_email`, `br_password`, `br_token`, `br_isactive`) VALUES
(9, 0, 'branch@gmail.com', '$2a$12$D2n7UJoy3raYRO1KllXIquJpFdB.Wk7CFDRIg9Q57z9FjG0Fziynq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyYW5jaEBnbWFpbC5jb20iLCJpYXQiOjE3MzgwNDU4OTQsImV4cCI6MTczODQ3Nzg5NH0.ENMlU0oaKp1h636MPAUdGJOwu6iLyxVEvKoklIywSmI', 1);

-- --------------------------------------------------------

--
-- Table structure for table `branch_clients`
--

CREATE TABLE `branch_clients` (
  `b_client_id` bigint(20) NOT NULL,
  `b_r_id` int(11) NOT NULL,
  `b_client_name` varchar(200) DEFAULT NULL,
  `b_client_ref_no` varchar(200) NOT NULL,
  `b_client_contact` varchar(15) DEFAULT NULL,
  `b_client_alt_contact` varchar(15) DEFAULT NULL,
  `b_client_address` varchar(300) DEFAULT NULL,
  `b_client_email` varchar(80) DEFAULT NULL,
  `b_client_housetype` varchar(100) DEFAULT NULL,
  `b_client_rcctype` varchar(100) DEFAULT NULL,
  `b_client_totalcost` bigint(20) DEFAULT NULL,
  `b_client_advancepayment` int(11) DEFAULT NULL,
  `b_client_sitedesc` varchar(300) DEFAULT NULL,
  `b_client_duration` varchar(100) DEFAULT NULL,
  `b_client_commision` int(11) NOT NULL DEFAULT 1,
  `b_admin_approval` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branch_clients`
--

INSERT INTO `branch_clients` (`b_client_id`, `b_r_id`, `b_client_name`, `b_client_ref_no`, `b_client_contact`, `b_client_alt_contact`, `b_client_address`, `b_client_email`, `b_client_housetype`, `b_client_rcctype`, `b_client_totalcost`, `b_client_advancepayment`, `b_client_sitedesc`, `b_client_duration`, `b_client_commision`, `b_admin_approval`) VALUES
(5, 3, 'Acme Corporation', 'ACME-2023-0015', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1),
(8, 3, 'Acme Corporation', 'ACME-2023-00d15', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1),
(11, 3, 'Acme Corporation', 'ACME-2023-00d5', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1),
(13, 3, 'Acme Corporation', 'ACME-2023-005', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1),
(15, 3, 'Acme Corporation', 'ACME-2023-05', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1),
(18, 3, 'Acme Corporation=======', 'ACME-2023-5', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1),
(22, 3, 'Acme Corporation', 'ACME-20236', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com', 'Warehouse', 'Pre-engineered Steel', 500000, 150000, 'Large open area, flat terrain.', '6 months', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `branch_data`
--

CREATE TABLE `branch_data` (
  `b_id` int(11) NOT NULL,
  `b_name` varchar(200) DEFAULT NULL,
  `b_location` varchar(300) DEFAULT NULL,
  `b_head` varchar(100) DEFAULT NULL,
  `b_contact_number` varchar(15) DEFAULT NULL,
  `b_alt_number` varchar(15) DEFAULT NULL,
  `b_email` varchar(80) DEFAULT NULL,
  `b_commision` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branch_data`
--

INSERT INTO `branch_data` (`b_id`, `b_name`, `b_location`, `b_head`, `b_contact_number`, `b_alt_number`, `b_email`, `b_commision`) VALUES
(3, 'Sunrise Branch adsga', 'New York, NY', 'John Doe', '212-555-1234', '917-555-5678', 'sunrise@example.com', 0),
(4, 'Sunrise Branch 44', 'New York, NY', 'John Doe', '212-555-1234', '917-555-5678', 'sunrise@example.com', 0),
(5, 'Sunrise Branch 44', 'New York, NY', 'John Doe', '212-555-1234', '917-555-5678', 'sunrise@example.com', 0),
(6, 'Sunrise Branch 44', 'New York, NY', 'John Doe', '212-555-1234', '917-555-5678', 'sunrise@example.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `client_id` bigint(20) NOT NULL,
  `client_name` varchar(200) DEFAULT NULL,
  `client_ref_no` varchar(200) NOT NULL,
  `client_contact` varchar(15) DEFAULT NULL,
  `client_alt_contact` varchar(15) DEFAULT NULL,
  `client_address` varchar(300) DEFAULT NULL,
  `client_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`client_id`, `client_name`, `client_ref_no`, `client_contact`, `client_alt_contact`, `client_address`, `client_email`) VALUES
(35, 'Wave Industries pvt. ltd.', 'JGCC0001', '9401069337', '456789123', '456 Oak Ave, Anytown, CA 91235', 'contact@betaind.net'),
(36, 'Wave Industries pvt. ltd.', 'JGCC0002', '555-555-5555', NULL, '456 Oak Ave, Anytown, CA 91235', 'contact@betaind.net'),
(37, 'Wave Industries pvt. ltd.', 'JGCC0003', '555-555-5555', NULL, '456 Oak Ave, Anytown, CA 91235', 'contact@betaind.net'),
(38, 'Wave Industries pvt. ltd.', 'JGCC0004', '555-555-5555', NULL, 'Dibrugarh, assam', 'contact@betaind.net'),
(39, 'Wave Industries pvt. ltd.', 'JGCC0005', '88008095', NULL, 'Dibrugarh, assam', 'contact@betaind.net'),
(40, 'Wave Industries pvt. ltd.', 'JGCC0006', '88008095', NULL, 'Dibrugarh, assam', 'contact@betaind.net'),
(41, 'Wave Industries pvt. ltd.', 'JGCC0007', '88008095', '9401069337', 'Dibrugarh, assam', 'contact@betaind.net'),
(42, 'Mintu Sharma', 'JGCC0008', '9401069337', '9401069337', 'siwan', 'msi2gmail@gaf.com');

-- --------------------------------------------------------

--
-- Table structure for table `clients_docs`
--

CREATE TABLE `clients_docs` (
  `cl_doc_id` bigint(20) NOT NULL,
  `cl_r_id` bigint(20) NOT NULL,
  `cl_doc_url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients_docs`
--

INSERT INTO `clients_docs` (`cl_doc_id`, `cl_r_id`, `cl_doc_url`) VALUES
(8, 36, 'https://example.com/documents/report_12345.pdf'),
(9, 36, 'https://example.com/documents/report_12345.pdf'),
(11, 37, 'https://example.com/documents/report_12345.pdf'),
(12, 37, 'https://example.com/documents/report_12345.pdf'),
(13, 37, 'https://example.com/documents/report_12345.pdf'),
(14, 37, 'https://example.com/documents/report_12345.pdf'),
(15, 35, 'https://example.com/documents/report_12345.pdf'),
(16, 35, 'https://example.com/documents/report_12345.pdf'),
(17, 35, 'https://example.com/documents/report_12345.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `col_id` int(155) NOT NULL,
  `col_amount` varchar(55) DEFAULT NULL,
  `col_mode` varchar(55) DEFAULT NULL,
  `col_remark` varchar(255) DEFAULT NULL,
  `col_date` varchar(20) DEFAULT NULL,
  `col_project_id` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`col_id`, `col_amount`, `col_mode`, `col_remark`, `col_date`, `col_project_id`) VALUES
(2, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'JGCP0005'),
(3, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'JGCP0005'),
(4, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001'),
(5, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001'),
(6, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001'),
(7, '5000', 'upi', '', '2025-04-06', '35');

-- --------------------------------------------------------

--
-- Table structure for table `contractors`
--

CREATE TABLE `contractors` (
  `con_id` int(20) NOT NULL,
  `con_name` varchar(200) DEFAULT NULL,
  `con_contact` int(11) DEFAULT NULL,
  `con_alt_contact` int(11) DEFAULT NULL,
  `con_address` varchar(300) DEFAULT NULL,
  `con_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contractors`
--

INSERT INTO `contractors` (`con_id`, `con_name`, `con_contact`, `con_alt_contact`, `con_address`, `con_email`) VALUES
(1, 'Alice Johnson', 555, 555, '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com'),
(2, 'Alice Johnson', 2147483647, 2147483647, '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com'),
(5, 'Alice Johnson', 555, 555, '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `contractor_payments`
--

CREATE TABLE `contractor_payments` (
  `pay_id` int(20) NOT NULL,
  `pay_con_id` int(20) DEFAULT NULL,
  `pay_project_id` bigint(20) DEFAULT NULL,
  `pay_amount` varchar(50) DEFAULT NULL,
  `pay_mode` varchar(155) DEFAULT NULL,
  `pay_note` varchar(255) DEFAULT NULL,
  `pay_exp_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contractor_payments`
--

INSERT INTO `contractor_payments` (`pay_id`, `pay_con_id`, `pay_project_id`, `pay_amount`, `pay_mode`, `pay_note`, `pay_exp_id`) VALUES
(29, 1, 9, '78574', NULL, '2485', 20),
(30, 5, 9, '4574', NULL, '748574', 20),
(31, 2, 9, '4574', NULL, '748574', 20),
(32, 1, 9, '78574', NULL, '2485', 21),
(33, 2, 9, '4574', NULL, '748574', 21),
(34, 5, 9, '4574', NULL, '748574', 21),
(35, 5, 9, '4574', 'UPI', '748574', 23),
(36, 1, 9, '78574', 'UPI', '2485', 23),
(37, 2, 9, '4574', 'UPI', '748574', 23);

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `exp_id` int(155) NOT NULL,
  `exp_name` varchar(255) DEFAULT NULL,
  `exp_amount` varchar(55) DEFAULT NULL,
  `exp_mode` varchar(55) DEFAULT NULL,
  `exp_remark` varchar(255) DEFAULT NULL,
  `exp_date` varchar(11) DEFAULT NULL,
  `exp_category` varchar(155) DEFAULT NULL,
  `exp_project_ref` varchar(155) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`exp_id`, `exp_name`, `exp_amount`, `exp_mode`, `exp_remark`, `exp_date`, `exp_category`, `exp_project_ref`, `created_at`) VALUES
(2, 'Material Purchase', '2500', 'Credit Card', 'Purchase of cement and bricks', '2023-10-26', 'Construction Materials', 'JGCP0005', '2025-03-24 11:54:40'),
(3, 'Material Purchase', '2500', 'Credit Card', 'Purchase of cement and bricks', '2023-10-26', 'Construction Materials', 'JGCP0005', '2025-03-24 11:54:40'),
(4, 'Material Purchase', '2500', 'Credit Card', 'Purchase of cement and bricks', '2023-10-26', 'Construction Materials', 'JGCP0005', '2025-03-24 11:54:40'),
(5, 'Material Purchase', '2500', 'Credit Card', 'Purchase of cement and bricks', '2023-10-26', 'Construction Materials', 'PRJ1001', '2025-03-24 11:54:40'),
(6, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:31:50'),
(7, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:33:24'),
(8, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:35:02'),
(9, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:37:59'),
(10, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:38:41'),
(11, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:41:36'),
(12, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:42:03'),
(13, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:42:04'),
(14, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 13:44:03'),
(15, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 14:54:47'),
(16, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-03-29 14:56:15'),
(17, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-04-03 04:56:02'),
(18, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-04-03 05:08:18'),
(19, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-04-03 05:08:35'),
(20, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-04-03 05:09:19'),
(21, 'name sd', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-04-03 05:19:37'),
(22, 'new dhoni expense', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-05-08 05:02:51'),
(23, 'new dhoni expense', '63452', 'UPI', 'dfdrvds', '2025-03-16', 'Project', NULL, '2025-05-08 05:04:00');

-- --------------------------------------------------------

--
-- Table structure for table `expense_item`
--

CREATE TABLE `expense_item` (
  `exp_item_id` int(20) NOT NULL,
  `exp_item_name` varchar(255) DEFAULT NULL,
  `exp_item_quantity` varchar(255) DEFAULT NULL,
  `exp_item_rate` varchar(255) DEFAULT NULL,
  `exp_ref_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expense_item`
--

INSERT INTO `expense_item` (`exp_item_id`, `exp_item_name`, `exp_item_quantity`, `exp_item_rate`, `exp_ref_id`) VALUES
(2, 'Cement Bags', '100', '10.5', 2),
(3, 'Cement Bags', '100', '10.5', 2),
(4, 'Cement Bags', '100', '10.5', 2);

-- --------------------------------------------------------

--
-- Table structure for table `finance_dep`
--

CREATE TABLE `finance_dep` (
  `fd_id` int(11) NOT NULL,
  `fd_name` varchar(100) NOT NULL,
  `fd_contact` varchar(13) NOT NULL,
  `fd_alt_contact` varchar(13) DEFAULT NULL,
  `fd_address` varchar(300) DEFAULT NULL,
  `fd_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `finance_dep_auth`
--

CREATE TABLE `finance_dep_auth` (
  `fd_a_id` int(11) NOT NULL,
  `fd_r_id` int(11) NOT NULL,
  `fd_email` varchar(100) DEFAULT NULL,
  `fd_password` varchar(255) NOT NULL,
  `fd_token` varchar(455) NOT NULL,
  `fd_isactive` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` bigint(20) NOT NULL,
  `invoice_no` varchar(50) DEFAULT NULL,
  `invoice_date` varchar(20) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `amount` varchar(50) DEFAULT NULL,
  `gst_rate` varchar(50) DEFAULT NULL,
  `discount` varchar(50) DEFAULT NULL,
  `total` varchar(50) DEFAULT NULL,
  `client_contact` varchar(50) DEFAULT NULL,
  `client_address` varchar(50) DEFAULT NULL,
  `client_id` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_items`
--

CREATE TABLE `invoice_items` (
  `invoice_item_id` bigint(20) NOT NULL,
  `inv_item_name` varchar(155) DEFAULT NULL,
  `inv_item_quantity` varchar(50) DEFAULT NULL,
  `inv_item_rate` varchar(50) DEFAULT NULL,
  `inv_item_amount` varchar(50) DEFAULT NULL,
  `invoice_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `labours`
--

CREATE TABLE `labours` (
  `lab_id` int(20) NOT NULL,
  `lab_name` varchar(200) DEFAULT NULL,
  `lab_contact` int(11) DEFAULT NULL,
  `lab_alt_contact` int(11) DEFAULT NULL,
  `lab_address` varchar(300) DEFAULT NULL,
  `lab_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labours`
--

INSERT INTO `labours` (`lab_id`, `lab_name`, `lab_contact`, `lab_alt_contact`, `lab_address`, `lab_email`) VALUES
(1, 'Quantum Diagnosasdasdftics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(3, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(4, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(5, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(6, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(7, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(8, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(9, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com'),
(10, 'Quantum Diagnostics Lab', 1, 1, '123 Innovation Drive, Anytown, CA 91234, USA', 'info@quantumdiagnosticslab.com');

-- --------------------------------------------------------

--
-- Table structure for table `material_item_list`
--

CREATE TABLE `material_item_list` (
  `mr_item_id` bigint(20) NOT NULL,
  `mr_r_id` bigint(20) DEFAULT NULL,
  `mr_project_r_id` bigint(20) NOT NULL,
  `mr_item_name` varchar(255) DEFAULT NULL,
  `mr_item_quantity` varchar(55) DEFAULT NULL,
  `mr_item_amount` varchar(55) DEFAULT NULL,
  `mr_item_date` varchar(20) DEFAULT NULL,
  `md_approval` tinyint(1) DEFAULT 0,
  `fd_approval` tinyint(1) DEFAULT 0,
  `vendor_id` int(155) DEFAULT NULL,
  `mr_delivery_status` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `material_item_list`
--

INSERT INTO `material_item_list` (`mr_item_id`, `mr_r_id`, `mr_project_r_id`, `mr_item_name`, `mr_item_quantity`, `mr_item_amount`, `mr_item_date`, `md_approval`, `fd_approval`, `vendor_id`, `mr_delivery_status`) VALUES
(15, 9, 9, 'Cement', '20', '2000', '2025-04-03', 0, 0, 9, 0),
(16, 9, 9, 'Sand', '50', '1500', '2025-04-03', 0, 0, 9, 0),
(17, 9, 10, 'Cement', '20', '2000', '2025-04-03', 0, 0, 9, 0),
(18, 9, 10, 'Sand', '50', '1500', '2025-04-03', 0, 0, 9, 0),
(19, 9, 11, 'Cement', '20', '2000', '2025-04-03', 0, 0, 9, 0),
(20, 9, 11, 'Sand', '50', '1500', '2025-04-03', 0, 0, 9, 0),
(21, 9, 12, 'Cement', '20', '2000', '2025-04-03', 0, 0, 9, 0),
(22, 9, 12, 'Sand', '50', '1500', '2025-04-03', 0, 0, 9, 0);

-- --------------------------------------------------------

--
-- Table structure for table `material_requests`
--

CREATE TABLE `material_requests` (
  `mr_r_id` bigint(20) NOT NULL,
  `material_ref_no` varchar(55) DEFAULT NULL,
  `mr_project_id` bigint(20) DEFAULT NULL,
  `mr_phase` varchar(155) DEFAULT NULL,
  `mr_date` varchar(55) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `material_requests`
--

INSERT INTO `material_requests` (`mr_r_id`, `material_ref_no`, `mr_project_id`, `mr_phase`, `mr_date`, `created_at`) VALUES
(1, 'JGCMRQ0001', 12, 'installment', '<date>', '2025-04-05 13:13:06'),
(9, NULL, 9, 'Phase 1', '2025-04-03', '2025-04-06 13:42:03'),
(10, 'JGCMRQ0001', 9, 'Phase 1', '2025-04-03', '2025-04-06 13:48:40'),
(11, 'JGCMRQ0002', 9, 'Phase 1', '2025-04-03', '2025-04-06 13:49:59'),
(12, 'JGCMRQ0003', 9, 'Phase 1', '2025-04-03', '2025-04-08 02:04:00');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `type` enum('info','warning','error','success','system') NOT NULL DEFAULT 'info',
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `expires_at` timestamp NULL DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification_recipients`
--

CREATE TABLE `notification_recipients` (
  `id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `read_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `particles`
--

CREATE TABLE `particles` (
  `particle_id` int(20) NOT NULL,
  `particle_name` varchar(200) DEFAULT NULL,
  `particle_price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `particles`
--

INSERT INTO `particles` (`particle_id`, `particle_name`, `particle_price`) VALUES
(5, 'particles_name1', '2000'),
(6, 'particles_name1', '2000'),
(7, 'particles_name1', '2000');

-- --------------------------------------------------------

--
-- Table structure for table `phases`
--

CREATE TABLE `phases` (
  `phase_id` int(11) NOT NULL,
  `phase_name` varchar(100) DEFAULT NULL,
  `phase_alt_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phases`
--

INSERT INTO `phases` (`phase_id`, `phase_name`, `phase_alt_name`) VALUES
(2, 'Phase 2', 'sub_phase_ascmigv'),
(3, 'Phase 33', 'phase_alt_name 1'),
(4, 'Phase 44', 'phase_alt_name 1'),
(5, 'Phase 44', 'phase_alt_name 1'),
(6, 'Phase 44', 'phase_alt_name 1'),
(7, 'Phase 44', 'phase_alt_name 1'),
(8, 'Phase 44', 'phase_alt_name 1'),
(9, 'Phase 44', 'phase_alt_name 1');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `pro_id` bigint(20) NOT NULL,
  `pro_client_r_id` bigint(20) NOT NULL,
  `pro_name` varchar(200) DEFAULT NULL,
  `pro_ref_no` varchar(200) NOT NULL,
  `pro_housetype` varchar(100) DEFAULT NULL,
  `pro_rcctype` varchar(100) DEFAULT NULL,
  `pro_sitedesc` varchar(300) DEFAULT NULL,
  `pro_duration` varchar(100) DEFAULT NULL,
  `pro_totalcost` bigint(20) DEFAULT NULL,
  `pro_advancepayment` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`pro_id`, `pro_client_r_id`, `pro_name`, `pro_ref_no`, `pro_housetype`, `pro_rcctype`, `pro_sitedesc`, `pro_duration`, `pro_totalcost`, `pro_advancepayment`, `created_at`) VALUES
(9, 35, 'Lakeview Resort', 'JGCP0002', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(10, 35, 'Lakeview Resort', 'JGCP0003', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(11, 35, 'Lakeview Resort', 'JGCP0004', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(12, 35, 'Lakeview Resort', 'JGCP0005', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(13, 35, 'Lakeview Resort', 'JGCP0006', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(14, 35, 'Lakeview Resort', 'JGCP0007', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(15, 35, 'Lakeview Resort', 'JGCP0008', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(16, 35, 'Lakeview Resort', 'JGCP0009', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(17, 35, 'Lakeview Resort', 'JGCP00010', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56'),
(18, 35, 'Lakeview Resort', 'JGCP00011', 'Bungalow Resort', 'Timber and Stone', 'Scenic lakefront, hilly terrain.', '15 months', 1800000, 540000, '2025-04-05 13:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `project_contractor`
--

CREATE TABLE `project_contractor` (
  `pro_con_id` bigint(20) NOT NULL,
  `pro_id` bigint(20) NOT NULL,
  `con_id` int(20) DEFAULT NULL,
  `pro_phase` varchar(255) DEFAULT NULL,
  `pro_sub_phase` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_contractor`
--

INSERT INTO `project_contractor` (`pro_con_id`, `pro_id`, `con_id`, `pro_phase`, `pro_sub_phase`) VALUES
(2, 9, 5, 'Phase 1', 'Subphase A');

-- --------------------------------------------------------

--
-- Table structure for table `project_phase`
--

CREATE TABLE `project_phase` (
  `pro_phase_id` int(20) NOT NULL,
  `phase_id` int(155) NOT NULL,
  `pro_id` bigint(20) NOT NULL,
  `pro_phase_status` varchar(255) NOT NULL,
  `pro_phase_deadline` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_subphase`
--

CREATE TABLE `project_subphase` (
  `pro_subphase_id` int(20) NOT NULL,
  `pro_id` bigint(20) NOT NULL,
  `pro_phase` int(20) DEFAULT NULL,
  `pro_subphase` varchar(255) DEFAULT NULL,
  `deadline` varchar(155) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sub_phases`
--

CREATE TABLE `sub_phases` (
  `sub_phase_id` int(11) NOT NULL,
  `sub_phase_name` varchar(100) DEFAULT NULL,
  `sub_phase_alt_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_phases`
--

INSERT INTO `sub_phases` (`sub_phase_id`, `sub_phase_name`, `sub_phase_alt_name`) VALUES
(2, 'Phase 2', 'sub_phase_alt_name 1kldrjkgscmigv'),
(3, 'Phase 1', 'sub_phase_alt_name 1'),
(4, 'Phase 1', 'sub_phase_alt_name 1'),
(5, 'Phase 1', 'sub_phase_alt_name 1'),
(6, 'Phase 1', 'sub_phase_alt_name 1'),
(7, 'Phase 1', 'sub_phase_alt_name 1'),
(8, 'Phase 1', 'sub_phase_alt_name 1'),
(9, 'Phase 1', 'sub_phase_alt_name 1'),
(10, 'Phase 1', 'sub_phase_alt_name 1'),
(11, 'Phase 1', 'sub_phase_alt_name 1'),
(12, 'Phase 1', 'sub_phase_alt_name 1'),
(13, 'Phase 1', 'sub_phase_alt_name 1'),
(14, 'Phase 1', 'sub_phase_alt_name 1');

-- --------------------------------------------------------

--
-- Table structure for table `superviser`
--

CREATE TABLE `superviser` (
  `sup_id` int(11) NOT NULL,
  `sup_name` varchar(100) NOT NULL,
  `sup_contact` varchar(13) NOT NULL,
  `sup_alt_contact` varchar(13) DEFAULT NULL,
  `sup_address` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `superviser`
--

INSERT INTO `superviser` (`sup_id`, `sup_name`, `sup_contact`, `sup_alt_contact`, `sup_address`) VALUES
(1, 'Acme Supplies', '9401069337', '789456123', '123 Main St, Anytown, CA 91234'),
(3, 'Supervise Supplies', '555-123-4567', '555-987-6543', '123 Main St, Anytown, CA 91234'),
(4, 'Supervise Supplies', '555-123-4567', '555-987-6543', '123 Main St, Anytown, CA 91234'),
(5, 'Supervise Supplies', '555-123-4567', '555-987-6543', '123 Main St, Anytown, CA 91234'),
(6, 'Supervise Supplies', '555-123-4567', '555-987-6543', '123 Main St, Anytown, CA 91234'),
(7, 'Supervise Supplies', '555-123-4567', '555-987-6543', '123 Main St, Anytown, CA 91234');

-- --------------------------------------------------------

--
-- Table structure for table `superviser_auth`
--

CREATE TABLE `superviser_auth` (
  `sup_a_id` int(11) NOT NULL,
  `sup_r_id` int(11) NOT NULL,
  `sup_email` varchar(100) NOT NULL,
  `sup_password` varchar(300) NOT NULL,
  `sup_token` varchar(300) DEFAULT NULL,
  `sup_isactive` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `super_admin`
--

CREATE TABLE `super_admin` (
  `su_id` int(11) NOT NULL,
  `su_name` varchar(200) DEFAULT NULL,
  `su_contact` varchar(15) DEFAULT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `super_admin`
--

INSERT INTO `super_admin` (`su_id`, `su_name`, `su_contact`, `role`) VALUES
(1, 'adfgag', '1234567890', ''),
(2, 'adfgag', '1234567890', ''),
(3, 'adfgag', '1234567890', ''),
(4, 'adfgag', '1234567890', ''),
(5, 'adfgag', '1234567890', ''),
(6, 'msi', '9401069337', ''),
(7, 'John Doe', '9401069337', '');

-- --------------------------------------------------------

--
-- Table structure for table `super_admin_auth`
--

CREATE TABLE `super_admin_auth` (
  `su_a_id` int(11) NOT NULL,
  `su_r_id` int(11) NOT NULL,
  `su_email` varchar(80) DEFAULT NULL,
  `su_password` varchar(300) DEFAULT NULL,
  `su_token` varchar(400) DEFAULT NULL,
  `su_isactive` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `super_admin_auth`
--

INSERT INTO `super_admin_auth` (`su_a_id`, `su_r_id`, `su_email`, `su_password`, `su_token`, `su_isactive`) VALUES
(1, 1, 'sfda@gmail.com', '$2a$12$CMNSRlFCilZUBlgeOiuMkuewwXTnRzcNCOmaorIfxTo41as69zMVC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNmZGFAZ21haWwuY29tIiwiaWF0IjoxNzM3NjIxNDY0LCJleHAiOjE3Mzc3MDc4NjR9.3DqWry9epcTCUAw17A9jkdiBImxlNNzBuEornarCoxQ', 1),
(2, 2, 'sfda@gmail.com', '$2a$12$ckCeQQmsViJAvS6L9TgPNuLhDfAo8nFCD8./CQwD0tsLNBiKXTd5i', NULL, 1),
(3, 3, 'sfda@gmail.com', '$2a$12$kv3o7F4EMI0nj1oh5FO6JuPsHghXDwX0c.UAtfmzpcDvwd04sxQoW', NULL, 1),
(4, 4, 'sfda@gmail.com', '$2a$12$jCZl/FMBqLy8ggzFHYeY9.0pdp0V/ecy5/tXAL0HvSioNU.HaLBsq', NULL, 1),
(5, 5, 'sfda@gmail.com', '$2a$12$REz.HimjxYfVrJMPnbnocefihiivRrQ8LglHM9BuMHi145xjGr02K', NULL, 1),
(6, 6, 'msi@gmail.com', '$2a$12$3NY/M1vJrbatxBOChxcqC.hRqCJ8VpfWC8QJEjn.EGuf.7k3Y6e4a', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1zaUBnbWFpbC5jb20iLCJpYXQiOjE3NDI4MDc1NjgsImV4cCI6MTc0Mjg5Mzk2OH0.etT7wWo0AeRqoCfh9yaBBiWgDbBzKq3uA3nIFhLv6mQ', 1),
(7, 7, 'john@example.com', '$2a$12$s3bW3zvCUEsqoduKYezsRO8TVGfmIYmicLwju.nqBoHyGRpJ3WVhW', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `vendor_id` int(20) NOT NULL,
  `vendor_ref_no` varchar(155) DEFAULT NULL,
  `vendor_name` varchar(200) DEFAULT NULL,
  `vendor_contact` int(11) DEFAULT NULL,
  `vendor_alt_contact` int(11) DEFAULT NULL,
  `vendor_address` varchar(300) DEFAULT NULL,
  `vendor_email` varchar(80) DEFAULT NULL,
  `vendor_status` varchar(80) DEFAULT 'open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`vendor_id`, `vendor_ref_no`, `vendor_name`, `vendor_contact`, `vendor_alt_contact`, `vendor_address`, `vendor_email`, `vendor_status`) VALUES
(9, NULL, 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(10, NULL, 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(11, NULL, 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(12, NULL, 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(13, NULL, 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(14, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(15, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(16, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(17, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(18, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(19, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(20, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(21, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(22, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(23, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(24, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(25, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(26, 'JGCV0001', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(27, 'JGCV0002', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(28, 'JGCV0003', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(29, 'JGCV0004', NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'JGCV0005', NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'JGCV0006', 'ABC Supplies', 2147483647, 1234567890, '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_payments`
--

CREATE TABLE `vendor_payments` (
  `pay_id` int(20) NOT NULL,
  `pay_vendor_id` int(20) DEFAULT NULL,
  `pay_project_id` bigint(20) DEFAULT NULL,
  `pay_amount` varchar(50) DEFAULT NULL,
  `pay_mode` varchar(155) DEFAULT NULL,
  `pay_note` varchar(255) DEFAULT NULL,
  `pay_exp_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_payments`
--

INSERT INTO `vendor_payments` (`pay_id`, `pay_vendor_id`, `pay_project_id`, `pay_amount`, `pay_mode`, `pay_note`, `pay_exp_id`) VALUES
(25, 12, 11, '4574', NULL, '748574', 20),
(26, 13, 11, '4574', NULL, '748574', 20),
(27, 14, 11, '4574', NULL, '748574', 20),
(28, 13, 11, '4574', NULL, '748574', 21),
(29, 12, 11, '4574', NULL, '748574', 21),
(30, 14, 11, '4574', NULL, '748574', 21);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch_auth`
--
ALTER TABLE `branch_auth`
  ADD PRIMARY KEY (`br_a_id`),
  ADD UNIQUE KEY `br_email` (`br_email`);

--
-- Indexes for table `branch_clients`
--
ALTER TABLE `branch_clients`
  ADD PRIMARY KEY (`b_client_id`),
  ADD UNIQUE KEY `un_client_refno` (`b_client_ref_no`),
  ADD KEY `b_r_id` (`b_r_id`);

--
-- Indexes for table `branch_data`
--
ALTER TABLE `branch_data`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`client_id`),
  ADD UNIQUE KEY `un_client` (`client_ref_no`);

--
-- Indexes for table `clients_docs`
--
ALTER TABLE `clients_docs`
  ADD PRIMARY KEY (`cl_doc_id`),
  ADD KEY `cl_r_id` (`cl_r_id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`col_id`);

--
-- Indexes for table `contractors`
--
ALTER TABLE `contractors`
  ADD PRIMARY KEY (`con_id`);

--
-- Indexes for table `contractor_payments`
--
ALTER TABLE `contractor_payments`
  ADD PRIMARY KEY (`pay_id`),
  ADD KEY `pay_con_id` (`pay_con_id`),
  ADD KEY `contractor_payments_ibfk_2` (`pay_project_id`),
  ADD KEY `pay_exp_id` (`pay_exp_id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`exp_id`);

--
-- Indexes for table `expense_item`
--
ALTER TABLE `expense_item`
  ADD PRIMARY KEY (`exp_item_id`),
  ADD KEY `exp_ref_id` (`exp_ref_id`);

--
-- Indexes for table `finance_dep`
--
ALTER TABLE `finance_dep`
  ADD PRIMARY KEY (`fd_id`);

--
-- Indexes for table `finance_dep_auth`
--
ALTER TABLE `finance_dep_auth`
  ADD PRIMARY KEY (`fd_a_id`),
  ADD UNIQUE KEY `un_fd_mail` (`fd_email`),
  ADD KEY `fd_r_id` (`fd_r_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indexes for table `labours`
--
ALTER TABLE `labours`
  ADD PRIMARY KEY (`lab_id`);

--
-- Indexes for table `material_item_list`
--
ALTER TABLE `material_item_list`
  ADD PRIMARY KEY (`mr_item_id`),
  ADD KEY `material_item_list_ibfk_1` (`mr_project_r_id`),
  ADD KEY `vendor_id` (`vendor_id`);

--
-- Indexes for table `material_requests`
--
ALTER TABLE `material_requests`
  ADD PRIMARY KEY (`mr_r_id`),
  ADD KEY `mr_project_id` (`mr_project_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification_recipients`
--
ALTER TABLE `notification_recipients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notification_id` (`notification_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `particles`
--
ALTER TABLE `particles`
  ADD PRIMARY KEY (`particle_id`);

--
-- Indexes for table `phases`
--
ALTER TABLE `phases`
  ADD PRIMARY KEY (`phase_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`pro_id`),
  ADD UNIQUE KEY `un_project` (`pro_ref_no`),
  ADD KEY `pro_client_r_id` (`pro_client_r_id`);

--
-- Indexes for table `project_contractor`
--
ALTER TABLE `project_contractor`
  ADD PRIMARY KEY (`pro_con_id`),
  ADD KEY `con_id` (`con_id`),
  ADD KEY `pro_id` (`pro_id`);

--
-- Indexes for table `project_phase`
--
ALTER TABLE `project_phase`
  ADD PRIMARY KEY (`pro_phase_id`),
  ADD KEY `pro_id` (`pro_id`),
  ADD KEY `phase_id` (`phase_id`);

--
-- Indexes for table `project_subphase`
--
ALTER TABLE `project_subphase`
  ADD KEY `pro_phase` (`pro_phase`);

--
-- Indexes for table `sub_phases`
--
ALTER TABLE `sub_phases`
  ADD PRIMARY KEY (`sub_phase_id`);

--
-- Indexes for table `superviser`
--
ALTER TABLE `superviser`
  ADD PRIMARY KEY (`sup_id`);

--
-- Indexes for table `superviser_auth`
--
ALTER TABLE `superviser_auth`
  ADD PRIMARY KEY (`sup_a_id`),
  ADD KEY `sup_r_id` (`sup_r_id`);

--
-- Indexes for table `super_admin`
--
ALTER TABLE `super_admin`
  ADD PRIMARY KEY (`su_id`);

--
-- Indexes for table `super_admin_auth`
--
ALTER TABLE `super_admin_auth`
  ADD PRIMARY KEY (`su_a_id`),
  ADD KEY `su_r_id` (`su_r_id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`vendor_id`);

--
-- Indexes for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  ADD PRIMARY KEY (`pay_id`),
  ADD KEY `pay_vendor_id` (`pay_vendor_id`),
  ADD KEY `pay_client_id` (`pay_project_id`),
  ADD KEY `pay_exp_id` (`pay_exp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch_auth`
--
ALTER TABLE `branch_auth`
  MODIFY `br_a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `branch_clients`
--
ALTER TABLE `branch_clients`
  MODIFY `b_client_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `branch_data`
--
ALTER TABLE `branch_data`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `client_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `clients_docs`
--
ALTER TABLE `clients_docs`
  MODIFY `cl_doc_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `col_id` int(155) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contractors`
--
ALTER TABLE `contractors`
  MODIFY `con_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contractor_payments`
--
ALTER TABLE `contractor_payments`
  MODIFY `pay_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `exp_id` int(155) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `expense_item`
--
ALTER TABLE `expense_item`
  MODIFY `exp_item_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `finance_dep`
--
ALTER TABLE `finance_dep`
  MODIFY `fd_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `finance_dep_auth`
--
ALTER TABLE `finance_dep_auth`
  MODIFY `fd_a_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `labours`
--
ALTER TABLE `labours`
  MODIFY `lab_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `material_item_list`
--
ALTER TABLE `material_item_list`
  MODIFY `mr_item_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `material_requests`
--
ALTER TABLE `material_requests`
  MODIFY `mr_r_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification_recipients`
--
ALTER TABLE `notification_recipients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `particles`
--
ALTER TABLE `particles`
  MODIFY `particle_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `phases`
--
ALTER TABLE `phases`
  MODIFY `phase_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `pro_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `project_contractor`
--
ALTER TABLE `project_contractor`
  MODIFY `pro_con_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `project_phase`
--
ALTER TABLE `project_phase`
  MODIFY `pro_phase_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_phases`
--
ALTER TABLE `sub_phases`
  MODIFY `sub_phase_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `superviser`
--
ALTER TABLE `superviser`
  MODIFY `sup_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `superviser_auth`
--
ALTER TABLE `superviser_auth`
  MODIFY `sup_a_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `super_admin`
--
ALTER TABLE `super_admin`
  MODIFY `su_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `super_admin_auth`
--
ALTER TABLE `super_admin_auth`
  MODIFY `su_a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `vendor_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  MODIFY `pay_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `branch_clients`
--
ALTER TABLE `branch_clients`
  ADD CONSTRAINT `branch_clients_ibfk_1` FOREIGN KEY (`b_r_id`) REFERENCES `branch_data` (`b_id`) ON DELETE CASCADE;

--
-- Constraints for table `clients_docs`
--
ALTER TABLE `clients_docs`
  ADD CONSTRAINT `clients_docs_ibfk_1` FOREIGN KEY (`cl_r_id`) REFERENCES `clients` (`client_id`);

--
-- Constraints for table `contractor_payments`
--
ALTER TABLE `contractor_payments`
  ADD CONSTRAINT `contractor_payments_ibfk_1` FOREIGN KEY (`pay_con_id`) REFERENCES `contractors` (`con_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contractor_payments_ibfk_2` FOREIGN KEY (`pay_project_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contractor_payments_ibfk_3` FOREIGN KEY (`pay_exp_id`) REFERENCES `expenses` (`exp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `expense_item`
--
ALTER TABLE `expense_item`
  ADD CONSTRAINT `expense_item_ibfk_1` FOREIGN KEY (`exp_ref_id`) REFERENCES `expenses` (`exp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `finance_dep_auth`
--
ALTER TABLE `finance_dep_auth`
  ADD CONSTRAINT `finance_dep_auth_ibfk_1` FOREIGN KEY (`fd_r_id`) REFERENCES `finance_dep` (`fd_id`);

--
-- Constraints for table `material_item_list`
--
ALTER TABLE `material_item_list`
  ADD CONSTRAINT `material_item_list_ibfk_1` FOREIGN KEY (`mr_project_r_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `material_item_list_ibfk_2` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`vendor_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `material_requests`
--
ALTER TABLE `material_requests`
  ADD CONSTRAINT `material_requests_ibfk_1` FOREIGN KEY (`mr_project_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notification_recipients`
--
ALTER TABLE `notification_recipients`
  ADD CONSTRAINT `notification_recipients_ibfk_1` FOREIGN KEY (`notification_id`) REFERENCES `notifications` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`pro_client_r_id`) REFERENCES `clients` (`client_id`) ON DELETE CASCADE;

--
-- Constraints for table `project_contractor`
--
ALTER TABLE `project_contractor`
  ADD CONSTRAINT `project_contractor_ibfk_1` FOREIGN KEY (`con_id`) REFERENCES `contractors` (`con_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_contractor_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_phase`
--
ALTER TABLE `project_phase`
  ADD CONSTRAINT `project_phase_ibfk_1` FOREIGN KEY (`pro_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_phase_ibfk_2` FOREIGN KEY (`phase_id`) REFERENCES `phases` (`phase_id`);

--
-- Constraints for table `project_subphase`
--
ALTER TABLE `project_subphase`
  ADD CONSTRAINT `project_subphase_ibfk_1` FOREIGN KEY (`pro_phase`) REFERENCES `project_phase` (`pro_phase_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `superviser_auth`
--
ALTER TABLE `superviser_auth`
  ADD CONSTRAINT `superviser_auth_ibfk_1` FOREIGN KEY (`sup_r_id`) REFERENCES `superviser` (`sup_id`) ON DELETE CASCADE;

--
-- Constraints for table `super_admin_auth`
--
ALTER TABLE `super_admin_auth`
  ADD CONSTRAINT `super_admin_auth_ibfk_1` FOREIGN KEY (`su_r_id`) REFERENCES `super_admin` (`su_id`) ON DELETE CASCADE;

--
-- Constraints for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  ADD CONSTRAINT `vendor_payments_ibfk_2` FOREIGN KEY (`pay_vendor_id`) REFERENCES `vendors` (`vendor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vendor_payments_ibfk_3` FOREIGN KEY (`pay_project_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vendor_payments_ibfk_4` FOREIGN KEY (`pay_exp_id`) REFERENCES `expenses` (`exp_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
