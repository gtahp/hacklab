/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    email : { type: 'string' },

    password : { type: 'string' },

    cpf : { type: 'integer' },

    cvv : { type: 'integer' },

    cardn : { type: 'integer' },

    datecard : { type: 'string' },

    address : { type: 'string' },

    cep : { type: 'string' },

    addressnumber : { type: 'string' },

    tel : { type: 'string' }
  }
};

