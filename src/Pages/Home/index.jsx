
import "./style.css"
import ImageHome from "../../assets/avaliacao-home.png";

export function Home(){
    
    
    
    return(
        <div className="displayHome">
            <section>
                <h2 className="titulo1">Deixe aqui o seu</h2>
                <h1 className="titulo2">FEEDBACK</h1>
                <p>Valorizamos sua opinião! Seu feedback é fundamental para nós. Por favor, dedique alguns momentos para compartilhar suas impressões e sugestões. Sua contribuição nos ajuda a melhorar nossos serviços e oferecer uma experiência ainda mais satisfatória. Agradecemos desde já por sua participação</p></section>
            <section><img src={ImageHome} alt="" /></section>
        </div>
    )
}