-- Auth tables

CREATE TABLE `super_admin` (
  `su_id` int NOT NULL PRIMARY KEY auto_increment,
  `su_name` varchar(200) DEFAULT NULL,
  `su_contact` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `super_admin_auth` (
  `su_a_id` int NOT NULL PRIMARY KEY auto_increment,
  `su_r_id` int NOT NULL,
  `su_email` varchar(80) DEFAULT NULL,
  `su_password` varchar(300) DEFAULT NULL,
  `su_token` varchar(400) DEFAULT NULL,
  `su_isactive` BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (su_r_id) REFERENCES super_admin(su_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- main tables 

CREATE TABLE `branch_data` (
  `b_id` int NOT NULL PRIMARY KEY auto_increment,
  `b_name` varchar(200) DEFAULT NULL,
  `b_location` varchar(300) DEFAULT NULL,
  `b_head` varchar(100) DEFAULT NULL,
  `b_contact_number` varchar(15) DEFAULT NULL,
  `b_alt_number` varchar(15) DEFAULT NULL,
  `b_email` varchar(80) DEFAULT NULL,
  `b_commision` int NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `branch_clients` (
  `b_client_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `b_r_id` int NOT NULL,
  `b_client_name` varchar(200) DEFAULT NULL,
  `b_client_ref_no` varchar(200) NOT NULL,
  `b_client_contact` varchar(15) DEFAULT NULL,
  `b_client_alt_contact` varchar(15) DEFAULT NULL,
  `b_client_address` varchar(300) DEFAULT NULL,
  `b_client_email` varchar(80) DEFAULT NULL,
  `b_client_housetype` varchar(100) DEFAULT NULL,
  `b_client_rcctype` varchar(100) DEFAULT NULL,
  `b_client_totalcost` bigint DEFAULT NULL,
  `b_client_advancepayment` int DEFAULT NULL,
  `b_client_sitedesc` varchar(300) DEFAULT NULL,
  `b_client_duration` varchar(100) DEFAULT NULL,
  `b_client_commision` int NOT NULL DEFAULT 1,
  `b_admin_approval` BOOLEAN DEFAULT FALSE,
  CONSTRAINT un_client_refno UNIQUE (b_client_ref_no),
  FOREIGN KEY (b_r_id) REFERENCES branch_data(b_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `clients` (
  `client_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `client_name` varchar(200) DEFAULT NULL,
  `client_ref_no` varchar(200) NOT NULL,
  `client_contact` varchar(15) DEFAULT NULL,
  `client_alt_contact` varchar(15) DEFAULT NULL,
  `client_address` varchar(300) DEFAULT NULL,
  `client_email` varchar(80) DEFAULT NULL,
  CONSTRAINT un_client UNIQUE (client_ref_no)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `clients_docs` (
  `cl_doc_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `cl_r_id` bigint NOT NULL,
  `cl_doc_url` varchar(200) NOT NULL,
 FOREIGN KEY (`cl_r_id`) REFERENCES clients(client_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `projects` (
  `pro_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `pro_client_r_id` bigint NOT NULL,
  `pro_name` varchar(200) DEFAULT NULL,
  `pro_ref_no` varchar(200) NOT NULL,
  `pro_housetype` varchar(100) DEFAULT NULL,
  `pro_rcctype` varchar(100) DEFAULT NULL,
  `pro_sitedesc` varchar(300) DEFAULT NULL,
  `pro_duration` varchar(100) DEFAULT NULL,
  `pro_totalcost` bigint DEFAULT NULL,
  `pro_advancepayment` int DEFAULT NULL,
 CONSTRAINT un_project UNIQUE(pro_ref_no),
 FOREIGN KEY(pro_client_r_id) REFERENCES clients(client_id) ON DELETE CASCADE
);

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
  `phase_id` int NOT NULL PRIMARY KEY auto_increment,
  `phase_name` varchar(100) DEFAULT NULL,
  `phase_alt_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `sub_phases` (
  `sub_phase_id` int NOT NULL PRIMARY KEY auto_increment,
  `sub_phase_name` varchar(100) DEFAULT NULL,
  `sub_phase_alt_name` varchar(100) DEFAULT NULL
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



-- superviser workflows tables

CREATE TABLE `finance_dep` (
  `fd_id` int NOT NULL PRIMARY KEY auto_increment,
  `fd_name` varchar(100) NOT NULL,
  `fd_contact` varchar(13) NOT NULL,
  `fd_alt_contact` varchar(13) DEFAULT NULL,
  `fd_address` varchar(300) DEFAULT NULL,
  `fd_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `finance_dep_auth` (
  `fd_a_id` int NOT NULL PRIMARY KEY auto_increment,
  `fd_r_id` int NOT NULL,
  `fd_email` varchar(100) DEFAULT NULL,
  CONSTRAINT un_fd_mail UNIQUE(fd_email),
  FOREIGN KEY (fd_r_id) REFERENCES finance_dep(fd_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `superviser` (
  `sup_id` int NOT NULL PRIMARY KEY auto_increment,
  `sup_name` varchar(100) NOT NULL,
  `sup_contact` varchar(13) NOT NULL,
  `sup_alt_contact` varchar(13) DEFAULT NULL,
  `sup_address` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `superviser_auth` (
  `sup_a_id` int NOT NULL PRIMARY KEY auto_increment,
  `sup_r_id` int NOT NULL,
  `sup_email` varchar(100) NOT NULL,
  `sup_password` varchar(300) NOT NULL,
  `sup_token` varchar(300) DEFAULT NULL,
  FOREIGN KEY (sup_r_id) REFERENCES superviser(sup_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `material_requests` (
  `mr_id` bigint NOT NULL PRIMARY KEY auto_increment,
  `mr_project_r_id` bigint NOT NULL,
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




