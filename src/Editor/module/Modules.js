import ReactQuill, { Quill } from 'react-quill';
import TableModule from 'quill1-table';
import ImageUploader from 'quill-image-uploader';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
import QuillImageDropAndPaste from 'quill-image-drop-and-paste';

import CustomToolBar from "./CustomToolBar";
import imageHandler from './imageHandler';
import imageUpload from './imageUpload';

//Register
Quill.register('modules/table', TableModule);
Quill.register("modules/imageUploader", ImageUploader);
Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)


//Custom Icon
var icons = ReactQuill.Quill.import('ui/icons');
icons['image_url'] = '<i class="fa fa-italic" aria-hidden="true"></i>';


const dragHandle = (data) => {}

const modules = {
  syntax: true,
  //Table Option
  toolbar: {
    container: CustomToolBar(TableModule),  
    handlers: {
      image_url: imageHandler
    }
  },
  table: {
    cellSelectionOnClick: true 
  },
  keyboard: {
    bindings: {
      backspace: {
        key: 'backspace',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'backspace', range, keycontext);
        }
      },
      delete: {
        key: 'delete',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'delete', range, keycontext);
        }
      },
      undo: {
        ctrlKey: true,
        key: 'z',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'undo', range, keycontext);
        }
      },
      redo: {
        ctrlKey: true,
        shiftKey: true,
        key: 'z',
        handler: function (range, keycontext) {
          return TableModule.keyboardHandler(this.quill, 'redo', range, keycontext);
        }
      }
    }
  },

  //Image Upload
  imageUploader: {
    upload: file => {
      return imageUpload(file)      
    }
  },

  imageDropAndPaste: {
    // add an custom image handler
    handler: dragHandle
  },
  
  blotFormatter: { }, 
}

export default modules; 