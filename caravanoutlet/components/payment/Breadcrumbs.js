import { useCheckoutState } from "../../context/checkout";

// TODO: Build array of crumbs dynamically from available steps

function Breadcrumbs({ inCart }) {
  const { currentStep, extrafields } = useCheckoutState();

  if (inCart) {
    return <span>Handlekurv</span>;
  }

  if (currentStep === "success") {
    return <span>Fårespørsel motatt</span>;
  }

  return (
    <div>
      {currentStep === "extrafields" && (
        <>
          <span>Handlekurv</span>
          <span>&rarr;</span>
          <span>Booking</span>
          <span>&rarr;</span>
          <span>Frakt</span>
          <span>&rarr;</span>
          <span>Betaling</span>
        </>
      )}
      {currentStep === "shipping" && (
        <>
          <span>Handlekurv</span>

          {extrafields.length > 0 && (
            <>
              <span>&rarr;</span>
              <span>Booking</span>
            </>
          )}
          <span>&rarr;</span>
          <span>Frakt</span>
          <span>&rarr;</span>
          <span>Betaling</span>
        </>
      )}
      {currentStep === "billing" && (
        <>
          <span>Handlekurv</span>
          {extrafields.length > 0 && (
            <>
              <span>&rarr;</span>
              <span>Booking</span>
            </>
          )}
          <span>&rarr;</span>
          <span>Frakt</span>
          <span>&rarr;</span>
          <span>Betaling</span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
