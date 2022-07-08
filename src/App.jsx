import React from 'react';

import './App.scss';
import FormInput from './components/FormInput/FormInput';

function App() {
	const [values, setValues] = React.useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			id: 0,
			type: 'text',
			name: 'username',
			label: 'Username',
			placeholder: 'Username',
			errorMessage:
				'Username should be 3-16 characters and shouldn`t include any special characters!',
			required: true,
			pattern: '^[A-Za-z0-9]{3,16}$',
		},
		{
			id: 1,
			type: 'email',
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			errorMessage: 'It should be a valid email adress!',
			required: true,
		},
		{
			id: 2,
			type: 'date',
			name: 'birthday',
			label: 'Birthday',
			placeholder: 'Birthday',
			required: true,
		},
		{
			id: 3,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			errorMessage:
				'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
			label: 'Password',
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 4,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Confirm Password',
			errorMessage: "Passwords don't match!",
			label: 'Confirm Password',
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit} className="form">
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						handleChange={handleChange}
					/>
				))}
				<button className="button">Submit</button>
			</form>
		</div>
	);
}

export default App;
