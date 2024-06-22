import logo from './logo.svg';
import './App.css';

function App() {

let MsdhoniDetails={
FirstName:"Dhoni",
LastName:"Ms",
Age:42,
Email:"msdhoni07@gmail.com",
MobileNo:8887775894,
awards:{
  PadmaShri:2009,
  PadmaBhushan:2018,  
}
};

let viratkohilDetails=[
  "Viratkohil",
  35,
  "viratkohil18@gmail.com",
  7589641258,
  ["Akaay","Vamika"]
];

let{FirstName,LastName,Age,MobileNo,awards}=MsdhoniDetails;

console.log(FirstName,LastName,Age,MobileNo,awards);
console.log(viratkohilDetails[0]);
console.log(viratkohilDetails[3]);
console.log(viratkohilDetails[4]);
console.log(viratkohilDetails[4][1]);

//console.log(MsdhoniDetails.Email);
//console.log(MsdhoniDetails.Age);
console.log(MsdhoniDetails.awards.PadmaShri);

let CalculateResult=(EngMarks,TelMarks,HindiMarks,
  SciMarks,SocMarks,MathsMarks,passFn,failFn)=>{
    let PassMarks=35;
    if(EngMarks>=PassMarks &&
      TelMarks>=PassMarks &&
      HindiMarks>=PassMarks &&
      SciMarks>=PassMarks &&
      SocMarks>=PassMarks &&
      MathsMarks>=PassMarks)
    {
      passFn();
    }else{
      failFn();
    }
  };
 CalculateResult(88,75,86,97,69,70,()=>{
  console.log(`Student passed in Tenth`);
 },()=>{
  console.log(`Student failed in Tenth`)
 });

  return (
    <div className="App">
      <h1>Callback Function</h1>
    </div>
  );
}

export default App;
