import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface Props {
  onChange: (value: string) => void;
  valueText?:string
}
const TextEditor = ({ onChange,valueText ="" }: Props): JSX.Element => {
  const [editorValue, setEditorValue] = useState<string>(valueText);
  useEffect(() => {
    onChange(editorValue);
  }, [editorValue]);
  console.log(valueText);
  
  return (
    <>
      <ReactQuill
        value={editorValue}
        onChange={(valueText) => setEditorValue(valueText)}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
        theme="snow"
      />
    </>
  );
};
export default TextEditor;
