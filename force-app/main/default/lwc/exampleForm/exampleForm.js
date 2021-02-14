import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

export default class ExampleForm extends LightningElement {

    // objectApiName is 'Contact' when is placed in the conact record page
    @api objectApiName;
    fields = [FNAME_FIELD, LNAME_FIELD, EMAIL_FIELD, PHONE_FIELD];

    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(evt);
    }
}