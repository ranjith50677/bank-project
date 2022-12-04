function AllData() {
    const [data, setData] = React.useState("");

    React.useEffect(() => {

        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });

    }, []);

    return (<>
     <div class="card">
                <div class="bg-primary card-headera">All Data in Store</div>
                <div class="bg-light card-body">
         {data}
        </div>
        </div>
    </>);
}
