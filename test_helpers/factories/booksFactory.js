'use strict';
module.exports = (factory, Models) => {
  factory.define('Book', Models.Book, {
    title: 'Foo',
    createdAt: new Date(),
    updatedAt: new Date()
  });
};