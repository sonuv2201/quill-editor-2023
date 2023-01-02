const CustomToolBar = (TableModule) =>{
 const toolbar = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                          // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image','image_url','video'],
    [
      {
        table: TableModule.tableOptions()
      },
      {
        table: [
          'insert',
          'remove-table',
          'append-row-above',
          'append-row-below',
          'append-col-before',
          'append-col-after',
          'remove-col',
          'remove-row',
          'split-cell',
          'merge-selection',
          'remove-cell',
          'remove-selection',
          'undo',
          'redo'
        ]
      }
    ]
  ];

  return toolbar;
}
export default CustomToolBar;