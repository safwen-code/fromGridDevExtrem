const tab1 = [
  {
    id: 1,
    nomAction: 'safwen',
    date: '12/02/2021',
    nomUtilisateur: 'foulen',
    StateId: 1,
  },
  {
    id: 2,
    nomAction: 'rim',
    date: '12/02/2021',
    nomUtilisateur: 'foulen',
    StateId: 1,
  },
  {
    id: 3,
    nomAction: 'mehdi',
    date: '12/02/2022',
    nomUtilisateur: 'foulen',
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
    id: 1,
    nomAction: 'a3',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
]

$(() => {
  const grid = $('#grid')
    .dxDataGrid({
      dataSource: tab1,
      editing: {
        mode: 'cell',
        allowUpdating: true,
      },
      keyExpr: 'id',
      columns: [
        'nomAction',
        'nomUtilisateur',
        {
          dataField: 'date',
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

  const p2 = $('#grid2')
    .dxDataGrid({
      dataSource: tab2,
      keyExpr: 'id',
      editing: {
        mode: 'row',
        // mode: label,
        // allowUpdating: true,
      },
      columns: [
        {
          // dataField: 'image',
          cellTemplate: function (container, options) {
            console.log(options)
            const { id } = options.data

            $('<div> ')
              .append(
                $('<img>', {
                  src:
                    'https://cdn.icon-icons.com/icons2/916/PNG/512/Edit_icon-icons.com_71853.png',
                }).css({
                  width: '25px',
                  height: '20px',
                }),
              )
              .click(() => {
                var frame = $('<iframe>', {
                  src: `form.html?id=${id}`,
                  style: 'height:600px;width:500px;',
                })
                $('#popupContainer')
                  .dxPopup({
                    title: 'show information',
                    contentTemplate: function (contentElement) {
                      contentElement.append(frame)
                    },
                  })
                  .dxPopup('instance')
                $('#popupContainer').dxPopup('show')
              })
              .appendTo(container)
          },
        },

        'nomAction',
        'PA',
        {
          dataField: 'date',
          dataType: 'date',
          editorType: 'dxDateBox',
        },
        {
          dataField: 'StateId',

          cellTemplate(container, options) {
            // console.log('container', container)
            // console.log(options)
            const { data } = options
            // console.log(data.StateId)
            switch (data.StateId) {
              case 1:
                return $('<div>')
                  .append(
                    $('<img>', {
                      src:
                        'https://cdn-icons-png.flaticon.com/512/4909/4909724.png',
                    }).css({
                      width: '25px',
                      height: '20px',
                    }),
                  )
                  .appendTo(container)
              case 2:
                return $('<div>')
                  .append(
                    $('<img>', {
                      src:
                        'https://cdn.icon-icons.com/icons2/1572/PNG/512/3592869-compose-create-edit-edit-file-office-pencil-writing-creative_107746.png',
                    }).css({
                      width: '25px',
                      height: '20px',
                    }),
                  )
                  .appendTo(container)
              case 3:
                return $('<div>')
                  .append(
                    $('<img>', {
                      src:
                        'https://cdn.icon-icons.com/icons2/1508/PNG/512/anydo_104098.png',
                    }).css({
                      width: '25px',
                      height: '20px',
                    }),
                  )
                  .appendTo(container)
              default:
                return $('<div>')
                  .append(
                    $('<img>', {
                      src:
                        'https://cdn-icons-png.flaticon.com/512/4909/4909724.png',
                    }).css({
                      width: '25px',
                      height: '20px',
                    }),
                  )
                  .appendTo(container)
            }
          },
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
})
