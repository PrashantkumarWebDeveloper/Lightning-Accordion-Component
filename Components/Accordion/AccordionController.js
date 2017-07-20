({
	toggle : function(component, event, helper) {
        var accordionIndex = component.get('v.accordionIndex');
        var parentId = component.get('v.parentId');
		var cstmEvent = $A.get("e.c:AccordionEvent");
        cstmEvent.setParams({accordionIndex : accordionIndex, parentId : parentId});
        cstmEvent.fire();
        
	},
    onRender : function(component, event, helper) {
        var parentId = component.get('v.parentId');
        var accordionIndex = component.get('v.accordionIndex');
        var id = parentId + accordionIndex;
        var height = document.getElementById(id).scrollHeight+'px';
        component.set('v.height', height);
    }
})