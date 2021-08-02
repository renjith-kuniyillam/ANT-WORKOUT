import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms'



export function timeValidator(firstControl: string, secondControl: string): ValidatorFn {
 
    return (group: FormGroup): ValidationErrors | null => {
      const fromTime = group.get(firstControl).value;
      const toTime = group.get(secondControl).value;
       if (fromTime && toTime && fromTime > toTime) { 
           console.log({ 'timeError': true });
           return { 'timeError': true };
        }
      return null;
 
    }
  }

  