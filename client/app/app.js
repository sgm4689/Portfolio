const InDepth = (props) =>{
  if (props.example.length === 0){
    return (null);
  }
  else{
    return (
      <div className="container">
        <h3 className="title">{props.example.Name}</h3>
        <div id="descDiv">
          <h4 className="title">About The Game</h4>
          <p>{props.example.Description}</p>
        </div>
        <div id="roleDiv">
          <h4 className="title">My Job</h4>
          <p>{props.example.Role}</p>
        </div>
        <div className="imageContainer">
          {
            props.example.URLs.map((value, index) =>{
              return <img src={value} alt={index} className="exampleImg" width="200" height="200"></img>
            })
          }
        </div>
      </div>
    );
  }
};


const setup = () =>{

  // ReactRom.render(
  //   <Carousel projects = {[]} , document.querySelector("#content")/>
  // );


    ReactDOM.render(
      <InDepth example = {[]} />, document.querySelector("#footer")
    );

    let projects = document.querySelectorAll(".selection");
    projects.forEach((value, index, obj)=>{
      value.addEventListener('click', () =>{
        sendAjax('GET', value.id, null, (data) => {
          ReactDOM.render(
            <InDepth example={data} />,document.querySelector("#footer")
          );
        })
      })
  });
}

$(document).ready(function() {
  setup();
});
