import TextField from "./Fields/TextField/TextField";

const RenderField = ({ field }) => {
    const { type, id } = field;

    const fieldMap = {
        'text': TextField
    }

    const Component = fieldMap[type];

    return <Component field={field} key={id} />
}

export default RenderField;