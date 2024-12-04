CREATE TABLE `clients` (
  `client_id` bigint(20) NOT NULL PRIMARY KEY auto_increment,
  `client_name` varchar(200) DEFAULT NULL,
  `client_ref_no` int(11) DEFAULT NULL,
  `client_contact` int(11) DEFAULT NULL,
  `client_alt_contact` int(11) DEFAULT NULL,
  `client_address` varchar(300) DEFAULT NULL,
  `client_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `branch_data` (
  `b_id` bigint(20) NOT NULL PRIMARY KEY auto_increment,
  `b_name` varchar(200) DEFAULT NULL,
  `b_location` int(11) DEFAULT NULL,
  `b_head` int(11) DEFAULT NULL,
  `b_contact_number` int(11) DEFAULT NULL,
  `b_alt_number` varchar(300) DEFAULT NULL,
  `b_email` varchar(80) DEFAULT NULL,
  `b_commision` int NOT NULL DEFAULT 1,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `branch_clients` (
  `b_client_id` bigint(20) NOT NULL PRIMARY KEY auto_increment,
  `b_ind_id` bigint(20) NOT NULL,
  `b_client_name` varchar(200) DEFAULT NULL,
  `b_client_ref_no` int(11) DEFAULT NULL,
  `b_client_contact` int(11) DEFAULT NULL,
  `b_client_alt_contact` int(11) DEFAULT NULL,
  `b_client_address` varchar(300) DEFAULT NULL,
  `b_client_email` varchar(80) DEFAULT NULL,
  `b_client_commision` int NOT NULL DEFAULT 1,
  `b_client_status` varchar(50) DEFAULT 'true'
  FOREIGN KEY(b_ind_id) REFERENCES branch_data(b_id) ON DELETE CASCADE
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
 `client_ind_id` bigint(20) NOT NULL,
 `project_name` varchar(200) DEFAULT NULL,
 `pro_ref_no` int DEFAULT NULL,
 `total_price` int DEFAULT NULL,
 `amount_split` varchar(50) DEFAULT NULL,
 `advance_amount` int DEFAULT NULL,
 FOREIGN KEY(client_ind_id) REFERENCES clients(client_id) ON DELETE CASCADE
);
ALTER TABLE `projects` ADD `branch_id` INT NULL DEFAULT NULL AFTER `client_id`;


-- superviser workflows tables

CREATE TABLE `finance_dep` (
  `fd_id` int NOT NULL PRIMARY KEY auto_increment,
  `fd_name` varchar(100) NOT NULL,
  `fd_contact` varchar(13) NOT NULL,
  `fd_alt_contact` varchar(13) DEFAULT NULL,
  `fd_address` varchar(300) DEFAULT NULL,
  `fd_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `superviser` (
  `sup_id` int NOT NULL PRIMARY KEY auto_increment,
  `sup_name` varchar(100) NOT NULL,
  `sup_contact` varchar(13) NOT NULL,
  `sup_alt_contact` varchar(13) DEFAULT NULL,
  `sup_address` varchar(300) DEFAULT NULL,
  `sup_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `material_requests` (
  `mr_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `mr_project_r_id` int NOT NULL,
  `mr_sup_r_id` int NOT NULL,
  `mh_approval` BOOLEAN DEFAULT FALSE,
  `fd_approval` BOOLEAN DEFAULT FALSE,
  `mr_fd_r_id` int NOT NULL,
  `mr_delivered_status` BOOLEAN DEFAULT FALSE,
  FOREIGN KEY(mr_project_r_id) REFERENCES projects(pro_id) ON DELETE CASCADE,
  FOREIGN KEY(mr_sup_r_id) REFERENCES superviser(sup_id) ON DELETE CASCADE,
  FOREIGN KEY(mr_fd_r_id) REFERENCES finance_dep(fd_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `material_list` (
  `mat_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `mr_r_id` bigint NOT NULL,
  `mat_name` varchar(200) NOT NULL,
  `mat_unit` varchar(60) NOT NULL,
  `mat_sup_qnt` int NOT NULL,
  `mat_mh_qnt` int DEFAULT NULL,
  `mat_fd_qnt` int DEFAULT NULL,
  `mat_price` int DEFAULT NULL,
  `mat_delivered_status` BOOLEAN DEFAULT FALSE,
  FOREIGN KEY(mr_r_id) REFERENCES material_requests(mr_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




