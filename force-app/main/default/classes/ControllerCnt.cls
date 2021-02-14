public with sharing class ControllerCnt {
    
    @AuraEnabled
    public static ID saveContact(Contact cnt){
        try {
            insert cnt;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return cnt.ID;
    }
   
}
