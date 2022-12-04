function Home(){
  return (
    <div className="home">
    <Card
      txtcolor="black"
      header="State Bank Of India"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.jpg" className="img-fluid" alt="Responsive image"/>)}
    />
    </div>
  );  
}
