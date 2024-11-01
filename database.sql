use digitalproject;
CREATE TABLE arrest_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    officer_name VARCHAR(100) NOT NULL,
    officer_id VARCHAR(50) NOT NULL,
    criminal_name VARCHAR(100) NOT NULL,
    criminal_id VARCHAR(50) NOT NULL,
    arrest_date DATE NOT NULL,
    arrest_location VARCHAR(255) NOT NULL,
    charges TEXT NOT NULL
    -- evidence LONGBLOB -- To store uploaded files, such as images or documents
    -- submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- To record when the report was submitted
);
select * from arrest_reports;
CREATE TABLE fir_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    incident_date DATE NOT NULL,
    incident_description TEXT NOT NULL
     -- To store optional uploaded proof files (images, documents, etc.)
    -- To track when the FIR was filed
);
select * from fir_reports;
CREATE TABLE missing_person_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reporter_name VARCHAR(100) NOT NULL,
    reporter_contact VARCHAR(15) NOT NULL,
    missing_person_name VARCHAR(100) NOT NULL,
    missing_person_id VARCHAR(50) NOT NULL,
    missing_date DATE NOT NULL,
    missing_location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
    -- To store any optional uploaded evidence (images, documents, etc.)
     -- To track when the report was filed
);
select * from missing_peron_reports;
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
    -- To track when the message was submitted
);

drop table arrest_reports;
drop table fir_reports;
drop table missing_person_reports;
drop table contact_messages;
select * from contact_messages;
select * from fir_reports;


