import { Quill } from 'react-quill';
const imageHandler =()=> {
  var range = this.quill.getSelection();
  var value = prompt('What is the image URL');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}

export default imageHandler;