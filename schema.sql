DROP DATABASE IF EXISTS corona_cocktaildb;

CREATE DATABASE corona_cocktailDB;
Use corona_cocktailDB;

create table users
(
	id int auto_increment,
	first_name VARCHAR(30) null,
	last_name VARCHAR(30) null,
	password VARCHAR(50) null,
	constraint Users_pk
		primary key (id)
);


create table reviews
(
	id int auto_increment,
	rate_cocktail int null,
	review_cocktail VARCHAR(250) null,
	user_id int null,
	constraint reviews_pk
		primary key (id),
	constraint reviews_users_id_fk
		foreign key (user_id) references users (id)
			on update cascade on delete cascade
);
/*Sam 7/11/20 */
CREATE TABLE cocktails(
	id INT NOT NULL AUTO_INCREMENT,
	cocktail_name VARCHAR(100) NULL,
	ingredients VARCHAR(500) NULL,
	directions VARCHAR(500) NULL,
	review_id INT NULL,
	CONSTRAINT cocktails_pk
	PRIMARY KEY (id),
	CONSTRAINT review_id_fk
	FOREIGN KEY (review_id) REFERENCES reviews (id)
	ON UPDATE cascade ON DELETE cascade 
);

/* Juan 7/9/20 */
INSERT INTO users (first_name, last_name, password) VALUES ('Bill', 'Nye', 'scienceguy');
/* Logan 7/9/20 */
INSERT INTO users (first_name, last_name, password) VALUES ('Sam', 'Williams', 'soccerman');

/* INSERT MANUALLY TESTING GET Sam 7/11/2020 */
INSERT INTO cocktails (cocktail_name, ingredients, directions) VALUES ('water', 'water ice', 'add ice then water');
/* TESTING POST ENDPOINT Sam 7/12/2020 */
INSERT INTO cocktails (cocktail_name, ingredients, directions) VALUES ('soda', 'your favorite soda and ice', 'pour over ice');


/* Juan 7/11/20 */
alter table reviews
	add cocktail_id int null;

/* Adding testing values to reviews Juan 7/13/20 */
INSERT INTO reviews (rate_cocktail, review_cocktail, user_id, cocktail_id) VALUES (6, 'Tastes like a brisk mid-october morning.', 1, 1);
INSERT INTO reviews (rate_cocktail, review_cocktail, user_id, cocktail_id) VALUES (4, 'Extremely bitter, like the sub from Chem 101 Freshman year', 1, 1);

/* added foreign key to be able to fetch join data */
alter table reviews
	add constraint reviews_cocktails__fk
		foreign key (cocktail_id) references cocktails (id)
			on update cascade on delete cascade;
