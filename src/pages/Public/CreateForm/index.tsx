import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { createForm } from 'api/quotation'
import history from 'utils/history'

import { Input } from 'components/Form'

interface Values {
    Event_Name: string
    Item_Description: string
    Item_Quantity: number
    Student_Name: string
    Obtained_Date: Date
    Student_Contact_No: number
    Supplier: string
}

const CreateForm = () => {
    const initialValues: Values = { 
        Event_Name: '', 
        Item_Description: '',
        Item_Quantity: 0,
        Student_Name: '',
        Obtained_Date: new Date(), // TODO need initial values for date
        Student_Contact_No: 0,
        Supplier: ''
    }

    const validationSchema: yup.SchemaOf<Values> = yup.object({
        Event_Name: yup.string().required('Required'),
        Item_Description: yup.string().required('Required'),
        Item_Quantity: yup.number().required('Required'),
        Student_Name: yup.string().required('Required'),
        Obtained_Date: yup.date().required('Required'),
        Student_Contact_No: yup.number().required('Required'),
        Supplier: yup.string().required('Required')
    })

    const handleCreateForm = (values: Values, formikHelpers: FormikHelpers<Values>) => {
        console.log({ values, formikHelpers })
        createForm({ 
            Event_Name: values.Event_Name, 
            Item_Description: values.Item_Description, 
            Item_Quantity: values.Item_Quantity,
            Student_Name: values.Student_Name,
            Obtained_Date: values.Obtained_Date,
            Student_Contact_No: values.Student_Contact_No,
            Supplier: values.Supplier
        })
        formikHelpers.setSubmitting(false)
        history.push('/login')
    }

    return (
        <div>
            <h1>QUOTATIONS</h1>
            <h1>FOR PURCHASES NOT EXCEEDING $5,000/-</h1>
            <Formik initialValues={initialValues} onSubmit={handleCreateForm} validationSchema={validationSchema}>
                <Form>
                    <label htmlFor="Event_Name">Event Name</label>
                    <Input id="Event_Name" name="Event_Name" placeholder="Event Name" />

                    <label htmlFor="Item_Description">Item Description</label>
                    <Input id="Item_Description" name="Item_Description" placeholder="Item Description" />

                    <label htmlFor="Item_Quantity">Item Quantity</label>
                    <Input id="Item_Quantity" name="Item_Quantity" placeholder="Item Quantity" />
                   
                    <label htmlFor="Student_Name">Student Name</label>
                    <Input id="Student_Name" name="Student_Name" placeholder="Student Name" />
                   
                    <label htmlFor="Obtained_Date">Obtained Date</label>
                    <Input type="date" id="Obtained_Date" name="Obtained_Date" placeholder="Obtained Date" />
                   
                    <label htmlFor="Student_Conctact_Number">Student Conctact Number</label>
                    <Input id="Student_Conctact_Number" name="Student_Conctact_Number" placeholder="12345678" />
                   
                    <label htmlFor="Supplier">Supplier</label>
                    <Input id="Supplier" name="Supplier" placeholder="Supplier" />

                    <button type="submit">Create Form</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateForm