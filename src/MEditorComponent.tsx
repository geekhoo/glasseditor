import React,{ useEffect, useState }  from 'react';
import grapesjs from 'grapesjs';

          
interface GrapeJSComponentProps {
    id: string;
    html: string;
    css: string;
}

const EditorComponent: React.FC<GrapeJSComponentProps> = ({ id, html, css }) => {
    const editorRef = React.useRef<HTMLDivElement>(null);

    const [htmlContent, setHtmlContent] = useState('');

          useEffect(() => {
            // Fetch the HTML file content
            fetch('./block001.html')
              .then(response => response.text())
              .then(content => setHtmlContent(content))
              .catch(error => console.error(error));
          }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
    const [cssContent, setCssContent] = useState('');

          useEffect(() => {
            // Fetch the HTML file content
            // eslint-disable-next-line react-hooks/exhaustive-deps
            fetch('./style.css')
              .then(response => response.text())
              .then(content => setCssContent(content))
              .catch(error => console.error(error));
          }, []);

    React.useEffect(() => {
        const editor = grapesjs.init({
            container: `#${id}`, // Replace '${id}' with `#${id}`
            components: htmlContent,
            style: css,
        });

        return () => {
            editor.destroy();
        };
    }, [id, html, css, htmlContent, cssContent]);

    return <div id={id} ref={editorRef} />;
};

export default EditorComponent;