import { payMethodsData } from "../assets/img/data/payMethodsData";
import { StyledPayMethods } from "../styles/PayMethodsStyles";
const PayMethods = () => {
  return (
    <StyledPayMethods>
      {payMethodsData.map((data, index) => {
        return (
          <div key={index}>
            <img
              src={data.image}
              alt="Hero"
              className="image"
              key={data.image}
            />
          </div>
        );
      })}
    </StyledPayMethods>
  );
};
export default PayMethods;
