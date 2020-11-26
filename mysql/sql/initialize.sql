CREATE DATABASE IF NOT EXISTS vue_rpg CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON vue_rpg.* TO 'root'@'%';

FLUSH PRIVILEGES;
