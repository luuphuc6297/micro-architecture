import { isActiveHotKey, TINY_MCE_KEY } from '@micro-architecture-coaching-cloud/utils';
import { Editor } from '@tinymce/tinymce-react';
import './styles.css';

interface TinyMCEProps {
    value?: string;
    onChange: (value: string, editor: any) => void;
    onInit: (evt: any, editor: any) => void;
    onEnter: (evt: any) => void;
    placeholder?: string;
}

export const TinyMCE = ({ value, onChange, onInit, onEnter, placeholder }: TinyMCEProps) => {
    return (
        <Editor
            apiKey={TINY_MCE_KEY}
            onInit={onInit}
            onEditorChange={onChange}
            value={value}
            inline
            init={{
                setup: (e: any) => {
                    e.on('keydown', (e: any) => {
                        if (e.code === 'Enter' && !isActiveHotKey(e)) {
                            onEnter(e.target);
                            e.preventDefault();
                        }
                    });
                    e.on('init', function (event: any) {
                        e.selection.select(e.getBody(), true);
                        e.selection.collapse(false);
                        e.focus();
                    });
                },
                newline_behavior: 'linebreak',
                content_css: './styles.css',
                content_style: 'p { margin: 0px; }',
                height: '100%',
                width: '100%',
                placeholder: placeholder,
                statusbar: false,
                toolbar: false,
                menubar: false,
                inline: false,
                resize: 'both',
                plugins: [
                    'autoresize',
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'code',
                    'help',
                    'wordcount',
                    'importcss',
                ],
            }}
        />
    );
};
