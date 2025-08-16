-- 16-08-2025
------------------------------------
ALTER TABLE expenses REMANE expense_project;

CREATE TABLE `expense_normal` (
 `exp_id` int NOT NULL AUTO_INCREMENT,
 `exp_type` enum('personal','firm','project') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'firm',
 `exp_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `exp_amount` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `exp_mode` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `exp_status` enum('paid','unpaid','pending') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'paid',
 `exp_attachment_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `exp_remark` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
 `exp_paid_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `exp_date` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `exp_category` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 PRIMARY KEY (`exp_id`)) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

ALTER TABLE `expense_normal` CHANGE `exp_status` `exp_status` VARCHAR(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'paid'; 

ALTER TABLE `file_manager` CHANGE `fs_doc_id` `fs_doc_id` BIGINT NOT NULL AUTO_INCREMENT, ADD PRIMARY KEY (`fs_doc_id`); 

ALTER TABLE `expense_normal` CHANGE `exp_status` `exp_status` VARCHAR(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL; 