var Reflux = require('reflux');
var $ = require('jquery');
var ProductsActions = require('./actions/productsActions');

var ProductsStore = Reflux.createStore({
    listenables: [ProductsActions],
    productList: [],
    sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats,memes',

    init: function() {
        this.fetchProducts();
    },

    fetchProducts: function() {
        $.ajax({
            url: this.sourceUrl,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.imagelist = data.items;
                this.trigger(this.imagelist);
            }
        });
    }
});

module.exports = ProductsStore;