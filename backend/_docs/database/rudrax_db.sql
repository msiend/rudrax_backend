-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 24, 2025 at 09:09 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rudrax_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `client_id` bigint NOT NULL,
  `client_name` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_ref_no` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `client_contact` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_alt_contact` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_address` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_email` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL
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
(42, 'Mintu Sharma', 'JGCC0008', '9401069337', '9401069337', 'siwan', 'msi2gmail@gaf.com'),
(43, 'Wave Industries pvt. ltd.', 'JGCC0009', '88008095', '9401069337', 'Dibrugarh, assam', 'contact@betaind.net'),
(44, 'Wave Industries pvt. ltd.', 'JGCC00010', '88008095', '9401069337', 'Dibrugarh, assam', 'contact@betaind.net'),
(45, 'Acme Corporation', 'ACME-2023-00d15', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com'),
(46, 'Acme Corporation', 'ACME-2023-00d5', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com'),
(47, 'Acme Corporation', 'ACME-2023-005', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com'),
(50, 'Acme Corporation 2563', 'ACME-202376', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com'),
(51, 'Acme Corporation 2563', 'ACME-202375', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com'),
(52, 'Acme Corporation 2563', 'ACME-202374', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com'),
(53, 'Acme Corporation 2563', 'ACME-202373', '555-100-1001', '555-200-2001', '100 Industry Lane, Anytown', 'info@acmecorp.com');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `col_id` int NOT NULL,
  `col_amount` varchar(55) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `col_mode` varchar(55) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `col_remark` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `col_date` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `col_project_id` varchar(55) COLLATE utf8mb4_general_ci NOT NULL,
  `col_project_phase` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`col_id`, `col_amount`, `col_mode`, `col_remark`, `col_date`, `col_project_id`, `col_project_phase`) VALUES
(2, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'JGCP0005', NULL),
(3, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'JGCP0005', NULL),
(4, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001', NULL),
(5, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001', NULL),
(6, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001', NULL),
(7, '5000', 'upi', '', '2025-04-06', '35', NULL),
(8, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001', NULL),
(9, '1500', 'Bank Transfer', 'Advance payment for materials', '2023-10-26', 'PRJ1001', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contractors`
--

CREATE TABLE `contractors` (
  `con_id` int NOT NULL,
  `con_name` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `con_contact` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `con_alt_contact` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `con_address` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `con_email` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contractors`
--

INSERT INTO `contractors` (`con_id`, `con_name`, `con_contact`, `con_alt_contact`, `con_address`, `con_email`) VALUES
(1, 'Alice Johnson', '555', '555', '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com'),
(2, 'Alice Johnson', '2147483647', '2147483647', '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com'),
(5, 'Alice Johnson', '555', '555', '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com'),
(6, 'Alice Johnson', '555', '555', '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com'),
(7, 'Alice Johnson', '555', '555', '123 Main St, Anytown, CA 91234', 'alice.johnson@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `contractor_payments`
--

CREATE TABLE `contractor_payments` (
  `pay_id` int NOT NULL,
  `pay_con_id` int DEFAULT NULL,
  `pay_project_id` bigint DEFAULT NULL,
  `pay_amount` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pay_mode` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pay_note` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pay_exp_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contractor_payments`
--

INSERT INTO `contractor_payments` (`pay_id`, `pay_con_id`, `pay_project_id`, `pay_amount`, `pay_mode`, `pay_note`, `pay_exp_id`) VALUES
(99, 5, 11, '500', NULL, 'asdasdf', 24),
(100, 2, 10, '10000', NULL, 'adfgasdg', 25);

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `exp_id` int NOT NULL,
  `exp_type` enum('personal','firm','project') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'firm',
  `exp_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_amount` varchar(55) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_mode` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_status` enum('paid','unpaid','pending') COLLATE utf8mb4_general_ci DEFAULT 'paid',
  `exp_attachment_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_remark` text COLLATE utf8mb4_general_ci,
  `exp_paid_by` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_date` varchar(11) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_category` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `exp_project_ref` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`exp_id`, `exp_type`, `exp_name`, `exp_amount`, `exp_mode`, `exp_status`, `exp_attachment_url`, `exp_remark`, `exp_paid_by`, `exp_date`, `exp_category`, `exp_project_ref`, `created_at`, `updated_at`) VALUES
(2, 'firm', 'Material Purchase', '2500', 'Credit Card', 'paid', NULL, 'Purchase of cement and bricks', NULL, '2023-10-26', 'Construction Materials', 0, '2025-03-24 11:54:40', '2025-07-17 05:45:28'),
(3, 'firm', 'Material Purchase', '2500', 'Credit Card', 'paid', NULL, 'Purchase of cement and bricks', NULL, '2023-10-26', 'Construction Materials', 0, '2025-03-24 11:54:40', '2025-07-17 05:45:28'),
(4, 'firm', 'Material Purchase', '2500', 'Credit Card', 'paid', NULL, 'Purchase of cement and bricks', NULL, '2023-10-26', 'Construction Materials', 0, '2025-03-24 11:54:40', '2025-07-17 05:45:28'),
(5, 'firm', 'Material Purchase', '2500', 'Credit Card', 'paid', NULL, 'Purchase of cement and bricks', NULL, '2023-10-26', 'Construction Materials', 0, '2025-03-24 11:54:40', '2025-07-17 05:45:28'),
(6, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 13:31:50', '2025-07-17 05:45:28'),
(7, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 13:33:24', '2025-07-17 05:45:28'),
(9, 'firm', NULL, NULL, NULL, 'paid', NULL, NULL, NULL, NULL, 'Project', NULL, '2025-03-29 13:37:59', '2025-07-17 05:45:28'),
(10, 'firm', NULL, NULL, NULL, 'paid', NULL, NULL, NULL, NULL, 'Project', NULL, '2025-03-29 13:38:41', '2025-07-17 05:45:28'),
(11, 'firm', 'march expense kkl', '20000', 'Cash', 'paid', NULL, 'Bob da record 785', NULL, '2025-04-25', 'Project', NULL, '2025-03-29 13:41:36', '2025-07-17 05:45:28'),
(12, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 13:42:03', '2025-07-17 05:45:28'),
(13, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 13:42:04', '2025-07-17 05:45:28'),
(14, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 13:44:03', '2025-07-17 05:45:28'),
(15, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 14:54:47', '2025-07-17 05:45:28'),
(16, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-03-29 14:56:15', '2025-07-17 05:45:28'),
(17, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-04-03 04:56:02', '2025-07-17 05:45:28'),
(18, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-04-03 05:08:18', '2025-07-17 05:45:28'),
(19, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-04-03 05:08:35', '2025-07-17 05:45:28'),
(20, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-04-03 05:09:19', '2025-07-17 05:45:28'),
(21, 'firm', 'name sd', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-04-03 05:19:37', '2025-07-17 05:45:28'),
(22, 'firm', 'new dhoni expense', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-05-08 05:02:51', '2025-07-17 05:45:28'),
(23, 'firm', 'new dhoni expense', '63452', 'UPI', 'paid', NULL, 'dfdrvds', NULL, '2025-03-16', 'Project', NULL, '2025-05-08 05:04:00', '2025-07-17 05:45:28'),
(24, 'firm', NULL, NULL, NULL, 'paid', NULL, NULL, NULL, NULL, 'Project', NULL, '2025-05-10 14:30:46', '2025-07-17 05:45:28'),
(25, 'firm', NULL, NULL, NULL, 'paid', NULL, NULL, NULL, NULL, 'Project', NULL, '2025-05-10 14:33:51', '2025-07-17 05:45:28'),
(26, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:34:45', '2025-07-17 05:45:28'),
(27, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:36:10', '2025-07-17 05:45:28'),
(28, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:37:30', '2025-07-17 05:45:28'),
(29, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:38:33', '2025-07-17 05:45:28'),
(30, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:41:00', '2025-07-17 05:45:28'),
(31, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:42:37', '2025-07-17 05:45:28'),
(32, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 14:43:22', '2025-07-17 05:45:28'),
(33, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 15:05:30', '2025-07-17 05:45:28'),
(34, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 15:05:37', '2025-07-17 05:45:28'),
(35, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 15:06:15', '2025-07-17 05:45:28'),
(36, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-10 15:07:06', '2025-07-17 05:45:28'),
(37, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-11 08:05:36', '2025-07-17 05:45:28'),
(38, 'firm', 'Material Purchase', '2500', 'Credit Card', 'paid', NULL, 'Purchase of cement and bricks', NULL, '2023-10-26', 'Construction Materials', 0, '2025-05-11 08:05:36', '2025-07-17 05:45:28'),
(39, 'firm', 'march expense 1', '20000', 'UPI', 'paid', NULL, 'Bob da record', NULL, '2025-04-25', 'Project', NULL, '2025-05-11 08:06:52', '2025-07-17 05:45:28'),
(40, 'firm', 'Material Purchase', '2500', 'Credit Card', 'paid', NULL, 'Purchase of cement and bricks', NULL, '2023-10-26', 'Construction Materials', 0, '2025-05-11 08:06:52', '2025-07-17 05:45:28'),
(41, '', '15000', 'cash', 'Purchased 100 bags of cement', '', 'Material', NULL, '101', NULL, NULL, NULL, '2025-07-17 05:53:10', '2025-07-17 05:53:10'),
(43, 'project', 'Cement Purchase', '15000', 'cash', 'paid', '/uploads/receipts/cement-bill.jpg', 'Purchased 100 bags of cement', 'Site Supervisor', '2025-07-15', 'Material', 101, '2025-07-17 06:02:17', '2025-07-17 06:02:17');

-- --------------------------------------------------------

--
-- Table structure for table `file_manager`
--

CREATE TABLE `file_manager` (
  `fs_doc_id` bigint NOT NULL,
  `fs_doc_url` varchar(200) NOT NULL,
  `fs_name` varchar(155) DEFAULT NULL,
  `fs_doc_type` varchar(50) DEFAULT NULL,
  `entity` varchar(100) DEFAULT NULL,
  `file_key` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` bigint NOT NULL,
  `invoice_no` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `invoice_date` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payment_status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `amount` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `gst_rate` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `discount` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `total` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_contact` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_address` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_id` bigint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `invoice_no`, `invoice_date`, `payment_status`, `amount`, `gst_rate`, `discount`, `total`, `client_contact`, `client_address`, `client_id`, `created_at`) VALUES
(1, 'INV-2024-001', '2024-05-06', 'unpaid', '10000', '18', '500', '11300', '9876543210', 'Guwahati, Assam', 101, '2025-05-11 08:05:36');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_config`
--

CREATE TABLE `invoice_config` (
  `id` int NOT NULL,
  `invoice_prefix` varchar(50) DEFAULT NULL,
  `authorize_signatory_url` varchar(255) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `firm_address_line_one` text,
  `firm_address_line_two` text,
  `firm_address_line_three` text,
  `terms_condition_one` text,
  `terms_condition_two` text,
  `terms_condition_three` text,
  `terms_condition_four` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `invoice_config`
--

INSERT INTO `invoice_config` (`id`, `invoice_prefix`, `authorize_signatory_url`, `logo_url`, `firm_address_line_one`, `firm_address_line_two`, `firm_address_line_three`, `terms_condition_one`, `terms_condition_two`, `terms_condition_three`, `terms_condition_four`, `created_at`, `updated_at`) VALUES
(1, 'NEWPREFIX-001', '/updated/sign.png', 'https://example.com/logos/company_logo.png', 'Updated address line 441', 'Suite 400', 'Cityville, State, 1234saefe5', 'All invoices are due within 30 days of receipt.', 'Late payments may incur a 5% monthly fee.', '/updated/sign.png', 'Updated address line 441', '2025-07-24 13:56:00', '2025-07-24 08:36:38');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_items`
--

CREATE TABLE `invoice_items` (
  `invoice_item_id` bigint NOT NULL,
  `inv_item_name` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inv_item_quantity` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inv_item_rate` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inv_item_amount` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `invoice_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice_items`
--

INSERT INTO `invoice_items` (`invoice_item_id`, `inv_item_name`, `inv_item_quantity`, `inv_item_rate`, `inv_item_amount`, `invoice_id`) VALUES
(0, 'Steel Rod', '10', '100', '1000', 1),
(0, 'Cement Bag', '20', '200', '4000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `message` text COLLATE utf8mb4_general_ci NOT NULL,
  `type` enum('info','warning','error','success','system') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'info',
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` timestamp NULL DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ;

-- --------------------------------------------------------

--
-- Table structure for table `notification_recipients`
--

CREATE TABLE `notification_recipients` (
  `id` int NOT NULL,
  `notification_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `role` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `read_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `particles`
--

CREATE TABLE `particles` (
  `particle_id` int NOT NULL,
  `particle_name` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `particle_price` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `particles`
--

INSERT INTO `particles` (`particle_id`, `particle_name`, `particle_price`) VALUES
(5, 'particles_name1', '2000'),
(6, 'particles_name1', '2000'),
(7, 'particles_name1', '2000'),
(8, 'particles_name1', '2000');

-- --------------------------------------------------------

--
-- Table structure for table `phases`
--

CREATE TABLE `phases` (
  `phase_id` int NOT NULL,
  `phase_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phase_alt_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
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
(9, 'Phase 44', 'phase_alt_name 1'),
(10, 'Phase 44', 'phase_alt_name 1');

-- --------------------------------------------------------

--
-- Table structure for table `phase_tasks`
--

CREATE TABLE `phase_tasks` (
  `phase_task_id` int NOT NULL,
  `phase_task_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phase_task_alt_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phase_tasks`
--

INSERT INTO `phase_tasks` (`phase_task_id`, `phase_task_name`, `phase_task_alt_name`) VALUES
(2, NULL, NULL),
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
(14, 'Phase 1', 'sub_phase_alt_name 1'),
(15, 'Phase 1', 'sub_phase_alt_name 1'),
(17, 'Phase 1', 'sub_phase_alt_name 1'),
(18, 'Phase 1', 'sub_phase_alt_name 1');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `pro_id` bigint NOT NULL,
  `pro_client_r_id` bigint NOT NULL,
  `pro_name` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_ref_no` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `pro_sitedesc` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_type` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_worktype` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_category` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_sitelocation` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_sitearea` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_sitedirection` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_duration` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_recs_space` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_recs_smention` varchar(455) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_totalcost` bigint DEFAULT NULL,
  `pro_advancepayment` int DEFAULT NULL,
  `pro_own` varchar(55) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`pro_id`, `pro_client_r_id`, `pro_name`, `pro_ref_no`, `pro_sitedesc`, `pro_type`, `pro_worktype`, `pro_category`, `pro_sitelocation`, `pro_sitearea`, `pro_sitedirection`, `pro_duration`, `pro_recs_space`, `pro_recs_smention`, `pro_totalcost`, `pro_advancepayment`, `pro_own`, `created_at`, `updated_at`) VALUES
(10, 35, 'Lakeview Resort', 'JGCP0003', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0sfgsdfgsdf', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-24 13:05:00'),
(11, 35, 'Lakeview Resort', 'JGCP0004', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(12, 35, 'Lakeview Resort', 'JGCP0005', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(13, 35, 'Lakeview Resort', 'JGCP0006', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(14, 35, 'Lakeview Resort', 'JGCP0007', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(15, 35, 'Lakeview Resort', 'JGCP0008', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(16, 35, 'Lakeview Resort', 'JGCP0009', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(18, 35, 'Lakeview Resort', 'JGCP00011', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-04-05 13:13:56', '2025-07-14 18:40:09'),
(19, 38, 'Lakeview Resort', 'JGCP00012', 'Scenic lakefront, hilly terrain.', NULL, NULL, '0', '0', '0', '0', '15 months', NULL, NULL, 1800000, 540000, NULL, '2025-05-11 08:05:36', '2025-07-14 18:40:09'),
(20, 35, 'Acme Corporation', 'ACME-2023-0015', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, NULL, '2025-05-16 12:14:04', '2025-07-14 18:40:09'),
(21, 45, 'Acme Corporation', 'ACME-2023-00d15', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, NULL, '2025-05-16 12:16:37', '2025-07-14 18:40:09'),
(22, 46, 'Acme Corporation', 'ACME-2023-00d5', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, NULL, '2025-05-16 12:23:22', '2025-07-14 18:40:09'),
(23, 47, 'Acme Corporation', 'ACME-2023-005', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, NULL, '2025-05-16 12:24:03', '2025-07-14 18:40:09'),
(24, 50, 'Acme Corporation 2563', 'ACME-202376', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, '[object Object]', '2025-05-19 07:03:07', '2025-07-14 18:40:09'),
(25, 51, 'Acme Corporation 2563', 'ACME-202375', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, NULL, '2025-05-19 07:04:00', '2025-07-14 18:40:09'),
(26, 52, 'Acme Corporation 2563', 'ACME-202374', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, NULL, '2025-05-19 07:05:02', '2025-07-14 18:40:09'),
(27, 53, 'Acme Corporation 2563', 'ACME-202371', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, 'Sunrise Branch adsga', '2025-05-19 07:05:40', '2025-07-17 09:51:27'),
(28, 36, 'Acme Corporation 2563', 'ACME-202382', 'Large open area, flat terrain.', NULL, NULL, '0', '0', '0', '0', '6 months', NULL, NULL, 500000, 150000, 'Sunrise Branch adsga', '2025-05-24 08:33:38', '2025-07-17 09:53:43'),
(32, 36, 'My Project', 'ACME-202383', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:21:51', '2025-07-17 09:54:19'),
(36, 36, 'My Project', 'ACME-202384', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:24:22', '2025-07-17 09:54:22'),
(37, 36, 'My Project', 'ACME-202385', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:24:26', '2025-07-17 09:54:26'),
(38, 36, 'My Project', 'ACME-202386', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:25:25', '2025-07-17 09:55:25'),
(39, 36, 'My Project', 'ACME-202387', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:32:22', '2025-07-17 10:02:22'),
(40, 36, 'My Project', 'ACME-202388', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:32:24', '2025-07-17 10:02:24'),
(41, 36, 'My Project', 'ACME-202389', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:32:24', '2025-07-17 10:02:24'),
(42, 36, 'My Project', 'ACME-202390', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:32:25', '2025-07-17 10:02:25'),
(43, 36, 'My Project', 'ACME-202391', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:32:52', '2025-07-17 10:02:52'),
(44, 36, 'My Project', 'ACME-202392', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:34:44', '2025-07-17 10:04:44'),
(45, 36, 'My Project', 'ACME-202393', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:35:13', '2025-07-17 10:05:13'),
(46, 36, 'My Project', 'ACME-202394', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:35:32', '2025-07-17 10:05:32'),
(47, 36, 'My Project', 'ACME-202395', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:35:45', '2025-07-17 10:05:45'),
(48, 36, 'My Project', 'ACME-202396', 'Site description here', 'Residential', 'New Construction', 'Category A', 'Location XYZ', '1000 sq ft', 'North-East48888', '6 months', 'Parking, Garden', 'Extra space requirements', 2500000, 500000, NULL, '2025-07-17 04:39:27', '2025-07-17 10:15:38');

-- --------------------------------------------------------

--
-- Table structure for table `project_contractor`
--

CREATE TABLE `project_contractor` (
  `pro_con_id` bigint NOT NULL,
  `pro_id` bigint NOT NULL,
  `con_id` int DEFAULT NULL,
  `pro_phase` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_sub_phase` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_docs`
--

CREATE TABLE `project_docs` (
  `pro_doc_id` int NOT NULL,
  `pro_r_id` bigint NOT NULL,
  `pro_doc_url` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `pro_doc_name` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_doc_type` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_emp`
--

CREATE TABLE `project_emp` (
  `pemp_id` bigint NOT NULL,
  `pemp_project_id` bigint NOT NULL,
  `pemp_user_id` bigint NOT NULL,
  `pemp_assigned_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `pemp_assigned_by` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pemp_status` varchar(50) COLLATE utf8mb4_general_ci DEFAULT 'active',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_emp`
--

INSERT INTO `project_emp` (`pemp_id`, `pemp_project_id`, `pemp_user_id`, `pemp_assigned_date`, `pemp_assigned_by`, `pemp_status`, `created_at`, `updated_at`) VALUES
(1, 10, 3, NULL, 'AdminUser', 'Completed', NULL, NULL),
(2, 10, 3, NULL, 'AdminUser', 'Completed', NULL, NULL),
(4, 10, 3, NULL, 'AdminUser', 'Completed', NULL, NULL),
(5, 10, 3, '2025-07-22 10:24:09', 'AdminUser', 'Completed', '2025-07-22 10:24:09', '2025-07-22 10:24:09'),
(6, 10, 3, '2025-07-22 10:24:09', 'AdminUser', 'Completed', '2025-07-22 10:24:09', '2025-07-22 10:24:09'),
(7, 10, 3, '2025-07-22 10:24:09', 'AdminUser', 'Completed', '2025-07-22 10:24:09', '2025-07-22 10:24:09'),
(8, 10, 3, '2025-07-22 10:25:29', 'AdminUser', 'Completed', '2025-07-22 10:25:29', '2025-07-22 10:25:29'),
(9, 10, 3, '2025-07-22 10:25:29', 'AdminUser', 'Completed', '2025-07-22 10:25:29', '2025-07-22 10:25:29'),
(10, 10, 3, '2025-07-22 10:25:29', 'AdminUser', 'Completed', '2025-07-22 10:25:29', '2025-07-22 10:25:29'),
(11, 10, 3, '2025-07-22 10:59:51', 'AdminUser', 'Completed', '2025-07-22 10:59:51', '2025-07-22 10:59:51'),
(12, 10, 3, '2025-07-22 10:59:51', 'AdminUser', 'Completed', '2025-07-22 10:59:51', '2025-07-22 10:59:51'),
(13, 10, 3, '2025-07-22 10:59:51', 'AdminUser', 'Completed', '2025-07-22 10:59:51', '2025-07-22 10:59:51');

-- --------------------------------------------------------

--
-- Table structure for table `project_phase`
--

CREATE TABLE `project_phase` (
  `pro_phase_id` int NOT NULL,
  `phase_id` int NOT NULL,
  `pro_id` bigint DEFAULT NULL,
  `pro_phase_status` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pro_phase_deadline` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_phase`
--

INSERT INTO `project_phase` (`pro_phase_id`, `phase_id`, `pro_id`, `pro_phase_status`, `pro_phase_deadline`, `created_at`) VALUES
(13, 3, 10, 'Not Started', '2025-06-30', '2025-07-19 10:12:03'),
(14, 3, 10, 'Not Started', '2025-06-30', '2025-07-24 07:10:21'),
(15, 3, 10, 'Not Started', '2025-06-30', '2025-07-19 10:12:03');

-- --------------------------------------------------------

--
-- Table structure for table `project_phase_task`
--

CREATE TABLE `project_phase_task` (
  `pt_id` int NOT NULL,
  `pro_id` bigint NOT NULL,
  `pro_phase` int DEFAULT NULL,
  `pro_phase_task` int DEFAULT NULL,
  `deadline` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pt_status` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_phase_task`
--

INSERT INTO `project_phase_task` (`pt_id`, `pro_id`, `pro_phase`, `pro_phase_task`, `deadline`, `pt_status`, `created_at`) VALUES
(8, 15, 13, 3, '2024-07-25', 'Completed', '2025-07-19 06:49:30'),
(9, 15, 13, 3, '2024-07-25', 'Completed', '2025-07-19 10:10:05'),
(12, 10, 13, 15, '2024-07-25', 'Completed', '2025-07-24 07:11:37'),
(13, 10, 13, 15, '2024-07-25', 'Completed', '2025-07-24 07:19:28'),
(14, 10, 14, 15, '2024-07-25', 'Completed', '2025-07-24 07:21:04'),
(15, 10, 15, 15, '2024-07-25', 'Completed', '2025-07-24 07:21:04'),
(16, 10, 15, 15, '2024-07-25', 'Completed', '2025-07-24 07:21:04');

-- --------------------------------------------------------

--
-- Table structure for table `project_queries`
--

CREATE TABLE `project_queries` (
  `q_id` bigint NOT NULL,
  `q_title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `q_desc` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `q_type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `q_category` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `q_raised_by` bigint NOT NULL,
  `q_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `q_status` varchar(50) COLLATE utf8mb4_general_ci DEFAULT 'open',
  `approved_by` bigint DEFAULT NULL,
  `approved_date` datetime DEFAULT NULL,
  `q_remarks` text COLLATE utf8mb4_general_ci,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_queries`
--

INSERT INTO `project_queries` (`q_id`, `q_title`, `q_desc`, `q_type`, `q_category`, `q_raised_by`, `q_date`, `q_status`, `approved_by`, `approved_date`, `q_remarks`, `created_at`, `updated_at`) VALUES
(2, 'Clarification on API Endpoint', 'Need clarification on the correct API endpoint for user authentication module.', 'Technical', 'Backend Development', 0, '2025-07-19 12:28:52', 'Open', NULL, NULL, NULL, '2025-07-19 12:28:52', '2025-07-19 12:28:52'),
(3, 'Clarification on API Endpoint', 'Need clarification on the correct API endpoint for user authentication module.', 'Technical', 'Backend Development', 0, '2025-07-19 12:28:52', 'Open', NULL, NULL, NULL, '2025-07-19 12:28:52', '2025-07-19 12:28:52'),
(4, 'Clarification on API Endpointasdfasd', 'Need clarification on the correct API endpoint for user  module.', 'Technical', 'Backend Development', 0, '2025-07-19 12:33:28', 'Open', NULL, NULL, NULL, '2025-07-19 12:33:28', '2025-07-19 15:39:56'),
(5, 'Clarification on API Endpoint', 'Need clarification on the correct API endpoint for user authentication module.', 'Technical', 'Backend Development', 9, '2025-07-19 15:31:18', 'Open', NULL, NULL, 'Waiting for lead developer\'s input.', '2025-07-19 15:31:18', '2025-07-19 15:31:18'),
(6, 'Clarification on API Endpoint', 'Need clarification on the correct API endpoint for user authentication module.', 'Technical', 'Backend Development', 9, '2025-07-19 15:38:41', 'Open', NULL, NULL, 'Waiting for lead developer\'s input.', '2025-07-19 15:38:41', '2025-07-19 15:38:41');

-- --------------------------------------------------------

--
-- Table structure for table `project_task_emp`
--

CREATE TABLE `project_task_emp` (
  `ptemp_id` int NOT NULL,
  `ptemp_pt_id` int DEFAULT NULL,
  `ptemp_user_id` bigint DEFAULT NULL,
  `ptemp_assigned_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `ptemp_assigned_by` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ptemp_status` varchar(50) COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_task_emp`
--

INSERT INTO `project_task_emp` (`ptemp_id`, `ptemp_pt_id`, `ptemp_user_id`, `ptemp_assigned_date`, `ptemp_assigned_by`, `ptemp_status`, `created_at`, `updated_at`) VALUES
(8, 9, 5, NULL, 'AdminUser', 'Completeds', '2025-07-22 05:34:58', '2025-07-22 06:02:23'),
(9, 8, 3, NULL, 'AdminUser', 'Completed', '2025-07-22 05:34:58', '2025-07-22 05:34:58'),
(10, 8, 3, '2025-07-22 00:00:00', 'AdminUser', 'Completed', '2025-07-22 05:36:02', '2025-07-22 05:36:02'),
(11, 9, 3, '2025-07-22 00:00:00', 'AdminUser', 'Completed', '2025-07-22 05:36:02', '2025-07-22 05:36:02'),
(12, 8, 3, '2025-07-22 00:00:00', 'AdminUser', 'Completed', '2025-07-22 05:36:02', '2025-07-22 05:36:02');

-- --------------------------------------------------------

--
-- Table structure for table `site_inspections`
--

CREATE TABLE `site_inspections` (
  `si_id` bigint NOT NULL,
  `project_id` bigint DEFAULT NULL,
  `si_asign_id` bigint DEFAULT NULL,
  `si_date` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `si_location` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `si_type` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `site_inspections`
--

INSERT INTO `site_inspections` (`si_id`, `project_id`, `si_asign_id`, `si_date`, `si_location`, `si_type`, `status`, `created_at`, `updated_at`) VALUES
(3, 48, NULL, NULL, NULL, NULL, 'approved', '2025-07-17 10:22:21', '2025-07-17 10:22:21'),
(7, 48, 3, '2025-07-17', 'Engineer A', 'Site ready', 'approved', '2025-07-19 11:42:44', '2025-07-19 11:42:44');

-- --------------------------------------------------------

--
-- Table structure for table `site_inspection_docs`
--

CREATE TABLE `site_inspection_docs` (
  `si_doc_id` bigint NOT NULL,
  `si_r_id` bigint NOT NULL,
  `si_doc_url` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `si_doc_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `si_doc_type` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `site_inspection_docs`
--

INSERT INTO `site_inspection_docs` (`si_doc_id`, `si_r_id`, `si_doc_url`, `si_doc_name`, `si_doc_type`) VALUES
(1, 3, 'public/SiteInspection/image-189fc5d0-f4d6-4e79-8d3c-4907f4f445ff-1752728576742.jpg', '', 'doc_file'),
(2, 3, 'public/SiteInspection/image-1080e2b8-96e8-4f95-974d-ab1f47f946b4-1752728635918.jpg', '', 'doc_file'),
(3, 3, 'public/SiteInspection/image-450905e4-e0ae-41dc-8451-1874aaa2f50e-1752728648532.jpg', '', 'doc_file'),
(5, 3, 'public/SiteInspection/image-c97fbd05-2e65-4aaf-937d-50931a84cee9-1752728718112.jpg', '', 'doc_file');

-- --------------------------------------------------------

--
-- Table structure for table `super_admin`
--

CREATE TABLE `super_admin` (
  `su_id` int NOT NULL,
  `su_name` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_email` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_contact` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_alt_contact` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_address` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `super_admin`
--

INSERT INTO `super_admin` (`su_id`, `su_name`, `su_email`, `su_contact`, `su_alt_contact`, `su_address`) VALUES
(6, 'msi', 'msiadga@gmail.com', '9401069887', '7777777', NULL),
(7, 'John Doe', NULL, '9401069337', NULL, NULL),
(13, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(15, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(16, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(17, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(18, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(19, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(20, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(21, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati'),
(22, 'Admin Sharma', 'admin.sharma@example.com', '9876500000', '8765400000', 'Super Admin HQ, Guwahati');

-- --------------------------------------------------------

--
-- Table structure for table `super_admin_auth`
--

CREATE TABLE `super_admin_auth` (
  `su_a_id` int NOT NULL,
  `su_r_id` int NOT NULL,
  `su_user_id` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_password` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_token` varchar(400) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `su_isactive` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `super_admin_auth`
--

INSERT INTO `super_admin_auth` (`su_a_id`, `su_r_id`, `su_user_id`, `su_password`, `su_token`, `su_isactive`) VALUES
(6, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTc0NzM5ODk3MSwiZXhwIjoxNzQ5OTkwOTcxfQ.IzMFEBbQASyFBejmhUT0ODE0YEX0xIHUeznBoGrEUyc', 1),
(7, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(8, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(9, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(10, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(11, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(12, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(13, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(14, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(15, 7, 'deka@example.com', '$2a$12$aIwIqfY2u58c2U846bxcHeGw1qfMq1AaLGuBYNjhVtLVr.7N3QNkm', NULL, 1),
(16, 22, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` bigint NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `department` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `first_name`, `last_name`, `email`, `phone`, `role`, `department`, `created_at`, `updated_at`) VALUES
(3, 'Alice', 'Smith', 'alice.smith@example.com', '123-456-7890', 'Developer', 'Engineering', '2025-07-19 11:31:06', '2025-07-19 11:31:06');

-- --------------------------------------------------------

--
-- Table structure for table `user_auth`
--

CREATE TABLE `user_auth` (
  `u_a_id` bigint NOT NULL,
  `u_r_id` bigint DEFAULT NULL,
  `u_user_id` bigint DEFAULT NULL,
  `u_password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `u_token` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `u_role` varchar(55) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `u_isactive` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_auth`
--

INSERT INTO `user_auth` (`u_a_id`, `u_r_id`, `u_user_id`, `u_password`, `u_token`, `u_role`, `u_isactive`, `created_at`, `updated_at`) VALUES
(1, 3, NULL, '', NULL, NULL, 1, '2025-07-19 11:31:06', '2025-07-19 11:31:06');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `vendor_id` int NOT NULL,
  `vendor_ref_no` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vendor_name` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vendor_contact` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vendor_alt_contact` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vendor_address` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vendor_email` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vendor_status` varchar(80) COLLATE utf8mb4_general_ci DEFAULT 'open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`vendor_id`, `vendor_ref_no`, `vendor_name`, `vendor_contact`, `vendor_alt_contact`, `vendor_address`, `vendor_email`, `vendor_status`) VALUES
(14, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(16, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(17, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(18, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(19, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(20, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(21, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(22, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(23, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(24, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(25, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(26, 'JGCV0001', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(27, 'JGCV0002', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(28, 'JGCV0003', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(29, 'JGCV0004', NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'JGCV0005', NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'JGCV0006', 'ABC Supplies', '2147483647', '1234567890', '123 Supply St, City, Country', 'contact@abcsupplies.com', 'open'),
(32, 'JGCV0007', NULL, NULL, NULL, NULL, NULL, 'open');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_payments`
--

CREATE TABLE `vendor_payments` (
  `pay_id` int NOT NULL,
  `pay_vendor_id` int DEFAULT NULL,
  `pay_project_id` bigint DEFAULT NULL,
  `pay_amount` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pay_mode` varchar(155) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pay_note` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pay_exp_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_payments`
--

INSERT INTO `vendor_payments` (`pay_id`, `pay_vendor_id`, `pay_project_id`, `pay_amount`, `pay_mode`, `pay_note`, `pay_exp_id`) VALUES
(27, 14, 11, '4574', NULL, '748574', 20),
(30, 14, 11, '4574', NULL, '748574', 21);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`client_id`),
  ADD UNIQUE KEY `un_client` (`client_ref_no`);

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
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indexes for table `invoice_config`
--
ALTER TABLE `invoice_config`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `phase_tasks`
--
ALTER TABLE `phase_tasks`
  ADD PRIMARY KEY (`phase_task_id`);

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
-- Indexes for table `project_docs`
--
ALTER TABLE `project_docs`
  ADD PRIMARY KEY (`pro_doc_id`),
  ADD KEY `cl_r_id` (`pro_r_id`);

--
-- Indexes for table `project_emp`
--
ALTER TABLE `project_emp`
  ADD PRIMARY KEY (`pemp_id`),
  ADD KEY `pemp_project_id` (`pemp_project_id`),
  ADD KEY `pemp_user_id` (`pemp_user_id`);

--
-- Indexes for table `project_phase`
--
ALTER TABLE `project_phase`
  ADD PRIMARY KEY (`pro_phase_id`),
  ADD KEY `pro_id` (`pro_id`),
  ADD KEY `phase_id` (`phase_id`);

--
-- Indexes for table `project_phase_task`
--
ALTER TABLE `project_phase_task`
  ADD PRIMARY KEY (`pt_id`),
  ADD KEY `pro_phase` (`pro_phase`),
  ADD KEY `pro_id` (`pro_id`),
  ADD KEY `pro_phase_task` (`pro_phase_task`);

--
-- Indexes for table `project_queries`
--
ALTER TABLE `project_queries`
  ADD PRIMARY KEY (`q_id`);

--
-- Indexes for table `project_task_emp`
--
ALTER TABLE `project_task_emp`
  ADD PRIMARY KEY (`ptemp_id`),
  ADD KEY `ptemp_pt_id` (`ptemp_pt_id`);

--
-- Indexes for table `site_inspections`
--
ALTER TABLE `site_inspections`
  ADD PRIMARY KEY (`si_id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `site_inspections_ibfk_1` (`si_asign_id`);

--
-- Indexes for table `site_inspection_docs`
--
ALTER TABLE `site_inspection_docs`
  ADD PRIMARY KEY (`si_doc_id`),
  ADD KEY `si_r_id` (`si_r_id`);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_auth`
--
ALTER TABLE `user_auth`
  ADD PRIMARY KEY (`u_a_id`);

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
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `client_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `col_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contractors`
--
ALTER TABLE `contractors`
  MODIFY `con_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contractor_payments`
--
ALTER TABLE `contractor_payments`
  MODIFY `pay_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `exp_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `invoice_config`
--
ALTER TABLE `invoice_config`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification_recipients`
--
ALTER TABLE `notification_recipients`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `particles`
--
ALTER TABLE `particles`
  MODIFY `particle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `phases`
--
ALTER TABLE `phases`
  MODIFY `phase_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `phase_tasks`
--
ALTER TABLE `phase_tasks`
  MODIFY `phase_task_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `pro_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `project_contractor`
--
ALTER TABLE `project_contractor`
  MODIFY `pro_con_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `project_docs`
--
ALTER TABLE `project_docs`
  MODIFY `pro_doc_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `project_emp`
--
ALTER TABLE `project_emp`
  MODIFY `pemp_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `project_phase`
--
ALTER TABLE `project_phase`
  MODIFY `pro_phase_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `project_phase_task`
--
ALTER TABLE `project_phase_task`
  MODIFY `pt_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `project_queries`
--
ALTER TABLE `project_queries`
  MODIFY `q_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project_task_emp`
--
ALTER TABLE `project_task_emp`
  MODIFY `ptemp_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `site_inspections`
--
ALTER TABLE `site_inspections`
  MODIFY `si_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `site_inspection_docs`
--
ALTER TABLE `site_inspection_docs`
  MODIFY `si_doc_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `super_admin`
--
ALTER TABLE `super_admin`
  MODIFY `su_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `super_admin_auth`
--
ALTER TABLE `super_admin_auth`
  MODIFY `su_a_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_auth`
--
ALTER TABLE `user_auth`
  MODIFY `u_a_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `vendor_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  MODIFY `pay_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contractor_payments`
--
ALTER TABLE `contractor_payments`
  ADD CONSTRAINT `contractor_payments_ibfk_1` FOREIGN KEY (`pay_con_id`) REFERENCES `contractors` (`con_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contractor_payments_ibfk_2` FOREIGN KEY (`pay_project_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contractor_payments_ibfk_3` FOREIGN KEY (`pay_exp_id`) REFERENCES `expenses` (`exp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `project_docs`
--
ALTER TABLE `project_docs`
  ADD CONSTRAINT `project_docs_ibfk_1` FOREIGN KEY (`pro_r_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_emp`
--
ALTER TABLE `project_emp`
  ADD CONSTRAINT `project_emp_ibfk_1` FOREIGN KEY (`pemp_project_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `project_emp_ibfk_2` FOREIGN KEY (`pemp_user_id`) REFERENCES `users` (`u_id`) ON DELETE CASCADE;

--
-- Constraints for table `project_phase`
--
ALTER TABLE `project_phase`
  ADD CONSTRAINT `project_phase_ibfk_1` FOREIGN KEY (`pro_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_phase_ibfk_2` FOREIGN KEY (`phase_id`) REFERENCES `phases` (`phase_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_phase_task`
--
ALTER TABLE `project_phase_task`
  ADD CONSTRAINT `project_phase_task_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `projects` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_phase_task_ibfk_3` FOREIGN KEY (`pro_phase_task`) REFERENCES `phase_tasks` (`phase_task_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_phase_task_ibfk_4` FOREIGN KEY (`pro_phase`) REFERENCES `project_phase` (`pro_phase_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_task_emp`
--
ALTER TABLE `project_task_emp`
  ADD CONSTRAINT `project_task_emp_ibfk_1` FOREIGN KEY (`ptemp_pt_id`) REFERENCES `project_phase_task` (`pt_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_inspections`
--
ALTER TABLE `site_inspections`
  ADD CONSTRAINT `site_inspections_ibfk_1` FOREIGN KEY (`si_asign_id`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_inspection_docs`
--
ALTER TABLE `site_inspection_docs`
  ADD CONSTRAINT `site_inspection_docs_ibfk_1` FOREIGN KEY (`si_r_id`) REFERENCES `site_inspections` (`si_id`);

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
