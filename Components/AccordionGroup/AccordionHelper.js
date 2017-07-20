({
    doInItHelper : function(component, groupId){
        var body = component.get('v.body');
        var openIconName = component.get('v.openIconName');
        var closeIconName = component.get('v.closeIconName');
        var iconSize = component.get('v.iconSize');
        
        for(var x = 0; x < body.length; x++)
        {
            body[x].set('v.iconSize', iconSize);
            body[x].set('v.openIconName', openIconName);
            body[x].set('v.closeIconName', closeIconName);
            body[x].set('v.parentId', groupId);
            body[x].set('v.accordionIndex', x);
        }
        component.set('v.body', body);
    },
	manageAccordionArray : function(component, index) {
		var body = component.get('v.body');
        for(var x = 0; x < body.length; x++)
        {
            if(x == index){
               body[x].set('v.show', !body[x].get('v.show'));
            }
            else{
            	 body[x].set('v.show', false);
            }
            
        }
        component.set('v.body', body);
	}
})