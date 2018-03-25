use bookstore;


create table authors1 
(
	author_id int unsigned NOT NULL auto_increment,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    gender char(10) NOT NULL,
    data_of_birth date NOT NULL,
    email varchar(255) NOT NULL,
    UNIQUE(email, author_id),
    
    primary key (author_id)
);

create table books
(
	id int unsigned NOT NULL auto_increment,
    title varchar(255) NOT NULL,
    data_public date,
    date_acquisition date,
    book_comments varchar(255),
    price decimal(10,2) NOT NULL,
    autor_id int unsigned NOT NULL,
    
    primary key (id),
    foreign key (autor_id)
    references authors1(author_id)
);


create table consumers (
	consumers_id int unsigned NOT NULL auto_increment,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    gender char(10) NOT NULL,
    age int,
    city varchar(255) DEFAULT 'São Paulo',
    email varchar(255) NOT NULL,
    UNIQUE(consumers_id, email),
    CONSTRAINT Age_Person
    CHECK (Age>= 18)    
	
);

create table books_category
(
	bookcategory_id int unsigned NOT NULL auto_increment,
    category_type varchar(255) NOT NULL,
    description varchar(255),
    UNIQUE (bookcategory_id, category_type)
);

create table orders 
(
	order_id int unsigned NOT NULL auto_increment,
    cunsumer_id int unsigned NOT NULL,
    order_date timestamp NOT NULL
    DEFAULT NOW(),
    order_value varchar(255) NOT NULL,
	foreign key (consumer_id)
    references consumer (cosumer_id),
    primary key (order_id)
);

