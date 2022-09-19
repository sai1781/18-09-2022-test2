const ActiveDeposits = () => {
  return (
    <div className="details_main">
      <div className="main_details">
        <h2>ActiveDeposits</h2>
        <span className="number">2</span>
        <button>➕</button>
      </div>
      <table>
        <tr>
          <th>property</th>
          <th>Move In Date</th>
          <th>Rent</th>
          <th>Deposit</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
          <td className="sai">
            <img
              src="https://wallpaperaccess.com/full/1281416.jpg"
              alt="no_image"
            ></img>
            <p>771 Lost Round</p>
          </td>
          <td>23 february 2022</td>
          <td>$3000</td>
          <td>$8000</td>
          <td>Awwaiting Bank Processing</td>
          <td>
            <span class="dot yellow"></span>
          </td>
        </tr>
        <tr>
          <td className="sai">
            <img
              src="https://i2-prod.mirror.co.uk/incoming/article27960224.ece/ALTERNATES/n615/0_Lionel-Messi-6.jpg"
              alt="no_image"
            ></img>
            <p>1491 Jaggad Actor</p>
          </td>
          <td>12 March 2020</td>
          <td>$2000</td>
          <td>$4000</td>
          <td>Paymnet Processed</td>
          <td>
            <span class="dot green"></span>
          </td>
        </tr>
      </table>

      <button>All Active Deposits</button>
    </div>
  );
};
export default ActiveDeposits;
