import { type ChangeEvent, useState } from "react";

export function DynamicForm() {
	const [inputFields, setInputFields] = useState([
		{ timeInseconds: "", limit: "", uri: "" },
	]);

	const handleFormChange = (
		index: number,
		event: ChangeEvent<HTMLInputElement>,
	) => {
		const data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};

	const addFields = () => {
		const newfield = { timeInseconds: "", limit: "", uri: "" };
		setInputFields([...inputFields, newfield]);
	};

	const submit = () => {
		console.log(inputFields);
	};

	const removeFields = (index:number) => {
		const data = [...inputFields];
		data.splice(index, 1);
		setInputFields(data);
	};

	return (
		<div className="App">
			<form onSubmit={submit}>
				{inputFields.map((input, index) => {
					return (
						<div key={index}>
							<input
								name="timeInseconds"
								placeholder="timeInseconds"
								value={input.timeInSeconds}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="limit"
								placeholder="limit"
								value={input.limit}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="uri"
								placeholder="uri"
								value={input.uri}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<button type="button" onClick={() => removeFields(index)}>
								Remove
							</button>
						</div>
					);
				})}
			</form>
			<button type="button" onClick={addFields}>
				Add More..
			</button>
			<button type="button" onClick={submit}>
				Submit
			</button>
		</div>
	);
}

//https://www.freecodecamp.org/news/build-dynamic-forms-in-react/
