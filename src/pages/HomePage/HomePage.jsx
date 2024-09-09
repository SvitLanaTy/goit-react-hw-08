import { Container } from "@mui/material";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <Container>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={(css.title, css.title_move)}>
          Welcome Phonebook page!
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </Container>
  );
}
