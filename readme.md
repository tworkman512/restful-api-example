# Full Stack API

Today we are going to build a full-stack API from scratch.

## Description

We will be building an API that can manage evening courses, participants, and faculty at UW. That means we should be able to:

- Create new courses
- Create and assign students to a course
- Create and assign faculty to a course

### Data & Fields

We will want to be able to capture the following information:

#### Courses

- Name of the course
- Start Date for the course
- End Date for the course
- Location including building address and room number

#### Students

- First and last name
- Preferred name or nickname
- Email address

#### Faculty

- First and last name
- Preferred name or nickname
- Email address
- Role

## Features

In addition to basic CRUD operations, we will also want to be able to:

- Provide an endpoint for a course that returns a random student to call on during class

* GET /courses/:id/students/random
  - Math.random()

- Provide an endpoint that will mark attendance for a student for a specified date

* PATCH /students/:id
*

CRUD
"RESTful" API Design
It's more than just CRUD. We want to make the correct requests based off of actions and return the correct responses with status codes.

GET ALL - GET - /books - 200
Convention is you use a plural name here.

GET ONE - GET - /books/:id - 200
Convention is to use some unique identifier.
//\* CAN'T FIND IT - 404

CREATE - POST - /books - 201
//\* VALIDATION ERROR - 400/422

UPDATE - PUT/PATCH - /books/:id - 200
//\* Put - you are replacing the entire thing
//\* Patch - you are replacing only a part...only one or more valid fields.
//\* CAN'T FIND IT - 404
//\* VALIDATION ERROR - 400/422

DESTROY - DELETE - /books/:id - 200
//\* CAN'T FIND IT - 404
