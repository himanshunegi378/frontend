import { TextField as MuiTextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

function TextField({ field }) {
    const { register, formState } = useFormContext();
    const { errors } = formState;
    const { label, key, rules } = field;

    return (
        <div className="text-field">
            <Typography variant="h6">{label}</Typography>
            <MuiTextField
                size="small"
                error={Boolean(errors[key])}
                helperText={errors[key]?.message}
                {...register(key, rules)}
            />
        </div>
    );
}

export default TextField;
