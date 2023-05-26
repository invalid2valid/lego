import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className=" p-5 m-10 shadow-md hover:shadow-lg">
        <h1 className="text-xl font-semibold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          Access token: short-lived, limited-privilege token used to access
          protected resources. <br />
          Refresh token: long-lived, high-privilege token used to obtain new
          access tokens. <br />
          Access tokens are typically stored in the browsers local storage or in
          a cookie. Refresh tokens are typically stored in the browsers local
          storage or in a secure key-value store.
        </p>
      </div>
      <div className=" p-5 m-10 shadow-md hover:shadow-lg">
        <h1 className="text-xl font-semibold">
          What is express js? What is Nest JS?
        </h1>
        <p>
          Express.js is a lightweight web application framework for Node.js that
          provides a simple and flexible way to build web applications and APIs.
          It is known for its minimalistic approach, extensive middleware
          ecosystem, and flexibility in handling HTTP requests and responses.{" "}
          <br />
          NestJS is a progressive Node.js framework built on top of Express.js.
          It introduces additional features and architectural patterns inspired
          by Angular, such as modularity, dependency injection, and TypeScript
          support. NestJS is designed for scalable and maintainable server-side
          applications, providing structure and productivity-enhancing features
          for building APIs, microservices, and full-stack applications.
        </p>
      </div>
      <div className=" p-5 m-10 shadow-md hover:shadow-lg">
        <h1 className="text-xl font-semibold">
          What is MongoDB aggregate and how does it work ?
        </h1>
        <p>
          MongoDB-s aggregate is a method for performing advanced data
          aggregation operations on collections. It allows for complex
          computations, transformations, and analysis of data using a pipeline
          of stages. The stages include grouping, filtering, sorting,
          projecting, and applying various operators to shape and process the
          data. It provides powerful aggregation capabilities, such as sum,
          average, count, and more, enabling advanced data analysis and
          reporting.
        </p>
      </div>
      <div className=" p-5 m-10 shadow-md hover:shadow-lg">
        <h1 className="text-xl font-semibold">
          Compare SQL and NoSQL databases?
        </h1>
        <p>
          SQL databases are relational databases that use structured query
          language (SQL) to query data. They are good for storing structured
          data, such as customer records or product inventory. However, they can
          be difficult to scale and are not as flexible as NoSQL databases.{" "}
          <br />
          NoSQL databases are non-relational databases that do not use SQL. They
          are good for storing unstructured data, such as social media posts or
          sensor data. They are also more flexible than SQL databases and can be
          scaled more easily. <br />
          The best database for you will depend on your specific needs. If you
          need to store structured data, a SQL database is a good choice. If you
          need to store unstructured data or need a more flexible database, a
          NoSQL database is a good choice.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
