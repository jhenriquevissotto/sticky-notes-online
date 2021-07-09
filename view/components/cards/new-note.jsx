import { css } from 'styled-components'
import { MdAddCircle } from 'react-icons/md'


// styles
const styles = {
    container: css`
        background-color: var(--primary-light);
        width: 210px;
        height: 210px;
        border-radius: 10px;

        transition: background-color 70ms;
        &:hover {
            background-color: var(--primary);
            #icon, #subtitle {
                color: rgb(32,32,32);
            }
        }
    `,
    icon: css`
        font-size: 45px;
        transition: color 70ms;
        color: rgb(64,64,64);
    `,
    subtitle: css`
        font-family: Montserrat;
        font-weight: 700;
        margin-top: 5px;
        color: rgb(64,64,64);
    `,
}


// content
const content = {
    tooltip: {
        en: 'Click here to add a new note',
    },
    subtitle: {
        en: 'Add a new note',
    },
}


// component
export default function NewNote({ ...props }) {

    // render
    return (
        <div 
            css={styles.container} 
            className="flex column ai-center jc-center pointer-cascade" 
            title={content.tooltip.en}
            {...props}
        >
            {/* ======== ICON ======== */}
            <MdAddCircle id="icon" css={styles.icon} />
            
            {/* ======== SUBTITLE ======== */}
            <p id="subtitle" css={styles.subtitle} >
                {content.subtitle.en}
            </p>

        </div>
    )
}