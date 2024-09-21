## To add a new feature to the project ---

### There are two different ways to add a new feature to the project

1. You can add as a entity i.e. crud operations feature only related to particular object like
   - client details CRUD,
   - vendor details CRUD etc.
2. secondly as feature which is feature or action done by a object or applied to a object like
   - status update,
   - payment done by client etc.
3. Based on this choose entitytype in the following section.

### process of createing ---

- run the command `npm run addFeature entityName entityType`
- _entityName_ should be small letter _entityType_ should be either _entity_ or _feature_ exactly.
- based on above mentioned criteria choose _entityType_.
- this will create a new folder named `entityNameModel` inside the model folder inside _entitytype_ folder you have choosed and `entityNameControllers` inside controllers folder.
- And the same time it will create a routes with _entityName_. of type `/api/entityType/entityName/methodName`.
- Avoid using same _entityName_ for diffrent _entityType_.
