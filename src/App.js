import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// FORMIK & YUP
import * as yup from 'yup';
import { Formik } from 'formik';

const yupSchema = yup
	.object({
		name: yup
			.string()
			.min(2, 'Please enter a name more than 2 character')
			.required(),
		lastname: yup
			.string()
			.min(2, 'Please enter a name more than 2 character')
			.required(),
		email: yup.string().email().required(),
	})
	.required();

const submitHandler = (values, resetForm) => {
	console.log(values);
	resetForm();
};

const App = () => {
	return (
		<div className='App'>
			<h1>Formik & Yup</h1>
			<Formik
				initialValues={{ name: '', lastname: '', email: '' }}
				onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
				validationSchema={yupSchema}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isValid,
					dirty,
				}) => (
					<form className='Form' onSubmit={handleSubmit}>
						<TextField
							name='name'
							placeholder='Name'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.name && touched.name && errors.name}
						<TextField
							name='lastname'
							placeholder='Last Name'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastname}
						/>
						{errors.lastname && touched.lastname && errors.lastname}
						<TextField
							name='email'
							placeholder='Email'
							variant='outlined'
							className='TextField'
							sx={{ mb: 2 }}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}
						<Button
							variant='contained'
							type='submit'
							sx={{ width: '400px', height: '54px' }}
							disabled={!(isValid && dirty)}
						>
							Submit
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default App;
