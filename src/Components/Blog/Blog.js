import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <h5 className='fw-bold'>Question: Difference between javascript and nodejs?</h5>
      <p>Answer:Javascript is a programming language that can run any web browser or javascipt engine.Manually its use for client side for some dynamic changes in a web page without refreshing the site.it can run any engine like firefox,google chrome.Nodejs is an interpreter and environment of javascipt with some specific library.It mainly using for accessing or performing any non blocking operation of any operating system,like accessing any hardware specific information.Its only run in V8 engine.</p>
      <h5 className='fw-bold'>Question:When should you use nodejs and when should you use mongodb?</h5>
      <p>Answer:These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language.If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.MySql, CouchDB, DynamoDB Postgres are examples of other databases. Different databases have different strengths and different ways of using them so it's a whole different question to choose the right/best database for what you are doing.</p>
      <h5 className='fw-bold'>Question:Differences between sql and nosql databases?</h5>
      <p>Answer:SQL is sequel.It is relational datatbase management system.This databse has fixed schema.Table based database.Not preffered for large datasets.Vertically schalable.Nosql is non-relational dtabase management system.its not sequel.These database schemas are dynamic.Document base,graph based database.Prefered for large datases.Horizontally schalable.</p>
      <h5 className='fw-bold'>Question:What is the purpose of jwt and how does it work?</h5>
      <p>Answer:JWT stands for JSON web token.It is used to share security information between two parties,client and server.JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.JWT can be broken down into three parts: header, payload, and signature. Each part is separated from the other by dot,the header describes the algorithm used to generate the signature.All the claims within JWT authentication are stored in this part. Claims are used to provide authentication to the party receiving the token.The signature part of a JWT is derived from the header and payload fields.</p>
    </div>
  );
};

export default Blog;