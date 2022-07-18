import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
export default function(){
    let imgs = ['/images/main.svg', '/images/main.svg', '/images/main.svg', '/images/main.svg']
    return (
        <React.Fragment>
        <section className='mainSection'>
            <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className='text-success'>Найди свой универ</h1>
                        <h2 className='mt-5'>Подходящий именно для тебя. Настоящие отзывы. Детальная информация. </h2>
                        <div className='d-flex mt-5'>
                            <a className='btn btn-success me-3'>Подобрать универ</a>
                            <a className='btn btn-outline-success'>Топ лучших</a>
                        </div>
                    </div>
                    <div className="col px-5">
                        <div className='d-flex justify-content-center'>
                            <img className='w-50' src='/images/main.svg'></img>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
        <section className='cardsSection'>
            <div className="container">
                <div className="row">
                    {imgs.map((crntImg)=>{
                        return <div className="col"><LandCard imgSrc={crntImg}/></div> 
                    })}
                </div>
            </div>
        </section>
        <section className='bigCardSection mt-5'>
            <div class="card bg-dark text-white">
                <img src="/images/learn.jpg" className="card-img" alt="..." />
                <div class="card-img-overlay pt-5">
                    <h1 class="card-title">Card title</h1>
                    <p class="card-text">This is a wider card with supporting text <br></br>below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                    <div className='mt-5 pt-5 d-flex'>
                        <a className='btn btn-success me-5'>Лучшие универы Казахстана</a>
                        <a className='btn btn-success me-5'>Технические универы</a>
                        <a className='btn btn-success'>Медицинские универы</a>
                    </div>
                </div>
            </div>
        </section>
        <section className='mt-5'>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/images/learn.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8  bg-primary text-white">
                        <div class="card-body">
                            <h1 class="card-title">Card title</h1>
                            <h2 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
                            <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </React.Fragment>
    )
}


function LandCard({imgSrc}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}