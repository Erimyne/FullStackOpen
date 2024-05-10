const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	);
};

const Part = ({ parts }) => {
	return (
		<p>
			{parts.title} {parts.exercise}
		</p>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			<Part parts={parts[0]} />
			<Part parts={parts[1]} />
			<Part parts={parts[2]} />
		</div>
	);
};

const Total = ({ parts }) => {
	const total = parts[0].exercise + parts[1].exercise + parts[2].exercise;
	return (
		<div>
			<p>Number of exercises {total}</p>
		</div>
	);
};

const App = () => {
	const course = 'Half Stack application development';
	const parts = [
		{ title: 'Fundamentals of React', exercise: 10 },
		{ title: 'Using props to pass data', exercise: 7 },
		{ title: 'State of a component', exercise: 14 },
	];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
