import { useState, useMemo } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Button, TextField as MuiTextField, Typography } from '@mui/material'
import RenderField from '@/components/RenderField/RenderField';

const mySchema = [
    {
        type: 'text',
        label: 'What is your Name?',
        id: 0,
        key: 'name',
        rules: {
            required: 'Name is required'
        },
        nextFieldId: 1
    },
    {
        type: 'text',
        label: 'What is your Mobile?',
        id: 1,
        key: 'mobile'
    },


]

const availableView = {
    'steps': 'steps',
    'finish': 'finish'
}

export default function RetirementGoal() {
    const [schema] = useState(mySchema)
    const [currentStep, setCurrentStep] = useState(0);
    const [currentView, setCurrentView] = useState(availableView.steps)
    const methods = useForm();

    const getField = (id) => {
        const field = schema.find(_field => _field.id === id);
        return field
    }
    const currentField = useMemo(() => getField(currentStep), [currentStep])

    const handleNextStep = () => {
        // Validate the current field before moving to the next step
        methods.trigger([currentField.key]).then(valid => {
            if (valid) {
                if (currentField?.nextFieldId) {
                    setCurrentStep(currentField?.nextFieldId);
                } else {
                    setCurrentView(availableView.finish)
                }
            }
        });
    };

    if (currentView === availableView.finish) {
        return <Typography>finsih</Typography>
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <FormProvider {...methods} >
        <RenderField field={currentField} />
        <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleNextStep}
        >
            Next
        </Button>
    </FormProvider>
}
