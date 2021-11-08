mysql> describe usuarios;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| id_usuario       | int          | NO   | PRI | NULL    |  |
| num_registro     | int          | YES  | UNI | NULL    |                |
| email_usuario    | varchar(20)  | YES  | UNI | NULL    |                |
| nombre           | varchar(15)  | YES  |     | NULL    |                |
| primer_apellido  | varchar(10)  | YES  |     | NULL    |                |
| segundo_apellido | varchar(10)  | YES  |     | NULL    |                |
| imagen_usuario   | blob         | YES  |     | NULL    |                |
| password         | varchar(250) | YES  |     | NULL    |                |
| intento          | int          | YES  |     | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+

INSERT INTO usuarios (num_registro, email_usuario, nombre, primer_apellido, segundo_apellido, password, intento) 
VALUES 
('1492', 'mat_de@gmail.com', 'Matilde', 'Garcia', 'Mendez', '1234', '1'), 
('1483', 'cosi@gmail.com', 'Jasmine', 'Marquez', 'Vazquez', '1234', '2'),  
('1487', 'windy@gmail.com', 'Valeria', 'Oliva', 'Hernandez', '1234', '3');



mysql> describe responsiva;
+-----------------------+--------------+------+-----+---------+----------------+
| Field                 | Type         | Null | Key | Default | Extra          |
+-----------------------+--------------+------+-----+---------+----------------+
| id_responsiva         | int          | NO   | PRI | NULL    |  |
| nombre                | varchar(50)  | YES  |     | NULL    |                |
| folio                 | varchar(10)  | YES  |     | NULL    |                |
| superficie_responsiva | varchar(10)  | YES  |     | NULL    |                |
| num_catastral         | varchar(15)  | YES  |     | NULL    |                |
| uso                   | varchar(100) | YES  |     | NULL    |                |
| area_patrimonial      | varchar(10)  | YES  |     | NULL    |                |
| uso_de_suelo          | varchar(15)  | YES  |     | NULL    |                |
| id_vigencia           | int          | NO   | MUL | NULL    |                |
| id_usuario            | int          | NO   | MUL | NULL    |                |
| id_tipo_tramite       | int          | NO   | MUL | NULL    |                |
| id_predio             | int          | NO   | MUL | NULL    |                |
+-----------------------+--------------+------+-----+---------+----------------+


INSERT INTO responsiva (nombre, folio, superficie_responsiva, num_catastral, uso, area_patrimonial) 
VALUES 
('Visto Bueno', 'F-025', '258', '555-48-777', 'Cantina', 'No'), 
('Liciencia especial tipo C', '2018/2445', '2000', '879-54-2587', 'Restaurante', 'No'),  
('Licencia especial de demolicion', 'Folio-5487', '540', '147-84-952', 'Bar', 'No');

SELECT * FROM responsiva;



mysql> describe vigencia;
+-------------+----------+------+-----+---------+----------------+
| Field       | Type     | Null | Key | Default | Extra          |
+-------------+----------+------+-----+---------+----------------+
| id_vigencia | int      | NO   | PRI | NULL    |  |
| expedicion  | datetime | YES  |     | NULL    |                |
| vencimiento | datetime | YES  |     | NULL    |                |
+-------------+----------+------+-----+---------+----------------+

INSERT INTO vigencia (expedicion,vencimiento) 
VALUES 
('2017-10-14','2020-10-14'), 
('2018-10-14','2021-10-14'),  
('2019-10-14','2020-10-14');

SELECT * FROM vigencia;


desc tipo_tramite;
+-----------------+-------------+------+-----+---------+----------------+
| Field           | Type        | Null | Key | Default | Extra          |
+-----------------+-------------+------+-----+---------+----------------+
| id_tipo_tramite | int         | NO   | PRI | NULL    |  |
| manifestacion   | varchar(12) | YES  |     | NULL    |                |
| licencia        | varchar(85) | YES  |     | NULL    |                |
| otra_resp       | varchar(30) | YES  |     | NULL    |                |
| resp_grupo      | int         | YES  |     | NULL    |                |
+-----------------+-------------+------+-----+---------+----------------+

INSERT INTO tipo_tramite (manifestacion,licencia,otra_resp,resp_grupo) values('tipo B',' ','',1);
INSERT INTO tipo_tramite (manifestacion,licencia,otra_resp,resp_grupo) values('tipo C',' ','',2);
INSERT INTO tipo_tramite (manifestacion,licencia,otra_resp,resp_grupo) values('','Licencia especial','',3);
INSERT INTO tipo_tramite (manifestacion,licencia,otra_resp,resp_grupo) values('',' ','Visto Bueno de seguridad',4);

