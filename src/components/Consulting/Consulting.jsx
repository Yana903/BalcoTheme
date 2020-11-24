import React from "react";
// import Container from "@material-ui/core/Container";
import ConsultForm from "./ConsultForm";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const Consulting = () => {
  return (
    <section className="sectionConsult">
      {/* <Container> */}
        {/* <div className="headingPrimaryInverse"> */}
        <div className="container">
          <div className="heading-primary inverce">
            <Typography variant="h2">
              Получите бесплатную консультацию
            </Typography>
            <p className="description inverce">
              опытного специалиста по вопросам сотрудничества в области упаковки
              Ваших товаров
            </p>
          </div>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <ConsultForm />
          </Box>
        {/* </Container> */}
      </div>
    </section>
  );
};

export default Consulting;
