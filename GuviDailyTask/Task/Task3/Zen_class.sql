CREATE TABLE `Class` (
  `class_id` int PRIMARY KEY,
  `Batch_no` int,
  `Batch_id` varchar(50),
  `Road_map_no` varchar(100),
  `course_id` int
);
CREATE TABLE `Task`(
    `Task_No` int PRIMARY KEY ,
    `Task_Description` varchar (200),
    `submission_date` date,
    `student_id` int 
);


CREATE TABLE `Mentor` (
  `mentor_id` int PRIMARY KEY,
  `first_name` varchar(50),
  `last_name` varchar(50),
  `email` varchar(100),
  `phone_number` varchar(15)
);

CREATE TABLE `Courses` (
  `course_id` int PRIMARY KEY,
  `course_name` varchar(100),
  `description` text,
  `start_date` date,
  `end_date` date,
  `mentor_id` int
);

CREATE TABLE `Students` (
  `student_id` int PRIMARY KEY,
  `first_name` varchar(50),
  `last_name` varchar(50),
  `email` varchar(100),
  `phone_number` varchar(15),
  `date_of_birth` date,
  `address` varchar(255),
  `guardian_name` varchar(100),
  `guardian_contact` varchar(15)
);

CREATE TABLE `Enrollments` (
  `enrollment_id` int PRIMARY KEY,
  `student_id` int,
  `course_id` int,
  `enrollment_date` date
);

CREATE TABLE `ClassSchedule` (
  `schedule_id` int PRIMARY KEY,
  `course_id` int,
  `day_of_week` varchar(15),
  `start_time` time,
  `end_time` time,
  `topic` varchar(100)
);

CREATE TABLE `Interview` (
    `interview_id` int PRIMARY KEY,
    `interview_date` date,
    `interview_time` time,
    `student_id` int;
    `HR_id` int
);
CREATE TABLE `Certificate`(
    `certificate_id` int PRIMARY KEY,
    `certificate_no` int,
    `student_id` int,
    `course_id` int,
    `issued_date` date
);

ALTER TABLE `Courses` ADD FOREIGN KEY (`mentor_id`) REFERENCES `Mentor` (`mentor_id`);

ALTER TABLE `Enrollments` ADD FOREIGN KEY (`student_id`) REFERENCES `Students` (`student_id`);

ALTER TABLE `Enrollments` ADD FOREIGN KEY (`course_id`) REFERENCES `Courses` (`course_id`);

ALTER TABLE `ClassSchedule` ADD FOREIGN KEY (`course_id`) REFERENCES `Courses` (`course_id`);

ALTER TABLE `Course` ADD FOREIGN KEY (`course_id`) REFERENCES `Class` (`class_id`);

ALTER TABLE `Course` ADD FOREIGN KEY (`course_id`) REFERENCES `Certificate` (`course_id`);

ALTER TABLE `Students` ADD FOREIGN KEY (`student_id`) REFERENCES `Interview` (`student_id`);

ALTER TABLE `Students` ADD FOREIGN KEY (`student_id`) REFERENCES `Task` (`student_id`);