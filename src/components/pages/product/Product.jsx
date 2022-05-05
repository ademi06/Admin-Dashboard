import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../chart/Chart";
import { productData } from "../../../dummyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to ='./newProduct'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData}  dataKey='Sales' title='Sales Performance'/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://www.cnet.com/a/img/resize/5a7ceee06349bf00081bbe6c1d73654030a0d350/hub/2019/10/29/ae208398-0a3c-4f38-a14b-f5683e8f9a41/27-apple-airpods-pro.jpg?auto=webp&fit=crop&height=675&width=1200"
                     alt="" 
                     className="productInfoImg" />
                     <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id: </span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales: </span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active: </span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock: </span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label> Product Name</label>
                    <input type="text" placeholder="Apple Airpods"/>
                    <label>In stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="idActive">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://helios-i.mashable.com/imagery/reviews/022c7EttLvoNLdKd1bLZtnk/hero-image.fill.size_1248x702.v1623387265.jpg" alt="" 
                        className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                            <input type="file" id="file" style={{display:'none'}}/>
                        </label>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>

        </div>
    </div>
  )
}
