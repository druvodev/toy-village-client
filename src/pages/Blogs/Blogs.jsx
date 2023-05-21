import React from "react";

const Blogs = () => {
  return (
    <div className="mx-5 sm:mx-10 py-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-center">
        Find Your Questions
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              An access token is a credential that grants permission to access
              specific resources or perform actions. It is issued by an
              authentication server and used to authenticate and authorize
              requests to protected APIs or resources.
            </p>
            <p>
              A refresh token is a credential that is used to obtain a new
              access token when the current one expires, without requiring the
              user to re-authenticate.
            </p>
            <p>
              Access tokens should be stored in memory during the client's
              active session. Refresh tokens should be securely stored on the
              client-side, commonly in an HTTP-only cookie or a secure storage
              mechanism.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">SQL Databases:</p>
            <ul className="list-disc list-inside">
              <li>Relational model with fixed schemas</li>
              <li>Structured data and complex relationships</li>
              <li>ACID properties for data integrity</li>
              <li>Strong consistency and support for complex queries</li>
            </ul>
            <p className="font-semibold mt-5">NoSQL Databases:</p>
            <ul className="list-disc list-inside">
              <li>
                Flexible schemas for unstructured and semi-structured data
              </li>
              <li>
                Eventual consistency and trade-off for improved performance
              </li>
              <li>
                Various data models (key-value, document, columnar, graph)
              </li>
              <li>Horizontal scalability for large data and high traffic</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Express JS:</p>
            <ul className="list-disc list-inside">
              <li>
                Minimal and flexible web application framework for Node.js
              </li>
              <li>Extensive ecosystem of plugins and libraries</li>
              <li>Handles routing, HTTP requests/responses, and middleware</li>
            </ul>
            <p className="font-semibold mt-5">Nest JS:</p>
            <ul className="list-disc list-inside">
              <li>Built with TypeScript and inspired by Angular</li>
              <li>
                Provides features like dependency injection, modules, decorators
              </li>
              <li>Progressive and opinionated Node.js framework</li>
              <li>Emphasizes scalability, maintainability, and efficiency</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              MongoDB's aggregate is a feature for performing complex data
              manipulations and aggregations on collections of documents. It
              uses a pipeline of stages to transform and analyze data. Each
              stage applies a specific operation to the input documents and
              passes the results to the next stage. The pipeline stages can
              include filtering, sorting, grouping, and computing aggregate
              values. The aggregate function provides a flexible and efficient
              way to process data within MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
