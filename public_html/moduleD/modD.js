goog.provide('modD');
goog.require('goog.dom');



/**
 * @constructor
 * @returns {undefined}
 */
modD = function(){
    
};

modD.prototype.announce = function(){
    goog.dom.getElement('modD-results').innerHTML = "<span style='color: green;'>I am the result of calling a function from module D, after dynamically loading it, if you try to load me (module D) before module C, I will drag it with me!</span>";
};


MD = new modD();
MD.announce();


/* tell the module managers that the main moudule is already loaded!*/
moduleManagerPlovr.setLoaded('moduleD');



