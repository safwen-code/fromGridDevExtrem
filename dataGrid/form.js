const etat = ['encour', 'cree', 'terminer']

$(() => {
  const form = $('#form')
    .dxForm({
      // create data
      formData: {
        NomAction: '',
        PA: '',
        Date: '',
        stateId: '',
      },

      colCount: 2,
      //configure item
      items: [
        'NomAction',
        'PA',
        {
          dataField: 'Date',
          editorType: 'dxDateBox',
        },
        {
          dataField: 'stateId',
          editorType: 'dxSelectBox',
          labelMode: 'floating',
          editorOptions: {
            items: etat,
            value: '',
          },
        },
      ],
    })
    .dxForm('instance')
  const button = $('#button').dxButton({
    text: 'Submit',
    type: 'success',
    useSubmitBehavior: true,
  })
  $('#form-container').on('submit', (e) => {
    e.preventDefault()
    console.log('submitted')
  })
})
