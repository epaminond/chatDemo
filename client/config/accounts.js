Accounts.ui.config({
  requestPermissions: {},
  extraSignupFields: [{
    fieldName: 'name',
    fieldLabel: 'Name',
    inputType: 'text',
    visible: true,
    validate: function(value, errorFunction) {
      if (!value) {
      errorFunction("Please write your name");
      return false;
      } else {
      return true;
      }
    }
  }, {
    fieldName: 'country',
    fieldLabel: 'Country',
    inputType: 'select',
    showFieldLabel: true,
    empty: 'Please select your country of residence',
    data: [{
      id: 1,
      label: 'United States',
      value: 'us'
      }, {
      id: 2,
      label: 'Spain',
      value: 'es',
    }],
    visible: true
  }]
});