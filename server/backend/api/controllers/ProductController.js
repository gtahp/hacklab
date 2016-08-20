/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `ProductController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `ProductController.create()`
   */
  create: function(req, res){
  var params = req.params.all()
  Product.create({name: params.name}).exec(function createCB(err,created){
  return res.json({
  notice: 'Created product with name ' + created.name });
}); },

  hi: function(req, res){
    Product.find({name : { '!': 'foo' }}).exec(function (err, prod){
  if (err) {
    return res.serverError(err);
  }
  sails.log('Check it out:', prod.length, prod);
  return res.json(prod);
});

  },


  /**
   * `ProductController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
}
};

