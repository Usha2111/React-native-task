import "../components/styles/main.css";
import { Cards } from "../Components/data/cards";

function Body(){
  return (
    <>
      <main className="body">
    {Cards.map((data) => (
    <div className="cards" key={data.id}>
      <h1>{data.name}</h1>
      <span className="card-description">{data.description}</span>
      <span className="card-message">{data.message}</span>
      <img src={data.img} alt={data.name} />
      <span className="card-rating">{data.rating}</span>
    </div>
  ))}
</main>

    </>
  );
}
export default Body;
