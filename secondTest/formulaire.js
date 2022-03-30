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
        {
          dataField: 'nom',
          validationRules: [
            {
              type: 'required',
              message: 'nom is required',
            },
          ],
        },
        {
          dataField: 'utilistateur',
          editorType: 'dxSelectBox',
          editorOptions: {
            items: users,
          },
          validationRules: [
            {
              type: 'required',
              message: 'utilisateur is required',
            },
          ],
        },
        {
          dataField: 'hireDate',
          editorType: 'dxDateBox',
          validationRules: [
            {
              type: 'required',
              message: 'data is required',
            },
          ],
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
          validationRules: [
            {
              type: 'required',
              message: 'etat is required',
            },
          ],
        },
        {
          dataField: 'description',
          editorType: 'dxTextArea',
          editorOptions: {
            height: 90,
            placeholder: 'Add notes...',
          },
          // validationRules: [
          //   {
          //     type: 'required',
          //     message: 'description is required',
          //   },
          // ],
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
        {
          dataField: 'Action',
          validationRules: [{ type: 'required' }],
        },
        {
          dataField: 'responsable',
          validationRules: [{ type: 'required' }],
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
          validationRules: [{ type: 'required' }],
        },
        {
          dataField: 'StateId',
          validationRules: [{ type: 'required' }],
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
    e.preventDefault()
    // console.log('datagrid', grid)
    const formInfo = form.option('formData')
    // console.log('forminfo', formInfo)
    const gridInfo = grid.option('dataSource')
    // console.log('gridInfo', gridInfo)

    let tab = []
    if (
      formInfo.description.length === 0 ||
      formInfo.etat.length === 0 ||
      formInfo.hireDate.length === 0 ||
      formInfo.nom.length === 0 ||
      formInfo.utilistateur.length === 0
    ) {
      console.log('hoyyyyyyyyyy')
    } else {
      tab.unshift(formInfo)
      tab.unshift(gridInfo)
      // tab.unshift(gridInfo)
      console.log('tab', tab)
    }
  })
})
