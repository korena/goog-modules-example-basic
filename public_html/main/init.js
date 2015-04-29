/* global goog, modA */

goog.provide('siphyc');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.module.ModuleManager');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager.CallbackType');
goog.require('goog.module.ModuleManager.FailureType');



/* modules loaded without plovr:*/

var moduleManager = goog.module.ModuleManager.getInstance();
var moduleLoader = new goog.module.ModuleLoader();


moduleLoader.setDebugMode(true);  // remove in production !!!!!!

moduleManager.setLoader(moduleLoader);

moduleManager.setAllModuleInfo({
    "moduleA" : ["main"],
    "moduleB" : ["main","moduleA"]
});
moduleManager.setModuleUris({
  "moduleA" : "moduleA/modA.js",
  "moduleB" : "moduleB/modB.js"
});


/* modules loaded with plovr: */

var moduleManagerPlovr = goog.module.ModuleManager.getInstance();
var moduleLoaderPlovr = new goog.module.ModuleLoader();


moduleLoaderPlovr.setDebugMode(true);  // remove in production !!!!!!

moduleManagerPlovr.setLoader(moduleLoaderPlovr);

moduleManagerPlovr.setAllModuleInfo(goog.global['PLOVR_MODULE_INFO']);
moduleManagerPlovr.setModuleUris(goog.global['PLOVR_MODULE_URIS']);


/* registering listeners for control buttons*/

goog.events.listen(goog.dom.getElement("loadA"),goog.events.EventType.MOUSEUP,function(e){
    moduleManager.execOnLoad("moduleA",function(){
    });
});
goog.events.listen(goog.dom.getElement("loadB"),goog.events.EventType.MOUSEUP,function(e){
    moduleManager.execOnLoad("moduleB",function(){
    });
});

goog.events.listen(goog.dom.getElement("loadC"),goog.events.EventType.MOUSEUP,function(e){
    moduleManagerPlovr.execOnLoad("moduleC",function(){
           try{
        alert("I am a call back, after module C has loaded!, I can actually call stuff inside the loaded module, \n\
               if properly exported");
    }catch(error){
        alert(""+error.message);
    }
    });
});
goog.events.listen(goog.dom.getElement("loadD"),goog.events.EventType.MOUSEUP,function(e){
    moduleManagerPlovr.execOnLoad("moduleD",function(){
    });
});



/* tell the module managers that the main moudule is already loaded!*/
moduleManager.setLoaded('main');

