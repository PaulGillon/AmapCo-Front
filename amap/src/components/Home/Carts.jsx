import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Carts.css";

function Carts(props) {
  const { carts } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(carts?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carts?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, carts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carts?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="HomePage">
        <div className="cartsHometitle">
          <h3 className="HomePageTitle">Les paniers de la semaine</h3>
        </div>
        <div className="wecarts">
          {currentItems?.map((cart) => (
            <Link to={`/growers/${cart.id_producteur}/cart/${cart.id}`}>
              <div className="weekcart" key={cart.id}>
                <img
                  className="cart-img"
                  src={cart?.img_url}
                  alt="CartPicture"
                />
                <div className="content">
                  <p>Temps restant : {cart?.heures_restantes}</p>
                </div>
                <div className="title-cart-week">
                  <h3 className="weekcarts">{cart.nom}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="paginationdiv">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Suivante >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< précédente"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
            activeLinkClassName="active-link"
            pageClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            pageLinkClassName="page-num-link"
            disabledClassName="button-disabled"
          />
        </div>
      </div>
    </>
  );
}

export default Carts;
