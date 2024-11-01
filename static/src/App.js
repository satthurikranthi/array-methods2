import logo from './logo.svg';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {
  //let thara = new TenthStudent();
 // thara.engMarks=98;
 // thara.telMarks=97;
 // thara.hinMarks=96;
 // thara.sciMarks=95;
  //thara.socMarks=94;
  //thara.mathsMarks=93;
  //thara.calculateResult();
 // console.log(TenthStudent.passMarks)
  
  //console.log(TenthStudent.passMarks)
  let actorsOf35 = ["vishwadev","nivetha thomas","priyadarshi pulikonda","gouthami","k.bhagyaraj","vishwadev","ananya","arun dev","abhay shankar","abhay","vishwadev rachakonda","	Nanda Kishore Emani","Srujan Yarabolu and Siddharth Rallapalli","Niketh Bommi"]
  
 
  return (
    <div className="App">
      <button type='button' onClick={()=>{ 
        console.log(actorsOf35.length);

        for(let k=0;k<actorsOf35.length;k++){
          console.log(actorsOf35[k]);

        }
      
      }}>Length </button>
      <button type='button' onClick={()=>{
        console.log(actorsOf35[6]);
        console.log(actorsOf35.at[6]);

      }}>at</button>
      <button type='button' onClick={()=>{
        console.log(actorsOf35);
        console.log(actorsOf35.toString());
        console.log(actorsOf35.join("<----->"));
      }}>tostring/join</button>
      <button type='button' onClick={()=>{
        console.log(actorsOf35);
        actorsOf35.push("gouthami","k.bhagyaraj");
        console.log(actorsOf35)
      }}>push</button>
      <button type='button' onClick={()=>{
        actorsOf35.pop();
        console.log(actorsOf35)
      }}>pop</button>
      <button type='button' onClick={()=>{
        actorsOf35.shift();
        console.log(actorsOf35)
      }}>shift</button>
      <button type='button' onClick={()=>{
        actorsOf35.unshift("ananya");
        console.log(actorsOf35)
      }}>unshift</button>
      <button type='button' onClick={()=>{
        actorsOf35.splice(0,2);
        console.log(actorsOf35)
      }}>splice</button>
      <button type="button" onClick={()=>{
        console.log(actorsOf35);
        delete actorsOf35[6];
        console.log(actorsOf35);
        actorsOf35.splice(6,1);
        console.log(actorsOf35)

      }}>delete</button>
      <button type="button" onClick={()=>{
        let animals = ["Bear","Dog","Horse"];
        let birds = ["Crow","Peacock","Parrot"];
        let fruits = ["avocado","guava","mango"];
        let naturethings = animals.concat(birds,fruits);
        console.log(animals);
        console.log(birds);
        console.log(fruits);
        console.log(naturethings);

        let naturethings1 = [...animals,...birds,...fruits];
        console.log(naturethings1)

      }}>concat</button>
      <button type="button" onClick={()=>{
        let teluguActors =["vijay","nikhil","pawan kalyan","allu arjun"];
        let tamilActors =[["arya","sivakumar"],"jyam ravi"];
        let kannadaActors =["Rajkumar","Vishnuvardhan"]
        let actors = [teluguActors,tamilActors,kannadaActors];
        console.log(actors);
        let allActors = actors.flat(2);
        console.log(allActors)
      }}>flat</button>
      <button type="button" onClick={()=>{
        console.log(actorsOf35)
        let arr= actorsOf35.slice(4,8)
        console.log(arr);
      
      }}>slice</button>
      <button type="button" onClick={()=>{
        console.log(actorsOf35);
        let filledArr = actorsOf35.fill("35 1586 AD",7,9);
        console.log(filledArr)
      }}>fill</button>
      <button type="button" onClick={()=>{
        let MovieTitle = "LUCKY BHASKAR"
        console.log(MovieTitle)
        let arr = Array.from(MovieTitle);
        console.log(arr)
      }}>from</button>
      <button type="button" onClick={()=>{
        let resullt = actorsOf35.includes("vishwadev");
        console.log(resullt);
      }}>includes</button>
      <button type="button" onClick={()=>{
        let resullt = actorsOf35.indexOf("priyadarshi pulikonda");
        console.log(resullt)
      }}>indexOf</button>
      <button type="button" onClick={()=>{
        let resullt = actorsOf35.lastIndexOf("vishwadev");
        console.log(resullt)

      }}>lastnIdexOf</button>
      <button type="button" onClick={()=>{
        console.log(actorsOf35);
        let arr1 = actorsOf35.reverse();
        console.log(arr1)
      }}>reverse</button>
      <button type="button" onClick={()=>{
        let movie = ["ananya"]
        let arr= Array.isArray(movie);
        console.log(arr)

      }} >isArray</button>
      <button type="button" onClick={()=>{
        console.log(actorsOf35);
        let movieCast = actorsOf35.sort();
        console.log(movieCast);
        let movieCast1 = actorsOf35.reverse();
        console.log(movieCast1);

      }} >sort</button>
      
      
    </div>
  );
}

export default App;
