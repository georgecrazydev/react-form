import React from 'react';

import styles from './FormInput.module.scss';

function FormInput(props) {
	const [focused, setFocused] = React.useState(false);

	const { label, errorMessage, handleChange, id, ...inputProps } = props;

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<div className={styles.FormInput}>
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={handleChange}
				onBlur={handleFocus}
				onFocus={inputProps.name === 'confirmPassword' && handleFocus}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
}

export default FormInput;
