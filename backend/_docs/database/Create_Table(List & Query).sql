CREATE TABLE `clients` (
  `client_id` bigint(20) NOT NULL PRIMARY KEY auto_increment,
  `client_name` varchar(200) DEFAULT NULL,
  `client_ref_no` int(11) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `alt_contact` int(11) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `contractors` (
  `con_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `con_name` varchar(200) DEFAULT NULL,
  `con_contact` int(11) DEFAULT NULL,
  `con_alt_contact` int(11) DEFAULT NULL,
  `con_address` varchar(300) DEFAULT NULL,
  `con_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `labours` (
  `lab_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `lab_name` varchar(200) DEFAULT NULL,
  `lab_contact` int(11) DEFAULT NULL,
  `lab_alt_contact` int(11) DEFAULT NULL,
  `lab_address` varchar(300) DEFAULT NULL,
  `lab_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `particles` (
  `particle_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `particle_name` varchar(200) DEFAULT NULL,
  `particle_price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phases` (
  `phase_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `phase_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `sub_phases` (
  `sub_phase_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `sub_phase_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `vendors` (
  `vendor_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `vendor_name` varchar(200) DEFAULT NULL,
  `vendor_contact` int(11) DEFAULT NULL,
  `vendor_alt_contact` int(11) DEFAULT NULL,
  `vendor_address` varchar(300) DEFAULT NULL,
  `vendor_email` varchar(80) DEFAULT NULL,
  `vendor_status` varchar(80) DEFAULT 'open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `projects` (
 `pro_id` bigint NOT NULL PRIMARY KEY auto_increment,
 `client_id` bigint(20) NOT NULL,
 `project_name` varchar(200) DEFAULT NULL,
 `pro_ref_no` int DEFAULT NULL,
 `total_price` int DEFAULT NULL,
 `amount_split` varchar(50) DEFAULT NULL,
 `advance_amount` int DEFAULT NULL,
 FOREIGN KEY(client_id) REFERENCES clients(client_id) ON DELETE CASCADE
);