SELECT * FROM tipo_tramite;


desc observaciones;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| id_observaciones | int          | NO   | PRI | NULL    |  |
| descripcion      | varchar(100) | YES  |     | NULL    |                |
| resp_grupo       | int          | YES  |     | NULL    |                |
| id_tipo_tramite  | int          | NO   | MUL | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+

INSERT INTO observaciones(descripcion, id_tipo_tramite, resp_grupo) 
values 
('tipo C', 1, 2),
('tipo #', 1, 3),
('tipo 4', 1, 4),
('tipo A', 2, 1);

SELECT * FROM observaciones;


desc propietario;
+------------------+-------------+------+-----+---------+----------------+
| Field            | Type        | Null | Key | Default | Extra          |
+------------------+-------------+------+-----+---------+----------------+
| id_propietario   | int         | NO   | PRI | NULL    |  |
| nombre           | varchar(15) | YES  |     | NULL    |                |
| primer_apellido  | varchar(10) | YES  |     | NULL    |                |
| segundo_apellido | varchar(10) | YES  |     | NULL    |                |
| telefono         | varchar(10) | YES  |     | NULL    |                |
| rfc              | varchar(13) | YES  | UNI | NULL    |                |
| resp_grupo       | int         | YES  |     | NULL    |                |
+------------------+-------------+------+-----+---------+----------------+

INSERT INTO propietario SET ?
INSERT INTO propietario (nombre,primer_apellido,segundo_apellido,telefono,rfc,resp_grupo) 
VALUES ('nombre','ape1','ape2','tel','rfc',1)

--------------------------------------------------------------------------------------------------------
Consultas cruzadas de tabla tipo_tramte y observaciones;


SELECT o.id_observaciones, o.descripcion, o.id_tipo_tramite, t.id_tipo_tramite, t.manifestacion, t.licencia, t.otra_resp
FROM observaciones as o INNER JOIN tipo_tramite as t ON o.id_tipo_tramite = t.id_tipo_tramite;

SELECT o.descripcion, t.manifestacion, t.licencia, t.otra_resp
FROM observaciones as o INNER JOIN tipo_tramite as t ON o.id_tipo_tramite = t.id_tipo_tramite;


//usando el nuego campo resp_grupo

SELECT  o.id_observaciones, o.descripcion, t.manifestacion, t.licencia, t.otra_resp
FROM observaciones as o INNER JOIN tipo_tramite as t ON o.resp_grupo = t.resp_grupo;

SELECT pre.cp, pre.calle, pre.colonia, pro.nombre, pro.rfc, pre.id_propietario, pro.id_propietario
FROM predio as pre INNER JOIN propietario as pro ON pre.id_propietario = pro.id_propietario;


------------------------------------
        UPDATE

UPDATE observaciones
SET resp_grupo=2 WHERE id_observaciones=1;

DELETE FROM propietario;

---------------------------------------------------------------

ALTER TABLE propietario
ADD razon  VARCHAR(300) NULL;

ALTER TABLE propietario
MODIFY COLUMN razon VARCHAR(90) NULL;

ALTER TABLE propietario DROP COLUMN resp_grupo;

ALTER TABLE propietario
ADD resp_grupo  VARCHAR(30) NULL;


ALTER TABLE propietario
MODIFY COLUMN nombre VARCHAR(40) NULL;

ALTER TABLE propietario
MODIFY COLUMN primer_apellido VARCHAR(40) NULL;

ALTER TABLE propietario
MODIFY COLUMN segundo_apellido VARCHAR(40) NULL;

ALTER TABLE propietario
MODIFY COLUMN telefono VARCHAR(14) NULL;

ALTER TABLE propietario
MODIFY COLUMN rfc VARCHAR(13) NULL;

ALTER TABLE propietario
DROP rfc;

ALTER TABLE propietario
ADD rfc  VARCHAR(13) NULL;

ALTER TABLE predio
MODIFY COLUMN niveles_snb VARCHAR(10) NULL;

SELECT COUNT(*) FROM usuarios;

select email_usuario from usuarios;

INSERT INTO propietario(nombre,resp_grupo)
VALUES
('Osvaldo','2018/01'),
('Nadia','2018/02'),
('Axel','2019/01');



ALTER TABLE propietario CHANGE id_propietario id_propietario INT UNSIGNED NOT NULL;

select * from propietario;
select * from predio;
select * from observaciones;
select * from tipo_tramite;
select * from vigencia;
select * from responsiva;
select * from usuarios;