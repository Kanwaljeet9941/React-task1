function Greet(props) {
  const { info } = props;
  return <h2>Hello {info.name}! Welcome to React!</h2>;
}

export default Greet;
