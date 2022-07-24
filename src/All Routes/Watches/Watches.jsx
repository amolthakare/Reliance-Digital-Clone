import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,Button,
  } from '@chakra-ui/react'
  import { useToast,toast } from '@chakra-ui/react';
// import {Link} from "react-router-dom";
import { useEffect,useState } from 'react';
import styles from "../Smartphones/Smartphone.module.css"
import ReactPaginate from "react-paginate";
const Watches = () => {

    const toast = useToast()

    const [show, setShow] = useState([]);

    var addToCart = JSON.parse(localStorage.getItem("cartItem")) || [];

    const [pageCount, setpageCount] = useState(0);
    let limit = 12;

    useEffect(() => {
        const getComments = async () => {
          const res = await fetch(
            `http://localhost:8080/watches?_page=1&_limit=${limit}`
          );
          const data = await res.json();
          const total = res.headers.get("x-total-count");
          setpageCount(Math.ceil(total / limit));
          setShow(data);
        };
    
        getComments();
      }, [limit]);
    
      const fetchComments = async (currentPage) => {
        const res = await fetch(
          `http://localhost:8080/watches?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
      };

      const handlePageClick = async (data) => {
        // console.log(data.selected);
        let currentPage = data.selected + 1;
        const pages = await fetchComments(currentPage);
        setShow(pages);
      };

      const handleAdd = (item) => {
        // setCart(item);
        addToCart.push(item);
        localStorage.setItem("cartItem", JSON.stringify(addToCart));
    
        // console.log(cart);
      };

    return (
        <>
        <div className={styles.top}>
                <i class="fa-solid fa-house-chimney"></i>
                <p></p>
                <p>search</p>
            </div>
        <div className={styles.main}>
            

            <div className={styles.left}>
                <p className={styles.filt}>FILTERS</p>
                <h4 className={styles.pri}>Price</h4>
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <div className={styles.pr}>
                    <p>₹499</p>
                    <p>₹10999</p>
                </div>
                <div className={styles.pp}>
                    <p className={styles.qq}>₹499</p>
                    <p>to</p>
                    <p className={styles.qq}>₹10999</p>
                    <button className={styles.rr}>GO</button>
                </div>
                <h4 className={styles.pri}>Availability</h4>
                <div className={styles.cate}>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">
                            Exclude out of Stock
                    </label>
                </div>
                <h4 className={styles.pri}>Category</h4>
                <div className={styles.cate}>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">
                            Television
                    </label>
                </div>
                <div className={styles.brand}>
                    <h4 className={styles.pri}>Brand  </h4>
                    <p className={styles.br}><i class="fa-solid fa-magnifying-glass"></i></p>
                </div>
                <input type="checkbox" id="cat"/>
                <label for="cat">One Plus</label>
                <br/>
                <input type="checkbox" id="cat"/>
                <label for="cat">Mi</label>
                <br/>
                <input type="checkbox" id="cat"/>
                    <label for="cat">Rolex</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Titan</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Noise</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Fastrack</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Amaze Fit</label>

            </div>

            <div className={styles.right}>
                <div className={styles.container}>
                    {show.map((item) => (
                        
                        <div>
                            {/* <Link
                            to={`/mobiles/${item.id}`} */}
                        {/* > */}
                        <div className={styles.prodiv}>
                            <img src={item.image} alt="" />
                            <p className={styles.name}>{item.name}</p>
                            <div className={styles.pricediv}>
                                <h4 className={styles.price}>₹{item.price}.00</h4>
                                <s className={styles.strike }>{item.strike}</s>
                                <p className={styles.discount}>{item.discount}</p>
                            </div>     
                            <p className={styles.offer}>{item.offers}</p>

                        </div>
                        {/* </Link> */}
                        <div className={styles.div1}>
                                <div className={styles.div2}>
                                    <input type="checkbox" />
                                    <p className={styles.comp}>Compare</p>
                                </div>
                                <Button className={styles.wish}
                                    onClick={() => {
                                    handleAdd(item);
                                  
                                  toast({
                                    title: 'Added to Cart',
                                    // description: "We've created your account for you.",
                                    status: 'success',
                                    duration: 1000,
                                    isClosable: true,
                                  })}}
                                >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                      Add to Cart</Button>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>

        </div>
    
        <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </div>
        </>
    )
}

export default Watches