const etat = ['encour', 'cree', 'terminer']

const customers = [
  {
    ID: 1,
    Action: 'Super Mart of the West',
    responsable: 1,
    delai: '2022-01-01',
    StateId: 1,
  },
  {
    ID: 2,
    Action: 'Super Mart of the West',
    responsable: 1,
    delai: new Date('2022-01-01T00:00:00.000Z'),
    StateId: 1,
  },
  {
    ID: 2,
    Action: 'Super Mart of the West',
    responsable: 1,
    delai: new Date('2022-01-01T00:00:00.000Z'),
    StateId: 1,
  },
]

const states = [
  {
    ID: 1,
    name: 'encour',
  },
  {
    ID: 2,
    name: 'terminer',
  },
  {
    ID: 3,
    name: 'créer',
  },
]

const responsables = [
  { ID: 1, name: 'rim' },
  { ID: 2, name: 'mehdi' },
  { ID: 3, name: 'omaima' },
]

const users = ['safwen', 'rim', 'omaima', 'mehdi']

$(() => {
  const form = $('#form')
    .dxForm({
      // create data
      formData: {
        nom: '',
        utilistateur: '',
        hireDate: '',
        description: '',
        etat: '',
      },

      colCount: 2,
      //configure item
      items: [
        'nom',
        {
          dataField: 'utilistateur',
          editorType: 'dxSelectBox',
          editorOptions: {
            items: users,
          },
        },
        {
          dataField: 'hireDate',
          editorType: 'dxDateBox',
        },
        {
          dataField: 'etat',
          editorType: 'dxSelectBox',
          labelMode: 'floating',
          label: 'Select company',
          editorOptions: {
            items: etat,
            value: '',
          },
        },
        {
          dataField: 'description',
          editorType: 'dxTextArea',
          editorOptions: {
            height: 90,
            placeholder: 'Add notes...',
          },
        },
      ],
    })
    .dxForm('instance')

  const grid = $('#grid')
    .dxDataGrid({
      dataSource: customers,
      editing: {
        mode: 'row',
        allowAdding: true,
        // allowUpdating: true,
      },
      keyExpr: 'ID',
      columns: [
        'Action',
        {
          dataField: 'responsable',

          lookup: {
            dataSource: responsables,
            valueExpr: 'ID',
            displayExpr: 'name',
            loadMode: 'row',
          },
        },
        {
          dataField: 'delai',
          dataType: 'date',
        },
        {
          dataField: 'StateId',

          lookup: {
            dataSource: states,
            valueExpr: 'ID',
            displayExpr: 'name',
          },
        },
      ],
      showBorders: true,
    })
    .dxDataGrid('instance')

  const button = $('#button').dxButton({
    text: 'Submit',
    type: 'success',
    useSubmitBehavior: true,
  })

  $('#form-container').on('submit', (e) => {
    // console.log(e)
    // console.log(form)
    e.preventDefault()
    // console.log('datagrid', grid)
    const gridInfo = grid.option('dataSource')
    console.log('gridInfo', gridInfo)
    const formInfo = form.option('formData')
    console.log('forminfo', formInfo)
    let tab = []
    tab.unshift(formInfo)
    tab.unshift(gridInfo)
    // tab.unshift(gridInfo)
    console.log('tab', tab)
  })
})
