const etat = ['crée', 'encour', 'terminer']
const devloppers = [
  {
    action: 'dev',
    responsabel: '15/05/1555',
    delai: 'folen',
    status: 'encour',
  },
  {
    action: 'dev',
    responsabel: '15/05/1555',
    delai: 'folen',
    status: '',
  },
]
$(() => {
  const form = $('#formulaire')
    .dxForm({
      items: [
        {
          dataField: 'Nom',
          editorType: 'dxTextBox',
        },
        {
          dataField: 'Utilisateur du creation',
          editorType: 'dxTextBox',
        },
        {
          dataField: 'date de creation',
          editorType: 'dxDateBox',
        },
        {
          dataField: 'description',
          editorType: 'dxTextArea',
          editorOptions: {
            height: 90,
          },
        },

        {
          dataField: 'etat',
          editorType: 'dxSelectBox',
          editorOptions: {
            items: etat,
            value: '',
          },
        },

        {
          template: function (data, container) {
            $('<div>')
              .dxDataGrid({
                dataSource: devloppers,
                editing: {
                  mode: 'cell',
                  allowAdding: true,
                  allowEdditing: true,
                },
                columns: [
                  'action',
                  'responsabel',
                  'delai',
                  {
                    dataField: 'status',
                    editorType: 'dxSelectBox',
                    lookup: {
                      dataSource: [
                        'Not Started',
                        'Need Assistance',
                        'In Progress',
                      ],
                    },
                  },
                ],
              })
              .appendTo(container)
          },
        },
        //add button
        {
          itemType: 'button',
          buttonOptions: {
            text: 'Submit',
            useSubmitBehavior: true,
          },
        },
      ],
    })
    .dxForm('instance')
  $('#form-container').on('submit', (e) => {
    console.log('hi')
    e.preventDefault()
    const from = form.option('formData')
    console.log(form)
  })
})
