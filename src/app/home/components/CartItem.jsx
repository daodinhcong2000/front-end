const CartItem = (props) => {
  return (
    <>
      <tr>
        <td>
          <figure className="itemside">
            <div className="aside">
              <img src="assets/images/items/1.jpg" className="img-sm" />
            </div>
            <figcaption className="info">
              <a href="#" className="title text-dark">
                Some name of item goes here nice
              </a>
              <p className="text-muted small">
                Size: XL, Color: blue, <br /> Brand: Gucci
              </p>
            </figcaption>
          </figure>
        </td>
        <td>
          <select className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </td>
        <td>
          <div className="price-wrap">
            <var className="price">$1156.00</var>
            <small className="text-muted"> $315.20 each </small>
          </div>
        </td>
        <td className="text-right">
          <a data-original-title="Save to Wishlist" title href className="btn btn-light mr-2" data-toggle="tooltip">
            Sửa
          </a>
          <a href className="btn btn-light">
            Xoá
          </a>
        </td>
      </tr>
    </>
  )
}

export default CartItem
