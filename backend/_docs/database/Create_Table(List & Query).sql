CREATE TABLE `branch_auth` (
  `br_a_id` int(11) NOT NULL,
  `br_r_id` int(11) NOT NULL,
  `br_email` varchar(255) NOT NULL,
  `br_password` varchar(255) NOT NULL,
  `br_token` varchar(255) DEFAULT NULL,
  `br_isactive` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `clients` (
  `client_id` bigint(20) NOT NULL,
  `client_name` varchar(200) DEFAULT NULL,
  `client_ref_no` varchar(200) NOT NULL,
  `client_contact` varchar(15) DEFAULT NULL,
  `client_alt_contact` varchar(15) DEFAULT NULL,
  `client_address` varchar(300) DEFAULT NULL,
  `client_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `clients_docs` (
  `cl_doc_id` bigint(20) NOT NULL,
  `cl_r_id` bigint(20) NOT NULL,
  `cl_doc_url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `collections` (
  `col_id` int(155) NOT NULL,
  `col_amount` varchar(55) DEFAULT NULL,
  `col_mode` varchar(55) DEFAULT NULL,
  `col_remark` varchar(255) DEFAULT NULL,
  `col_date` varchar(20) DEFAULT NULL,
  `col_project_id` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `contractors` (
  `con_id` int(20) NOT NULL,
  `con_name` varchar(200) DEFAULT NULL,
  `con_contact` int(11) DEFAULT NULL,
  `con_alt_contact` int(11) DEFAULT NULL,
  `con_address` varchar(300) DEFAULT NULL,
  `con_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `contractor_payments` (
  `pay_id` int(20) NOT NULL,
  `pay_con_id` int(20) DEFAULT NULL,
  `pay_project_id` bigint(20) DEFAULT NULL,
  `pay_amount` varchar(50) DEFAULT NULL,
  `pay_note` varchar(255) DEFAULT NULL,
  `pay_exp_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `expense_item` (
  `exp_item_id` int(20) NOT NULL,
  `exp_item_name` varchar(255) DEFAULT NULL,
  `exp_item_quantity` varchar(255) DEFAULT NULL,
  `exp_item_rate` varchar(255) DEFAULT NULL,
  `exp_ref_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `finance_dep` (
  `fd_id` int(11) NOT NULL,
  `fd_name` varchar(100) NOT NULL,
  `fd_contact` varchar(13) NOT NULL,
  `fd_alt_contact` varchar(13) DEFAULT NULL,
  `fd_address` varchar(300) DEFAULT NULL,
  `fd_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `finance_dep_auth` (
  `fd_a_id` int(11) NOT NULL,
  `fd_r_id` int(11) NOT NULL,
  `fd_email` varchar(100) DEFAULT NULL,
  `fd_password` varchar(255) NOT NULL,
  `fd_token` varchar(455) NOT NULL,
  `fd_isactive` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `labours` (
  `lab_id` int(20) NOT NULL,
  `lab_name` varchar(200) DEFAULT NULL,
  `lab_contact` int(11) DEFAULT NULL,
  `lab_alt_contact` int(11) DEFAULT NULL,
  `lab_address` varchar(300) DEFAULT NULL,
  `lab_email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `material_item_list` (
  `mr_item_id` bigint(20) NOT NULL,
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

CREATE TABLE `material_requests` (
  `mr_r_id` bigint(20) NOT NULL,
  `material_ref_no` varchar(55) DEFAULT NULL,
  `mr_project_id` varchar(20) DEFAULT NULL,
  `mr_phase` varchar(155) DEFAULT NULL,
  `mr_date` varchar(55) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `notification_recipients` (
  `id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `read_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `particles` (
  `particle_id` int(20) NOT NULL,
  `particle_name` varchar(200) DEFAULT NULL,
  `particle_price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `phases` (
  `phase_id` int(11) NOT NULL,
  `phase_name` varchar(100) DEFAULT NULL,
  `phase_alt_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `sub_phases` (
  `sub_phase_id` int(11) NOT NULL,
  `sub_phase_name` varchar(100) DEFAULT NULL,
  `sub_phase_alt_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `superviser` (
  `sup_id` int(11) NOT NULL,
  `sup_name` varchar(100) NOT NULL,
  `sup_contact` varchar(13) NOT NULL,
  `sup_alt_contact` varchar(13) DEFAULT NULL,
  `sup_address` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `superviser_auth` (
  `sup_a_id` int(11) NOT NULL,
  `sup_r_id` int(11) NOT NULL,
  `sup_email` varchar(100) NOT NULL,
  `sup_password` varchar(300) NOT NULL,
  `sup_token` varchar(300) DEFAULT NULL,
  `sup_isactive` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `super_admin` (
  `su_id` int(11) NOT NULL,
  `su_name` varchar(200) DEFAULT NULL,
  `su_contact` varchar(15) DEFAULT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `super_admin_auth` (
  `su_a_id` int(11) NOT NULL,
  `su_r_id` int(11) NOT NULL,
  `su_email` varchar(80) DEFAULT NULL,
  `su_password` varchar(300) DEFAULT NULL,
  `su_token` varchar(400) DEFAULT NULL,
  `su_isactive` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `vendor_payments` (
  `pay_id` int(20) NOT NULL,
  `pay_vendor_id` int(20) DEFAULT NULL,
  `pay_project_id` bigint(20) DEFAULT NULL,
  `pay_amount` varchar(50) DEFAULT NULL,
  `pay_note` varchar(255) DEFAULT NULL,
  `pay_exp_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;