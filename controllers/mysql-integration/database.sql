CREATE TABLE location(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    address VARCHAR(80), 
    lat VARCHAR(30), 
    lng VARCHAR(30)
);

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_location INT, 
    names VARCHAR(70) NOT NULL,
    phone VARCHAR(9) NOT NULL,
    email VARCHAR(50)
);

CREATE TABLE ordenes(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL, 
    products JSON NOT NULL,
    total DECIMAL(10,0) NOT NULL,
    status ENUM("pending", "completed", "cancelled"),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

