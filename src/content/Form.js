import { Form } from 'mobx-react-form';

export default class MyForm extends Form {

    /*
      Return the `fields` as a collection into the `setup()` method
      with a `rules` property for the validation.
    */
    setup() {
        return {
            fields: [{
                name: 'email',
                label: 'Email',
                placeholder: 'Insert Email',
                rules: 'required|email|string|between:5,25',
                value: 's.jobs@apple.com'
            }],
        };
    }

    /*
      Event Hooks
    */
    hooks() {
        return {
            /*
              Success Validation Hook
            */
            onSuccess(form) {
                alert('Form is valid! Send the request here.');
                // get field values
                console.log('Form Values!', form.values());
            },
            /*
              Error Validation Hook
            */
            onError(form) {
                alert('Form has errors!');
                // get all form errors
                console.log('All form errors', form.errors());
            }
        };
    }
}