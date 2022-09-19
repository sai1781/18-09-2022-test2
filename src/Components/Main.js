import ActiveDeposits from "./ActiveDeposits";
import ClosedDeposits from "./ClosedDeposits";

const Main = () => {
  return (
    <div className="Main">
      <div className="left">
        <div className="image">
          <img
            src="https://wallpaperaccess.com/full/2615129.jpg"
            alt="no_image"
          ></img>
          <p>VIRAT KOHLI</p>
        </div>
        <p>
          {" "}
          <span>🏡</span> Home
        </p>
        <p>
          <span>🏬</span>Deposits
        </p>
        <p>
          <span>👨🏻‍🏭</span>others
        </p>
        <p>
          <span>💲</span>Payments
        </p>
        <p>
          <span>⚙</span>Settings
        </p>

        <input type="checkbox"></input>
      </div>

      <div className="right">
        <div className="right_corner">
          <h3>✉</h3>
          <img
            src="https://wallpaperaccess.com/full/2615129.jpg"
            alt="no_image"
          ></img>
        </div>
        <ActiveDeposits />
        <ClosedDeposits />
      </div>
    </div>
  );
};
export default Main;
