import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Startsida() {
  return (
    <>
    <div className="background" style={{backgroundImage: `url(${("/images/studying2.jpg")})`, height: '100vh', width:'100vw',backgroundSize: "cover", backgroundRepeat: "no-repeat", zIndex:'0', marginTop: '40px'}}>
      <div className="landingPage" style={{ color:'white', margin:'auto'}}>

        <Container lg>
        <h1 style={{ paddingTop: "100px", zIndex: '1'
        }}>Välkomna till studentportalen!</h1>

        <p style={{textAlign:'center', width: '80%', margin:'auto'}}>
          Hos oss formas framtidens tänkare, problemlösare och samhällsbyggare.
          På Borås Universitet erbjuder vi en inspirerande och inkluderande
          studiemiljö där kunskap, kreativitet och innovation står i centrum.
          Oavsett om du är ny student, mitt i din utbildning eller söker nya
          vägar i yrkeslivet, finns vi här för att ge dig verktygen du behöver
          för att nå dina mål. Vi erbjuder ett brett utbud av program och kurser
          inom områden som teknik, samhällsvetenskap, humaniora, ekonomi,
          naturvetenskap och mycket mer. Våra utbildningar är
          forskningsförankrade och nära knutna till arbetslivet, vilket gör att
          du som student får en relevant och praktisk grund att stå på.
          Välkommen till en skola där idéer får växa – och där du får växa med
          dem.
        </p>

        <h2>Upptäck din framtid. Välkommen till Borås.</h2>


        <Link to={`/kurser`}>
        <Button style={{marginRight: '30px', marginTop:'30px'}}>Våra kurser</Button>
        </Link>
        <Link to={`/nyheter`}>
        <Button style={{marginTop:'30px'}}>Nyheter</Button>
        </Link>


</Container>
        </div>
      </div>

    </>
  );
}
