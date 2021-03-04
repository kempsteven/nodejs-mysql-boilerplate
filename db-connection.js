const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'questronix'
})
 
connection.connect((error) => { 
  if (error) {
    console.error('error connecting: ' + error.stack)
    return 
  }
})
 


connection.query(
  'CREATE TABLE IF NOT EXISTS posts ( '+
    'id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, ' +
    'title VARCHAR(255) NOT NULL, ' +
    'body VARCHAR(255) NOT NULL ' +
  ')'
  ,
  (error, results, fields) => {
    if (error) {
      console.log(error)
      return
    }
    console.log('Created Post Table!!');
  }
)

connection.query(
  `
    INSERT INTO posts (title, body)
    VALUES ('titi', 'titi');
  `,
  (error, results, fields) => {
    if (error) {
      console.log(error)
      return
    }
    console.log('Inserted New Post!');
  }
)


return connection
 

 
// connection.end();

