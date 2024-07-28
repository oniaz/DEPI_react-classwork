
// query way
// const url = "http://localhost:8000/products?id=3"

// or 
// slash way with  a unique value like id
const url = "http://localhost:8000/products/3"


fetch(url)
    .then((res) => {
        console.log(res);
        return (res.json());
    })
    .then((data) => {
        console.log(data);
    })
