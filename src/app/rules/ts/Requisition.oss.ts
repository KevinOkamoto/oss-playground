/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const RequisitionRule = 'class=Requisition {    field=title {     visible:true;     trait: required;     label:"Name";      documentType=RV {       label: "Agreement Name!";     }   }    field=dueOn {     visible:true;     label:"Delivered by";   }    field=status {     visible:true;     type:String;   }    field=totalNetAmount {     visible:true;     type:Number;   }    field=lineItems {      visible:true;      valid: ${value && value.length > 0 ? "You must have more than 1 Lineitem" : null};   } } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 