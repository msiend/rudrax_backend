// class MyClass {
//     constructor(value, ob) {
//       this.value = value; 
//       this.ob = ob
//      // store value in static property
//     }
  
//     // Static method
//      accessInstanceValue(data) {
//       console.log(this.value, data); 
//       console.log(this.ob); // Access static property
//     }
//   }
  
//   const obj = new MyClass('Hello', {name: "panchanan"});
//   obj.accessInstanceValue('world!'); 


// UPDATE ?? 
// SET first_name = ?, last_name = ?, email = ?
// WHERE id = ?;

// const valu = ['id', 'name']
// const cond = ['mr_id']
// const values = valu.map((el, index) => 'SET ' + el + ' = ?' + `${index=== valu.length - 1 ? '' : ','}`)
// const condition = cond.map((el, index) => el + ' = ?' + `${index=== cond.length - 1 ? ';' : ','}`)
// const sql = `UPDATE ?? ` + values.join(' ') + ' WHERE ' + condition.join(' ')

// console.log(sql);



CREATE TABLE `superviser` (
    `sup_id` int NOT NULL PRIMARY KEY auto_increment,
    `sup_name` varchar(100) NOT NULL,
    `sup_contact` varchar(13) NOT NULL,
    `sup_alt_contact` varchar(13) DEFAULT NULL,
    `sup_address` varchar(300) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  
  
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

CREATE TABLE `cons` (
  `con_id` int(20) NOT NULL PRIMARY KEY auto_increment,
  `con_name` varchar(200) DEFAULT NULL,
  `con_contact` int(11) DEFAULT NULL,
  `con_alt_contact` int(11) DEFAULT NULL,
  `con_address` varchar(300) DEFAULT NULL,
  `con_email` varchar(80) DEFAULT NULL,
  `con_status` varchar(80) DEFAULT 'open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





