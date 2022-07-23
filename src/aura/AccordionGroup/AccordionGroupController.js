({
    doInIt : function(component, event, helper){
        var globalId = component.getGlobalId();
        var groupId ='_'+ globalId.replace(/[:;]/g,'_') + '_accordionGroup';
        component.set('v.groupId', groupId);
        
        var activeIndex = component.get('v.activeIndex');
        helper.doInItHelper(component, groupId);
        helper.manageAccordionArray(component, activeIndex);
    },
	handleToggle : function(component, event, helper) {
         
		var index = event.getParam('accordionIndex');
        var parentId = event.getParam('parentId');
        var groupId = component.get('v.groupId');
        if(groupId == parentId){
            helper.manageAccordionArray(component, index);
        }
	}
})