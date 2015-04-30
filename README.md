# goog-modules-example-basic
A simple, very basic example of dynamically loading javascript files into a 
single page web applicaiton, this was meant for a specific developer to checkout, but 
made public in the hope that it will help someone get over the basics.


plovr is provided with the thingy, and needs to be run before this example can be used.

_________________________________________
NOTES:
- This will not teach you anything about basic use of plovr, you're expected to know, but here's a hint: 
  java -jar build/plover.jar serve public_html/plovr.json (the project structure is a mess, you do not want to setup a project like this.)
- plovr is used even when not needed for module loading (A & B), because no one should use closure compiler manually unless he has a good reason to do so, which is probably never. I know we're not compiling here, but it's the next thing you're expected to do.
