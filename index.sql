CREATE database randomizer;

CREATE TABLE numbers (
   id INT NOT NULL AUTO_INCREMENT,
   code int(3),
   crate VARCHAR(255),
   PRIMARY KEY ( id )
);

insert into numbers (code,crate)  values(123, 'wellbeing')