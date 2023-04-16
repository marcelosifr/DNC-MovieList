const header = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue); //é um objeto o props que sabe quando rola tudo no codigo em que ele está
    event.target[0].value = "";
  }


  return (
    <header className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
    );
};

export default header;