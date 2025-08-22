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

ALTER TABLE `site_inspections` ADD `si_asign_by` VARCHAR(155) NOT NULL AFTER `si_asign_id`; 
ALTER TABLE `site_inspections` ADD `si_feedback` VARCHAR(155) NOT NULL AFTER `si_type`; 
ALTER TABLE `site_inspections` CHANGE `si_asign_by` `si_asign_by` VARCHAR(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL; 
ALTER TABLE `site_inspections` CHANGE `si_feedback` `si_feedback` VARCHAR(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL; 


ALTER TABLE `project_queries` CHANGE `q_title` `q_title` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL; 
ALTER TABLE `project_queries` CHANGE `q_raised_by` `q_raised_by` BIGINT NULL DEFAULT NULL; 
ALTER TABLE `project_queries` ADD `phase_id` INT NULL DEFAULT NULL AFTER `q_status`, ADD `phase_task_id` INT NULL DEFAULT NULL AFTER `phase_id`; 
ALTER TABLE `project_queries` ADD FOREIGN KEY (`phase_id`) REFERENCES `project_phase`(`pro_phase_id`) ON DELETE SET NULL ON UPDATE CASCADE; 
ALTER TABLE `project_queries` ADD FOREIGN KEY (`phase_task_id`) REFERENCES `project_phase_task`(`pt_id`) ON DELETE SET NULL ON UPDATE CASCADE; 
ALTER TABLE `project_queries` CHANGE `q_date` `q_date` VARCHAR(55) NULL DEFAULT NULL; 
ALTER TABLE `project_queries` ADD `project_id` BIGINT NULL DEFAULT NULL AFTER `q_status`; 
ALTER TABLE `project_queries` CHANGE `approved_date` `approved_date` VARCHAR(155) NULL DEFAULT NULL; 