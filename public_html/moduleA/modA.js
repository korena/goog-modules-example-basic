goog.provide('modA');
goog.require('goog.dom');



/**
 * @constructor
 * @returns {undefined}
 */
modA = function(){
    
};

modA.prototype.announce = function(){
    goog.dom.getElement("modA-results").innerHTML = "<span style='color: green;'>I am the result of calling a function from module A, after dynamically loading it</span>";
};


var MA = new modA();
MA.announce();



/* tell the module managers that the main moudule is already loaded!*/
moduleManager.setLoaded('moduleA');
//goog.exportSymbol("modA",modA);


