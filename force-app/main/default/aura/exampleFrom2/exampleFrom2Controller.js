({
    createAccount  : function(component, event, helper) {
        var action = component.get("c.saveContact");
        action.setParams({
            "cntRec":component.get("v.cnt")
        });
        action.setCallback(this, function(response){
            if(response.getState()==='SUCCESS'){
                var accId = response.getReturnValue();
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "type":"Success",
                    "message": "Contact created successfully."
                });
                toastEvent.fire();
                
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": accId,
                    "slideDevName": "related"
                });
                navEvt.fire();
            }
        });
        $A.enqueueAction(action);
    }
})
