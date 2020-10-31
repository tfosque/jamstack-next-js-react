import { Component } from 'react'
import axios from 'axios'

class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        axios.get('http://localhost:3000/api/products')
            .then(res => {
                this.setState({products: res.data})
                console.log(this.state)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return(
            <div>Products Container</div>
        )
    }
}

export default ProductsContainer

/* export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  } */