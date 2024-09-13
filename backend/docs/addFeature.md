## To add a new feature to the project ---

### There are two different ways to add a new feature to the project 
1. You can add as a entity i.e. crud operations feature only related to particular object like 
    * client details CRUD, 
    * vendor details CRUD etc.
2. secondly as feature which is feature or action done by a object or applied to a object like 
   * status update,
   * payment done by client etc.
3. Based on this choose entitytype in the following section.



### process of createing ---

* run the command `npm run addFeature entityName entityType`
* *entityName* should be small letter *entityType* should be either *entity* or *feature* exactly.
* based on above mentioned criteria choose *entityType*.
* this will create a new folder named `entityNameModel` inside the model folder inside *entitytype* folder you have choosed and `entityNameControllers` inside controllers folder.
* And the same time it will create a routes with *entityName*. of type `/api/entityType/entityName/methodName`.
* Avoid using same *entityName* for diffrent *entityType*.