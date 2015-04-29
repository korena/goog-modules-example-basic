goog.provide('modB');
goog.require('goog.dom');



/**
 * @constructor
 * @returns {undefined}
 */
modB = function(){
    
};

modB.prototype.announce = function(){
    goog.dom.getElement("modB-results").innerHTML = "<span style='color: green;'>I am the result of calling a function from module B, after dynamically loading it, if you try to load me (module B) before module A, I will drag it with me!</span>";
};

MB = new modB();
MB.announce();


/* tell the module managers that the main moudule is already loaded!*/
moduleManager.setLoaded('moduleB');


