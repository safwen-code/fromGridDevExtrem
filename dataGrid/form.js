const etat = ['encour', 'cree', 'terminer']
const tab2 = [
  {
    id: 1,
    nomAction: 'a1',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
  {
    id: 2,
    nomAction: 'a2',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
  {
    id: 3,
    nomAction: 'a3',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
]

$(() => {
  var idString = window.location.search.substring(1)
  var idurl = idString.charAt(idString.length - 1)
  console.log(idurl)
  console.log(typeof idurl)
  const ActionFind = tab2.filter((el) => el.id === parseInt(idurl))
  console.log(ActionFind)

  // for (item of ActionFind) {
  //   console.log(item.nomAction)
  // }

  const form = $('#form')
    .dxForm({
      // create data
      formData: {
        nomAction: '',
        PA: '',
        date: '',
        stateId: '',
      },

      colCount: 2,
      //configure item
      items: [
        'nomAction',
        'PA',
        {
          dataField: 'date',
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

  //update data with new data filtred
  form.option('formData', ActionFind[0])

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
