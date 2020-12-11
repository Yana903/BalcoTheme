import React from "react";
import ConsultForm from "./ConsultForm";

const Consulting = () => {
  return (
    <section className="section-callback">
        <div className="container">
          <div className="heading-primary">
              <h2>Заказать обратный звонок</h2>
          </div>
          <hr className='divider' />
          <ConsultForm />
      </div>
    </section>
  );
};

export default Consulting;
