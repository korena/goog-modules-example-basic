goog.provide('modC');
goog.require('goog.dom');



/**
 * @constructor
 * @returns {undefined}
 */
modC = function(){
    
};

modC.prototype.announce = function(){
    goog.dom.getElement('modC-results').innerHTML = "<span style='color: green;'>I am the result of calling a function from module C, after dynamically loading it</span>";
};

MC = new modC();
MC.announce();


/* tell the module managers that the main moudule is already loaded!*/
moduleManagerPlovr.setLoaded('moduleC');



