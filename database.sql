
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_detail" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"detail_id" int NOT NULL,
	CONSTRAINT "user_detail_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- unused Future feature
CREATE TABLE "messages" (
	"id" serial NOT NULL,
	"sender_id" int NOT NULL,
	"message" TEXT NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	"conversation" int NOT NULL,
	CONSTRAINT "messages_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "details" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	CONSTRAINT "details_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "offers" (
	"id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"post_date" DATE NOT NULL,
	"volume" varchar(255) NOT NULL,
	"milk_date" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	"baby_name" bigint NOT NULL,
	CONSTRAINT "offer_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "requests" (
	"id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"post_date" DATE NOT NULL,
	"description" TEXT NOT NULL,
	"baby_name" varchar(255) NOT NULL,
	"baby_age" varchar(255) NOT NULL,
	CONSTRAINT "request_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "user_detail" ADD CONSTRAINT "user_detail_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_detail" ADD CONSTRAINT "user_detail_fk1" FOREIGN KEY ("detail_id") REFERENCES "details"("id");

ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("sender_id") REFERENCES "user"("id");


ALTER TABLE "offer" ADD CONSTRAINT "offer_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "request" ADD CONSTRAINT "request_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

