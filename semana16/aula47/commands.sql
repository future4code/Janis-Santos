CREATE TABLE PersonagensOnePiece (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  tripulation ENUM("Mugiwara", "Shirohige", "Akagami") NOT NULL,
  birth_date DATE,
  gender ENUM("male", "female") NOT NULL
);
SELECT
  *
FROM
  PersonagensOnePiece;
INSERT INTO
  PersonagensOnePiece(
    name,
    birth_date,
    gender,
    tripulation
  )
VALUES(
    "Nami",
    "2000-07-03",
    "male",
    "Mugiwara"
  );
INSERT INTO
  PersonagensOnePiece(name, gender, tripulation)
VALUES("Shanks", "male", "Akagami"),
  (
    "Edward New Gate",
    "male",
    "Shirohige"
  );
SELECT
  *
FROM
  PersonagensOnePiece
ORDER BY
  birth_date DESC;
SELECT
  COUNT(*),
  gender
FROM
  PersonagensOnePiece
GROUP BY
  gender;

  INSERT INTO
  Actor(name, salary, birth_date, gender)
VALUES
  (
    'Tony Ramos',
    400000,
    '1948-08-25',
    'male'
  ),
  (
    'Camila Pitanga',
    320000,
    '1977-06-14',
    'female'
  ),
  (
    'Antônio Fagundes',
    230000,
    '1949-04-10',
    'male'
  ),
  (
    'Fernanda Montenegro',
    400000,
    '1929-10-16',
    'female'
  ),
  (
    'Moacyr Franco',
    719333,
    '1936-10-05',
    'male'
  );

  