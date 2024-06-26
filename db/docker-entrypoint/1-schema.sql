SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

-- SCHEMA
USE chatbot;

CREATE TABLE users (
    id      INT AUTO_INCREMENT NOT NULL,
    shadow_id VARCHAR(100) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    name    VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE messages (
    id        INT AUTO_INCREMENT NOT NULL,
    user_id   INT NOT NULL,
    date      DATETIME DEFAULT CURRENT_TIMESTAMP,
    message   VARCHAR(1000) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
