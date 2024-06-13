SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

-- SCHEMA
USE teste;

CREATE TABLE user (
    id      INT AUTO_INCREMENT NOT NULL,
    name    VARCHAR(100) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

-- DATA
INSERT INTO user (name) VALUES 
('User 1');