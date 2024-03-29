# Lightning-Accordion-Component

Check out the demo here: [Demo](http://prashantmeandev-developer-edition.ap7.force.com/#accordion)

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

### How to create it?

**It requires two steps:**
1. Create lighting components and events(by copy paste from available code in this repository). Components are Accordion and AccordionGroup and event is AccordionEvent.
2. Use it in your component or app as below:
```html
<c:AccordionGroup >

     <c:Accordion >
         <aura:set attribute="header">
              Header1
         </aura:set>
         <aura:set attribute="body">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         </aura:set>
     </c:Accordion>
     
     <c:Accordion >
         <aura:set attribute="header">
               Header2
         </aura:set>
         <aura:set attribute="body">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
         </aura:set>
      </c:Accordion>
                
</c:AccordionGroup>
```

**You are done!**

***
## Available Options(Accordion Component):

### body ### 
 **Type:** Aura.Component[]

 **Required:** Yes

 **Default Value:** Not Available

 **Description:** This will be your body for accordion. You can add your html or text here. 

### header ### 
 **Type:** Aura.Component[]

 **Required:** Yes

 **Default Value:** Not Available

 **Description:** This will be your header(or panel heading) for accordion. You can add your html or text here. 

### headerClass ### 
 **Type:** String

 **Required:** No

 **Description:** This class will be applied to the header section of accordion.

### class ### 
 **Type:** String

 **Required:** No

 **Description:** This class is will be applied to accordion container.

### iconWrapClass ### 
 **Type:** String

 **Required:** No

 **Description:** This class will be applied to header icon(open and close) container.

## Available Options(AccordionGroup Component):

### activeIndex ### 
 **Type:** Integer

 **Required:** No

 **Default Value:** 0

 **Description:** This is the index of default open accordion. 

### class ### 
 **Type:** String

 **Required:** No

 **Description:** This will be applied to the container of accordion group. 

### openIconName ### 
 **Type:** String

 **Required:** No

 **Default value:** utility:dash

**Available options:** Any lightning icon.

 **Description:** This icon will be shown when accordion is open. 

### closeIconName ### 
 **Type:** String

 **Required:** No

 **Default value:** utility:add

 **Available options:** Any lightning icon.

 **Description:** This icon will be shown when accordion is close. 

### iconSize ### 
 **Type:** String

 **Required:** No

 **Default value:** x-small

**Available options:** Any size applicable for <lightning:icon /> component.

 **Description:** This will control the icon size. 

***

**Note:** Do not use following classes in accordion, they are already used by component:
accn, accn-head, accn-body.
