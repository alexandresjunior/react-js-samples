import React, {useEffect, useState} from "react";
import { search } from "../api/index";

const Homepage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        search("/products", setProducts);
    }, []);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="#!">E-commerce React App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <form class="d-flex">
                            <button class="btn btn-outline-dark" type="submit">
                                <i class="bi-cart-fill me-1"></i>
                                Cart
                                <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Don't bake, buy a cake!</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Also, get sweets and cookies!</p>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products.map((product) => (
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{product.name}</h5>
                                            <h6 className="fw-bolder">{product.category}</h6>
                                            $40.00 - $80.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Alexandre de Souza Jr. - 2022</p></div>
            </footer>
        </>
    )
};

export default Homepage;